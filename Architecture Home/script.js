const our__project = document.querySelector(".our__project__one");
const project__one__title = document.querySelector(".project__one__title");
const project__one__exmp = document.querySelector(".project__one__exmp");

const ourProjectTwo = document.querySelector(".our__project__two");
const projectTwoTitle = document.querySelector(".project__two__title");
const projectTwoExmp = document.querySelector(".project__two__exmp");
const projectTwo = document.querySelector(".project__two");

const ourProjectThree = document.querySelector(".our__project__three");
const projectThreeTitle = document.querySelector(".project__three__title");
const projectThreeExmp = document.querySelector(".project__three__exmp");
const projectThree = document.querySelector(".project__three");
const ourProjectFour = document.querySelector(".our__project__four");
const projectFourTitle = document.querySelector(".project__four__title");
const projectFourExmp = document.querySelector(".project__four__exmp");
const projectFour = document.querySelector(".project__four");

our__project.addEventListener("mouseover", function (e) {
  e.preventDefault();
  project__one__title.classList.remove("hidden");
  project__one__exmp.classList.remove("hidden");
  project__one.style.opacity = 0.5;
});

our__project.addEventListener("mouseout", function () {
  project__one__title.classList.add("hidden");
  project__one__exmp.classList.add("hidden");
  project__one.style.opacity = 1;
});

ourProjectTwo.addEventListener("mouseover", function () {
  projectTwoTitle.classList.remove("hidden");
  projectTwoExmp.classList.remove("hidden");
  projectTwo.style.opacity = 0.5;
});

ourProjectTwo.addEventListener("mouseout", function () {
  projectTwoTitle.classList.add("hidden");
  projectTwoExmp.classList.add("hidden");
  projectTwo.style.opacity = 1;
});

ourProjectThree.addEventListener("mouseover", function () {
  projectThreeTitle.classList.remove("hidden");
  projectThreeExmp.classList.remove("hidden");
  projectThree.style.opacity = 0.5;
});

ourProjectThree.addEventListener("mouseout", function () {
  projectThreeTitle.classList.add("hidden");
  projectThreeExmp.classList.add("hidden");
  projectThree.style.opacity = 1;
});

ourProjectFour.addEventListener("mouseover", function () {
  projectFourTitle.classList.remove("hidden");
  projectFourExmp.classList.remove("hidden");
  projectFour.style.opacity = 0.5;
});

ourProjectFour.addEventListener("mouseout", function () {
  projectFourTitle.classList.add("hidden");
  projectFourExmp.classList.add("hidden");
  projectFour.style.opacity = 1;
});

///////////////////////////////////////////////////////
/////// Set current year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////
/////// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

/////////////////////////////////////////////////////////
//Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting == false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
