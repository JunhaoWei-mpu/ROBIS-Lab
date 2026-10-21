"use strict";
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-nav");
if (menuButton && navigation) {
  document.documentElement.classList.add("has-menu-js");
  const closeMenu = () => menuButton.setAttribute("aria-expanded", "false");
  menuButton.addEventListener("click", () =>
    menuButton.setAttribute(
      "aria-expanded",
      menuButton.getAttribute("aria-expanded") !== "true",
    ),
  );
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menuButton.getAttribute("aria-expanded") === "true"
    ) {
      closeMenu();
      menuButton.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) closeMenu();
  });
  matchMedia("(min-width: 961px)").addEventListener("change", closeMenu);
}
const filterForm = document.querySelector("#publication-filters");
if (filterForm) {
  const search = document.querySelector("#publication-search");
  const topic = document.querySelector("#publication-topic");
  const publications = [...document.querySelectorAll("[data-publication]")];
  const count = document.querySelector("#publication-count");
  const empty = document.querySelector("#publication-empty");
  const params = new URLSearchParams(location.search);
  search.value = params.get("q") || "";
  if ([...topic.options].some((option) => option.value === params.get("topic")))
    topic.value = params.get("topic");
  filterForm.hidden = false;
  count.hidden = false;
  const applyFilters = () => {
    const words = search.value
      .trim()
      .toLocaleLowerCase()
      .match(/[\p{L}\p{N}]+/gu) || [];
    let visible = 0;
    publications.forEach((item) => {
      const tokens = item.textContent.toLocaleLowerCase().match(/[\p{L}\p{N}]+/gu) || [];
      const matches =
        words.every((word) => tokens.some((token) => token.startsWith(word))) &&
        (topic.value === "all" ||
          item.dataset.topics.split(" ").includes(topic.value));
      item.hidden = !matches;
      if (matches) visible++;
    });
    document.querySelectorAll("[data-year]").forEach((group) => {
      group.hidden = ![...group.querySelectorAll("[data-publication]")].some(
        (item) => !item.hidden,
      );
    });
    count.textContent = `${visible} ${visible === 1 ? "publication" : "publications"}`;
    empty.hidden = visible !== 0;
    const url = new URL(location.href);
    url.search = "";
    if (search.value.trim()) url.searchParams.set("q", search.value.trim());
    if (topic.value !== "all") url.searchParams.set("topic", topic.value);
    history.replaceState(null, "", url);
  };
  filterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    applyFilters();
  });
  search.addEventListener("input", applyFilters);
  topic.addEventListener("change", applyFilters);
  filterForm.addEventListener("reset", (event) => {
    event.preventDefault();
    search.value = "";
    topic.value = "all";
    applyFilters();
  });
  applyFilters();
}

const heroCarousel = document.querySelector("[data-hero-carousel]");
if (heroCarousel) {
  const slides = [...heroCarousel.querySelectorAll("[data-hero-slide]")];
  const controls = heroCarousel.querySelector(".hero-controls");
  const pauseButton = heroCarousel.querySelector("[data-hero-pause]");
  const nextButton = heroCarousel.querySelector("[data-hero-next]");
  const counter = heroCarousel.querySelector("[data-hero-count]");
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  let current = 0;
  let paused = reducedMotion.matches;
  let timer;
  const schedule = () => {
    clearInterval(timer);
    pauseButton.textContent = paused ? "Play" : "Pause";
    pauseButton.setAttribute(
      "aria-label",
      paused ? "Start image rotation" : "Pause image rotation",
    );
    if (!paused && !document.hidden)
      timer = setInterval(() => show((current + 1) % slides.length), 5000);
  };
  const show = async (index) => {
    slides[index].loading = "eager";
    try {
      await slides[index].decode();
    } catch (_) {
      return;
    }
    slides.forEach((slide, i) => {
      slide.hidden = i !== index;
    });
    current = index;
    counter.textContent = `${index + 1} / ${slides.length}`;
  };
  pauseButton.addEventListener("click", () => {
    paused = !paused;
    schedule();
  });
  nextButton.addEventListener("click", () => {
    show((current + 1) % slides.length);
    schedule();
  });
  reducedMotion.addEventListener("change", () => {
    paused = reducedMotion.matches;
    schedule();
  });
  document.addEventListener("visibilitychange", schedule);
  controls.hidden = slides.length < 2;
  schedule();
}
