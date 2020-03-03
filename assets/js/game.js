//the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:
// Guess what letter I'm thinking of
// Wins: (# of times the user has guessed the letter correctly)
// Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
// Guesses Left: (# of guesses left. This will update)
// Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
// When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
// When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).
let wins = 0;
let losses = 0;
let guessesLeft = [10];
let guessesSoFar = "";

let userGuess = [];
let randomLetterArray = [];
let userKey;
let randomLetter;



// showing display and score count
const displayWins = document.getElementById("wins");
displayWins.textContent = wins;

const displayLosses = document.getElementById("losses");
displayLosses.textContent = losses;

const displayGuessesLeft = document.getElementById("guesses-left");
displayGuessesLeft.textContent = guessesLeft;

const displayGuessesSoFar = document.getElementById("guesses-so-far");
displayGuessesSoFar.textContent = guessesSoFar;

// random letter 
function init() {
    userGuess = [];
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    randomLetter = alphabet[Math.floor((Math.floor() * alphabet.length))];
    console.log("random Letter: " + randomLetter);

    randomLetterArray[0] = randomLetter;
    console.log(randomLetterArray);
}

init();

document.onkeydown = function (){
    userKey = event.key;
    //stores key press in array
    userGuess.push(" " + userKey);
    displayGuessesSoFar.textContent = guessesLeft;
    // print keys pressed 
    displayGuessesSoFar.text = userGuess;

    guessesLeft = guessesLeft -1;
    displayGuessesLeft.textContent = userGuess;
    //compares user key press to random letter

    if (randomLetter === userKey) {
        wins++;
        displayWins.textContent = guessesLeft;
        init();
        guessesLeft = [10];
        displayGuessesLeft.textContent = guessesLeft;
    }

    else {
        console.log("different letter");
    }
    if (guessesLeft === 0) {
        init();
        alert("Better luck Next time!")
        losses++;
        displayLosses.textContent = losses;
        guessesLeft = [10];
        displayGuessesLeft.textContent = guessesLeft
    }
    

}