// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "rock", "paper", "scissors") {
                userSelection();
            }

});

}
    
/**
 * Take user's game selection and show value on screen
 * and call the computer choice function 
 */
function userSelection() {

    let userSelection = parseInt(document.getElementsByClassName("btn-rock").value);

}

/**
 * Generate random number to determine Cpu selection of game
 */
function generateCpuChoice() {

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
