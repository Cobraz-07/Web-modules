let score1 = 0
let score2 = 0

let scoreEl1 = document.getElementById("score-1")
let scoreEl2 = document.getElementById("score-2")

scoreEl1.style.color = "#F94F6D"
scoreEl2.style.color = "#F94F6D"

function greenFn(){
    
    if (score1 > score2) {
    scoreEl1.style.color = "green"
    scoreEl2.style.color = "#F94F6D"
}

else if (score1 < score2) {
    scoreEl2.style.color = "green"
    scoreEl1.style.color = "#F94F6D"
} else {
    scoreEl1.style.color = "#F94F6D"
    scoreEl2.style.color = "#F94F6D"
}

}

function add1_1(){
    score1 += 1
    console.log("1 point!")
    scoreEl1.textContent = score1
    greenFn()
    
}

function add1_2(){
    score2 += 1
    console.log("1 point!")
    scoreEl2.textContent = score2
    greenFn()
    
}

function add2_1(){
    score1 += 2
    console.log("2 point!")
    scoreEl1.textContent = score1
    greenFn()
    
}

function add2_2(){
    score2 += 2
    console.log("2 point!")
    scoreEl2.textContent = score2
    greenFn()
    
}

function add3_1(){
    score1 += 3
    console.log("3 point!")
    scoreEl1.textContent = score1
    greenFn()
    
}

function add3_2(){
    score2 += 3
    console.log("3 point!")
    scoreEl2.textContent = score2
    greenFn()
    
}

function ngFunct(){
    score1 = 0
    score2 = 0
    scoreEl2.textContent = score2
    scoreEl1.textContent = score1
    console.log("New Game started!")
    scoreEl1.style.color = "#F94F6D"
    scoreEl2.style.color = "#F94F6D"
}

