/* Project related JavaScript */

let navBtn = document.querySelector(".navbutton");
let navBar = document.querySelector(".navbar");

navBtn.addEventListener("click", () => {
  navBar.classList.toggle("show-links");
});

// add emulate features

let emulateBtn = document.getElementById("emulate-mobile-view");
let emulateStatus = document.getElementById("emulatebtnstatus");

emulateBtn.addEventListener("click", () => {
  if (!document.querySelector(".emulateStyleSheet")) {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.className = "emulateStyleSheet";
    link.href = "project_style_emulate.css";
    document.getElementsByTagName("head")[0].appendChild(link);
    displayEmulateMsg("Done.", "#118811");
  } else {
    displayEmulateMsg(
      "Alert: Already in resposive view. Refresh to reset.",
      "#881111"
    );
  }
});

function displayEmulateMsg(msg, bgcolor) {
  emulateStatus.style.display = "inline-block";
  emulateStatus.style.backgroundColor = bgcolor;
  emulateStatus.textContent = msg;
}
