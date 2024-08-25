const draggables = document.querySelectorAll(".task");
const droppables = document.querySelectorAll(".swim-lane");

import {save} from "/HTML, CSS and JS/Task board/todo.js";

draggables.forEach((task) => {
  task.addEventListener("dragstart", (e) => {
    task.classList.add("is-dragging");
    console.log(e);
  });
  task.addEventListener("dragend", () => {
    task.classList.remove("is-dragging");
    save()
  });
});

droppables.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
    const bottomTask = insertAboveTask(zone, e.clientY);
    const curTask = document.querySelector(".is-dragging");

    if (!bottomTask) {
      zone.appendChild(curTask);
      save()
    } else {
      zone.insertBefore(curTask, bottomTask);
      save()
    }
  });
});

const insertAboveTask = (zone, mouseY) => {
  const els = zone.querySelectorAll(".task:not(.is-dragging)");

  let closestTask = null;
  let closestoffset = Number.NEGATIVE_INFINITY;

  els.forEach((task) => {
    const { top } = task.getBoundingClientRect();

    const offset = mouseY - top;

    if (offset < 0 && offset > closestoffset) {
      closestoffset = offset;
      closestTask = task;
    }
  });

  return closestTask;
};
