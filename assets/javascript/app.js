// set up variables

var numToGuessEl = $("#number-to-guess");
var currentScoreEl = $("#current-score");
var crystalsEl = $("#crystals");
var messageEl = $("#message");
var winsEl = $("#wins");
var lossesEl = $("#losses");

var wins = 0,
  losses = 0,
  counter = 0,
  targetNumber = 0;

// start game


startGame();


// build functions

// generate random number

function getRandomNumber(val) {
  return Math.floor(Math.random() * val) + 1;
}

// start function
function startGame() {
  counter = 0;
  currentScoreEl.text(counter);

  // need to randomize!!!
  targetNumber = getRandomNumber(50);
  numToGuessEl.text(targetNumber);
  // clear out old crystals
  
  // create a for loop to create crystals for every numberOption.
  for (var i = 0; i < crystals.length; i++) {
    var imageCrystal = $("<img>");
    
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", crystals[i].img);
    imageCrystal.attr("data-crystalvalue", getRandomNumber(12));
    imageCrystal.on("click", crystalClick);
    crystalsEl.append(imageCrystal);
  }
}

function crystalClick() {
  messageEl.text("Click a crystal to play!");
  var crystalValue = $(this).attr("data-crystalvalue");
  crystalValue = parseInt(crystalValue);
  counter += crystalValue;
  currentScoreEl.text(counter);
  

  if (counter === targetNumber) {
    messageEl.text("You win!");
    wins++;
    winsEl.text(wins);

    startGame();
    
  } else if (counter >= targetNumber) {
    messageEl.text("You lose!!");
    losses++;
    lossesEl.text(losses);
    
    startGame();
  }
}
