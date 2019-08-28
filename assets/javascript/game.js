console.log("hooked up");

//Create variables to store my values
var guessUser;

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var computerGuess;
var guessesSoFar = [];
var computerChoices = [
	"q",
	"e",
	"r",
	"t",
	"y",
	"u",
	"i",
	"o",
	"p",
	"a",
	"s",
	"d",
	"f",
	"g",
	"h",
	"j",
	"k",
	"l",
	"z",
	"x",
	"c",
	"v",
	"b",
	"n",
	"m",
	"w",
];
var displayText = "this is a test";

//Create function to display th results to page
function updateDisplay() {
	document.querySelector("#displayText").innerHTML = displayText;
	document.querySelector("#wins").innerHTML = wins;
	document.querySelector("#losses").innerHTML = losses;
	document.querySelector("#guessesLeft").innerHTML = guessesLeft;
	document.querySelector("#guessesSoFar").innerHTML = guessesSoFar;
}

updateDisplay();

//Create a function to get a random letter for the computer

function computerRandomLetter() {
	computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

computerRandomLetter();

console.log(computerGuess);

//Reset my scores
function resetScores() {
	guessesLeft = 9;
	guessesSoFar = [];
}

computerRandomLetter();
//create start onkey event function to grab userGuess

document.onkeyup = function(event) {
	userGuess = event.key;
	console.log(userGuess);

	updateDisplay();
};

// if my guess equals computer guess then increment wins++, and fire the program again
//if my guess doesn't equal computer guess 1. add my guess to the array 2. decrease guesses left by 1
// if guesses left equals 0 the display game over
//if guess equals computer guess the fire next round

//

//favTVshows.push(tvShow); pushes entries to an array
