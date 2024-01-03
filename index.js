// Get all drum elements and store their count
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Loop through the drum elements
for (var i = 0; i < numberOfDrumButtons; i++) {
    // Add a 'click' event listener to each drum element
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // On click, get the inner HTML of the clicked drum button
        var buttonInnerHTML = this.innerHTML;
        // Make a sound based on the inner HTML
        makeSound(buttonInnerHTML);
        // Trigger an animation based on the inner HTML
        buttonAnimation(buttonInnerHTML);
    });
}

// Add a 'keydown' event listener to the entire document
document.addEventListener("keydown", function (event) {
    // When a key is pressed, make a sound based on the key
    makeSound(event.key);
    // Also trigger an animation based on the key
    buttonAnimation(event.key);
});

// Function to make sounds
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
            console.log(key);
    }
}

// Function to animate button
function buttonAnimation(currentKey) {
    // Select the button associated with the currentKey
    var activeButton = document.querySelector("." + currentKey);
    // Add the 'pressed' class to this button
    activeButton.classList.add("pressed");
    // After 100 milliseconds, remove the 'pressed' class
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}
