const form = document.getElementById("todo-form");
const input1 = document.getElementById("todo-input-1");
const input2 = document.getElementById("todo-input-2");
const todolane = document.getElementById("todolane");
const proglane = document.getElementById("proglane");
const donelane = document.getElementById("donelane");
const reviewlane = document.getElementById("reviewlane");
const clearBtn = document.getElementById("clear");
const clearDoneBtn = document.getElementById("clear-done");
let task = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value1 = input1.value;
  const value2 = input2.value;
  if (!value1) return;
  if (!value2) return;

  const newTask = document.createElement("div");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.innerHTML = `<h1 class="task-title">${value1}</h1>
                       <p class="task-desc">${value2}</p>`;

  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
  });
  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
  });

  todolane.appendChild(newTask);

  input1.value = "";
  input2.value = "";
});

function save() {
  localStorage.clear();
  localStorage.setItem("todo", todolane.innerHTML);
  localStorage.setItem("prog", proglane.innerHTML);
  localStorage.setItem("done", donelane.innerHTML);
  localStorage.setItem("rev", reviewlane.innerHTML);
};

function clear() {
  localStorage.clear();
  localStorage.setItem("todo", `<h3 class="heading">To do</h3>`);
  localStorage.setItem("prog", `<h3 class="heading">In progress</h3>`);
  localStorage.setItem("done", `<h3 class="heading">Done</h3>`);
  localStorage.setItem("rev", `<h3 class="heading">Under review</h3>`);
  todolane.innerHTML = `<h3 class="heading">To do</h3>`;
  proglane.innerHTML = `<h3 class="heading">In progress</h3>`;
  donelane.innerHTML = `<h3 class="heading">Done</h3>`;
  reviewlane.innerHTML = `<h3 class="heading">Under review</h3>`;
};

function clearDone() {
  localStorage.setItem("done", `<h3 class="heading">Done</h3>`)
  donelane.innerHTML = `<h3 class="heading">Done</h3>`;
}

clearBtn.addEventListener("click", clear);
clearDoneBtn.addEventListener("click", clearDone);

todolane.innerHTML = localStorage.getItem("todo");
proglane.innerHTML = localStorage.getItem("prog");
donelane.innerHTML = localStorage.getItem("done");
reviewlane.innerHTML = localStorage.getItem("rev");
task = document.querySelectorAll("div.task");
for (let i = 0; i < task.length; i++) {
  task[i].addEventListener("dragstart", () => {
    task[i].classList.add("is-dragging");
  });
  task[i].addEventListener("dragend", () => {
    task[i].classList.remove("is-dragging");
  });
};

export {save}

