// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("id") === "rock") {
                displayRockSelection();
                if (this.getAttribute("id") === "paper") {
                    displayPaperSelection();
                    if (this.getAttribute("id") === "scissors") {
                        displayScissorsSelection();
                    }
                }
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    selectUserPlay("rock");
    selectUserPlay("paper");
    selectUserPlay("scissors");

});
    
/**
 * Take user's game selection and show value on screen
 * and call the computer choice function 
 */
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

