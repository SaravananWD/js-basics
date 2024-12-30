const content = [
  {
    icon: "./pngs/82x88_0012_html5.png",
    title: "HTML 5: Modern web structure.",
    about:
      "HTML5 is the latest markup standard, supporting multimedia, semantic tags, improved accessibility, and better mobile responsiveness for modern web design.",
    color: "#e34425",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: "./pngs/82x88_0014_css3.png",
    title: "CSS3: Advanced styling for the web.",
    about:
      "CSS3 is the latest styling standard, introducing features like animations, flexbox, grid, and media queries for responsive, dynamic, and visually rich designs.",
    color: "#33a9dc",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    icon: "./pngs/82x88_0011_javascript.png",
    title: "JavaScript: Powering web interactivity.",
    about:
      "JavaScript adds interactivity to websites, enabling dynamic content, animations, form validation, event handling, and real-time user experiences alongside HTML and CSS.",
    color: "#f7df1e",
    textColor: "#444444",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: "./pngs/82x88_0002_typescript.png",
    title: "TypeScript: JavaScript with type safety.",
    about:
      "TypeScript is a superset of JavaScript, adding static typing and modern features for improved development and fewer runtime errors, especially in large-scale projects.",
    color: "#007acc",
    link: "https://developer.mozilla.org/en-US/docs/Glossary/TypeScript",
  },
  {
    icon: "./pngs/82x88_0005_react.png",
    title: "React: Building UI components.",
    about:
      "React is a JavaScript library for building dynamic user interfaces with reusable components, enabling fast rendering and efficient updates through its virtual DOM.",
    color: "#00d8ff",
    textColor: "#444444",
    link: "https://react.dev/",
  },
  {
    icon: "./pngs/82x88_0017_angular.png",
    title: "Angular: A complete framework.",
    about:
      "Angular is a TypeScript-based framework for building single-page applications. It offers two-way data binding, dependency injection, and a powerful template system.",
    color: "#dd0031",
    link: "https://angular.dev/overview",
  },
  {
    icon: "./pngs/82x88_0007_npm.png",
    title: "NPM: JavaScript package manager.",
    about:
      "NPM is the default package manager for Node.js, enabling easy installation, sharing, and management of libraries and dependencies in JavaScript projects.",
    color: "#cb3837",
    link: "https://docs.npmjs.com/",
  },
  {
    icon: "./pngs/82x88_0008_nodejs2.png",
    title: "Node.js: JavaScript runtime on the server.",
    about:
      "Node.js allows JavaScript to run outside the browser, enabling backend development. It's known for its event-driven, non-blocking architecture and vast package ecosystem.",
    color: "#8cc84b",
    link: "https://nodejs.org/docs/latest/api/",
  },
  {
    icon: "./pngs/82x88_0016_babel.png",
    title: "Babel: JavaScript compiler for modern features.",
    about:
      "Babel converts modern JavaScript (ES6+) into compatible code for older browsers, enabling the use of new features while ensuring cross-browser compatibility.",
    color: "#000000",
    link: "https://babeljs.io/docs/",
  },
  {
    icon: "./pngs/82x88_0015_bootstrap.png",
    title: "Bootstrap: Fast, responsive design.",
    about:
      "Bootstrap is a front-end framework with prebuilt CSS and JavaScript components, enabling fast creation of responsive, mobile-first websites with grid systems and elements.",
    color: "#381944",
    link: "https://getbootstrap.com/docs/4.1/getting-started/introduction/",
  },
  {
    icon: "./pngs/82x88_0010_jquery.png",
    title: "jQuery: Simplifying JavaScript.",
    about:
      "jQuery is a lightweight JavaScript library that simplifies DOM manipulation, event handling, and AJAX, making it easier to create interactive web pages with minimal code.",
    color: "#0868ac",
    link: "https://api.jquery.com/",
  },
  {
    icon: "./pngs/82x88_0001_vuejs.png",
    title: "VueJS: Progressive JavaScript framework.",
    about:
      "VueJS is a flexible, lightweight framework for building user interfaces. It’s easy to integrate and focuses on the view layer, ideal for single-page applications.",
    color: "#4dba87",
    link: "https://vuejs.org/guide/introduction.html",
  },
  {
    icon: "./pngs/82x88_0004_sass.png",
    title: "SASS: Efficient, dynamic, scalable styling.",
    about:
      "SASS is a CSS preprocessor that adds features like variables, nesting, and mixins, making stylesheets more maintainable, scalable, and efficient for complex web projects.",
    color: "#cd6799",
    link: "https://sass-lang.com/documentation/",
  },
  {
    icon: "./pngs/82x88_0009_less.png",
    title: "LESS: Dynamic CSS preprocessor.",
    about:
      "LESS is a CSS preprocessor that adds features like variables, mixins, and functions, making stylesheets more dynamic, reusable, and easier to maintain, ideal for scalable web designs.",
    color: "#294e83",
    link: "https://lesscss.org/",
  },
  {
    icon: "./pngs/82x88_0013_github.png",
    title: "GitHub: Code hosting and collaboration.",
    about:
      "GitHub is a platform for version control and collaboration, allowing developers to host code repositories, track changes, and contribute to open-source projects.",
    color: "#000000",
    link: "https://docs.github.com/",
  },
  {
    icon: "./pngs/82x88_0006_python.png",
    title: "Python: Simple, powerful programming.",
    about:
      "Python is an easy-to-learn, high-level programming language known for its readability and versatility, used in web development, data analysis, AI, and more.",
    color: "#3774a6",
    link: "https://www.python.org/doc/",
  },
];

let icon = document.getElementById("icon-url");
let title = document.getElementById("card-title");
let about = document.getElementById("card-about");
let anchorButton = document.getElementById("card-button");

let currentIndex = 0;
updateContent(currentIndex);

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = content.length - 1;
  }
  updateContent(currentIndex);
});

document.querySelector(".next").addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > content.length - 1) {
    currentIndex = 0;
  }
  updateContent(currentIndex);
});

document.querySelector(".random").addEventListener("click", () => {
  currentIndex = Math.floor(Math.random() * content.length);
  console.log(currentIndex);
  updateContent(currentIndex);
});

function updateContent(c) {
  let cont = content[c];
  let defaultTextColor = "#dedede";

  icon.src = cont.icon;
  title.textContent = cont.title;
  about.textContent = cont.about;
  anchorButton.href = cont.link;
  anchorButton.style.backgroundColor = cont.color;

  if (cont.hasOwnProperty("textColor")) {
    anchorButton.style.color = cont.textColor;
  } else {
    anchorButton.style.color = defaultTextColor;
  }
}
