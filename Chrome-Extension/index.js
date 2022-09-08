// alert("Working!");

let myLead = [];

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLead.push(inputEl.value);
    inputEl.value = ""
    renderLeads()
})


function renderLeads(){
    let listItems = "";

    for(let i = 0; i < myLead.length; i++){

        listItems += `
            <li>
                <a href='${myLead[i]}' target='_blank'>
                    ${myLead[i]}
                </a>
            </li>
        `;

        // const li = document.createElement("li")
        // li.textContent += myLead[i]
        // ulEl.append(li)
    }
    
    ulEl.innerHTML = listItems;
}



// Use .innerHTML to render a Buy! button inside the div container

// let container = document.getElementById("container");

// container.innerHTML = "<button onclick='buy()'>" + "BUY" + "</button>"

// function buy(){
//     container.innerHTML += "<p> Thank you for buying! </p>"
// }


// const recipient = "James";

// const sender = "John Lerry"

// const email = `Hey ${recipient}! 

// How is it going? Cheers ${sender}
// `;

// console.log(email)

        // listItems += `
        //     <li>
        //         <a href='${myLead[i]}' target='_blank'>
        //             ${myLead[i]}
        //         </a>
        //     </li>
        // `