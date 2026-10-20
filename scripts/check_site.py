#!/usr/bin/env python3
"""Check the production output, including project-prefix paths and fragment targets.
Usage: python3 scripts/check_site.py _site /ROBIS-Lab
Uses only the Python standard library.
"""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import sys

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.links, self.ids, self.images, self.headings, self.meta = [], set(), [], 0, {}
        self.title, self.in_title = '', False
        self.feed(text)
    def handle_starttag(self, tag, pairs):
        a = dict(pairs)
        if a.get('id'): self.ids.add(a['id'])
        if tag == 'title': self.in_title = True
        if tag == 'h1': self.headings += 1
        if tag == 'meta': self.meta[a.get('name') or a.get('property')] = a.get('content')
        for field in ['href', 'src']:
            if a.get(field): self.links.append(a[field])
        if tag == 'img': self.images.append(a)
    def handle_endtag(self, tag):
        if tag == 'title': self.in_title = False
    def handle_data(self, text):
        if self.in_title: self.title += text

def main():
    root = Path(sys.argv[1] if len(sys.argv) > 1 else '_site').resolve()
    prefix = (sys.argv[2] if len(sys.argv) > 2 else '/ROBIS-Lab').rstrip('/')
    pages = {p: Page(p.read_text()) for p in root.rglob('*.html')}
    errors = []
    titles = set()
    for path, page in pages.items():
        name = str(path.relative_to(root))
        if page.headings != 1: errors.append(f'{name}: expected one h1, got {page.headings}')
        if not page.title or page.title in titles: errors.append(f'{name}: missing or repeated title')
        titles.add(page.title)
        for key in ['description', 'og:title', 'og:description', 'og:url', 'og:image']:
            if not page.meta.get(key): errors.append(f'{name}: missing {key}')
        for image in page.images:
            if not image.get('alt') or not image.get('width') or not image.get('height'):
                errors.append(f'{name}: image needs alt and dimensions: {image.get("src")}')
        for link in page.links:
            parsed = urlsplit(link)
            if parsed.scheme or parsed.netloc: continue
            target = unquote(parsed.path)
            if target.startswith('/'):
                if target != prefix and not target.startswith(prefix + '/'):
                    errors.append(f'{name}: missing baseurl: {link}'); continue
                resolved = root / target[len(prefix):].lstrip('/')
            else: resolved = path.parent / target if target else path
            if resolved.is_dir(): resolved /= 'index.html'
            resolved = resolved.resolve()
            if not resolved.is_relative_to(root) or not resolved.exists():
                errors.append(f'{name}: missing local target: {link}'); continue
            if parsed.fragment and resolved in pages and unquote(parsed.fragment) not in pages[resolved].ids:
                errors.append(f'{name}: missing fragment: {link}')
    for name in ['index.html', 'research/index.html', 'platforms/index.html', 'people/index.html',
                 'publications/index.html', 'news/index.html', 'contact/index.html', '404.html', 'sitemap.xml']:
        if not (root / name).is_file(): errors.append(f'missing required output: {name}')
    for path in root.rglob('*'):
        if path.suffix.lower() in ['.docx','.env','.pem','.key'] or path.name in ['Gemfile','CONTENT_SOURCES.md','README.md']:
            errors.append(f'non-visitor file in output: {path.relative_to(root)}')
    if errors:
        print('\n'.join(errors)); return 1
    print(f'PASS: {len(pages)} HTML pages; metadata, local resources, fragments, image attributes, and {prefix} paths.')
    return 0

if __name__ == '__main__': sys.exit(main())
