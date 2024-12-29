let count = 0;
let countVal = document.querySelector(".count");
let btn = document.querySelectorAll(".btn");
let increaseBtn = document.querySelector(".increase");
let green = "#30bb30";
let red = "#bb3030";
let stop = false;

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

// document.getElementById("stop").addEventListener("click", () => stop == true);

let submit = document.querySelector(".submit-btn");
let statusMsg = document.querySelector(".status");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let currentCountVal = parseInt(countVal.textContent);
  let speed = document.getElementById("speed").value;
  let limit = document.getElementById("limit").value;

  // Input Validation
  if (!isNaN(speed) && !isNaN(limit)) {
    if (speed % 1 != 0 || limit % 1 != 0) {
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
    startCounter();
  } else {
    statusMsg.textContent = "Numbers only pls.";
    statusMsg.style.color = red;
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
        //    if (stop == false) {
        setTimeout(() => {
          count--;
          setCount(count);
        }, (currentCountVal - i - 1) * speed);
        //  }
      }
    }
  }
});
