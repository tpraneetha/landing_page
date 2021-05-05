const wrapper = document.querySelector(".sectionWrapper");
const sections = document.querySelectorAll(".sections");
const section1 = document.querySelector("#section-1");
const nav = document.querySelector(".nav");
const ulNavLinks = document.querySelector(".nav_links");
const navLink = document.getElementsByTagName("li");
function navLinks() {
  sections.forEach((section) => {
    // console.log(section);
    const li = document.createElement("li");
    const liLink = document.createElement("a");
    li.setAttribute("id", "navLink");
    // li.setAttribute("class", "navLink");
    li.classList.add(section.id);
    // li.classList.add(navLink);
    liLink.textContent = section.id;
    liLink.setAttribute("class", "menu_link");
    li.appendChild(liLink);
    // console.log(li);
    ulNavLinks.appendChild(li);
    scroll(li, section);
  });
}
navLinks();
function scroll(clickTarget, scrollTarget) {
  clickTarget.addEventListener("click", function (event) {
    event.preventDefault();
    scrollTarget.scrollIntoView({ behavior: "smooth" });
  });
}
nav.addEventListener("click", function (e) {
  //   console.log(e.target);
  if (e.target.classList.contains("nav_links")) {
    const link = e.target;

    const siblings = link.closest(".nav").querySelectorAll(".nav_links");

    siblings.forEach((el) => {
      if (el !== link) {
        el.classList.remove("bkcolor");
      } else {
        el.classList.add("bkcolor");
      }
    });
  }
});

/////////////////////STICKY

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
const allSections = document.querySelectorAll(".sections");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
/////////////////////////////////////////////////////////////
console.log(nav);

console.log(navLink);
function viewport(section) {
  const position = section.getBoundingClientRect();
  return position.top <= 150 && position.bottom >= 150;
}

//create scroll event listener function for each section
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
//create a button that scrolls to top of the page
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
