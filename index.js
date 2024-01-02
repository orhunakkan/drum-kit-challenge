// Select all buttons
const buttons = document.querySelectorAll(".drum");
// Iterate over buttons
buttons.forEach((button) => {
    // Add event listener to each button
    button.addEventListener('click', () => {
        alert("I got clicked");
    });
});