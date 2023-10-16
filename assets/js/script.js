const controlButtons = document.querySelectorAll(".control-button");

let userChoice;
let cpuChoice;

// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        for (let button of controlButtons) {
            button.addEventListener("click", function () {
                userSelection(this.getAttribute("data-type"));
                generateCpuChoice();
            });
        }

    });
    
/**
 * Register user's game selection and show value on screen
 */
function userSelection(dataType) {


switch (dataType) {
case "rock":
    userChoice = 1;
    break;
    case "paper":
        userChoice = 2;
        break;
        case "scissors":
            userChoice = 3;
            break;
        }

}

/**
 * Generate random number to determine Cpu selection of game
 */
function generateCpuChoice() {

cpuChoice = Math.floor(Math.random() * 3) + 1;
}

/**
 * Check user and computer selection and determine
 * who's the winner
 */
function calculateWinner() {

    let 

}

function incrementUserScore() {

}

function incrementCpuScore() {

}

function displayRockSelection() {


}

function displayPaperSelection() {

}

function displayScissorsSelection() {

}
