const bodyEl = document.getElementById("body");
const mainEl = document.getElementById("main");

import {PetArray} from "./PetInfo.js";

function createPage(dog) {
    const page = document.createElement("div");
    page.classList.add("page");
    page.classList.add("hide");
    page.id = `${dog.name}-page`;
    page.innerHTML = `<button aria-label="Button for going back" class="back-btn"><img alt="" src="img/svg/arrow_back_24dp_000_FILL0_wght400_GRAD0_opsz24.svg" id="${dog.name}-back" class="back-img"></button>
        <button aria-label="Like button for ${dog.name}" class="big-like-btn"><img alt="" src="" class="black" id="${dog.name}-big-like-btn"></button>
       <div class="big-img-div"><img alt="${dog.name} image" src="${dog.src}" class="big-img"></div> 
       <div class="bottom-section">
        <div class="info-div">
            <div class="dog-name-div">
                <h1 class="big-name">${dog.name}<img alt="" src="img/svg/male_24dp_BLACK_FILL1_wght400_GRAD0_opsz24.svg" class="big-gender"></h1>
                <p class="breed">${dog.breed}</p>
            </div>
            <div class="location-div">
                <p class="distance"><img alt="" src="img/svg/location_on_24dp_D16D6A_FILL1_wght400_GRAD0_opsz24.svg" class="location">${dog.distance}</p>
            </div>
        </div>
        <div class="info-div between-spacing">
            <div class="pop-div">
                <p class="pop-title">Age</p>
                <p class="pop-text">${dog.age}</p>
            </div>
            <div class="pop-div">
                <p class="pop-title">Height</p>
                <p class="pop-text">${dog.height}</p>
            </div>
            <div class="pop-div">
                <p class="pop-title">Weight</p>
                <p class="pop-text">${dog.weight}</p>
            </div>
        </div>
        <div class="desc-div">
            <p class="desc">${dog.description}</p>
        </div>
       </div>
       <div class="btn-div">
            <button aria-label="Donate button for ${dog.name}" class="donate-btn">Donate<img alt="" src="img/svg/info_24dp_BLACK_FILL1_wght400_GRAD0_opsz24.svg" class="btn-icon"></button>
            <button aria-label="Adopt button for ${dog.name}" class="adopt-btn">Adopt<img alt="" src="img/svg/pets_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg" class="btn-icon"></button>
        </div>`;


       bodyEl.appendChild(page);
    
        function changeLikeImg() {
            document.getElementById(`${dog.name}-big-like-btn`).classList.toggle("red");
            document.getElementById(`${dog.name}-big-like-btn`).classList.toggle("black");
            document.getElementById(`${dog.name}-like-btn`).classList.toggle("red");
            document.getElementById(`${dog.name}-like-btn`).classList.toggle("black");
        };
        document.getElementById(`${dog.name}-big-like-btn`).addEventListener("click", changeLikeImg);
        function goBack() {
            document.getElementById(`${dog.name}-page`).classList.add("hide");
            mainEl.classList.remove("hide")
        }
        document.getElementById(`${dog.name}-back`).addEventListener("click", goBack)

}

for (let i = 0; i < PetArray.length; i++) {
    createPage(PetArray[i])
}