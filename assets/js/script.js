// Wait for DOM to finish lodaing before running the game
document.addEventListener("DOMContentLoaded", function() {
let buttons = document.getElementsByTagName("button");

// Get the button elements and add event listeners to them
for (let button of buttons){
    button.addEventListener("click", function() {
let gameType = this.getAttribute("data-type");
alert(`You clicked $(gameType)`);
    })

}

})



function runGame() {

}


function selectButton() {

}

