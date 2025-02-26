/* Project related JavaScript */
/*

listen for key press eg. Num 1

find keycode eg. 97

play audio file with data-key matching key code eg. clap.wav

reset audio to 0 before playing


listen for transition end of each key

remove class "playing"

*/

function playSound(e) {
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  console.log(e.propertyName);
  e.target.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

window.addEventListener("keydown", playSound);
