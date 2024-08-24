const likeEl = document.getElementById("like");

function change() {
    likeEl.classList.toggle("red");
    likeEl.classList.toggle("black");
}

likeEl.addEventListener("click", change);
