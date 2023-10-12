// Wait for the DOM to finish loading before running the game


document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

// Get the button elements and add event listeners to them
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});



function runGame() {

}


function selectButton() {

}

