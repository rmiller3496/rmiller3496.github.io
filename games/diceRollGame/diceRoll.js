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
    if (wager < 0){
        alert("Wager A Negative Number. Nice try");
        alert("Heres a 100 for your ingenuity");
        balance += 100;
        document.getElementById("balance").innerHTML = "<p id=\"balance\"> Current Balance: " + balance + "</p>";
    } else {
        if (wager > balance){
            alert("Wager Too High");
        } else {
            rollDice();
        }
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
    checkBalanceEmpty();
    if (firstRun === true){
        console.log("Running Set 1");
        var node = document.createTextNode("\nYour Guess: " + guess);
        document.getElementById("rollAndGuess").appendChild(node);
        document.getElementById("balance").innerHTML = "<p id=\"balance\"> Current Balance: " + balance + "</p>";
        drawDice();
        firstRun = false;
    } else if (firstRun === false){
        console.log("Running Set 2");
        document.getElementById("rollAndGuess").innerHTML = "<p id=\"rollAndGuess\"> \nYour Guess: " + guess + "</p>"
        document.getElementById("balance").innerHTML = "<p id=\"balance\"> Current Balance: " + balance + "</p>";
        drawDice();
    } else {
        alert("Error")
    }
}

function drawDice() {
    switch (roll){
        case 1:
            var imgNode = document.getElementById("diceImg");
            imgNode.setAttribute("src", "diceRollImages/dice1.jpg");
            break;
        case 2:
            var imgNode = document.getElementById("diceImg");
            imgNode.setAttribute("src", "diceRollImages/dice2.jpg");
            break;
        case 3:
            var imgNode = document.getElementById("diceImg");
            imgNode.setAttribute("src", "diceRollImages/dice3.jpg");
            break;
        case 4:
            var imgNode = document.getElementById("diceImg");
            imgNode.setAttribute("src", "diceRollImages/dice4.jpg");
            break;
        case 5:
            var imgNode = document.getElementById("diceImg");
            imgNode.setAttribute("src", "diceRollImages/dice5.jpg");
            break;
        case 6:
            var imgNode = document.getElementById("diceImg");
            imgNode.setAttribute("src", "diceRollImages/dice6.jpg");
            break;
        default:
            alert("Draw Dice Error");
            break;
    }
}

function checkBalanceEmpty(){
    if (balance <= 0){
        document.write("<h2> Game Over </h2>");
        document.write("<h3> Refresh to Play Again </h3>");
    }
}