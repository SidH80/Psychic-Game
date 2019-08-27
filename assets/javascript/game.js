var wins;
var losses;
var guessesLeft;
var guessesSoFar;
var guessesUser;

var computersLetter = ["q", "a", "z", "p", "l", "m", "t", "g", "v"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

//favTVshows.push(tvShow); pushes entries to an array

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var leftGuessesTest = document.getElementById("leftGuesses- text");
var guessesLeftSoFarText = document.getElementById("guessesLeftSoFar-text");

function init() {}

document.onkeyup = function(event) {
	guessUser = event.key;
	guessUser.push(guessesSoFar);
};

init();

// Display the user and computer guesses, and wins/losses/ties.
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
leftGuessesText.textContent = "You have " + guessesLeft + " left.";
guessesLeftSoFarText.textContent = "Guesses so far:" + guessesSoFar[i];
