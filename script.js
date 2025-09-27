const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const html = document.querySelector("html");

btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  html.classList.toggle("nav-open");
  html.classList.toggle("nav-overflow");
});

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;
console.log(currentYear);

const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);

      sectionEl.scrollIntoView({ behavior: "smooth" });
      console.log(sectionEl);
    } else window.scrollTo({ top: 0, behavior: "smooth" });

    if (html.classList.contains("nav-overflow" && "nav-open")) {
      html.classList.remove("nav-open");
      html.classList.remove("nav-overflow");
    }

    link.classList.contains("nav-link")
      ? headerEl.classList.remove("nav-open")
      : console.log("");
  });
});

const sectionElHero = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionElHero);
