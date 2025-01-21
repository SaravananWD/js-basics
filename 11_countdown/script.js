/* Project related JavaScript */

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const targetDateElement = document.querySelector(".target-value");
let targetDate = new Date(2025, 0, 31, 11, 30, 30); // hard coding for testing

// auto set target date to 10 days from current time
targetDate = new Date(); // overwrite with current date value (yyyy, m, d, h, m, s, ms)
targetDate.setDate(targetDate.getDate() + 10); // add 10 days

// print target/expiry date
const year = targetDate.getFullYear(); // 2025 // Do not use getYear() use getFullYear()
let month = targetDate.getMonth(); // 0 >> January
const date = targetDate.getDate(); // 31
const hours = targetDate.getHours(); // 16
const minutes = targetDate.getMinutes(); // 30
let day = targetDate.getDay(); // 5 >> Friday

month = months[month]; // January
day = weekdays[day]; // Friday
const hoursInTwelveFormat = hours > 12 ? hours - 12 : hours || 12; // equavalent to 'hours % 12 || 12'
const amPM = hours >= 12 ? "pm" : "am";

targetDateElement.textContent = `${day}, ${month} ${date}, ${year} ${hoursInTwelveFormat}:${
  minutes < 10 ? "0" : ""
}${minutes} ${amPM}`;

// timer

const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

function getRemainder() {
  const currentTime = new Date().getTime();
  const targetTime = targetDate.getTime();
  const remainingTime = targetTime - currentTime;

  const days = Math.floor(remainingTime / oneDay);
  const hours = Math.floor((remainingTime % oneDay) / oneHour);
  const minutes = Math.floor((remainingTime % oneHour) / oneMinute);
  const seconds = Math.floor((remainingTime % oneMinute) / 1000);

  const remainingTimeArr = [days, hours, minutes, seconds];
  let timeElements = document.querySelectorAll(".time-element h4");

  timeElements.forEach((timeElement, index) => {
    const value = remainingTimeArr[index];
    timeElement.innerHTML = value < 10 ? "0" + value : value;
  });

  if (currentTime > targetTime) {
    clearInterval(interval);
    document.querySelector(".time-container").innerHTML =
      "<p>The time has already expired!<p>";
  }
}

let interval = setInterval(getRemainder, 1000);
