const petList = document.getElementById("pet-list");
const mainEl = document.getElementById("main");

import {PetArray} from "./PetInfo.js";

function createCard(name) {
    const li = document.createElement("li");
    li.classList.add("pet-card");
    li.innerHTML = `<img src="${name.src}" class="pet-img" alt="${name.name} image" id="${name.name}-img">
                <div class="text-div" id="${name.name}-text">
                    <h1 class="name">${name.name}<img alt="" src="img/svg/${name.gender}_24dp_BLACK_FILL1_wght400_GRAD0_opsz24.svg" class="gender"></h1>
                    <p class="breed">${name.breed}</p>
                    <p class="distance"><img alt="" src="img/svg/location_on_24dp_D16D6A_FILL1_wght400_GRAD0_opsz24.svg" class="location">${name.distance}</p>
                </div>
                <button aria-label="Like button for ${name.name}" class="like-btn"><img alt="" id="${name.name}-like-btn" src="" class="black like"></button>`;


    petList.appendChild(li);
    
function openPage() {
    document.getElementById(`${name.name}-page`).classList.remove("hide");
    mainEl.classList.add("hide")
};

    document.getElementById(`${name.name}-img`).addEventListener("click", openPage);
    document.getElementById(`${name.name}-text`).addEventListener("click", openPage);

        function changeLikeImg() {
            document.getElementById(`${name.name}-like-btn`).classList.toggle("red");
            document.getElementById(`${name.name}-like-btn`).classList.toggle("black");
            document.getElementById(`${name.name}-big-like-btn`).classList.toggle("red");
            document.getElementById(`${name.name}-big-like-btn`).classList.toggle("black");
        };
        document.getElementById(`${name.name}-like-btn`).addEventListener("click", changeLikeImg);

};

for (let i = 0; i < PetArray.length; i++) {
    createCard(PetArray[i])
}