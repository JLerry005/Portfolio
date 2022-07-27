// alert("Working!");

// ========================================== //
//      Add first card and Second Card        //
// ========================================== //

// let firstCard = 6;
// let secondCard = 7;

// let total = firstCard + secondCard;

// let totalSum = "Sum: " + total;

// console.log(totalSum);

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

let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;
let message = "";

if(sum <= 20){
    message = "Do you want to draw a new card? ";
} else if(sum === 21){
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
} else {
    message = "You're out of the game!";
    isAlive = false;
}

console.log(message);


