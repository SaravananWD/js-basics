/* Project related JavaScript */

// prepare slider info

let slidesData = [
  `<img src="./img/hd_r.jpg" class="slide-image">`,
  `<img src="./img/hus.jpg" class="slide-image">`,
  `<div class="slide-info">
        <h3>Title text for Slide 3</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio veritatis iste
        voluptatem temporibus eos sit consequuntur nemo culpa ratione, pariatur qui, commodi
        tempore
        beatae vel rem impedit non facere consectetur.</p>
    </div>`,
  `<div class="slide-info">
            <h3>Title text for Slide 4</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio veritatis iste
            voluptatem temporibus eos sit consequuntur nemo culpa ratione, pariatur qui, commodi
            tempore
            beatae vel rem impedit non facere consectetur.</p>
            <a href="#1" class="slide-cta">Read more</a>
       </div>`,

  `<div class="slide-info">
            <h3>Title text for Slide 5</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio veritatis iste
            voluptatem.</p><img src="./img/hus.jpg"><p>Temporibus eos sit consequuntur nemo culpa ratione, pariatur qui, commodi</p>
       </div>`,
  `<div class="slide-info"><h3>Title text for Slide 6</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio veritatis iste
            voluptatem.</p>
       <table width="80%" cellpadding="0" cellspacing="0">
        <thead>
            <td>Title 1</td>
            <td>Title 2</td>
            <td>Title 3</td>
        </thead>
        <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
        </tr>
        <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
        </tr>
        <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
        </tr>
    </table>
  </div>`,
];
const slidesContainer = document.querySelector(".slides-container");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

if (slidesData.length <= 1) {
  prevBtn.style.display = "none";
  nextBtn.style.display = "none";
} else if (slidesData.length == 2) {
  slidesData = [...slidesData, ...slidesData];
}
console.log(slidesData);

slidesData.forEach((slide, index) => {
  let slideBlock = document.createElement("article");

  if (index === 0) {
    slideBlock.classList.add("slide", "active");
  } else if (index === slidesData.length - 1) {
    slideBlock.classList.add("slide", "last");
  } else {
    slideBlock.classList.add("slide", "next");
  }

  slideBlock.innerHTML = slide;

  slidesContainer.appendChild(slideBlock);
});

// slider functionality

const slides = document.querySelectorAll(".slide");

prevBtn.addEventListener("click", showPrevSlide);
nextBtn.addEventListener("click", showNextSlide);

function showPrevSlide() {
  let activeSlide = document.querySelector(".slide.active");
  let lastSlide = document.querySelector(".slide.last");
  let nextSlides = document.querySelectorAll(".slide.next");
  let prevSibling = lastSlide.previousElementSibling;
  if (!prevSibling) {
    prevSibling = nextSlides[nextSlides.length - 1];
  }

  activeSlide.classList.remove("active");
  activeSlide.classList.add("next");

  lastSlide.classList.remove("last");
  lastSlide.classList.add("active");

  prevSibling.classList.remove("next");
  prevSibling.classList.add("last");
}

function showNextSlide() {
  let activeSlide = document.querySelector(".slide.active");
  let lastSlide = document.querySelector(".slide.last");
  let nextSlides = document.querySelectorAll(".slide.next");
  let nextSibling = activeSlide.nextElementSibling;
  if (!nextSibling) {
    nextSibling = nextSlides[0];
  }

  lastSlide.classList.remove("last");
  lastSlide.classList.add("next");

  activeSlide.classList.remove("active");
  activeSlide.classList.add("last");

  nextSibling.classList.remove("next");
  nextSibling.classList.add("active");
}

// css: dynamically adding gradient background for slide-info blocks
const linearGradients = [
  "linear-gradient(135deg, rgb(30 30 30) 0%, rgb(100 0 126) 50%, rgb(51 0 54) 100%)",
  "linear-gradient(135deg, rgb(24 24 24) 0%, rgb(90 0 126) 50%, rgb(43 0 58) 100%)",
  "linear-gradient(135deg, rgb(35 35 35) 0%, rgb(110 0 138) 50%, rgb(58 0 63) 100%)",
  "linear-gradient(135deg, rgb(20 20 20) 0%, rgb(115 0 120) 50%, rgb(45 0 55) 100%)",
  "linear-gradient(135deg, rgb(40 40 40) 0%, rgb(80 0 120) 50%, rgb(55 0 60) 100%)",
  "linear-gradient(135deg, rgb(25 25 25) 0%, rgb(105 0 130) 50%, rgb(50 0 60) 100%)",
  "linear-gradient(135deg, rgb(30 30 30) 0%, rgb(120 0 140) 50%, rgb(60 0 70) 100%)",
  "linear-gradient(135deg, rgb(18 18 18) 0%, rgb(90 0 130) 50%, rgb(40 0 50) 100%)",
  "linear-gradient(135deg, rgb(27 27 27) 0%, rgb(95 0 135) 50%, rgb(50 0 55) 100%)",
  "linear-gradient(135deg, rgb(30 30 30) 0%, rgb(85 0 120) 50%, rgb(48 0 60) 100%)",
];
const bc = [
  "linear-gradient(135deg, rgb(30 30 30) 0%, rgb(100 0 126) 50%, rgb(51 0 54) 100%)",
  "linear-gradient(135deg, rgb(30 30 30) 0%, rgb(250 85 0) 50%, rgb(75 0 25) 100%)" /* Orange to dark red */,
  "linear-gradient(135deg, rgb(30 30 30) 0%, rgb(0 85 85) 50%, rgb(0 53 53) 100%)" /* Teal to dark green */,
  "linear-gradient(135deg, rgb(30 30 30) 0%, rgb(0 153 204) 50%, rgb(0 51 102) 100%)" /* Blue tones */,
  "linear-gradient(135deg, rgb(30 30 30) 0%, rgb(220 50 50) 50%, rgb(120 0 0) 100%)" /* Red to dark red */,
  "linear-gradient(135deg, rgb(30 30 30) 0%, rgb(120 160 255) 50%, rgb(30 60 120) 100%)" /* Light blue to dark blue */,
  "linear-gradient(135deg, rgb(30 30 30) 0%, rgb(60 60 60) 50%, rgb(100 100 100) 100%)" /* Gray gradient */,

  "linear-gradient(135deg, rgb(30 30 30) 0%, rgb(50 150 100) 50%, rgb(25 80 50) 100%)" /* Green tones */,
  "linear-gradient(135deg, rgb(30 30 30) 0%, rgb(140 70 200) 50%, rgb(70 40 100) 100%)" /* Purple and pink mix */,
];

const slideInfoBlocks = document.querySelectorAll(".slide-info");

slideInfoBlocks.forEach((infoSlide, index) => {
  let randomIndex = Math.floor(Math.random() * linearGradients.length);
  infoSlide.style.background = linearGradients[randomIndex];
});
