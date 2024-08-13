const rightBtnEl = document.getElementById("right");
const leftBtnEl = document.getElementById("left");
const sourcesArray = [
    "img/pics/img1.webp",
    "img/pics/img2.webp",
    "img/pics/img3.webp",
    "img/pics/img4.webp",
    "img/pics/img5.webp",
];
const bigImgEl = document.getElementById("big-img");
const leftChev = document.getElementById("left-c");
const rightChev = document.getElementById("right-c");

let i = 0;
bigImgEl.src = sourcesArray[i];

function plus() {
    if (i === 4) {
        i = 0;
    } else {
        i += 1;
    }
    bigImgEl.src = sourcesArray[i];
}

function minus() {
    if (i === 0) {
        i = 4;
    } else {
        i -= 1;
    }
    bigImgEl.src = sourcesArray[i];
}

function hoverLeft() {
    leftChev.src =
        "img/svg/chevron_left_24dp_666666_FILL0_wght400_GRAD0_opsz24.svg";
}

function hoverRight() {
    rightChev.src =
        "img/svg/chevron_right_24dp_666666_FILL0_wght400_GRAD0_opsz24.svg";
}

function outLeft() {
    leftChev.src =
        "img/svg/chevron_left_24dp_000_FILL0_wght400_GRAD0_opsz24.svg";
}

function outRight() {
    rightChev.src =
        "img/svg/chevron_right_24dp_000_FILL0_wght400_GRAD0_opsz24.svg";
}

leftChev.addEventListener("mouseover", hoverLeft);
rightChev.addEventListener("mouseover", hoverRight);
leftChev.addEventListener("mouseout", outLeft);
rightChev.addEventListener("mouseout", outRight);

rightBtnEl.addEventListener("click", plus);
leftBtnEl.addEventListener("click", minus);
