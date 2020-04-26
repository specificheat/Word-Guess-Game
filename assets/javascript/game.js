var bands = ["timbertimbre", "neonindian", "wilco", "felakuti", "destroyer", "beak", "liars", "toroymoi", "grizzlybear", "deerhoof", "radiohead", "kauf", "holyghost", "warpaint", "kurtvile", "joydivision", "talkingheads", "lcdsoundsystem", "can", "prince"];

//Empty variables to store values later
var randomBand = "";
var lettersOfBand = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];


//Counter Variables
var wins = 0;
var losses = 0;
var guessesRemaining = 9;

function Game() {
    //computer generates random word from words array
    randomBand = bands[Math.floor(Math.random() * bands.length)];

    // split the individual word into separate arrays, and store in new array 
    lettersOfBand = randomBand.split("");

    //store length of word in blanks, for later use
    blanks = lettersOfBand.length;

    //creating a loop to generate "_" for each letter in array stored in blanks
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    //showing the "_" within HTML
   // window.onload = function(){
        //what();
        //function what(){
    document.getElementById("currentword").innerHTML = ` ${blanksAndCorrect.join(" ")}`;
        };
//}
    //console logging 
    console.log(randomBand);
    console.log(lettersOfBand)
    console.log(blanks)
    console.log(blanksAndCorrect)
//}
function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}
//If/Else, to see if letter selected matches random word
function checkLetters(letter) {
    var letterInBand = false;
    //if the generated randomword is equal to the letter entered... then variable is true
    for (var i = 0; i < blanks; i++) {
        if (randomBand[i] == letter) {
            letterInBand = true;
            
        }
    }
    //if letterInWord (false)
    if (letterInBand) {
        //check each letter to see if it matches word
        for (var i = 0; i < blanks; i++) {
            if (randomBand[i] == letter) {
                blanksAndCorrect[i] = letter;
                document.getElementById("currentword").innerHTML = blanksAndCorrect.join("");
            }

        }
    }
    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
    else {
        wrongGuess.push(letter);
        guessesRemaining --;
    }
   console.log(blanksAndCorrect);
}

function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    //if WON...then alert, play audio, display image and reset new round
    if (lettersOfBand.toString() == blanksAndCorrect.toString()) {
        document.getElementById("band").innerHTML = `${randomBand}`;
        wins++;
        reset()
        //display wins on screen
        document.getElementById("winstracker").innerHTML = `${wins}`;

        //if LOST...then alert and reset new round
    } else if (guessesRemaining === 0) {
        
        losses++;
        reset()
        //window.onload = function(){
            //what();
            //function what(){
        //document.getElementById("image").src = "./assets/images/try-again.png"
        document.getElementById("losstracker").innerHTML = `${losses}`;
            }
    }
    //display losses on screen && guesses remaining countdown
    document.getElementById("currentword").innerHTML = `${blanksAndCorrect.join(" ")}`;
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
//}

Game()

//check for keyup, and convert to lowercase then store in guesses
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    //check to see if guess entered matches value of random word
    checkLetters(guesses);
    //process wins/loss 
    complete();
    //store player guess in console for reference 
    console.log(guesses);

    //display/store incorrect letters on screen
    document.getElementById("playerguesses").innerHTML = `${wrongGuess.join(" ")}`;
}
//};
