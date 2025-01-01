/* Project related JavaScript */

let navBtn = document.querySelector(".navbutton");
let navBar = document.querySelector(".navbar");

navBtn.addEventListener("click", () => {
  if (navBar.classList.contains("show-links")) {
    navBar.classList.remove("show-links");
  } else {
    navBar.classList.add("show-links");
  }
  //navBar.classList.toggle("show-links");
});
