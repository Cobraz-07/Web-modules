const grid = document.getElementById("grid-svg");
const list = document.getElementById("list-svg");
const full = document.getElementById("full-svg");

// Initial state
grid.src = "./img/svg/grid-white.svg";
list.src = "./img/svg/list-grey.svg";
full.src = "./img/svg/full-grey.svg";

function colorChange(svg) {
    // Reset all to grey
    grid.src = "./img/svg/grid-grey.svg";
    list.src = "./img/svg/list-grey.svg";
    full.src = "./img/svg/full-grey.svg";

    // Change the clicked one to white
    svg.src = `./img/svg/${svg.id.split("-")[0]}-white.svg`;
}

grid.addEventListener("click", function() {
    colorChange(grid);
});
list.addEventListener("click", function() {
    colorChange(list);
});
full.addEventListener("click", function() {
    colorChange(full);
});
