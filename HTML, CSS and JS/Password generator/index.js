const uppercaseChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowercaseChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChars = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","["];
const specialChars2 = ["}","]","|",":",";","<",">",".","?","/"];

let buttonEl = document.getElementById("genBtn")
let passEl1 = document.getElementById("pass1")
let passEl2 = document.getElementById("pass2")
let copyEl1 = document.getElementById("pass1Div")
let copyEl2 = document.getElementById("pass2Div")

function genPass() {
    characters = "";
    const includeUppercase = document.getElementById("checkUpperCase").checked;
    const includeLowercase = document.getElementById("checkLowercase").checked;
    const includeNumbers = document.getElementById("checkNumbers").checked;
    const includeSpecialChars = document.getElementById("checkSpecial").checked;

    if (includeUppercase === true) characters += uppercaseChars.join("");
    if (includeLowercase === true) characters += lowercaseChars.join("");
    if (includeSpecialChars === true) characters += specialChars.join("");
    if (includeSpecialChars === true) characters += specialChars2.join("");
    if (includeNumbers === true) characters += numberChars.join("");

    let passLength = document.getElementById("length").value

    if (passLength <= 20 && passLength > 0) {
        passEl1.textContent = ""
        passEl2.textContent = ""
        for (let i = 0; i <= passLength - 1; i++) {
            const randomIndex = Math.floor(window.crypto.getRandomValues(new Uint32Array(1))[0] / (0xFFFFFFFF + 1) * characters.length);
            passEl1.textContent += characters[randomIndex]
        }
        for (let j = 0; j <= passLength - 1; j++) {
            const randomIndex2 = Math.floor(window.crypto.getRandomValues(new Uint32Array(1))[0] / (0xFFFFFFFF + 1) * characters.length);
            passEl2.textContent += characters[randomIndex2]
        }
    } else {
        window.alert("Passwords must be less or equal than 20 characters and bigger than 0 characters")
    }
}

function genCopy() {
    navigator.clipboard.writeText(passEl1.textContent);
    window.alert("Password copied!")
}
function genCopy2() {
    navigator.clipboard.writeText(passEl2.textContent);
    window.alert("Password copied!")
}


buttonEl.addEventListener("click", genPass)
copyEl1.addEventListener("click", genCopy)
copyEl2.addEventListener("click", genCopy2)


