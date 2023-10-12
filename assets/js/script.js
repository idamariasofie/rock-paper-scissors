// Wait for the DOM to finish loading before running the game

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

// Get the button elements and add event listeners to them
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("id") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("id");
                alert(`You clicked ${gameType}`);
                runGame(gameType);
            }

        });
    }

    runGame("rock");
    runGame("paper");
    runGame("scissors");
});


/**
 * The main game loop, called when the script is first loaded
 * and after the user's answer has been processed 
 */
function runGame(gameType) {


    if (gameType === "rock") {
       
    }
}

function incrementScore() {

}

/**
 * Gets the selected option (rock, paper, scissors) and the computers choice 
 * directly from the DOM and returns the winner. 
 */
function calculateWinner() {

}


function displayRockOption() {
    
}

function displayPaperOption() {

}

function displayScissorsOption() {

}

function displayWinner() {

}