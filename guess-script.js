
const newGuess = document.querySelector("#new-guess");
const message = document.querySelector("#message");
const lowHigh = document.querySelector("#low-high");
const checkButton = document.querySelector("#check");
const restartButton = document.querySelector("#restart");
const root = document.querySelector(":root");

//  χειριστές συμβάντων

let previousGuesses = [];
let theGuess;
window.onload = newRandom();
newGuess.focus();
newGuess.addEventListener("keyup", checkKey);
checkButton.addEventListener("click", checkGuess);
restartButton.addEventListener("click", restart);
let total = 0;
restartButton.style.display = "none";

function newRandom(){

 theGuess = Math.floor(Math.random()*100+1);
 console.log(theGuess);
}

function checkKey(e){

console.log(e.code);
if (e.code === "Enter") {
    checkGuess();
 }
}

function checkGuess(){

let newValue = parseInt(newGuess.value);
console.log("newValue=", newValue);
newGuess.value= "";
processGuess(newValue);
}

function processGuess(newValue){
 
 if (total<10) {
 if (newValue>theGuess){
    message.innerHTML = "Λάθος, το ξεπέρασες";
    message.style.width = "100%";
    message.style.backgroundColor="crimson";
    previousGuesses += newValue;
    previousGuesses += " ";
    lowHigh.innerHTML = "Προηγούμενες προσπάθειες: " + previousGuesses;
 }
 else if (newValue<theGuess){
    message.innerHTML = "Λάθος, είσαι πιο χαμηλά";
    message.style.width = "100%";
    message.style.backgroundColor="crimson";
    previousGuesses += newValue;
    previousGuesses += " ";
    lowHigh.innerHTML = "Προηγούμενες προσπάθειες: " + previousGuesses;
 }
 else if (isNaN(newValue)){
    message.innerHTML = "Δώσε αριθμό!";
    message.style.width = "100%";
    message.style.backgroundColor="crimson";
    lowHigh.innerHTML = "Προηγούμενες προσπάθειες: " + previousGuesses;
 }
 else if (newValue=theGuess){
    message.innerHTML = "Μπράβο το βρήκες!";
    message.style.width = "100%";
    message.style.backgroundColor="rgb(0, 128, 32)";
    previousGuesses += newValue;
    previousGuesses += " ";
    lowHigh.innerHTML = "Προηγούμενες προσπάθειες: " + previousGuesses;
    newGuess.disabled = true;
    checkButton.style.display = "none";
    restartButton.style.display = "block";
 }
}
else {
    message.innerHTML = "Τέλος παιχνιδιού, έχασες!";
    message.style.width = "100%";
    message.style.backgroundColor="crimson";
    previousGuesses += newValue;
    previousGuesses += " ";
    lowHigh.innerHTML = "Προηγούμενες προσπάθειες: " + previousGuesses;
    newGuess.disabled = true;
    checkButton.style.display = "none";
    restartButton.style.display = "block";
}
total +=1;
console.log(total);
}

function restart(){

total = 0;
previousGuesses = [];
newRandom();
message.innerHTML = "";
lowHigh.innerHTML = "";
newGuess.disabled = false;
checkButton.style.display = "inline-block";
restartButton.style.display = "none";
}
