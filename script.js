const projects = [
  {
    name: "Color Flipper",
    url: "./01_color flipper/index.html",
  },
  {
    name: "Counter",
    url: "./02_counter/index.html",
  },
  {
    name: "Content Navigator",
    url: "./03_content navigator/index.html",
  },
  {
    name: "Nav Bar",
    url: "./04_nav bar/index.html",
  },
  {
    name: "Side Bar",
    url: "./05_side bar/index.html",
  },
  {
    name: "Questions Panel",
    url: "./06_questions panel/index.html",
  },
  {
    name: "Menu Filter",
    url: "./07_menu filter/index.html",
  },
  {
    name: "Video Background",
    url: "./08_video background/index.html",
  },
  {
    name: "Smooth Scroll",
    url: "./09_smooth scroll/index-full.html",
  },
  {
    name: "Tabs",
    url: "./10_tabs/index.html",
  },
  {
    name: "Countdown",
    url: "./11_countdown/index.html",
  },
  {
    name: "To Do List",
    url: "./12_to do list/index.html",
  },
  {
    name: "To Do List (Added History)",
    url: "./12-1_to do list (added history)/index.html",
    versionUpdate: "12-1",
  },
  {
    name: "Slider",
    url: "./13_slider/index.html",
  },
  {
    name: "Drum Kit",
    url: "./14_drum kit/index.html",
  },
];
const projectsContainer = document.querySelector(".projects-container");

let count = 1;
projects.forEach((project) => {
  projectsContainer.innerHTML += `<a class="project-info" href="${
    project.url
  }"><span>${project.versionUpdate || count}</span>${project.name}</a>`;
  project.versionUpdate || count++;
});
