// alert("Working");

let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score")

let homeContainer = document.querySelector(".homeScoreContainer");
let guestContainer = document.querySelector(".guestScoreContainer");

scoreHome = 0;
scoreGuest = 0;

// console.log(homeScore + guestScore)

// Home score functions 
function plusOneHome() {
    scoreHome += 1;
    homeScore.textContent = scoreHome;
    scoring();
}

function plusTwoHome() {
    
    scoreHome += 2;
    homeScore.textContent = scoreHome;
    scoring();
}

function plusThreeHome(){
    scoreHome += 3;
    homeScore.textContent = scoreHome;
    scoring();
}

// Guest Score Functions 

function plusOneGuest() {
    scoreGuest += 1;
    guestScore.textContent = scoreGuest;
    scoring();
}

function plusTwoGuest() {
    scoreGuest += 2;
    guestScore.textContent = scoreGuest;
    scoring();
}

function plusThreeGuest() {
    scoreGuest += 3;
    guestScore.textContent = scoreGuest;
    scoring();
}

// New Game Button
function newGame() {
    scoreHome = 0;
    scoreGuest = 0;
    homeScore.textContent = scoreHome;
    guestScore.textContent = scoreGuest;
    guestContainer.style.backgroundColor = "#5254848f";
    homeContainer.style.backgroundColor = "#5254848f";
}

const scoring = () =>{
    if(scoreHome > scoreGuest){
        homeContainer.style.backgroundColor = "#525484";
        guestContainer.style.backgroundColor = "#5254848f";
    } else if (scoreHome < scoreGuest){
        guestContainer.style.backgroundColor = "#525484";
        homeContainer.style.backgroundColor = "#5254848f";
    } else {
        homeContainer.style.backgroundColor = "#5254848f";
        guestContainer.style.backgroundColor = "#5254848f";
    }
}
