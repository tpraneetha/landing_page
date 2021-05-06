// global variable declaration
const wrapper = document.querySelector(".sectionWrapper");
const sections = document.querySelectorAll(".sections");
const section1 = document.querySelector("#section-1");
const nav = document.querySelector(".nav");
const ulNavLinks = document.querySelector(".nav_links");
const navLink = document.getElementsByTagName("li");

// ADDING THE NAVLINKS DYNAMICALLY
function navLinks() {
  sections.forEach((section) => {
    const li = document.createElement("li");
    const liLink = document.createElement("a");
    li.setAttribute("id", "navLink");
    li.classList.add(section.id);
    liLink.textContent = section.id;
    liLink.setAttribute("class", "menu_link");
    li.appendChild(liLink);
    ulNavLinks.appendChild(li);
    scroll(li, section);
  });
}
navLinks();
//SCROLLING FUNCTION
function scroll(clickTarget, scrollTarget) {
  clickTarget.addEventListener("click", function (event) {
    event.preventDefault();
    scrollTarget.scrollIntoView({ behavior: "smooth" });
  });
}

/////////////////////STICKY navigation

const header = document.querySelector(".header");
// console.log(header);
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  //   console.log(entries);
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky)");
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);
///////////////////////reveal section
// Reveal sections
// const allSections = document.querySelectorAll(".sections");

// const revealSection = function (entries, observer) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) return;

//   entry.target.classList.remove("section--hidden");
//   observer.unobserve(entry.target);
// };

// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.15,
// });

// allSections.forEach(function (section) {
//   sectionObserver.observe(section);
//   section.classList.add("section--hidden");
// });
/////////////////////////////////////////////////////////////
console.log(nav);

console.log(navLink);
function viewport(section) {
  const position = section.getBoundingClientRect();
  return position.top <= 150 && position.bottom >= 150;
}

//scrolling to individual section
window.addEventListener("scroll", (event) => {
  let fromTop = window.scrollY;
  // const navItem = document.getElementById("navigation");

  sections.forEach((section) => {
    if (viewport(section)) {
      //add class to navbar
      let id = section.getAttribute("id");
      document.querySelector(`.${id}`).classList.add("active-nav");
      //add class to section
      section.classList.add("active");
    } else {
      //remove class from navbar
      let id = section.getAttribute("id");
      document.querySelector(`.${id}`).classList.remove("active-nav");
      //remove class from section
      section.classList.remove("active");
    }
  });
});
//scroll to top button
const button = document.getElementById("scrollToTopButton");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

//button onclick function to scroll to top of page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
//collapsible sections
var coll = document.getElementsByClassName("collapsible");

for (const i of coll) {
  i.addEventListener("click", function () {
    this.classList.toggle("active");
    console.log(this);
    console.log("next");
    // const p = this.closest(".sections");
    // console.log(p);
    console.log(this.nextElementSibling);

    const content = this.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
