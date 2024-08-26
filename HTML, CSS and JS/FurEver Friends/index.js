const petList = document.getElementById("pet-list");

import {bichonFrise, miniPoodle, rottweiler, sheepdogEnglish, spanielSussex, spanielWelsh, terrierAmerican} from "/HTML, CSS and JS/FurEver Friends/info.js";

function createCard(name) {
    const li = document.createElement("li");
    li.classList.add("pet-card");
    li.innerHTML = `<img src="${name.src}" class="pet-img">
                <div class="text-div">
                    <h1 class="name">${name.name}<img src="img/svg/${name.gender}_24dp_BLACK_FILL1_wght400_GRAD0_opsz24.svg" class="gender"></h1>
                    <p class="breed">${name.breed}</p>
                    <p class="distance"><img src="img/svg/location_on_24dp_D16D6A_FILL1_wght400_GRAD0_opsz24.svg" class="location">${name.distance}</p>
                </div>
                <button class="like-btn"><img id="${name.name}-btn" src="" class="black like"></button>`;


    petList.appendChild(li);
    
        function changeLikeImg() {
            document.getElementById(`${name.name}-btn`).classList.toggle("red");
            document.getElementById(`${name.name}-btn`).classList.toggle("black");
        };
        document.getElementById(`${name.name}-btn`).addEventListener("click", changeLikeImg);

}

createCard(bichonFrise);
createCard(miniPoodle);
createCard(rottweiler);
createCard(sheepdogEnglish);
createCard(spanielSussex);
createCard(spanielWelsh);
createCard(terrierAmerican);