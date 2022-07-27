// alert("Working");

let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score")

scoreHome = 0;
scoreGuest = 0;

// console.log(homeScore + guestScore)

// Home score functions 
function plusOneHome() {
    scoreHome += 1;
    homeScore.textContent = scoreHome;
    
}

function plusTwoHome() {
    
    scoreHome += 2;
    homeScore.textContent = scoreHome;
}

function plusThreeHome(){
    scoreHome += 3;
    homeScore.textContent = scoreHome;
}

// Guest Score Functions 

function plusOneGuest() {
    scoreGuest += 1;
    guestScore.textContent = scoreGuest;
}

function plusTwoGuest() {
    scoreGuest += 2;
    guestScore.textContent = scoreGuest;
}

function plusThreeGuest() {
    scoreGuest += 3;
    guestScore.textContent = scoreGuest;
}

// New Game Button
function newGame() {
    scoreHome = 0;
    scoreGuest = 0;
    homeScore.textContent = scoreHome;
    guestScore.textContent = scoreGuest;
}

