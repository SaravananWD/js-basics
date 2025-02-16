/* Project related JavaScript */

// get input

const todoItemsContainer = document.querySelector(".todo-items-list");
const submitBtn = document.getElementById("submit");
const textBox = document.querySelector("#textbox");
const key = "list";
const clearBtn = document.querySelector(".clear-btn");
const clearBtnFooter = document.querySelector(".todo-footer");
const confirmBtns = document.querySelector(".confirm-buttons");
const yesBtn = document.querySelector(".yes-clear");
const noBtn = document.querySelector(".no-clear");
const clearQuestion = document.querySelector("#clear-question");
let todoItemsArr = [];
let editFlag = false;

document.addEventListener("DOMContentLoaded", () => {
  initSetup();
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let textBoxValue = textBox.value;

  // validate input
  if (textBoxValue.trim() == "") {
    alert("Input cannot be empty!", "serious");
  }

  // add new item
  else if (!editFlag) {
    let id = new Date().getTime().toString();
    addItem(textBoxValue, id);
  }

  // edit existing item
  else if (editFlag) {
    let id = textBox.dataset.id;
    editItem(textBoxValue, id);
  }
});

function initSetup() {
  if (!localStorage.getItem(key) || localStorage.getItem(key) == "[]") {
    isEmpty(true);
    // localStorage.setItem(key, JSON.stringify(todoItemsArr));
  } else {
    todoItemsArr = JSON.parse(localStorage.getItem(key));
    todoItemsArr.forEach((item) => {
      todoItemsContainer.innerHTML += `<div data-id="${item.id}" class="todo-item"><div class="todo-text">${item.value}</div>
                        <div class="buttons">
                            <button class="btn-edit">Edit</button>
                            <button class="btn-delete">Delete</button>
                        </div>
                        </div>`;
    });
    // clear button visibility
    updateClearBtnVisibility();
  }
}

function addItem(value, id) {
  // add to data array
  todoItemsArr.push({ value, id });

  // add html element
  let element = document.createElement("div");
  let attribute = document.createAttribute("data-id");
  attribute.value = id;
  element.setAttributeNode(attribute);
  element.classList.add("todo-item");
  element.innerHTML = ` <div class="todo-text">${value}</div>
                        <div class="buttons">
                            <button class="btn-edit">Edit</button>
                            <button class="btn-delete">Delete</button>
                        </div>`;
  todoItemsContainer.appendChild(element);

  // hide empty error message
  isEmpty(false);

  // add event listeners for edit & delete
  let editBtn = element.querySelector(".btn-edit");
  let deleteBtn = element.querySelector(".btn-delete");
  editBtn.addEventListener("click", processEditRequest);
  deleteBtn.addEventListener("click", deleteItem);

  // reset text box
  textBox.value = "";

  // alert
  alert("New Task added!", "positive");

  // add to storage
  localStorage.setItem(key, JSON.stringify(todoItemsArr));

  // clear button visibility
  updateClearBtnVisibility();
}

function isEmpty(empty) {
  const emptyMessage = document.querySelector(".empty-message");
  empty
    ? (emptyMessage.style.display = "block")
    : (emptyMessage.style.display = "none");
}

function processEditRequest(e) {
  const currentItem = e.currentTarget.parentElement.parentElement;
  let currentdataId = currentItem.dataset.id;
  let currentValue = getCurrentValueFromArr(currentdataId);
  // let currentValue = e.currentTarget.parentElement.previousElementSibling.innerHTML;
  textBox.value = currentValue;
  submitBtn.value = "Edit";
  editFlag = true;
  textBox.setAttribute("data-id", currentdataId);
}

function editItem(value, id) {
  let todoItemsAll = document.querySelectorAll(".todo-item");
  todoItemsAll.forEach((item) => {
    if (item.dataset.id == id) {
      let todoTextItem = document.querySelector(
        `.todo-item[data-id="${item.dataset.id}"] .todo-text`
      );

      // update on display box
      todoTextItem.innerHTML = value;

      // update on data array
      putCurrentValueToArr(value, id);

      // clear button visibility
      updateClearBtnVisibility();
    }
  });

  // reset
  textBox.value = "";
  submitBtn.value = "Add a task";
  editFlag = false;
  textBox.removeAttribute("data-id");

  // alert
  alert("Task edit successful!", "normal");

  // update storage
  localStorage.setItem(key, JSON.stringify(todoItemsArr));
}

function deleteItem(e) {
  const currentItem = e.currentTarget.parentElement.parentElement;
  let currentdataId = currentItem.dataset.id;
  currentItem.remove();
  todoItemsArr = todoItemsArr.filter((item) => {
    if (item.id !== currentdataId) {
      return item;
    }
  });

  // update storage
  localStorage.setItem(key, JSON.stringify(todoItemsArr));
  alert("Task deleted!", "serious");

  if (todoItemsArr.length === 0) {
    isEmpty(true);
  }

  // clear button visibility
  resetClearBtns();
  updateClearBtnVisibility();
}

function getCurrentValueFromArr(id) {
  let val = "";
  todoItemsArr.forEach((item) => {
    if (item.id == id) {
      val = item.value;
    }
  });
  return val;
}

function putCurrentValueToArr(value, id) {
  todoItemsArr.forEach((item) => {
    if (item.id == id) {
      item.value = value;
    }
  });
}

function alert(msg, tone) {
  let alertBox = document.querySelector(".alert-message");
  let color = "ss";
  alertBox.innerHTML = msg;

  if (tone === "serious") {
    color = "#440e0e";
  } else if (tone === "normal") {
    color = "#0e1844";
  } else if (tone === "positive") {
    color = "#0e442e";
  }
  alertBox.style.backgroundColor = color;

  // fade in fade out
  alertBox.style.display = "block";

  setTimeout(() => {
    alertBox.style.opacity = 1;
    alertBox.style.top = "-30px";
  }, 10);

  setTimeout(() => {
    alertBox.style.opacity = 0;
    alertBox.style.top = "-60px";
    setTimeout(() => {
      alertBox.style.display = "none";
    }, 300); // 500 - since transition time is .5s in css
  }, 2000);
}

clearBtn.addEventListener("click", () => {
  clearBtn.style.display = "none";
  confirmBtns.style.display = "block";
  clearQuestion.textContent = "Are you sure?";

  yesBtn.addEventListener("click", () => {
    confirmAction();
    confirmBtns.style.display = "none";
    clearBtn.style.display = "block";
    clearQuestion.textContent = "More actions:";
    updateClearBtnVisibility();
  });
  noBtn.addEventListener("click", () => {
    resetClearBtns();
  });

  function confirmAction() {
    isEmpty(true);
    todoItemsArr = [];
    let todoItems = document.querySelectorAll(".todo-item");
    todoItems.forEach((item) => {
      item.remove();
    });
    localStorage.removeItem(key);
    updateClearBtnVisibility();
    alert("All deleted!", "serious");
  }
});

function resetClearBtns() {
  confirmBtns.style.display = "none";
  clearQuestion.textContent = "More actions:";
  if (todoItemsArr.length > 1) {
    clearBtn.style.display = "block";
  }
}

function updateClearBtnVisibility() {
  if (todoItemsArr.length > 1) {
    clearBtn.style.display = "block";
    clearBtnFooter.style.display = "block";
    resetClearBtns();
  } else {
    clearBtn.style.display = "none";
    clearBtnFooter.style.display = "none";
  }
}
