//the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:
// Guess what letter I'm thinking of
// Wins: (# of times the user has guessed the letter correctly)
// Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
// Guesses Left: (# of guesses left. This will update)
// Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
// When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
// When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

let userGuess =[];
let randomLetterArray=[];
let userKey;
let randomLetter;

let wins = 0;
let losses = 0;
let guessesLeft = [10];
guessesMade = "";


// showing display and score count
const showWins = document.getElementById("wins");
showWins.textContent = wins;
 
const showLosses = document.getElementById("Losses");
showLosses.textContent = losses;

const showGuessesLeft = document.getElementById("guessesLeft");
showGuessesLeft.textContent = guessesLeft;

const showGuessesMade = document.getElementById("guessesMade");
showGuessesMade.textContent = guessesMade;

// random letter 
function userGuessArray(){
    userGuessArray = [];
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    randomLetter = alphabet[Math.floor((math.floor() * alphabet.length))];
    console.log("random Letter: " + randomLetter);

    randomLetterArray[0] = randomLetter;
    console.log(randomLetterArray);
}