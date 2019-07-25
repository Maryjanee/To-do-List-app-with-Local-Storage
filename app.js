const addbtn = document.querySelector("#add-task");
const filter = document.querySelector("filter");

const taskList = document.querySelector("#items");
const filterList = document.querySelector("#list");
const clearBtn = document.querySelector("#clear-task");

const addTask = e => {
  e.preventDefault();
  const add = document.querySelector("#task");
  if (add.value === "") {
    alert("Please Enter a task");
  } else {
    const value = add.value;

    const listItem = document.createElement("li");
    listItem.classList = "item";

    const link = document.createElement("a");
    link.classList = "right";
    link.appendChild(document.createTextNode("x"));
    listItem.appendChild(link);
    listItem.appendChild(document.createTextNode(value));
    taskList.appendChild(listItem);
    add.value = "";
  }
};

const removeTask = e => {
  if (e.target.parentElement.classList.contains("item")) {
    if (confirm("Are you sure?")) e.target.parentElement.remove();
  }
};

const clearTasks = () => {
  const taskList = document.querySelector("#items");
  while (taskList.firstChild) {
    if (confirm("You are about to clear all tasks...Are you sure?")) {
      taskList.removeChild(taskList.firstChild);
    }
  }
};

const filterTasks = e => {
  const filtered = e.target.value.toLowerCase();
  document.querySelectorAll("#item").forEach(item => {
    console.log(item);
    //   if (itemfiltered.toLowerCase().indexOf(filtered) != -1) {
    //     item.style.display = "block";
    //   } else {
    //     item.style.display = "none";
    //   }
  });
};

addbtn.addEventListener("click", addTask);
taskList.addEventListener("click", removeTask);
clearBtn.addEventListener("click", clearTasks);
filterList.addEventListener("keyup", filterTasks);
