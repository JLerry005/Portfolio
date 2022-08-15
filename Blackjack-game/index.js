// alert("Working!");

// ========================================== //
//      Add first card and Second Card        //
// ========================================== //

// let firstCard = 6;
// let secondCard = 7;

// let total = firstCard + secondCard;

// let totalSum = "Sum: " + total;

// console.log(totalSum);

// ====================================================== //

// ========================================== //
//            if else condition               //
// ========================================== //

// let firstCard = 10;
// let secondCard = 1;

// let sum = firstCard + secondCard;

// if( sum < 21){
//     console.log("Do you want to draw a new card?");
// }
// else if(sum === 21){
//     console.log("Wohoo! You've got Blackjack!");
// }
// else{
//     console.log("You're out of the game!");
// }

// let age = 22;

// if(age < 21){
//     console.log("You can not enter the club!");
// }
// else{
//     console.log("Welcome!");
// }

// let age = 100;

// if(age < 100){
//     console.log("Not elegible");
// }
// else if (age == 100){
//     console.log("Here is your birthday card from the king!")
// }
// else{
//     console.log("Not elegible, you have already gotten one")
// }'

// ====================================================== //

// ========================================== //
//                  START                     //
// ========================================== //

// let firstCard = getRandomNumber();
// let secondCard = getRandomNumber();
let player = {
    name: "Ler",
    chips: 1500
}

let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");

let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("card-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomNumber(){

     let randomNumber = Math.floor( Math.random() * 13 ) + 1;
                                                                                                                                
     if(randomNumber > 10){
        return 10;
     } else if(randomNumber === 1){
        return 11;
     } else{
        return randomNumber;
     }
}

function startGame(){
    isAlive = true;

    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();

    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();
}

function renderGame(){

    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }

    if(sum <= 20){
        message = "Do you want to draw a new card?";
    } else if(sum === 21){
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard(){

    if(isAlive === true && hasBlackJack === false){
        let card = getRandomNumber();
        sum += card;
    
        cards.push(card)
        console.log(cards)
    
        renderGame();
    }

}

function newGame(){
    
    cardsEl.textContent = "Cards: ";
    sumEl.textContent = "Sum: "
    messageEl.textContent = "Want to Play a round?"
}

// ========================================== //
//                  END                       //
// ========================================== //

// ====================================================== //

// ========================================== //
//                  ARRAY                     //
// ========================================== //

// let myArray = [
//     "Fresh Graduated",
//     "Bachelor of Science in Information System",
//     "HTML, CSS, JS, and some other frameworks of CSS"
// ]

// console.log( myArray[1]);
// console.log( myArray[2]);
// console.log( myArray[0]);

// let describeMySelf = [
//     "John Lerry",
//     22,
//     true
// ]

// console.log(describeMySelf)

// let message = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

// let newMessage = "Same here!"

// message.push(newMessage);
// message.pop();

// console.log(message);

// ========================================== //
//                  END                       //
// ========================================== //

// ========================================== //
//                  FOR LOOP                  //
// ========================================== //

// for (let count = 10; count < 21; count += 1){
//     console.log(count)
// }

// for (let i = 10; i < 101; i += 10){
//     console.log(i);
// }

// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio today",
//     "Same here!",
//     "Great to hear",
//     "Yeah",
//     "Yeah",
//     "All good. Been working on my portfolio today"
// ]

// for (i = 0; i < messages.length; i += 1){
//     console.log(messages [i]);
// }

// let cards = [7, 3, 9, 10];

// for (let i = 0; i < cards.length; i++){
//     console.log(cards[i]);
// }

// let sentence = ["Hello", "my", "name", "is","Per"]
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i++){
//     console.log(sentence[i])

//     greetingEl.textContent += (sentence[i]) + " ";
// }

// ========================================== //
//                  END                       //
// ========================================== //

// ========================================== //
//       RETURNING VALUES IN FUNCTIONS        //
// ========================================== //

// let player1Time = 102;
// let player2Time = 101;

// function getFastestRaceTime(){
//     if (player1Time < player2Time){
//         return player1Time;
//     } else if(player2Time < player1Time){
//         return player2Time
//     } else{
//         return player1Time
//     }
// }

// // let fastestRace = getFastestRaceTime();
// // console.log(fastestRace)

// function totalRaceTime(){
//     return player1Time + player2Time;
// }

// let totalTime = totalRaceTime();
// console.log(totalTime)

// ========================================== //
//                  END                       //
// ========================================== //

// ========================================== //
//         GENERATING RANDOM NUMBERS          //
// ========================================== //

// MATH.RANDOM METHOD
// let randomNumber = Math.random() * 6;
// console.log(randomNumber)

// MATH.FLOOR METHOD
// let flooredNumber = Math.floor(2.5353)
// console.log(flooredNumber)

// function rollDice(){
//     let randomNumber = Math.floor( Math.random() * 6 ) + 1;
//     return randomNumber;
// }

// console.log( rollDice() );


// What you declared number this is the exact number that will be output
// ========================================== //
//                  END                       //
// ========================================== //

// ========================================== //
//             LOGICAL OPERATORS              //
// ========================================== //

// let hasCompletedCourse = false;
// let givesCertificate = true;

// if(hasCompletedCourse === true && givesCertificate === true){
//     console.log("Generating Certificate.....")
// }

// let hasSolvedChallenge = false;
// let hasHintsLeft = false;

// if(hasSolvedChallenge === false && hasHintsLeft === false){
//     showSolution();
// }

// function showSolution(){
//     console.log("Showing the solution...")
// }


// let likeDocumentaries = true;
// let likesStartups = false;

// if(likeDocumentaries === true || likesStartups === true){
//     recommendMovies();
// }

// function recommendMovies(){
//     console.log("Hey, check out this new firm we think you will like!")
// }

// ========================================== //
//                  END                       //
// ========================================== //

// ========================================== //
//                OBJECTS                     //
// ========================================== //

// let castleRent = {
//     title: "Live like a King in my Castle",
//     capacity: ["4 guest", "1 bedroom", "2 beds"],
//     price: 190,
//     available: true
// }

// console.log( castleRent.title )
// console.log( castleRent.available )


// ========================================== //
//                  END                       //
// ========================================== //