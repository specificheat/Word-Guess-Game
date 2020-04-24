var Bands = ["Timber Timbre, Neon Indian, Wilco, fela Kuti, Destroyer, Beak, liars, Toro y Moi, Grizzly Bear, Deerhoof, Radiohead, Kauf, Holy Ghost, Warpaint, Kurt Vile, Joy Division, Talking heads, LCD Soundsystem,"];
$("#startButton").onKeyUp("click", function() {
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












