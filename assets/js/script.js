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
selectUserPlay(gameType);
             }
        })
    }

    selectUserPlay("rock");
    selectUserPlay("paper");
    selectUserPlay("scissors");

})
    

function selectUserPlay(gameType) {
if (gameType === "rock") {
    displayRockSelection(rock);
} if (gameType === "paper") {
    displayPaperSelection(paper);
} if (gameType === "scissors") {
    displayScissorsSelection(scissors);
}

}

/**
 * Generate random number to determine Cpu selection of game
 */
function generateCpuChoice() {

    //creates random cpu choice
let cpuChoice = Math.floor(Math.random() * 3) + 1;
}


function calculateWinner() {

}

function incrementUserScore() {

}

function incrementCpuScore() {

}

function displayRockSelection(rock) {

document.getElementById('rock').textContent = rock;
}

function displayPaperSelection(paper) {

document.getElementById('paper').textContent = paper;
}

function displayScissorsSelection(scissors) {

document.getElementById('scissors').textContent = scissors;
}

