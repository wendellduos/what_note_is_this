let notesFrequencies = [
    {name: 'c', frequency: 261.63, number: 0},
    {name: 'c_sharp', frequency: 277.18, number: 1},
    {name: 'd', frequency: 293.66, number: 2},
    {name: 'd_sharp', frequency: 311.13, number: 3},
    {name: 'e', frequency: 329.63, number: 4},
    {name: 'f', frequency: 349.23, number: 5},
    {name: 'f_sharp', frequency: 369.99, number: 6},
    {name: 'g', frequency: 392.00, number: 7},
    {name: 'g_sharp', frequency: 415.30, number: 8},
    {name: 'a', frequency: 440.00, number: 9},
    {name: 'a_sharp', frequency: 466.16, number: 10},
    {name: 'b', frequency: 493.88, number:11}
];

var generatedNoteFrequency;
var generatedNoteName;

function generateRandomNote() {

    let randomNumber = Math.random() * 11;
    let generatedNumber = randomNumber.toFixed();

    for (i = 0; i < notesFrequencies.length; i++) {
        if (generatedNumber == notesFrequencies[i].number) {
            generatedNoteFrequency = notesFrequencies[i].frequency;
            generatedNoteName = notesFrequencies[i].name;
        } else {

        }
    }

    let context = new AudioContext();
    let hfo = context.createOscillator();
    hfo.frequency.value = generatedNoteFrequency;

    hfo.connect(context.destination);
    hfo.start(0);
    hfo.stop(2);
}

function guessNote(element) {
    let clickedElementId = element.id;

    if (generatedNoteName == clickedElementId) {
        alert('Acertou!');
    } else {
        alert('Errou :(');
    }
}