/* Project related JavaScript */

let questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  let btn = question.querySelector(".question-btn");

  btn.addEventListener("click", () => {
    questions.forEach((q) => {
      if (q != question) {
        q.classList.remove("show-answer");
      }
    });
    question.classList.toggle("show-answer");
  });
});
