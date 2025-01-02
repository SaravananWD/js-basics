/* Project related JavaScript */

let openBtn = document.querySelector(".open");
let closeBtn = document.querySelector(".close");
let sideBarProject = document.querySelector(".sidebarproj");

openBtn.addEventListener("click", () => {
  sideBarProject.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", () => {
  sideBarProject.classList.remove("show-sidebar");
});

// css options

let sidebarWidth = document.querySelectorAll(".sidebar-width");
let sideBarElement = document.querySelector("aside.navlinks");

sidebarWidth.forEach((btn) => {
  console.log(btn.classList);
  btn.addEventListener("click", () => {
    if (btn.classList.contains("sbw300px")) {
      sideBarElement.style.maxWidth = "300px";
    } else if (btn.classList.contains("sbw100p")) {
      sideBarElement.style.maxWidth = "100%";
    } else if (btn.classList.contains("sbw60p")) {
      sideBarElement.style.maxWidth = "60%";
      console.log("Test pass");
    }
    addClass();
  });
});

function addClass() {
  if (!sideBarProject.classList.contains("show-sidebar")) {
    sideBarProject.classList.add("show-sidebar");
  }
}
