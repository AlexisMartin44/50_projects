const navbar = document.querySelector(".navbar");
const h1 = document.querySelector("h1");

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) navbar.classList.add("white");
  else navbar.classList.remove("white");
};

const navHeight = navbar.getBoundingClientRect().height;
const observation = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

observation.observe(h1);
