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

// Declare empty arrays to store correct and wrong letters
const correctLetters = [];
const wrongLetters = [];

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

/* Function to start the game.
    Picks a random number from the words array and use index to assign selectedWord and selectedHint */
function startGame() {
    let index = words.indexOf(words[Math.floor(Math.random() * words.length)])
    selectedWord = words[index].toUpperCase();
    selectedHint = hints[index].toUpperCase();

    $('.figure-part').css('display', 'none');

    displayWord();
}

// Function to display the word
function displayWord() {
    //set game finish to false to allow input for new game
    gameFinish = false;

    // Display hint
    $('#hint').html(`<p>Hint: ${selectedHint}</p>`);

    // Display word
    $('#word').html(`
        ${selectedWord
            .split('')
            .map(letter => `
                <span class="letter">
                    ${correctLetters.includes(letter)  ? letter :  ''}
                </span>
            `).join('')}
        `);

    const innerWord = wordEl.innerText.replace(/\n/g, '');

    /* If the inner word matches the selected word, insert text to final-message saying "Congratulations! You Won!!!" 
    Popup will then display with final-message and a button so user can start again. */

    if (innerWord === selectedWord) {
        //set game finish to true to stop keydown events
        gameFinish = true;
        $('#final-message').html("Congratulations! You Won!!!")
        $('#final-msg-container').css("display", "block");
    }

}

// Update the wrong letters
function updateWrongLettersEl() {

    // Display wrong letters into html
    wrongLettersEl.innerHTML = `
        ${wrongLetters.length > 0 ? '<p>Wrong Letters</p>' : ''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;
    /* Loops through figureParts array for each element with an id of figure-part and displays one 'body part'
    each time an inccorect letter is guessed */
    figureParts.forEach((part, index) => {
        const errors = wrongLetters.length;

        if (index < errors) {
            part.style.display = 'block';
            // Display face only when head has been displayed
            if (index >= 4) {
                $('.start-face').css("display", "block");
            }

        } else {
            part.style.display = 'none';
        }
    });

    /* Checks if wrongLetters array is equal to figureParts array. 
    If it is equal, it displays 'Sorry you lose!' into the h2 element with an id of final-message */
    if (wrongLetters.length === figureParts.length) {
        //set game finish to true to stop keydown events
        gameFinish = true;

        //Switch to lose face by hiding start face and displaying lose face
        $('.start-face').css("display", "none");
        $('.lose-face').css("display", "block");

        $('#final-message').html("Sorry, you Lose!!!");
        //After they lose, display the selectedWord
        wordEl.innerHTML = `
        ${selectedWord
            .split('')
            .map(selectedWord => `
                <span class="letter">
                    ${selectedWord}
                </span>
            `).join('')}
        `;

        $('#final-msg-container').css("display", "block");
    }
}

/* Change display settings on letter-error to display block, then changes it back to none after 2000ms to temporarily display notifcation 
to user. This alerts the user that they have already used this letter. */
function showNotification() {
    $('#letter-error').css("display", "block");
    setTimeout(() => {
        $('#letter-error').css("display", "none");
    }, 2000);
}

