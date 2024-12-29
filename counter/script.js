let count = 0;
let countVal = document.querySelector(".count");
let btn = document.querySelectorAll(".btn");
let increaseBtn = document.querySelector(".increase");
let green = "#30bb30";
let red = "#bb3030";

btn.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("increase")) {
      count++;
    } else if (button.classList.contains("decrease")) {
      count--;
    } else if (button.classList.contains("reset")) {
      count = 0;
    }
    setCount(count);
  });
});

function setCount(count) {
  countVal.textContent = count;
  if (count > 0) {
    countVal.style.color = green;
  } else if (count < 0) {
    countVal.style.color = red;
  } else if (count == 0) {
    countVal.style.color = "#888888";
  }
}

// Automated counter

let submit = document.querySelector(".submit-btn");
let statusMsg = document.querySelector(".status");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  let currentCountVal = parseInt(countVal.textContent);
  let speed = document.getElementById("speed").value;
  let limit = document.getElementById("limit").value;

  validate();

  // Input Validation
  function validate() {
    if (speed == "" || limit == "") {
      statusMsg.textContent = "Data not enough.";
      statusMsg.style.color = red;
      return;
    }
    if (!isNaN(speed) && !isNaN(limit)) {
      // is Number?
      if (speed % 1 != 0 || limit % 1 != 0) {
        // is Decimal?
        speed = Math.floor(speed);
        limit = Math.floor(limit);
        document.getElementById("speed").value = speed;
        document.getElementById("limit").value = limit;
        statusMsg.textContent = "Decimals rounded.";
        statusMsg.style.color = green;
      } else {
        statusMsg.textContent = "Counter started.";
        statusMsg.style.color = green;
      }
      startCounter(speed, limit);
    } else {
      statusMsg.textContent = "Numbers only pls.";
      statusMsg.style.color = red;
    }
  }

  function startCounter() {
    if (currentCountVal < limit) {
      for (let i = currentCountVal; i < limit; i++) {
        setTimeout(() => {
          count++;
          setCount(count);
        }, (i - currentCountVal) * speed);
      }
    } else if (currentCountVal > limit) {
      let delay = 0;
      for (let i = currentCountVal - 1; i >= limit; i--) {
        setTimeout(() => {
          count--;
          setCount(count);
        }, (currentCountVal - i - 1) * speed);
      }
    }
  }
});

// ms to seconds converter
function getSeconds() {
  let currentSpeed = document.getElementById("speed").value;
  let inseconds = document.getElementById("inseconds");
  inseconds.style.display = "block";
  inseconds.innerHTML = `<strong>${currentSpeed}</strong> millisecond(s) is equal to <strong>${
    currentSpeed / 1000
  }</strong> second(s).`;
}
