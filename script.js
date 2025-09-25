const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
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

    // if (link.classList.contains("nav-link"))
    //   headerEl.classList.remove("nav-open");
    link.classList.contains("nav-link")
      ? headerEl.classList.remove("nav-open")
      : console.log("didn't work  ");
  });
});
