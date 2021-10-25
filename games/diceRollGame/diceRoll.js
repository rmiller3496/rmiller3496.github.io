var wager;
var guess = 1;
var balance = 200;
var roll;
var wonRound;
var firstRun = true;

function updateGuessNumber (){
    var guessGrab = document.getElementById('guessNumber');
	guess = guessGrab.options[guessGrab.selectedIndex].value;
}

function wagerChanged(){
    wager = document.getElementsByName("wagerAmount")[0].value;
}

function wagerAmountSet (){
    if (wager > balance){
        alert("Wager Too High");
    } else {
        rollDice();
    }
}

function rollDice () {
    roll = Math.round(Math.random() * (6 - 1) + 1)
    if (guess == roll){
        wonRound = true;
        balanceChange(wonRound);
    } else {
        wonRound = false;
        balanceChange(wonRound);
    }
}

function balanceChange(bool){
    if (bool === true){
        balance += (6 * wager)
        rewriteScreen();
    } else if (bool === false){
        balance -= wager;
        rewriteScreen();
    } else {
        alert("Error")
    }
}

function rewriteScreen () {
    if (firstRun === true){
        console.log("Running Set 1");
        var node = document.createTextNode("Roll: " + roll + "\nYour Guess: " + guess);
        document.getElementById("rollAndGuess").appendChild(node);
        document.getElementById("balance").innerHTML = "<p id=\"balance\"> Current Balance: " + balance + "</p>";
        firstRun = false;
    } else if (firstRun === false){
        console.log("Running Set 2")
        document.getElementById("rollAndGuess").innerHTML = "<p id=\"rollAndGuess\"> Roll: " + roll + "\nYour Guess: " + guess + "</p>"
        document.getElementById("balance").innerHTML = "<p id=\"balance\"> Current Balance: " + balance + "</p>";
    } else {
        alert("Error")
    }
}