const petList = document.getElementById("pet-list");
const mainEl = document.getElementById("main");

import {PetArray} from "./PetInfo.js";

function createCard(dog) {
    const card = document.createElement("li");
    card.classList.add("pet-card");
    card.innerHTML = `<img src="${dog.src}" class="pet-img" alt="${dog.name} image" id="${dog.name}-img">
                <div class="text-div" id="${dog.name}-text">
                    <h1 class="name">${dog.name}<img alt="" src="img/svg/${dog.gender}_24dp_BLACK_FILL1_wght400_GRAD0_opsz24.svg" class="gender"></h1>
                    <p class="breed">${dog.breed}</p>
                    <p class="distance"><img alt="" src="img/svg/location_on_24dp_D16D6A_FILL1_wght400_GRAD0_opsz24.svg" class="location">${dog.distance}</p>
                </div>
                <button aria-label="Like button for ${dog.name}" class="like-btn"><img alt="" id="${dog.name}-like-btn" src="" class="black like"></button>`;


    petList.appendChild(card);
    
function openPage() {
    document.getElementById(`${dog.name}-page`).classList.remove("hide");
    mainEl.classList.add("hide")
};

    document.getElementById(`${dog.name}-img`).addEventListener("click", openPage);
    document.getElementById(`${dog.name}-text`).addEventListener("click", openPage);

        function changeLikeImg() {
            document.getElementById(`${dog.name}-like-btn`).classList.toggle("red");
            document.getElementById(`${dog.name}-like-btn`).classList.toggle("black");
            document.getElementById(`${dog.name}-big-like-btn`).classList.toggle("red");
            document.getElementById(`${dog.name}-big-like-btn`).classList.toggle("black");
        };
        document.getElementById(`${dog.name}-like-btn`).addEventListener("click", changeLikeImg);

};

for (let i = 0; i < PetArray.length; i++) {
    createCard(PetArray[i])
}