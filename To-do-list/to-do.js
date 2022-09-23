let form = document.querySelector("#new-form");
let input = document.querySelector("#new-input");
let button = document.querySelector("#submit-btn");
let tasks = document.querySelector("#tasks");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let task = input.value;

  if (task.length > 0) {
    let taskElement = document.createElement("div");
    taskElement.classList.add("task");
    let taskContent = document.createElement("div");
    taskContent.classList.add("content");
    let taskInputElement = document.createElement("input");
    taskInputElement.classList.add("text");
    taskInputElement.type = "text";
    taskInputElement.value = task;
    taskInputElement.setAttribute("readonly", "readonly");

    taskContent.appendChild(taskInputElement);

    let taskActions = document.createElement("div");
    taskActions.classList.add("actions");

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit");
    editBtn.innerText = "Edit";
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.innerText = "Delete";

    taskActions.appendChild(editBtn);
    taskActions.appendChild(deleteBtn);

    taskElement.appendChild(taskContent);
    taskElement.appendChild(taskActions);

    tasks.appendChild(taskElement);

    //   functionalites
    input.value = "";

    editBtn.addEventListener("click", () => {
      if (editBtn.innerText === "Edit") {
        editBtn.innerText = "Save";
        taskInputElement.removeAttribute("readonly");
        taskInputElement.classList.add("active");
      } else {
        editBtn.innerText = "Edit";
        taskInputElement.setAttribute("readonly", "readonly");
        taskInputElement.classList.remove("active");
      }
    });

    deleteBtn.addEventListener("click", () => {
      tasks.removeChild(taskElement);
    });
  }
});
