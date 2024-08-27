const bodyEl = document.getElementById("body");
const mainEl = document.getElementById("main");

import {PetArray} from "./PetInfo.js";

function createPage(name) {
    const div = document.createElement("div");
    div.classList.add("page");
    div.classList.add("hide");
    div.id = `${name.name}-page`;
    div.innerHTML = `<button aria-label="Button for going back" class="back-btn"><img alt="" src="img/svg/arrow_back_24dp_000_FILL0_wght400_GRAD0_opsz24.svg" id="${name.name}-back" class="back-img"></button>
        <button aria-label="Like button for ${name.name}" class="big-like-btn"><img alt="" src="" class="black" id="${name.name}-big-like-btn"></button>
       <div class="big-img-div"><img alt="${name.name} image" src="${name.src}" class="big-img"></div> 
       <div class="bottom-section">
        <div class="info-div">
            <div class="dog-name-div">
                <h1 class="big-name">${name.name}<img alt="" src="img/svg/male_24dp_BLACK_FILL1_wght400_GRAD0_opsz24.svg" class="big-gender"></h1>
                <p class="breed">${name.breed}</p>
            </div>
            <div class="location-div">
                <p class="distance"><img alt="" src="img/svg/location_on_24dp_D16D6A_FILL1_wght400_GRAD0_opsz24.svg" class="location">${name.distance}</p>
            </div>
        </div>
        <div class="info-div between-spacing">
            <div class="pop-div">
                <p class="pop-title">Age</p>
                <p class="pop-text">${name.age}</p>
            </div>
            <div class="pop-div">
                <p class="pop-title">Height</p>
                <p class="pop-text">${name.height}</p>
            </div>
            <div class="pop-div">
                <p class="pop-title">Weight</p>
                <p class="pop-text">${name.weight}</p>
            </div>
        </div>
        <div class="desc-div">
            <p class="desc">${name.description}</p>
        </div>
       </div>
       <div class="btn-div">
            <button aria-label="Donate button for ${name.name}" class="donate-btn">Donate<img alt="" src="img/svg/info_24dp_BLACK_FILL1_wght400_GRAD0_opsz24.svg" class="btn-icon"></button>
            <button aria-label="Adopt button for ${name.name}" class="adopt-btn">Adopt<img alt="" src="img/svg/pets_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg" class="btn-icon"></button>
        </div>`;


       bodyEl.appendChild(div);
    
        function changeLikeImg() {
            document.getElementById(`${name.name}-big-like-btn`).classList.toggle("red");
            document.getElementById(`${name.name}-big-like-btn`).classList.toggle("black");
            document.getElementById(`${name.name}-like-btn`).classList.toggle("red");
            document.getElementById(`${name.name}-like-btn`).classList.toggle("black");
        };
        document.getElementById(`${name.name}-big-like-btn`).addEventListener("click", changeLikeImg);
        function goBack() {
            document.getElementById(`${name.name}-page`).classList.add("hide");
            mainEl.classList.remove("hide")
        }
        document.getElementById(`${name.name}-back`).addEventListener("click", goBack)

}

for (let i = 0; i < PetArray.length; i++) {
    createPage(PetArray[i])
}