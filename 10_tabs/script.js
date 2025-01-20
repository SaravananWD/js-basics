/* Project related JavaScript */

const btns = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-cont");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // remove existing active class from elements
    btns.forEach((button) => {
      button.classList.remove("active");
    });
    contents.forEach((content) => {
      content.classList.remove("active");
    });

    // add active class
    const id = e.target.dataset.id;
    const contentSelected = document.getElementById(id);
    e.currentTarget.classList.add("active");
    contentSelected.classList.add("active");
  });
});
