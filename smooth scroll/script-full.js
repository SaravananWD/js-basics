/* Project related JavaScript */

// navbar dynamically find & set height
const navBar = document.querySelector(".navbar");
const navBtn = document.querySelector(".navbutton");
const links = document.querySelector(".navlinks");
const linksContainer = document.querySelector(".links-container");

navBtn.addEventListener("click", () => {
  // class toggle for animation effects (optional)
  navBar.classList.toggle("show-links");

  // find height
  const linksHeight = links.getBoundingClientRect().height;
  let containerHeight = linksContainer.getBoundingClientRect().height;

  // set height
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
    navBtn.style.transform = "rotate(-90deg)";
  } else {
    linksContainer.style.height = 0;
    navBtn.style.transform = "rotate(0)";
  }
});
