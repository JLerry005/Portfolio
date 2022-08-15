// alert("Working!");

let myLead = [];

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLead.push(inputEl.value);
    console.log(myLead)
    inputEl.value = ""
    renderLeads()
})


function renderLeads(){
    let listItems = "";

    for(let i = 0; i < myLead.length; i++){
        listItems += "<li>" + myLead[i] + "</li>"
    
        // const li = document.createElement("li")
        // li.textContent += myLead[i]
        // ulEl.append(li)
    
        console.log(listItems)
    }
    ulEl.innerHTML = listItems;
}



// Use .innerHTML to render a Buy! button inside the div container

// let container = document.getElementById("container");

// container.innerHTML = "<button onclick='buy()'>" + "BUY" + "</button>"

// function buy(){
//     container.innerHTML += "<p> Thank you for buying! </p>"
// }
