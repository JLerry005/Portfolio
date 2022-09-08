// alert("working!")

const allCharacters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-",
    "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"
];

let passwordOne = document.getElementById("textFieldOne-el");
let passwordTwo = document.getElementById("textFieldTwo-el");

passwordOne.value = "";
passwordTwo.value = "";

function passwordDisplay() {
    for (let i = 0; i < 15; i++) {
        let randomCharOne = Math.floor(Math.random() * allCharacters.length);
        let randomCharTwo = Math.floor(Math.random() * allCharacters.length);

        passwordOne.value += allCharacters[randomCharOne];
        passwordTwo.value += allCharacters[randomCharTwo];
    }
}


function generatePassword() {
    passwordOne.value = "";
    passwordTwo.value = "";

    for (let i = 0; i < 15; i++) {
        let randomCharOne = Math.floor(Math.random() * allCharacters.length);
        let randomCharTwo = Math.floor(Math.random() * allCharacters.length);

        passwordOne.value += allCharacters[randomCharOne];
        passwordTwo.value += allCharacters[randomCharTwo];
    }
}

function copyClipBoardOne() {

    passwordOne.select();
    passwordOne.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passwordOne.value);
}

function copyClipBoardTwo() {

    passwordTwo.select();
    passwordTwo.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passwordTwo.value);
}