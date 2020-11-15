// Set variables for elements from HTML page to manipulate later
const wordEl = document.getElementById('word');
const hintEl = document.getElementById('hint');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');

// Variable to determine if game has ended or not, to be used to control keydown events
let gameFinish = false;

//  Variables for Selected word and hint
let selectedHint;
let selectedWord;

// Get all elements with a class of figure-part and store to array
const figureParts = document.querySelectorAll('.figure-part');