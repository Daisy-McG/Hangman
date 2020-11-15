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

// Array of possible words for the game
const words = ['alligator', 'horse', 'giraffe', 'monkey', 'elephant', 'flamingo', 'mcdonalds', 'beyonce', 'kanye', 'eminem', 'prince',
    'adele', 'sting', 'apple', 'tomato', 'lasagne', 'onions', 'gherkin', 'pizza', 'salmon', 'branzino', 'anchovies', 'stingray', 'castanets',
    'cowbell', 'maraca', 'tambourine', 'xylophone', 'buckaroo', 'scrabble', 'excited', 'jealousy', 'purple', 'violet', 'Diamond', 'Emerald',
    'Amethyst', 'Quartz'
];

// Array of hints to pair with counter-part words
const hints = ['Animal', 'Animal', 'Animal', 'Animal', 'Animal', 'Animal', 'Fast Food', 'Musician', 'Musician', 'Musician', 'Musician',
    'Musician', 'Musician', 'Food', 'Food', 'Food', 'Food', 'Food', 'Food', 'Fish', 'Fish', 'Fish', 'Fish', 'Musical Instrument', 'Musical Instrument',
    'Musical Instrument', 'Musical Instrument', 'Musical Instrument', 'Game', 'Game', 'Emotion', 'Emotion', 'Colour', 'Colour', 'Precious Gem',
    'Precious Gem', 'Precious Gem', 'Precious Gem',
];