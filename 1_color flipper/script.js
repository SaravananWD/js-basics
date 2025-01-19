let chosenColorsArr = [
  "722870",
  "283172",
  "287268",
  "726928",
  "722828",
  "00685F",
  "680000",
  "006808",
  "001268",
  "68004D",
  "000000",
  "0E1D8B",
];

let hexValuesArr = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

document.getElementById("colorsList").textContent = chosenColorsArr.map(
  (val, index) => {
    if (index != chosenColorsArr.length - 1) {
      return " #" + val;
    } else {
      return " and #" + val;
    }
  }
);

let body = document.body.style;
let flipColor = document.querySelector(".flip-color");
let flipAllColor = document.querySelector(".flip-all-color");
let updatedColorName = document.getElementById("updated-color-name");

flipColor.addEventListener("click", () => {
  body.backgroundColor = getRandom(false);
});

flipAllColor.addEventListener("click", () => {
  body.backgroundColor = getRandom(true);
});

function getRandom(isHexa) {
  let randomColor = "#";
  if (isHexa) {
    for (let i = 0; i < 6; i++) {
      randomColor +=
        hexValuesArr[Math.floor(Math.random() * hexValuesArr.length)];
      document.querySelector(".container").style.background =
        "rgba(0, 0, 0, .2)"; // option darkens the container background to make the text visible
    }
  } else if (!isHexa) {
    randomColor +=
      chosenColorsArr[Math.floor(Math.random() * chosenColorsArr.length)];
    document.querySelector(".container").style.background =
      "rgba(255, 255, 255, .1)"; // option resets the container background
  }
  updatedColorName.textContent = randomColor;
  return randomColor;
}
