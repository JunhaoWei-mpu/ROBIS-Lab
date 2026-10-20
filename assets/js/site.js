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
      .split(/\s+/)
      .filter(Boolean);
    let visible = 0;
    publications.forEach((item) => {
      const matches =
        words.every((word) =>
          item.textContent.toLocaleLowerCase().includes(word),
        ) &&
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
