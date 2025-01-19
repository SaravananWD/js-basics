/* Project related JavaScript */

// navbar dynamically find & set height
const navBtn = document.querySelector(".navbutton");
const navLinks = document.querySelector(".navlinks");
const linksContainer = document.querySelector(".links-container");

navBtn.addEventListener("click", () => {
  // find height
  const navHeight = navLinks.getBoundingClientRect().height;
  let containerHeight = linksContainer.getBoundingClientRect().height;

  // set height
  if (containerHeight === 0) {
    linksContainer.style.height = `${navHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});
