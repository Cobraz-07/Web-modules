const petList = document.getElementById("pet-list");
const mainEl = document.getElementById("main");

import {bichonFrise, miniPoodle, rottweiler, sheepdogEnglish, spanielSussex, spanielWelsh, terrierAmerican} from "./PetInfo.js";

function createCard(name) {
    const li = document.createElement("li");
    li.classList.add("pet-card");
    li.id = `${name.name}-li`;
    li.innerHTML = `<img src="${name.src}" class="pet-img">
                <div class="text-div">
                    <h1 class="name">${name.name}<img src="img/svg/${name.gender}_24dp_BLACK_FILL1_wght400_GRAD0_opsz24.svg" class="gender"></h1>
                    <p class="breed">${name.breed}</p>
                    <p class="distance"><img src="img/svg/location_on_24dp_D16D6A_FILL1_wght400_GRAD0_opsz24.svg" class="location">${name.distance}</p>
                </div>
                <button class="like-btn"><img id="${name.name}-like-btn" src="" class="black like"></button>`;


    petList.appendChild(li);
    
function openPage() {
    document.getElementById(`${name.name}-page`).classList.remove("hide");
    mainEl.classList.add("hide")
};

    document.getElementById(`${name.name}-li`).addEventListener("click", openPage);

        function changeLikeImg() {
            document.getElementById(`${name.name}-like-btn`).classList.toggle("red");
            document.getElementById(`${name.name}-like-btn`).classList.toggle("black");
        };
        document.getElementById(`${name.name}-like-btn`).addEventListener("click", changeLikeImg);

};

createCard(bichonFrise);
createCard(miniPoodle);
createCard(rottweiler);
createCard(sheepdogEnglish);
createCard(spanielSussex);
createCard(spanielWelsh);
createCard(terrierAmerican);