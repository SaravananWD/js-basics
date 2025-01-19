/* Project related JavaScript */

// navbar
const navBar = document.querySelector(".navbar");
const navContainer = document.querySelector(".nav-container");
const navBtn = document.querySelector(".navbutton");
const links = document.querySelector(".navlinks");
const linksContainer = document.querySelector(".links-container");

console.log();

navBtn.addEventListener("click", () => {
  // class toggle for animation effects (optional)
  navBar.classList.toggle("show-links");

  // find height
  const linksHeight = links.getBoundingClientRect().height;
  let containerHeight = linksContainer.getBoundingClientRect().height;

  // set height
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// check scroll height

window.addEventListener("scroll", () => {
  let scrollHeight = window.scrollY;
  let navBarHeight = navBar.getBoundingClientRect().height;
  let topLink = document.querySelector(".top");

  if (scrollHeight > navBarHeight) {
    navContainer.classList.add("fixed-nav");
  } else {
    navContainer.classList.remove("fixed-nav");
  }

  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// smooth scrolling

let scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let id = e.currentTarget.getAttribute("href").slice(1);
    let elem = document.getElementById(id);

    let navBarHeight = navBar.getBoundingClientRect().height;
    let isFixed = navContainer.classList.contains("fixed-nav");
    let position = elem.offsetTop;
    console.log("navBarHeight: " + navBarHeight);
    console.log("position: " + position);
    console.log("scrollY: " + window.scrollY);

    if (!isFixed) {
      position = position - navBarHeight;
    }

    window.scrollTo({
      top: position - navBarHeight,
      left: 0,
      behavior: "smooth",
    });
    linksContainer.style.height = 0;
    navBar.classList.remove("show-links");
  });
});
