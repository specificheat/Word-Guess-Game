var bands = ["timbertimbre", "neonindian", "wilco", "felakuti", "destroyer", "beak", "liars", "toroymoi", "grizzlybear", "deerhoof", "radiohead", "kauf", "holyghost", "warpaint", "kurtvile", "joydivision", "talkingheads", "lcdsoundsystem", "can", "prince"];


var randomBand = "";
var lettersOfBand = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];



var wins = 0;
var losses = 0;
var guessesRemaining = 9;

function Game() {
    
    randomBand = bands[Math.floor(Math.random() * bands.length)];

    
    lettersOfBand = randomBand.split("");

    
    blanks = lettersOfBand.length;

    
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    
    document.getElementById("currentword").innerHTML = ` ${blanksAndCorrect.join(" ")}`;
        };

    console.log(randomBand);
    console.log(lettersOfBand)
    console.log(blanks)
    console.log(blanksAndCorrect)

function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}

function checkLetters(letter) {
    var letterInBand = false;
    
    for (var i = 0; i < blanks; i++) {
        if (randomBand[i] == letter) {
            letterInBand = true;
            
        }
    }
   
    if (letterInBand) {
        
        for (var i = 0; i < blanks; i++) {
            if (randomBand[i] == letter) {
                blanksAndCorrect[i] = letter;
                document.getElementById("currentword").innerHTML = blanksAndCorrect.join("");
            }

        }
    }
    
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
   console.log(blanksAndCorrect);
}

function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    
    if (lettersOfBand.toString() == blanksAndCorrect.toString()) {
        document.getElementById("band").innerHTML = `${randomBand}`;
        wins++;
        reset()
        
        document.getElementById("winstracker").innerHTML = `${wins}`;

        
    } else if (guessesRemaining === 0) {
        document.getElementById("band").innerHTML = 'maybe try again, or take a nap';
        losses++;
        reset()
        
        
        document.getElementById("losstracker").innerHTML = `${losses}`;
            }
    }
    
    document.getElementById("currentword").innerHTML = `${blanksAndCorrect.join(" ")}`;
    document.getElementById("guessesremaining").innerHTML = `${guessesRemaining}`;


Game()


document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
   
    checkLetters(guesses);
   
    complete();
     
    console.log(guesses);

    
    document.getElementById("playerguesses").innerHTML = `${wrongGuess.join(" ")}`;
}

