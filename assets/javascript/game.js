var bands = ["Timber Timbre", "Neon Indian", "Wilco", "fela Kuti", "Destroyer", "Beak", "liars", "Toro y Moi", "Grizzly Bear", "Deerhoof", "Radiohead", "Kauf", "Holy Ghost", "Warpaint", "Kurt Vile", "Joy Division", "Talking heads", "LCD Soundsystem", "CAN", "Prince"];

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
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");

    //console logging 
    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}
function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}
//If/Else, to see if letter selected matches random word
function checkLetters(letter) {
    var letterInWord = false;
    //if the generated randomword is equal to the letter entered... then variable is true
    for (var i = 0; i < blanks; i++) {
        if (randomBand[i] == letter) {
            letterInWord = true;
        }
    }
    //if letterInWord (false)
    if (letterInWord) {
        //check each letter to see if it matches word
        for (var i = 0; i < blanks; i++) {
            if (randomBand[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);
}

function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    //if WON...then alert, play audio, display image and reset new round
    if (lettersOfBand.toString() == blanksAndCorrect.toString()) {
        wins++;
        aud()
        reset()
        //display wins on screen
        document.getElementById("winstracker").innerHTML = " " + wins;

        //if LOST...then alert and reset new round
    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "./assets/images/try-again.png"
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    //display losses on screen && guesses remaining countdown
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}

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
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}































































































//$("#startButton").onKeyUp("click", function() {
    console.log("START BUTTON CLICKED")
    document.onkeyup = gameStart();
    var gameStart = function startGame() {

var band = bands[Math.floor(Math.random()*bands.length)];
console.log("The band is" + band);

var wordLength = band.length;
console.log("There are " + wordLength + " letters in the word")

var splitWordArray = band.split("")

var guessNumber = (wordLength + 10);
document.write("you have " + guessNumber + "guesses")
for(var i=0; i<wordLength; i++)
document.write(hangDiv);
document.write(splitWordArray[i]);
document.write(hangDiv.appendChild(splitWordArray));




    }
//function randomnumber();
   // var rand = Math.floor(Math.random()14);












