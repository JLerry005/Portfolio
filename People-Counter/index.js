
// This is my first Function

// function number() {
//     console.log(42)
// }

// number();

// =============================================

// Create a function that logs out the sum of all lap times

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function totalLapTimes(){
//     let total = lap1 + lap2 + lap3;
//     console.log(total);
// }

// totalLapTimes()

// =============================================

// let lapsCompleted = 0

// // Create a function that increments the lapsCompletd variable with one
// // Run it three times

// function incrementOne() {

//     lapsCompleted = lapsCompleted + 1; 

// }

// incrementOne()
// incrementOne()
// incrementOne()

// console.log(lapsCompleted)

// =============================================
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

let count = 0;

// Increment the people entered
function increment() {
    count += 1;
    countEl.textContent = count;
}

function save(){
    let countDash = count + " - "
    saveEl.textContent += countDash;
    
    count = 0;
    countEl.textContent = count;
}



// Decrement the people Entered
function decrement() {
    count = count - 1; 
    countEl.innerText = count;
}

// =============================================
// STRING 

// let username = "ler"

// let message = "You have three new notification";

// let messageToUser = message + ", " + username + "!";
// console.log(messageToUser);

// let name = "Lerry";
// let greeting = "Hi, my name is ";
// let myGreeting  = greeting + name;

// console.log(myGreeting);

// STRING AND NUMBERS 

// console.log(4 + 5); // 9
// console.log("2" + "4"); // 24
// console.log("5" + 1); // 51
// console.log(100 + "100"); // 100100

// =============================================

// let welcomeEl = document.getElementById("welcome-el");

// let name = "John Lerry Hapatinga"
// let greeting = "Welcome back "

// welcomeEl.innerText = greeting + name; 

// // welcomeEl.innerText = welcomeEl.innerText + "🖐";

// welcomeEl.innerText += "🖐";

// =============================================
// PRACTICE TIME
// =============================================

// Practice to use Variable 

// let fname = "John Lerry ";
// let lname = "Hapatinga";

// let fullName = fname + lname;

// console.log(fullName)

// =============================================

// let name = "Linda";
// let greeting = "Hi there";

// function greet(){
//     console.log(greeting + ", " + name + "!")
// }

// greet()

// =============================================
// Practice to use Increment and Decrement

// let myPoints = 3;

// function add3Points(){
//     myPoints += 3;
    
// }

// function remove1Points(){
//     myPoints -= 1;
// }

// add3Points()
// add3Points()
// add3Points()
// remove1Points()
// remove1Points()

// console.log(myPoints)

// =============================================
// Practice the string and numbers

// console.log("2" + 2); // 22
// console.log(11 + 7); // 18
// console.log(6 + "5"); // 65
// console.log("My points: " + 5 + 9); // My points: 59
// console.log(2 + 2); // 4
// console.log("11" + "14"); // 1114

// =============================================
// Rendering an error message



