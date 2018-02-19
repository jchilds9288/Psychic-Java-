var compChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var playerLetters= [];


var wins = 0;
var loss = 0;
var guessed = 9 ;

alert("Are you among the 1%? Test your psychic capabilities")

function setup(){
compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
console.log(compGuess);
guessed = 9;

} 

setup()

document.onkeyup = function(event) {
var userGuess = event.key;
playerLetters.push(userGuess);
document.getElementById("letters").innerHTML = "Letters Guessed: " + playerLetters;
console.log(userGuess);
console.log(wins);
console.log(loss);
console.log(guessed);


switch (true) {
    case userGuess !== compGuess:
        guessed--;
        document.getElementById("guess").innerHTML ="Guesses Remaining: " + guessed;
        break;
    case userGuess === compGuess:
        playerLetters = [];
        wins++;
        guessed = 9;
        document.getElementById("w").innerHTML ="Wins: " + wins;
        alert("OMFG! You are a Psychic! You Won!")
        alert("Keep typing to grow your Powers!")
        setup();
        break;
    
        
    };

switch (guessed) {
        case 0:
        loss++;
        playerLetters = [];
        setup();
        document.getElementById("l").innerHTML = 'Losses: ' + loss;
        guessed=9;
        alert("Focus your brain harder! You Lost!")
        alert("Try again mere mortal ")
        break;
        
    }

} 
