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
