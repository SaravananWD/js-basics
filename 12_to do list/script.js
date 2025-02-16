/* Project related JavaScript */

// get input

const todoItemsContainer = document.querySelector(".todo-items-list");
const submitBtn = document.getElementById("submit");
const textBox = document.querySelector("#textbox");
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
}

function initSetup() {
  isEmpty(true);
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
    }
  });

  // reset
  textBox.value = "";
  submitBtn.value = "Add a task";
  editFlag = false;
  textBox.removeAttribute("data-id");

  // alert
  alert("Task edit successful!", "normal");
}

function deleteItem(e) {
  const currentItem = e.currentTarget.parentElement.parentElement;
  let currentdataId = currentItem.dataset.id;
  let currentValue = getCurrentValueFromArr(currentdataId);
  currentItem.remove();
  todoItemsArr = todoItemsArr.filter((item) => {
    if (item.id !== currentdataId) {
      return item;
    }
  });
  alert("Task deleted!", "serious");

  if (todoItemsArr.length === 0) {
    isEmpty(true);
  }
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
