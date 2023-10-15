// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
if (this.getAttribute("id") === "play-now") {
    alert("You clicked Play now!");
} if(this.getAttribute("id") === "instructions") {
    alert("You clicked Instructions!");
} if(this.getAttribute ("id") === "reset");
alert("You clicked Reset!");
              else {
let gameType = this.getAttribute("id");
alert(`You clicked ${gameType}`);
             }
        })
    }
})
    

/**
 * The main game loop, called when the script is first loaded
 * and after the user's answer has been processed 
 */
function runGame(gameType) {

}

function selectUserPlay() {

}

function generateCpuChoice() {

}

function calculateWinner() {

}

function incrementUserScore() {

}

function incrementCpuScore() {

}
