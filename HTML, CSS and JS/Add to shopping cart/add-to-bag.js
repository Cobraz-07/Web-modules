const img1El = document.getElementById("img-1")
const img2El = document.getElementById("img-2")
const img3El = document.getElementById("img-3")
const size1El = document.getElementById("size-btn-1")
const size2El = document.getElementById("size-btn-2")
const size3El = document.getElementById("size-btn-3")
const size4El = document.getElementById("size-btn-4")
const size5El = document.getElementById("size-btn-5")
const size6El = document.getElementById("size-btn-6")
const cartBtn = document.getElementById("cart-btn")
const container = document.getElementById("container")
const cartContainer = document.getElementById("cart-container")
const bigImg = document.getElementById("big-img")
const addBtn = document.getElementById("add-btn")
const ulEl = document.getElementById("bag-list")
const minusBtn = document.getElementById("minus")
const plusBtn = document.getElementById("plus")
const countEl = document.getElementById("count")
const priceEl = document.getElementById("price")
const prodPriceEl = document.getElementById("prod-price")
const prodPrice = Number(prodPriceEl.textContent)
const sizeEl = document.getElementById("item-size")

let size = ""
let price = 0
let count = 0

bigImg.src = "img/pics/img1.jpg"


function imgChange(img) {
    bigImg.src = `img/pics/${img}`
}

img1El.addEventListener("click", function(){imgChange("img1.jpg")});
img2El.addEventListener("click", function(){imgChange("img2.jpg")});
img3El.addEventListener("click", function(){imgChange("img3.png")});


function sizeChange(size) {
    size1El.classList.remove("active")
    size2El.classList.remove("active")
    size3El.classList.remove("active")
    size4El.classList.remove("active")
    size5El.classList.remove("active")
    size6El.classList.remove("active")
    size.classList.toggle("active")
    sizeVar = size.textContent
    console.log(sizeVar)
}

size1El.addEventListener("click", function(){sizeChange(size1El)});
size2El.addEventListener("click", function(){sizeChange(size2El)});
size3El.addEventListener("click", function(){sizeChange(size3El)});
size4El.addEventListener("click", function(){sizeChange(size4El)});
size5El.addEventListener("click", function(){sizeChange(size5El)});
size6El.addEventListener("click", function(){sizeChange(size6El)});


function openCart() {
    container.classList.toggle("blur")
    cartContainer.classList.toggle("hide")
}

cartBtn.addEventListener("click", openCart)

function add() {
    document.getElementById("bag-item").classList.remove("hide-2")
    console.log("item added")
    count = 1
    countEl.innerText = count
    price = prodPrice
    priceEl.textContent = `$${price}`
    sizeEl.textContent = sizeVar
}

addBtn.addEventListener("click", add)

function minus() {
    if (count === 1) {
        document.getElementById("bag-item").classList.toggle("hide-2")
        priceEl.textContent = ""
    } else{
            priceEl.textContent = ""
    count = count - 1
    countEl.innerText = count
    price = price - prodPrice
    priceEl.textContent = `$${price}`
}
}
    
function plus() {
        priceEl.textContent = ""
    count = count + 1
    countEl.innerText = count
    price = price + prodPrice
    priceEl.textContent = `$${price}`
}


minusBtn.addEventListener("click", minus)
plusBtn.addEventListener("click", plus)
