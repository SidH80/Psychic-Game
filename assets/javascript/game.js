//Create variables to store my values
var userGuess;

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var computerGuess;
var guessesSoFar = [];
var computerChoices = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z"
];

var displayText = "Guess the computer's letter";

//Create function to display th results to page
function updateDisplay() {
	document.querySelector("#displayText").innerHTML = displayText;
	document.querySelector("#wins").innerHTML = wins;
	document.querySelector("#losses").innerHTML = losses;
	document.querySelector("#guessesLeft").innerHTML = guessesLeft;
	document.querySelector("#guessesSoFar").innerHTML = guessesSoFar;
}
//shows headings and titles when the game begins
updateDisplay();

//Create a function to get a random letter for the computer
function computerRandomLetter() {
	computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

//running function chooses a random letter before start up
computerRandomLetter();
console.log(computerGuess);

//Reset my scores
function resetScores() {
	guessesLeft = 9;
	guessesSoFar = [];
}

//create start on key event function to grab userGuess
document.onkeyup = function(event) {
	userGuess = event.key;
	console.log(userGuess);

	//Display user guess and computer guess
	displayText = "You chose: " + userGuess;

	// if my guess equals computer guess then increment wins+, have computer guess again
	if (userGuess === computerGuess) {
		displayText = "You got it!!!";
		wins++;

		// if my guess does not equal computer guess then decrease losses by 1 and push userGuess to guessesSoFar array and have computer guess again
	} else {
		guessesSoFar.push(userGuess);
		guessesLeft--;
	}
	//after 9 guesses display "play again?", increase losses by 1, reset scores
	if (guessesLeft === 0) {
		console.log("try again");
		displayText = "Game Over. Another round?";
		losses++;
		resetScores();
	}
	// generates another random letter during the round and updates the display
	computerRandomLetter();
	console.log(computerGuess);
	updateDisplay();
};
