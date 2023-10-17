const controlButtons = document.querySelectorAll(".control-button");
const userMessage = document.querySelector("#userMessage");

let userChoice;
let cpuChoice;



// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    // let buttons = document.getElementsByTagName("button");
    for (let button of controlButtons) {
        button.addEventListener("click", function () {
            userSelection(this.getAttribute("data-type"));
            generateCpuChoice();
            calculateWinner();
            generateGameWinner();
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
    if (userChoice == 1 && cpuChoice == 1) {
        console.log("Both chose rock, it's a draw");
    } else if (userChoice == 2 && cpuChoice == 2) {
        console.log("Both chose paper, it's a draw");
    } else if (userChoice == 3 && cpuChoice == 3) {
        console.log("Both chose scissors, it's a draw");
    } else if (userChoice == 1 && cpuChoice == 3) {
        console.log("User wins with rock, cpu chose scissors");
        incrementUserScore();
    } else if (userChoice == 1 && cpuChoice == 2) {
        console.log("CPU wins with rock, user chose scissors");
        incrementCpuScore();
    } else if (userChoice == 2 && cpuChoice == 3) {
        console.log("CPU wins with scissors, user chose paper");
        incrementCpuScore();  
    } else if (userChoice == 2 && cpuChoice == 1) {
        console.log("User wins with paper, CPU chose rock");
        incrementUserScore();
    } else if (userChoice == 3 && cpuChoice == 1) {
        console.log("CPU wins with rock, User chose scissors");
        incrementCpuScore();
    } else if (userChoice == 3 && cpuChoice == 2); {
        console.log("User wins with scissors, CPU chose paper");
        incrementUserScore();   
    }
}

function incrementUserScore() {
    let oldScore = parseInt(document.getElementById("user-score").innerText);
    document.getElementById("user-score").innerText = ++oldScore;
}

function incrementCpuScore() {
    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;
}

/**
 * Check if user or CPU have reached 10 wins
 * to end game
 */
function generateGameWinner() {
    if (incrementUserScore === 10 && incrementCpuScore < 10) {
        userMessage.innerHTML = "You win!";
    } else if (incrementUserScore < 10 && incrementCpuScore === 10) {
        userMessage.innerHTML = "Cpu wins!";
    } 
}


function displayRockSelection() {


}

function displayPaperSelection() {

}

function displayScissorsSelection() {

}
