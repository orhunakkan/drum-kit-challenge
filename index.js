// // Select all buttons
// const buttons = document.querySelectorAll(".drum");
// // Iterate over buttons
// buttons.forEach((button) => {
//     // Add event listener to each button
//     button.addEventListener('click', () => {
//         alert("I got clicked");
//     });
// });

// document.getElementById('w drum').addEventListener('click', function (e) {
//     document.getElementById('sound1').play();
// });
// document.getElementById('a drum').addEventListener('click', function (e) {
//     document.getElementById('sound2').play();
// });
//
// document.getElementById('s drum').addEventListener('click', function (e) {
//     document.getElementById('sound3').play();
// });
//
// document.getElementById('d drum').addEventListener('click', function (e) {
//     document.getElementById('sound4').play();
// });
//
// document.getElementById('j drum').addEventListener('click', function (e) {
//     document.getElementById('sound4').play();
// });
//
// document.getElementById('k drum').addEventListener('click', function (e) {
//     document.getElementById('sound5').play();
// });
//
// document.getElementById('l drum').addEventListener('click', function (e) {
//     document.getElementById('sound6').play();
// });

const drumSoundMap = {
    'w drum': 'sound1',
    'a drum': 'sound2',
    's drum': 'sound3',
    'd drum': 'sound4',
    'j drum': 'sound4',
    'k drum': 'sound5',
    'l drum': 'sound6'
};

function addDrumEventListener(drumID, soundID) {
    document.getElementById(drumID).addEventListener('click', function (e) {
        document.getElementById(soundID).play();
    });
}

for (let [drum, sound] of Object.entries(drumSoundMap)) {
    addDrumEventListener(drum, sound);
}
