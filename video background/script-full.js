/* Project related JavaScript */

let video = document.querySelector(".video-container");
let btn = document.querySelector(".switch-btn");
let playBtn = document.querySelector(".play");
let pauseBtn = document.querySelector(".pause");

playBtn.addEventListener("click", () => {
  btn.classList.toggle("slide");
  video.play();
});
pauseBtn.addEventListener("click", () => {
  btn.classList.toggle("slide");
  video.pause();
});

let preloader = document.getElementById("preloader");

window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});
