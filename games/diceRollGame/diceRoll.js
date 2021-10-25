var wager;
var guess = 1;
var balance = 200;
var roll;
var wonRound;

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
    alert("Roll: " + roll + "\nGuess: " + guess);
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
    } else if (bool === false){
        balance -= wager;
    } else {
        alert("Error")
    }
    alert(balance);
}