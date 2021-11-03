// Global Variables
var numPlayers;
var roll1;
var roll2;
var currentTurn = 1;

// State for All Addresses
//[owned or not (if owned -> player name), monopoly or not, num houses/hotels or mortgaged]
const mediterraneanAveState = ["unowned", false, "none"];
const balticAveState = ["unowned", false, "none"];
const orientalAveState = ["unowned", false, "none"];
const vermontAveState = ["unowned", false, "none"];
const connecticutAveState = ["unowned", false, "none"];
const stCharlesPlaceState = ["unowned", false, "none"];
const statesAveState = ["unowned", false, "none"];
const virginiaAveState = ["unowned", false, "none"];
const stJamesPlaceState = ["unowned", false, "none"];
const tennesseeAveState = ["unowned", false, "none"];
const newYorkAveState = ["unowned", false, "none"];
const kentuckyAveState = ["unowned", false, "none"];
const indianaAveState = ["unowned", false, "none"];
const illinoisAveState = ["unowned", false, "none"];
const atlanticAveState = ["unowned", false, "none"];
const ventnorAveState = ["unowned", false, "none"];
const marvinGardensState = ["unowned", false, "none"];
const pacificAveState = ["unowned", false, "none"];
const northCarolinaAveState = ["unowned", false, "none"];
const pennsylvaniaAveState = ["unowned", false, "none"];
const parkPlaceState = ["unowned", false, "none"];
const boardwalkState = ["unowned", false, "none"];

// price data for all addresses
// [price, price per house, rent, 1 house, 2 houses, 3 houses, 4 houses, hotel, mortgage] 

const mediterraneanAvePrices = [60, 50, 2, 10, 30, 90, 160, 250, 30];
const balticAvePrices = [60, 50, 4, 20, 60, 180, 320, 450, 30];
const orientalAvePrices = [100, 50, 6, 30, 90, 270, 400, 550, 50];
const vermontAvePrices = [100, 50, 6, 30, 90, 270, 400, 550, 50];
const connecticutAvePrices = [120, 50, 8, 40, 100, 300, 450, 600, 60];
const stCharlesPlacePrices = [140, 100, 10, 50, 150, 450, 625, 750, 70];
const statesAvePrices = [140, 100, 10, 50, 150, 450, 625, 750, 70];
const virginiaAvePrices = [160, 100, 12, 60, 180, 500, 700, 900, 80];
const stJamesPlacePrices = [180, 100, 14, 70, 200, 550, 750, 950, 90];
const tennesseeAvePrices = [180, 100, 14, 70, 200, 550, 750, 950, 90];
const newYorkAvePrices = [200, 100, 16, 80, 220, 600, 800, 1000, 100];
const kentuckyAvePrices = [220, 150, 18, 90, 250, 700, 875, 1050, 110];
const indianaAvePrices = [220, 150, 18, 90, 250, 700, 875, 1050, 110];
const illinoisAvePrices = [240, 150, 20, 100, 300, 750, 925, 1100, 120];
const atlanticAvePrices = [260, 150, 22, 110, 330, 800, 975, 1150, 130];
const ventnorAvePrices = [260, 150, 22, 110, 330, 800, 975, 1150, 130];
const marvinGardensPrices = [280, 150, 24, 120, 360, 850, 1025, 1200, 140];
const pacificAvePrices = [300, 200, 26, 130, 390, 900, 1100, 1275, 150];
const northCarolinaAvePrices = [300, 200, 26, 130, 390, 900, 1100, 1275, 150];
const pennsylvaniaAvePrices = [320, 200, 28, 150, 450, 1000, 1200, 1400, 160];
const parkPlacePrices = [350, 200, 35, 175, 500, 1100, 1300, 1500, 175];
const boardwalkPrices = [400, 200, 50, 200, 600, 1400, 1700, 2000, 200];

// player data is stored as follows:
// [positionx, positiony, direction, money, rr owned, utilities owned]

const playerInfo1 = [1, 1, "left", 1500, "", ""];
const playerInfo2 = [1, 1, "left", 1500, "", ""];
const playerInfo3 = [1, 1, "left", 1500, "", ""];
const playerInfo4 = [1, 1, "left", 1500, "", ""];

function changeTurn () {
    switch(numPlayers){
        case 2:
            switch(currentTurn){
                case 1:
                    currentTurn = 2;
                    break;
                case 2:
                    currentTurn = 1;
                    break;
            }
            break;
        case 3:
            switch(currentTurn){
                case 1:
                    currentTurn = 2;
                    break;
                case 2:
                    currentTurn = 3;
                    break;
                case 3:
                    currentTurn = 1;
                    break;
            }
            break;
        case 4:
            switch(currentTurn){
                case 1:
                    currentTurn = 2;
                    break;
                case 2:
                    currentTurn = 3;
                    break;
                case 3:
                    currentTurn = 4;
                    break;
                case 4:
                    currentTurn = 1
                    break;
            }
            break;
    }   
    var turnChange = document.getElementById("turnIndicator");
    turnChange.innerHTML = "It is Player " + currentTurn + "\'s turn";
}

function initialize() {
    numPlayers = prompt("Enter A Number Between 2 and 4 for the number of players");
    if (numPlayers === null){
        alert("No Value Entered");
    } else {
        numPlayers = Number(numPlayers);
        if (isNaN(numPlayers)){
            alert("Non Number Entered");
        } else {
            if (numPlayers < 2 || numPlayers > 4){
                alert("Invalid Amount of Players Selected");
            } else {
                alert(numPlayers + " selected");
                createPlayerData();
            }
        }
    }
}

function createPlayerData() {
    // Create Data for Players 1 and 2
    createBasePlayerData();
    // Create Any Additional Data
    if (numPlayers > 2){
        var player3Title = document.createElement("p");
            player3Title.innerHTML = "Player 3";
            player3Title.setAttribute("id", "player3");
            player3Title.setAttribute("class", "players");
            document.body.appendChild(player3Title);
        var player3LocationText = document.createElement("p");
            player3LocationText.innerHTML = "   Location: Go";
            player3LocationText.setAttribute("class", "locations");
            player3LocationText.setAttribute("id", "location3");
            document.body.appendChild(player3LocationText);
        var player3CashText = document.createElement("p");
            player3CashText.innerHTML = "   Cash : 1500"
            player3CashText.setAttribute("class", "cash");
            player3CashText.setAttribute("id", "cash3");
            document.body.appendChild(player3CashText);
    }
    if (numPlayers === 4){  
        var player4Title = document.createElement("p");
            player4Title.innerHTML = "Player 4";
            player4Title.setAttribute("id", "player4");
            player4Title.setAttribute("class", "players");
            document.body.appendChild(player4Title);
        var player4LocationText = document.createElement("p");
            player4LocationText.innerHTML = "   Location: Go";
            player4LocationText.setAttribute("class", "locations");
            player4LocationText.setAttribute("id", "location4");
            document.body.appendChild(player4LocationText);
        var player4CashText = document.createElement("p");
            player4CashText.innerHTML = "   Cash : 1500"
            player4CashText.setAttribute("class", "cash");
            player4CashText.setAttribute("id", "cash4");
            document.body.appendChild(player4CashText);
    } 
}

function createBasePlayerData () {
    var player1Title = document.createElement("p");
        player1Title.innerHTML = "Player 1";
        player1Title.setAttribute("id", "Player 1");
        player1Title.setAttribute("class", "players");
        document.body.appendChild(player1Title);
    var player1LocationText = document.createElement("p");
        player1LocationText.innerHTML = "   Location: Go ";
        player1LocationText.setAttribute("class", "locations");
        player1LocationText.setAttribute("id", "location1");
        document.body.appendChild(player1LocationText);
    var player1CashText = document.createElement("p");
        player1CashText.innerHTML = "   Cash : 1500"
        player1CashText.setAttribute("class", "cash");
        player1CashText.setAttribute("id", "cash1");
        document.body.appendChild(player1CashText); 
    var player2Title = document.createElement("p");
        player2Title.innerHTML = "Player 2";
        player2Title.setAttribute("id", "player2");
        player2Title.setAttribute("class", "players");
        document.body.appendChild(player2Title);
    var player2LocationText = document.createElement("p");
        player2LocationText.innerHTML = "   Location: Go ";
        player2LocationText.setAttribute("class", "locations");
        player2LocationText.setAttribute("id", "location2");
        document.body.appendChild(player2LocationText);
    var player2CashText = document.createElement("p");
        player2CashText.innerHTML = "   Cash : 1500"
        player2CashText.setAttribute("class", "cash");
        player2CashText.setAttribute("id", "cash2");
        document.body.appendChild(player2CashText);
}

function rollDice () {
    roll1 = Math.floor(Math.random() * (6 - 1) + 1);
    roll2 = Math.floor(Math.random() * (6 - 1) + 1);
    drawDice();
    movePlayers();
}

function drawDice() {
    switch (roll1){
        case 1:
            var imgNode = document.getElementById("diceImg1");
            imgNode.setAttribute("src", "images/dice1.jpg");
            break;
        case 2:
            var imgNode = document.getElementById("diceImg1");
            imgNode.setAttribute("src", "images/dice2.jpg");
            break;
        case 3:
            var imgNode = document.getElementById("diceImg1");
            imgNode.setAttribute("src", "images/dice3.jpg");
            break;
        case 4:
            var imgNode = document.getElementById("diceImg1");
            imgNode.setAttribute("src", "images/dice4.jpg");
            break;
        case 5:
            var imgNode = document.getElementById("diceImg1");
            imgNode.setAttribute("src", "images/dice5.jpg");
            break;
        case 6:
            var imgNode = document.getElementById("diceImg1");
            imgNode.setAttribute("src", "images/dice6.jpg");
            break;
        default:
            alert("Draw Dice Error");
            break;
    }
    switch (roll2){
        case 1:
            var imgNode = document.getElementById("diceImg2");
            imgNode.setAttribute("src", "images/dice1.jpg");
            break;
        case 2:
            var imgNode = document.getElementById("diceImg2");
            imgNode.setAttribute("src", "images/dice2.jpg");
            break;
        case 3:
            var imgNode = document.getElementById("diceImg2");
            imgNode.setAttribute("src", "images/dice3.jpg");
            break;
        case 4:
            var imgNode = document.getElementById("diceImg2");
            imgNode.setAttribute("src", "images/dice4.jpg");
            break;
        case 5:
            var imgNode = document.getElementById("diceImg2");
            imgNode.setAttribute("src", "images/dice5.jpg");
            break;
        case 6:
            var imgNode = document.getElementById("diceImg2");
            imgNode.setAttribute("src", "images/dice6.jpg");
            break;
        default:
            alert("Draw Dice Error");
            break;
    }
}

function movePlayers() {
    var totalRoll = roll1 + roll2;
    switch(currentTurn){
        case 1:
            var locationX = playerInfo1[0];
            var locationY = playerInfo1[1];
            var change;
            var direction = playerInfo1[2];
            switch (direction){
                case "left":
                    locationX = locationX + totalRoll;
                    if (locationX > 11){
                        change = locationX - 11;
                        direction = "up";
                        locationX = 11;
                        locationY = 1 + change;
                    } 
                    playerInfo1[0] = locationX;
                    playerInfo1[1] = locationY;
                    playerInfo1[2] = direction;
                    break;
                case "up":
                    locationY = locationY + totalRoll;
                    if (locationY > 11){
                        change = locationY - 11;
                        direction = "right";
                        locationY = 11;
                        locationX = 11 - change;
                    } 
                    playerInfo1[0] = locationX;
                    playerInfo1[1] = locationY;
                    playerInfo1[2] = direction;
                    break;
                case "right":
                    locationX = locationX - totalRoll;
                    if (locationX < 1){
                        change = 1 - locationX;
                        direction = "down";
                        locationX = 1;
                        locationY = 11 - change;
                    } 
                    playerInfo1[0] = locationX;
                    playerInfo1[1] = locationY;
                    playerInfo1[2] = direction;
                    break;
                case "down":
                    locationY = locationY - totalRoll;
                    if (locationY < 1){
                        change = 1 - locationX;
                        direction = "left";
                        locationY = 1;
                        locationX = 1 + change;
                    } 
                    playerInfo1[0] = locationX;
                    playerInfo1[1] = locationY;
                    playerInfo1[2] = direction;
                    break;
            }
            var locationIdentifer = locationX + "," + locationY;
            var locationName = coordToLocationName(locationIdentifer);
            var locationUpdate = document.getElementById("location1");
            locationUpdate.innerHTML = "Location: " + locationName;
            break;
        case 2:
            var locationX = playerInfo2[0];
            var locationY = playerInfo2[1];
            var change;
            var direction = playerInfo2[2];
            switch (direction){
                case "left":
                    locationX = locationX + totalRoll;
                    if (locationX > 11){
                        change = locationX - 11;
                        direction = "up";
                        locationX = 11;
                        locationY = 1 + change;
                    } 
                    playerInfo2[0] = locationX;
                    playerInfo2[1] = locationY;
                    playerInfo2[2] = direction;
                    break;
                case "up":
                    locationY = locationY + totalRoll;
                    if (locationY > 11){
                        change = locationY - 11;
                        direction = "right";
                        locationY = 11;
                        locationX = 11 - change;
                    } 
                    playerInfo2[0] = locationX;
                    playerInfo2[1] = locationY;
                    playerInfo2[2] = direction;
                    break;
                case "right":
                    locationX = locationX - totalRoll;
                    if (locationX < 1){
                        change = 1 - locationX;
                        direction = "down";
                        locationX = 1;
                        locationY = 11 - change;
                    } 
                    playerInfo2[0] = locationX;
                    playerInfo2[1] = locationY;
                    playerInfo2[2] = direction;
                    break;
                case "down":
                    locationY = locationY - totalRoll;
                    if (locationY < 1){
                        change = 1 - locationX;
                        direction = "left";
                        locationY = 1;
                        locationX = 1 + change;
                    } 
                    playerInfo2[0] = locationX;
                    playerInfo2[1] = locationY;
                    playerInfo2[2] = direction;
                    break;
            }
            var locationIdentifer = locationX + "," + locationY;
            var locationName = coordToLocationName(locationIdentifer);
            var locationUpdate = document.getElementById("location2");
            locationUpdate.innerHTML = "Location: " + locationName;
            break;
        case 3:
            var locationX = playerInfo3[0];
            var locationY = playerInfo3[1];
            var change;
            var direction = playerInfo3[2];
            switch (direction){
                case "left":
                    locationX = locationX + totalRoll;
                    if (locationX > 11){
                        change = locationX - 11;
                        direction = "up";
                        locationX = 11;
                        locationY = 1 + change;
                    } 
                    playerInfo3[0] = locationX;
                    playerInfo3[1] = locationY;
                    playerInfo3[2] = direction;
                    break;
                case "up":
                    locationY = locationY + totalRoll;
                    if (locationY > 11){
                        change = locationY - 11;
                        direction = "right";
                        locationY = 11;
                        locationX = 11 - change;
                    } 
                    playerInfo3[0] = locationX;
                    playerInfo3[1] = locationY;
                    playerInfo3[2] = direction;
                    break;
                case "right":
                    locationX = locationX - totalRoll;
                    if (locationX < 1){
                        change = 1 - locationX;
                        direction = "down";
                        locationX = 1;
                        locationY = 11 - change;
                    } 
                    playerInfo3[0] = locationX;
                    playerInfo3[1] = locationY;
                    playerInfo3[2] = direction;
                    break;
                case "down":
                    locationY = locationY - totalRoll;
                    if (locationY < 1){
                        change = 1 - locationX;
                        direction = "left";
                        locationY = 1;
                        locationX = 1 + change;
                    } 
                    playerInfo3[0] = locationX;
                    playerInfo3[1] = locationY;
                    playerInfo3[2] = direction;
                    break;
            }
            var locationIdentifer = locationX + "," + locationY;
            var locationName = coordToLocationName(locationIdentifer);
            var locationUpdate = document.getElementById("location3");
            locationUpdate.innerHTML = "Location: " + locationName;
            break;
        case 4:
            var locationX = playerInfo4[0];
            var locationY = playerInfo4[1];
            var change;
            var direction = playerInfo4[2];
            switch (direction){
                case "left":
                    locationX = locationX + totalRoll;
                    if (locationX > 11){
                        change = locationX - 11;
                        direction = "up";
                        locationX = 11;
                        locationY = 1 + change;
                    } 
                    playerInfo4[0] = locationX;
                    playerInfo4[1] = locationY;
                    playerInfo4[2] = direction;
                    break;
                case "up":
                    locationY = locationY + totalRoll;
                    if (locationY > 11){
                        change = locationY - 11;
                        direction = "right";
                        locationY = 11;
                        locationX = 11 - change;
                    } 
                    playerInfo4[0] = locationX;
                    playerInfo4[1] = locationY;
                    playerInfo4[2] = direction;
                    break;
                case "right":
                    locationX = locationX - totalRoll;
                    if (locationX < 1){
                        change = 1 - locationX;
                        direction = "down";
                        locationX = 1;
                        locationY = 11 - change;
                    } 
                    playerInfo4[0] = locationX;
                    playerInfo4[1] = locationY;
                    playerInfo4[2] = direction;
                    break;
                case "down":
                    locationY = locationY - totalRoll;
                    if (locationY < 1){
                        change = 1 - locationX;
                        direction = "left";
                        locationY = 1;
                        locationX = 1 + change;
                    } 
                    playerInfo4[0] = locationX;
                    playerInfo4[1] = locationY;
                    playerInfo4[2] = direction;
                    break;
            }
            var locationIdentifer = locationX + "," + locationY;
            var locationName = coordToLocationName(locationIdentifer);
            var locationUpdate = document.getElementById("location4");
            locationUpdate.innerHTML = "Location: " + locationName;
            break;
    }
    // Check Location That The Player Arrived at And Take Action
    checkLocation(locationName);
}


function buyCommand(location){
    var intentToBuy = confirm(location + " is available! Press Ok to Continue, Press Cancel To Decline");
    if (intentToBuy === true){
    switch (location){
        case "Mediterranean Avenue":
            var confirmPurchase = confirm("The Price of " + location + " is: " + mediterraneanAvePrices[0]+ "\nPress Okay to Purchase, Cancel to Decline");
            if (confirmPurchase === true){
                switch(currentTurn){
                    case 1:
                        playerInfo1[3] = playerInfo1[3] - mediterraneanAvePrices[0];
                        mediterraneanAveState[0] = "player1";
                        alert(location + " purchased by Player 1");
                        //Check For Monopoly
                        if (mediterraneanAveState[0] === "player1" && balticAveState[0] === "player1"){
                            mediterraneanAveState[1] = true;
                            alert("Player 1 has a monopoly on the Browns");
                        }
                        break;
                    case 2:
                        playerInfo2[3] = playerInfo2[3] - mediterraneanAvePrices[0];
                        mediterraneanAveState[0] = "player2";
                        alert(location + " purchased by Player 2");
                        //Check For Monopoly
                        if (mediterraneanAveState[0] === "player2" && balticAveState[0] === "player2"){
                            mediterraneanAveState[1] = true;
                            alert("Player 2 has a monopoly on the Browns");
                        }
                        break;
                    case 3:
                        playerInfo3[3] = playerInfo3[3] - mediterraneanAvePrices[0];
                        mediterraneanAveState[0] = "player3";
                        alert(location + " purchased by Player 3");
                        //Check For Monopoly
                        if (mediterraneanAveState[0] === "player3" && balticAveState[0] === "player3"){
                            mediterraneanAveState[1] = true;
                            alert("Player 3 has a monopoly on the Browns");
                        }
                        break;
                    case 4:
                        playerInfo4[3] = playerInfo4[3] - mediterraneanAvePrices[0];
                        mediterraneanAveState[0] = "player4";
                        alert(location + " purchased by Player 4");
                        //Check For Monopoly
                        if (mediterraneanAveState[0] === "player4" && balticAveState[0] === "player4"){
                            mediterraneanAveState[1] = true;
                            alert("Player 4 has a monopoly on the Browns");
                        }
                        break;
                }
            }
            break;
        case "Baltic Avenue":
            var confirmPurchase = confirm("The Price of " + location + " is: " + balticAvePrices[0]+ "\nPress Okay to Purchase, Cancel to Decline");
            if (confirmPurchase === true){
                switch(currentTurn){
                    case 1:
                        playerInfo1[3] = playerInfo1[3] - balticAvePrices[0];
                        balticAveState[0] = "player1";
                        alert(location + " purchased by Player 1");
                        //Check For Monopoly
                        if (balticAveState[0] === "player1" && balticAveState[0] === "player1"){
                            balticAveState[1] = true;
                            alert("Player 1 has a monopoly on the Browns");
                        }
                        break;
                    case 2:
                        playerInfo2[3] = playerInfo2[3] - balticAvePrices[0];
                        balticAveState[0] = "player2";
                        alert(location + " purchased by Player 2");
                        //Check For Monopoly
                        if (balticAveState[0] === "player2" && balticAveState[0] === "player2"){
                            balticAveState[1] = true;
                            alert("Player 2 has a monopoly on the Browns");
                        }
                        break;
                    case 3:
                        playerInfo3[3] = playerInfo3[3] - balticAvePrices[0];
                        balticAveState[0] = "player3";
                        alert(location + " purchased by Player 3");
                        //Check For Monopoly
                        if (balticAveState[0] === "player3" && balticAveState[0] === "player3"){
                            balticAveState[1] = true;
                            alert("Player 3 has a monopoly on the Browns");
                        }
                        break;
                    case 4:
                        playerInfo4[3] = playerInfo4[3] - balticAvePrices[0];
                        balticAveState[0] = "player4";
                        alert(location + " purchased by Player 4");
                        //Check For Monopoly
                        if (balticAveState[0] === "player4" && balticAveState[0] === "player4"){
                            balticAveState[1] = true;
                            alert("Player 4 has a monopoly on the Browns");
                        }
                        break;
                }
            }
            break;
        case "Reading Railroad":
            break;
        case "Oriental Avenue":
            var confirmPurchase = confirm("The Price of " + location + " is: " + orientalAvePrices[0]+ "\nPress Okay to Purchase, Cancel to Decline");
            if (confirmPurchase === true){
                switch(currentTurn){
                    case 1:
                        playerInfo1[3] = playerInfo1[3] - orientalAvePrices[0];
                        orientalAveState[0] = "player1";
                        alert(location + " purchased by Player 1");
                        //Check For Monopoly
                        if (orientalAveState[0] === "player1" && balticAveState[0] === "player1"){
                            orientalAveState[1] = true;
                            alert("Player 1 has a monopoly on the Light Blues");
                        }
                        break;
                    case 2:
                        playerInfo2[3] = playerInfo2[3] - orientalAvePrices[0];
                        orientalAveState[0] = "player2";
                        alert(location + " purchased by Player 2");
                        //Check For Monopoly
                        if (orientalAveState[0] === "player2" && balticAveState[0] === "player2"){
                            orientalAveState[1] = true;
                            alert("Player 2 has a monopoly on the Light Blues");
                        }
                        break;
                    case 3:
                        playerInfo3[3] = playerInfo3[3] - orientalAvePrices[0];
                        orientalAveState[0] = "player3";
                        alert(location + " purchased by Player 3");
                        //Check For Monopoly
                        if (orientalAveState[0] === "player3" && balticAveState[0] === "player3"){
                            orientalAveState[1] = true;
                            alert("Player 3 has a monopoly on the Light Blues");
                        }
                        break;
                    case 4:
                        playerInfo4[3] = playerInfo4[3] - orientalAvePrices[0];
                        orientalAveState[0] = "player4";
                        alert(location + " purchased by Player 4");
                        //Check For Monopoly
                        if (orientalAveState[0] === "player4" && balticAveState[0] === "player4"){
                            orientalAveState[1] = true;
                            alert("Player 4 has a monopoly on the Light Blues");
                        }
                        break;
                }
            }
            break;
        case "Vermont Avenue":
            var confirmPurchase = confirm("The Price of " + location + " is: " + vermontAvePrices[0]+ "\nPress Okay to Purchase, Cancel to Decline");
            if (confirmPurchase === true){
                switch(currentTurn){
                    case 1:
                        playerInfo1[3] = playerInfo1[3] - vermontAvePrices[0];
                        vermontAveState[0] = "player1";
                        alert(location + " purchased by Player 1");
                        //Check For Monopoly
                        if (vermontAveState[0] === "player1" && balticAveState[0] === "player1"){
                            vermontAveState[1] = true;
                            alert("Player 1 has a monopoly on the Light Blues");
                        }
                        break;
                    case 2:
                        playerInfo2[3] = playerInfo2[3] - vermontAvePrices[0];
                        vermontAveState[0] = "player2";
                        alert(location + " purchased by Player 2");
                        //Check For Monopoly
                        if (vermontAveState[0] === "player2" && balticAveState[0] === "player2"){
                            vermontAveState[1] = true;
                            alert("Player 2 has a monopoly on the Light Blues");
                        }
                        break;
                    case 3:
                        playerInfo3[3] = playerInfo3[3] - vermontAvePrices[0];
                        vermontAveState[0] = "player3";
                        alert(location + " purchased by Player 3");
                        //Check For Monopoly
                        if (vermontAveState[0] === "player3" && balticAveState[0] === "player3"){
                            vermontAveState[1] = true;
                            alert("Player 3 has a monopoly on the Light Blues");
                        }
                        break;
                    case 4:
                        playerInfo4[3] = playerInfo4[3] - vermontAvePrices[0];
                        vermontAveState[0] = "player4";
                        alert(location + " purchased by Player 4");
                        //Check For Monopoly
                        if (vermontAveState[0] === "player4" && balticAveState[0] === "player4"){
                            vermontAveState[1] = true;
                            alert("Player 4 has a monopoly on the Light Blues");
                        }
                        break;
                }
            }
            break;
        case "Connecticut Avenue":
            var confirmPurchase = confirm("The Price of " + location + " is: " + connecticutAvePrices[0]+ "\nPress Okay to Purchase, Cancel to Decline");
            if (confirmPurchase === true){
                switch(currentTurn){
                    case 1:
                        playerInfo1[3] = playerInfo1[3] - connecticutAvePrices[0];
                        connecticutAveState[0] = "player1";
                        alert(location + " purchased by Player 1");
                        //Check For Monopoly
                        if (connecticutAveState[0] === "player1" && balticAveState[0] === "player1"){
                            connecticutAveState[1] = true;
                            alert("Player 1 has a monopoly on the Light Blues");
                        }
                        break;
                    case 2:
                        playerInfo2[3] = playerInfo2[3] - connecticutAvePrices[0];
                        connecticutAveState[0] = "player2";
                        alert(location + " purchased by Player 2");
                        //Check For Monopoly
                        if (connecticutAveState[0] === "player2" && balticAveState[0] === "player2"){
                            connecticutAveState[1] = true;
                            alert("Player 2 has a monopoly on the Light Blues");
                        }
                        break;
                    case 3:
                        playerInfo3[3] = playerInfo3[3] - connecticutAvePrices[0];
                        connecticutAveState[0] = "player3";
                        alert(location + " purchased by Player 3");
                        //Check For Monopoly
                        if (connecticutAveState[0] === "player3" && balticAveState[0] === "player3"){
                            connecticutAveState[1] = true;
                            alert("Player 3 has a monopoly on the Light Blues");
                        }
                        break;
                    case 4:
                        playerInfo4[3] = playerInfo4[3] - connecticutAvePrices[0];
                        connecticutAveState[0] = "player4";
                        alert(location + " purchased by Player 4");
                        //Check For Monopoly
                        if (connecticutAveState[0] === "player4" && balticAveState[0] === "player4"){
                            connecticutAveState[1] = true;
                            alert("Player 4 has a monopoly on the Light Blues");
                        }
                        break;
                }
            }
            break;
        case "St. Charles Place":
            var confirmPurchase = confirm("The Price of " + location + " is: " + stCharlesPlacePrices[0]+ "\nPress Okay to Purchase, Cancel to Decline");
            if (confirmPurchase === true){
                switch(currentTurn){
                    case 1:
                        playerInfo1[3] = playerInfo1[3] - stCharlesPlacePrices[0];
                        stCharlesPlaceState[0] = "player1";
                        alert(location + " purchased by Player 1");
                        //Check For Monopoly
                        if (stCharlesPlaceState[0] === "player1" && balticAveState[0] === "player1"){
                            stCharlesPlaceState[1] = true;
                            alert("Player 1 has a monopoly on the Purples");
                        }
                        break;
                    case 2:
                        playerInfo2[3] = playerInfo2[3] - stCharlesPlacePrices[0];
                        stCharlesPlaceState[0] = "player2";
                        alert(location + " purchased by Player 2");
                        //Check For Monopoly
                        if (stCharlesPlaceState[0] === "player2" && balticAveState[0] === "player2"){
                            stCharlesPlaceState[1] = true;
                            alert("Player 2 has a monopoly on the Purples");
                        }
                        break;
                    case 3:
                        playerInfo3[3] = playerInfo3[3] - stCharlesPlacePrices[0];
                        stCharlesPlaceState[0] = "player3";
                        alert(location + " purchased by Player 3");
                        //Check For Monopoly
                        if (stCharlesPlaceState[0] === "player3" && balticAveState[0] === "player3"){
                            stCharlesPlaceState[1] = true;
                            alert("Player 3 has a monopoly on the Purples");
                        }
                        break;
                    case 4:
                        playerInfo4[3] = playerInfo4[3] - stCharlesPlacePrices[0];
                        stCharlesPlaceState[0] = "player4";
                        alert(location + " purchased by Player 4");
                        //Check For Monopoly
                        if (stCharlesPlaceState[0] === "player4" && balticAveState[0] === "player4"){
                            stCharlesPlaceState[1] = true;
                            alert("Player 4 has a monopoly on the Purples");
                        }
                        break;
                }
            }
            break;
        case "States Avenue":
            var confirmPurchase = confirm("The Price of " + location + " is: " + statesAvenuePrices[0]+ "\nPress Okay to Purchase, Cancel to Decline");
            if (confirmPurchase === true){
                switch(currentTurn){
                    case 1:
                        playerInfo1[3] = playerInfo1[3] - statesAvenuePrices[0];
                        statesAvenueState[0] = "player1";
                        alert(location + " purchased by Player 1");
                        //Check For Monopoly
                        if (statesAvenueState[0] === "player1" && balticAveState[0] === "player1"){
                            statesAvenueState[1] = true;
                            alert("Player 1 has a monopoly on the Purples");
                        }
                        break;
                    case 2:
                        playerInfo2[3] = playerInfo2[3] - statesAvenuePrices[0];
                        statesAvenueState[0] = "player2";
                        alert(location + " purchased by Player 2");
                        //Check For Monopoly
                        if (statesAvenueState[0] === "player2" && balticAveState[0] === "player2"){
                            statesAvenueState[1] = true;
                            alert("Player 2 has a monopoly on the Purples");
                        }
                        break;
                    case 3:
                        playerInfo3[3] = playerInfo3[3] - statesAvenuePrices[0];
                        statesAvenueState[0] = "player3";
                        alert(location + " purchased by Player 3");
                        //Check For Monopoly
                        if (statesAvenueState[0] === "player3" && balticAveState[0] === "player3"){
                            statesAvenueState[1] = true;
                            alert("Player 3 has a monopoly on the Purples");
                        }
                        break;
                    case 4:
                        playerInfo4[3] = playerInfo4[3] - statesAvenuePrices[0];
                        statesAvenueState[0] = "player4";
                        alert(location + " purchased by Player 4");
                        //Check For Monopoly
                        if (statesAvenueState[0] === "player4" && balticAveState[0] === "player4"){
                            statesAvenueState[1] = true;
                            alert("Player 4 has a monopoly on the Purples");
                        }
                        break;
                }
            }
            break;
        case "Virginia Avenue":
            var confirmPurchase = confirm("The Price of " + location + " is: " + virginiaAvePrices[0]+ "\nPress Okay to Purchase, Cancel to Decline");
            if (confirmPurchase === true){
                switch(currentTurn){
                    case 1:
                        playerInfo1[3] = playerInfo1[3] - virginiaAvePrices[0];
                        virginiaAveState[0] = "player1";
                        alert(location + " purchased by Player 1");
                        //Check For Monopoly
                        if (virginiaAveState[0] === "player1" && balticAveState[0] === "player1"){
                            virginiaAveState[1] = true;
                            alert("Player 1 has a monopoly on the Purples");
                        }
                        break;
                    case 2:
                        playerInfo2[3] = playerInfo2[3] - virginiaAvePrices[0];
                        virginiaAveState[0] = "player2";
                        alert(location + " purchased by Player 2");
                        //Check For Monopoly
                        if (virginiaAveState[0] === "player2" && balticAveState[0] === "player2"){
                            virginiaAveState[1] = true;
                            alert("Player 2 has a monopoly on the Purples");
                        }
                        break;
                    case 3:
                        playerInfo3[3] = playerInfo3[3] - virginiaAvePrices[0];
                        virginiaAveState[0] = "player3";
                        alert(location + " purchased by Player 3");
                        //Check For Monopoly
                        if (virginiaAveState[0] === "player3" && balticAveState[0] === "player3"){
                            virginiaAveState[1] = true;
                            alert("Player 3 has a monopoly on the Purples");
                        }
                        break;
                    case 4:
                        playerInfo4[3] = playerInfo4[3] - virginiaAvePrices[0];
                        virginiaAveState[0] = "player4";
                        alert(location + " purchased by Player 4");
                        //Check For Monopoly
                        if (virginiaAveState[0] === "player4" && balticAveState[0] === "player4"){
                            virginiaAveState[1] = true;
                            alert("Player 4 has a monopoly on the Purples");
                        }
                        break;
                }
            }
            break;
        case "Pennsylvania Railroad":
            break;
        case "St. James Place":
            var confirmPurchase = confirm("The Price of " + location + " is: " + stJamesPlacePrices[0]+ "\nPress Okay to Purchase, Cancel to Decline");
            if (confirmPurchase === true){
                switch(currentTurn){
                    case 1:
                        playerInfo1[3] = playerInfo1[3] - stJamesPlacePrices[0];
                        stJamesPlaceState[0] = "player1";
                        alert(location + " purchased by Player 1");
                        //Check For Monopoly
                        if (stJamesPlaceState[0] === "player1" && balticAveState[0] === "player1"){
                            stJamesPlaceState[1] = true;
                            alert("Player 1 has a monopoly on the Oranges");
                        }
                        break;
                    case 2:
                        playerInfo2[3] = playerInfo2[3] - stJamesPlacePrices[0];
                        stJamesPlaceState[0] = "player2";
                        alert(location + " purchased by Player 2");
                        //Check For Monopoly
                        if (stJamesPlaceState[0] === "player2" && balticAveState[0] === "player2"){
                            stJamesPlaceState[1] = true;
                            alert("Player 2 has a monopoly on the Oranges");
                        }
                        break;
                    case 3:
                        playerInfo3[3] = playerInfo3[3] - stJamesPlacePrices[0];
                        stJamesPlaceState[0] = "player3";
                        alert(location + " purchased by Player 3");
                        //Check For Monopoly
                        if (stJamesPlaceState[0] === "player3" && balticAveState[0] === "player3"){
                            stJamesPlaceState[1] = true;
                            alert("Player 3 has a monopoly on the Oranges");
                        }
                        break;
                    case 4:
                        playerInfo4[3] = playerInfo4[3] - stJamesPlacePrices[0];
                        stJamesPlaceState[0] = "player4";
                        alert(location + " purchased by Player 4");
                        //Check For Monopoly
                        if (stJamesPlaceState[0] === "player4" && balticAveState[0] === "player4"){
                            stJamesPlaceState[1] = true;
                            alert("Player 4 has a monopoly on the Oranges");
                        }
                        break;
                }
            }
            break;
        case "Tennessee Avenue":
            var confirmPurchase = confirm("The Price of " + location + " is: " + tennesseeAvePrices[0]+ "\nPress Okay to Purchase, Cancel to Decline");
            if (confirmPurchase === true){
                switch(currentTurn){
                    case 1:
                        playerInfo1[3] = playerInfo1[3] - tennesseeAvePrices[0];
                        tennesseeAveState[0] = "player1";
                        alert(location + " purchased by Player 1");
                        //Check For Monopoly
                        if (tennesseeAveState[0] === "player1" && balticAveState[0] === "player1"){
                            tennesseeAveState[1] = true;
                            alert("Player 1 has a monopoly on the Oranges");
                        }
                        break;
                    case 2:
                        playerInfo2[3] = playerInfo2[3] - tennesseeAvePrices[0];
                        tennesseeAveState[0] = "player2";
                        alert(location + " purchased by Player 2");
                        //Check For Monopoly
                        if (tennesseeAveState[0] === "player2" && balticAveState[0] === "player2"){
                            tennesseeAveState[1] = true;
                            alert("Player 2 has a monopoly on the Oranges");
                        }
                        break;
                    case 3:
                        playerInfo3[3] = playerInfo3[3] - tennesseeAvePrices[0];
                        tennesseeAveState[0] = "player3";
                        alert(location + " purchased by Player 3");
                        //Check For Monopoly
                        if (tennesseeAveState[0] === "player3" && balticAveState[0] === "player3"){
                            tennesseeAveState[1] = true;
                            alert("Player 3 has a monopoly on the Oranges");
                        }
                        break;
                    case 4:
                        playerInfo4[3] = playerInfo4[3] - tennesseeAvePrices[0];
                        tennesseeAveState[0] = "player4";
                        alert(location + " purchased by Player 4");
                        //Check For Monopoly
                        if (tennesseeAveState[0] === "player4" && balticAveState[0] === "player4"){
                            tennesseeAveState[1] = true;
                            alert("Player 4 has a monopoly on the Oranges");
                        }
                        break;
                }
            }
            break;
        case "New York Avenue":
            var confirmPurchase = confirm("The Price of " + location + " is: " + newYorkAvePrices[0]+ "\nPress Okay to Purchase, Cancel to Decline");
            if (confirmPurchase === true){
                switch(currentTurn){
                    case 1:
                        playerInfo1[3] = playerInfo1[3] - newYorkAvePrices[0];
                        newYorkAveState[0] = "player1";
                        alert(location + " purchased by Player 1");
                        //Check For Monopoly
                        if (newYorkAveState[0] === "player1" && balticAveState[0] === "player1"){
                            newYorkAveState[1] = true;
                            alert("Player 1 has a monopoly on the Oranges");
                        }
                        break;
                    case 2:
                        playerInfo2[3] = playerInfo2[3] - newYorkAvePrices[0];
                        newYorkAveState[0] = "player2";
                        alert(location + " purchased by Player 2");
                        //Check For Monopoly
                        if (newYorkAveState[0] === "player2" && balticAveState[0] === "player2"){
                            newYorkAveState[1] = true;
                            alert("Player 2 has a monopoly on the Oranges");
                        }
                        break;
                    case 3:
                        playerInfo3[3] = playerInfo3[3] - newYorkAvePrices[0];
                        newYorkAveState[0] = "player3";
                        alert(location + " purchased by Player 3");
                        //Check For Monopoly
                        if (newYorkAveState[0] === "player3" && balticAveState[0] === "player3"){
                            newYorkAveState[1] = true;
                            alert("Player 3 has a monopoly on the Oranges");
                        }
                        break;
                    case 4:
                        playerInfo4[3] = playerInfo4[3] - newYorkAvePrices[0];
                        newYorkAveState[0] = "player4";
                        alert(location + " purchased by Player 4");
                        //Check For Monopoly
                        if (newYorkAveState[0] === "player4" && balticAveState[0] === "player4"){
                            newYorkAveState[1] = true;
                            alert("Player 4 has a monopoly on the Oranges");
                        }
                        break;
                }
            }
            break;
        case "Kentucky Avenue":
            var confirmPurchase = confirm("The Price of " + location + " is: " + kentuckyAvePrices[0]+ "\nPress Okay to Purchase, Cancel to Decline");
            if (confirmPurchase === true){
                switch(currentTurn){
                    case 1:
                        playerInfo1[3] = playerInfo1[3] - kentuckyAvePrices[0];
                        kentuckyAveState[0] = "player1";
                        alert(location + " purchased by Player 1");
                        //Check For Monopoly
                        if (kentuckyAveState[0] === "player1" && balticAveState[0] === "player1"){
                            kentuckyAveState[1] = true;
                            alert("Player 1 has a monopoly on the Reds");
                        }
                        break;
                    case 2:
                        playerInfo2[3] = playerInfo2[3] - kentuckyAvePrices[0];
                        kentuckyAveState[0] = "player2";
                        alert(location + " purchased by Player 2");
                        //Check For Monopoly
                        if (kentuckyAveState[0] === "player2" && balticAveState[0] === "player2"){
                            kentuckyAveState[1] = true;
                            alert("Player 2 has a monopoly on the Reds");
                        }
                        break;
                    case 3:
                        playerInfo3[3] = playerInfo3[3] - kentuckyAvePrices[0];
                        kentuckyAveState[0] = "player3";
                        alert(location + " purchased by Player 3");
                        //Check For Monopoly
                        if (kentuckyAveState[0] === "player3" && balticAveState[0] === "player3"){
                            kentuckyAveState[1] = true;
                            alert("Player 3 has a monopoly on the Reds");
                        }
                        break;
                    case 4:
                        playerInfo4[3] = playerInfo4[3] - kentuckyAvePrices[0];
                        kentuckyAveState[0] = "player4";
                        alert(location + " purchased by Player 4");
                        //Check For Monopoly
                        if (kentuckyAveState[0] === "player4" && balticAveState[0] === "player4"){
                            kentuckyAveState[1] = true;
                            alert("Player 4 has a monopoly on the Reds");
                        }
                        break;
                }
            }
            break;
        case "Indiana Avenue":
            var confirmPurchase = confirm("The Price of " + location + " is: " + indianaAvePrices[0]+ "\nPress Okay to Purchase, Cancel to Decline");
            if (confirmPurchase === true){
                switch(currentTurn){
                    case 1:
                        playerInfo1[3] = playerInfo1[3] - indianaAvePrices[0];
                        indianaAveState[0] = "player1";
                        alert(location + " purchased by Player 1");
                        //Check For Monopoly
                        if (indianaAveState[0] === "player1" && balticAveState[0] === "player1"){
                            indianaAveState[1] = true;
                            alert("Player 1 has a monopoly on the Reds");
                        }
                        break;
                    case 2:
                        playerInfo2[3] = playerInfo2[3] - indianaAvePrices[0];
                        indianaAveState[0] = "player2";
                        alert(location + " purchased by Player 2");
                        //Check For Monopoly
                        if (indianaAveState[0] === "player2" && balticAveState[0] === "player2"){
                            indianaAveState[1] = true;
                            alert("Player 2 has a monopoly on the Reds");
                        }
                        break;
                    case 3:
                        playerInfo3[3] = playerInfo3[3] - indianaAvePrices[0];
                        indianaAveState[0] = "player3";
                        alert(location + " purchased by Player 3");
                        //Check For Monopoly
                        if (indianaAveState[0] === "player3" && balticAveState[0] === "player3"){
                            indianaAveState[1] = true;
                            alert("Player 3 has a monopoly on the Reds");
                        }
                        break;
                    case 4:
                        playerInfo4[3] = playerInfo4[3] - indianaAvePrices[0];
                        indianaAveState[0] = "player4";
                        alert(location + " purchased by Player 4");
                        //Check For Monopoly
                        if (indianaAveState[0] === "player4" && balticAveState[0] === "player4"){
                            indianaAveState[1] = true;
                            alert("Player 4 has a monopoly on the Reds");
                        }
                        break;
                }
            }
            break;
        case "Illinois Avenue":
            var confirmPurchase = confirm("The Price of " + location + " is: " + illinoisAvePrices[0]+ "\nPress Okay to Purchase, Cancel to Decline");
            if (confirmPurchase === true){
                switch(currentTurn){
                    case 1:
                        playerInfo1[3] = playerInfo1[3] - illinoisAvePrices[0];
                        illinoisAveState[0] = "player1";
                        alert(location + " purchased by Player 1");
                        //Check For Monopoly
                        if (illinoisAveState[0] === "player1" && balticAveState[0] === "player1"){
                            illinoisAveState[1] = true;
                            alert("Player 1 has a monopoly on the Reds");
                        }
                        break;
                    case 2:
                        playerInfo2[3] = playerInfo2[3] - illinoisAvePrices[0];
                        illinoisAveState[0] = "player2";
                        alert(location + " purchased by Player 2");
                        //Check For Monopoly
                        if (illinoisAveState[0] === "player2" && balticAveState[0] === "player2"){
                            illinoisAveState[1] = true;
                            alert("Player 2 has a monopoly on the Reds");
                        }
                        break;
                    case 3:
                        playerInfo3[3] = playerInfo3[3] - illinoisAvePrices[0];
                        illinoisAveState[0] = "player3";
                        alert(location + " purchased by Player 3");
                        //Check For Monopoly
                        if (illinoisAveState[0] === "player3" && balticAveState[0] === "player3"){
                            illinoisAveState[1] = true;
                            alert("Player 3 has a monopoly on the Reds");
                        }
                        break;
                    case 4:
                        playerInfo4[3] = playerInfo4[3] - illinoisAvePrices[0];
                        illinoisAveState[0] = "player4";
                        alert(location + " purchased by Player 4");
                        //Check For Monopoly
                        if (illinoisAveState[0] === "player4" && balticAveState[0] === "player4"){
                            illinoisAveState[1] = true;
                            alert("Player 4 has a monopoly on the Reds");
                        }
                        break;
                }
            }
            break;
        case "B & O Railroad":
            break;
        case "Atlantic Avenue":
            var confirmPurchase = confirm("The Price of " + location + " is: " + atlanticAvePrices[0]+ "\nPress Okay to Purchase, Cancel to Decline");
            if (confirmPurchase === true){
                switch(currentTurn){
                    case 1:
                        playerInfo1[3] = playerInfo1[3] - atlanticAvePrices[0];
                        atlanticAveState[0] = "player1";
                        alert(location + " purchased by Player 1");
                        //Check For Monopoly
                        if (atlanticAveState[0] === "player1" && balticAveState[0] === "player1"){
                            atlanticAveState[1] = true;
                            alert("Player 1 has a monopoly on the Yellows");
                        }
                        break;
                    case 2:
                        playerInfo2[3] = playerInfo2[3] - atlanticAvePrices[0];
                        atlanticAveState[0] = "player2";
                        alert(location + " purchased by Player 2");
                        //Check For Monopoly
                        if (atlanticAveState[0] === "player2" && balticAveState[0] === "player2"){
                            atlanticAveState[1] = true;
                            alert("Player 2 has a monopoly on the Yellows");
                        }
                        break;
                    case 3:
                        playerInfo3[3] = playerInfo3[3] - atlanticAvePrices[0];
                        atlanticAveState[0] = "player3";
                        alert(location + " purchased by Player 3");
                        //Check For Monopoly
                        if (atlanticAveState[0] === "player3" && balticAveState[0] === "player3"){
                            atlanticAveState[1] = true;
                            alert("Player 3 has a monopoly on the Yellows");
                        }
                        break;
                    case 4:
                        playerInfo4[3] = playerInfo4[3] - atlanticAvePrices[0];
                        atlanticAveState[0] = "player4";
                        alert(location + " purchased by Player 4");
                        //Check For Monopoly
                        if (atlanticAveState[0] === "player4" && balticAveState[0] === "player4"){
                            atlanticAveState[1] = true;
                            alert("Player 4 has a monopoly on the Yellows");
                        }
                        break;
                }
            }
            break;
        case "Ventnor Avenue":
            var confirmPurchase = confirm("The Price of " + location + " is: " + ventnorAvePrices[0]+ "\nPress Okay to Purchase, Cancel to Decline");
            if (confirmPurchase === true){
                switch(currentTurn){
                    case 1:
                        playerInfo1[3] = playerInfo1[3] - ventnorAvePrices[0];
                        ventnorAveState[0] = "player1";
                        alert(location + " purchased by Player 1");
                        //Check For Monopoly
                        if (ventnorAveState[0] === "player1" && balticAveState[0] === "player1"){
                            ventnorAveState[1] = true;
                            alert("Player 1 has a monopoly on the Yellows");
                        }
                        break;
                    case 2:
                        playerInfo2[3] = playerInfo2[3] - ventnorAvePrices[0];
                        ventnorAveState[0] = "player2";
                        alert(location + " purchased by Player 2");
                        //Check For Monopoly
                        if (ventnorAveState[0] === "player2" && balticAveState[0] === "player2"){
                            ventnorAveState[1] = true;
                            alert("Player 2 has a monopoly on the Yellows");
                        }
                        break;
                    case 3:
                        playerInfo3[3] = playerInfo3[3] - ventnorAvePrices[0];
                        ventnorAveState[0] = "player3";
                        alert(location + " purchased by Player 3");
                        //Check For Monopoly
                        if (ventnorAveState[0] === "player3" && balticAveState[0] === "player3"){
                            ventnorAveState[1] = true;
                            alert("Player 3 has a monopoly on the Yellows");
                        }
                        break;
                    case 4:
                        playerInfo4[3] = playerInfo4[3] - ventnorAvePrices[0];
                        ventnorAveState[0] = "player4";
                        alert(location + " purchased by Player 4");
                        //Check For Monopoly
                        if (ventnorAveState[0] === "player4" && balticAveState[0] === "player4"){
                            ventnorAveState[1] = true;
                            alert("Player 4 has a monopoly on the Yellows");
                        }
                        break;
                }
            }
            break;
        case "Water Works":
            break;
        case "Marvin Gardens":
            var confirmPurchase = confirm("The Price of " + location + " is: " + marvinGardensPrices[0]+ "\nPress Okay to Purchase, Cancel to Decline");
            if (confirmPurchase === true){
                switch(currentTurn){
                    case 1:
                        playerInfo1[3] = playerInfo1[3] - marvinGardensPrices[0];
                        marvinGardensState[0] = "player1";
                        alert(location + " purchased by Player 1");
                        //Check For Monopoly
                        if (marvinGardensState[0] === "player1" && balticAveState[0] === "player1"){
                            marvinGardensState[1] = true;
                            alert("Player 1 has a monopoly on the Yellows");
                        }
                        break;
                    case 2:
                        playerInfo2[3] = playerInfo2[3] - marvinGardensPrices[0];
                        marvinGardensState[0] = "player2";
                        alert(location + " purchased by Player 2");
                        //Check For Monopoly
                        if (marvinGardensState[0] === "player2" && balticAveState[0] === "player2"){
                            marvinGardensState[1] = true;
                            alert("Player 2 has a monopoly on the Yellows");
                        }
                        break;
                    case 3:
                        playerInfo3[3] = playerInfo3[3] - marvinGardensPrices[0];
                        marvinGardensState[0] = "player3";
                        alert(location + " purchased by Player 3");
                        //Check For Monopoly
                        if (marvinGardensState[0] === "player3" && balticAveState[0] === "player3"){
                            marvinGardensState[1] = true;
                            alert("Player 3 has a monopoly on the Yellows");
                        }
                        break;
                    case 4:
                        playerInfo4[3] = playerInfo4[3] - marvinGardensPrices[0];
                        marvinGardensState[0] = "player4";
                        alert(location + " purchased by Player 4");
                        //Check For Monopoly
                        if (marvinGardensState[0] === "player4" && balticAveState[0] === "player4"){
                            marvinGardensState[1] = true;
                            alert("Player 4 has a monopoly on the Yellows");
                        }
                        break;
                }
            }
            break;
        case "Pacific Avenue":
            var confirmPurchase = confirm("The Price of " + location + " is: " + pacificAvePrices[0]+ "\nPress Okay to Purchase, Cancel to Decline");
            if (confirmPurchase === true){
                switch(currentTurn){
                    case 1:
                        playerInfo1[3] = playerInfo1[3] - pacificAvePrices[0];
                        pacificAveState[0] = "player1";
                        alert(location + " purchased by Player 1");
                        //Check For Monopoly
                        if (pacificAveState[0] === "player1" && balticAveState[0] === "player1"){
                            pacificAveState[1] = true;
                            alert("Player 1 has a monopoly on the Greens");
                        }
                        break;
                    case 2:
                        playerInfo2[3] = playerInfo2[3] - pacificAvePrices[0];
                        pacificAveState[0] = "player2";
                        alert(location + " purchased by Player 2");
                        //Check For Monopoly
                        if (pacificAveState[0] === "player2" && balticAveState[0] === "player2"){
                            pacificAveState[1] = true;
                            alert("Player 2 has a monopoly on the Greens");
                        }
                        break;
                    case 3:
                        playerInfo3[3] = playerInfo3[3] - pacificAvePrices[0];
                        pacificAveState[0] = "player3";
                        alert(location + " purchased by Player 3");
                        //Check For Monopoly
                        if (pacificAveState[0] === "player3" && balticAveState[0] === "player3"){
                            pacificAveState[1] = true;
                            alert("Player 3 has a monopoly on the Greens");
                        }
                        break;
                    case 4:
                        playerInfo4[3] = playerInfo4[3] - pacificAvePrices[0];
                        pacificAveState[0] = "player4";
                        alert(location + " purchased by Player 4");
                        //Check For Monopoly
                        if (pacificAveState[0] === "player4" && balticAveState[0] === "player4"){
                            pacificAveState[1] = true;
                            alert("Player 4 has a monopoly on the Greens");
                        }
                        break;
                }
            }
            break;
        case "North Carolina Avenue":
            var confirmPurchase = confirm("The Price of " + location + " is: " + northCarolinaAvePrices[0]+ "\nPress Okay to Purchase, Cancel to Decline");
            if (confirmPurchase === true){
                switch(currentTurn){
                    case 1:
                        playerInfo1[3] = playerInfo1[3] - northCarolinaAvePrices[0];
                        northCarolinaAveState[0] = "player1";
                        alert(location + " purchased by Player 1");
                        //Check For Monopoly
                        if (northCarolinaAveState[0] === "player1" && balticAveState[0] === "player1"){
                            northCarolinaAveState[1] = true;
                            alert("Player 1 has a monopoly on the Greens");
                        }
                        break;
                    case 2:
                        playerInfo2[3] = playerInfo2[3] - northCarolinaAvePrices[0];
                        northCarolinaAveState[0] = "player2";
                        alert(location + " purchased by Player 2");
                        //Check For Monopoly
                        if (northCarolinaAveState[0] === "player2" && balticAveState[0] === "player2"){
                            northCarolinaAveState[1] = true;
                            alert("Player 2 has a monopoly on the Greens");
                        }
                        break;
                    case 3:
                        playerInfo3[3] = playerInfo3[3] - northCarolinaAvePrices[0];
                        northCarolinaAveState[0] = "player3";
                        alert(location + " purchased by Player 3");
                        //Check For Monopoly
                        if (northCarolinaAveState[0] === "player3" && balticAveState[0] === "player3"){
                            northCarolinaAveState[1] = true;
                            alert("Player 3 has a monopoly on the Greens");
                        }
                        break;
                    case 4:
                        playerInfo4[3] = playerInfo4[3] - northCarolinaAvePrices[0];
                        northCarolinaAveState[0] = "player4";
                        alert(location + " purchased by Player 4");
                        //Check For Monopoly
                        if (northCarolinaAveState[0] === "player4" && balticAveState[0] === "player4"){
                            northCarolinaAveState[1] = true;
                            alert("Player 4 has a monopoly on the Greens");
                        }
                        break;
                }
            }
            break;
        case "Pennsylvania Avenue":
            var confirmPurchase = confirm("The Price of " + location + " is: " + pennsylvaniaAvePrices[0]+ "\nPress Okay to Purchase, Cancel to Decline");
            if (confirmPurchase === true){
                switch(currentTurn){
                    case 1:
                        playerInfo1[3] = playerInfo1[3] - pennsylvaniaAvePrices[0];
                        pennsylvaniaAveState[0] = "player1";
                        alert(location + " purchased by Player 1");
                        //Check For Monopoly
                        if (pennsylvaniaAveState[0] === "player1" && balticAveState[0] === "player1"){
                            pennsylvaniaAveState[1] = true;
                            alert("Player 1 has a monopoly on the Greens");
                        }
                        break;
                    case 2:
                        playerInfo2[3] = playerInfo2[3] - pennsylvaniaAvePrices[0];
                        pennsylvaniaAveState[0] = "player2";
                        alert(location + " purchased by Player 2");
                        //Check For Monopoly
                        if (pennsylvaniaAveState[0] === "player2" && balticAveState[0] === "player2"){
                            pennsylvaniaAveState[1] = true;
                            alert("Player 2 has a monopoly on the Greens");
                        }
                        break;
                    case 3:
                        playerInfo3[3] = playerInfo3[3] - pennsylvaniaAvePrices[0];
                        pennsylvaniaAveState[0] = "player3";
                        alert(location + " purchased by Player 3");
                        //Check For Monopoly
                        if (pennsylvaniaAveState[0] === "player3" && balticAveState[0] === "player3"){
                            pennsylvaniaAveState[1] = true;
                            alert("Player 3 has a monopoly on the Greens");
                        }
                        break;
                    case 4:
                        playerInfo4[3] = playerInfo4[3] - pennsylvaniaAvePrices[0];
                        pennsylvaniaAveState[0] = "player4";
                        alert(location + " purchased by Player 4");
                        //Check For Monopoly
                        if (pennsylvaniaAveState[0] === "player4" && balticAveState[0] === "player4"){
                            pennsylvaniaAveState[1] = true;
                            alert("Player 4 has a monopoly on the Greens");
                        }
                        break;
                }
            }
            break;
        case "Short Line":
            break;
        case "Park Place":
            var confirmPurchase = confirm("The Price of " + location + " is: " + parkPlacePrices[0]+ "\nPress Okay to Purchase, Cancel to Decline");
            if (confirmPurchase === true){
                switch(currentTurn){
                    case 1:
                        playerInfo1[3] = playerInfo1[3] - parkPlacePrices[0];
                        parkPlaceState[0] = "player1";
                        alert(location + " purchased by Player 1");
                        //Check For Monopoly
                        if (parkPlaceState[0] === "player1" && balticAveState[0] === "player1"){
                            parkPlaceState[1] = true;
                            alert("Player 1 has a monopoly on the Dark Blues");
                        }
                        break;
                    case 2:
                        playerInfo2[3] = playerInfo2[3] - parkPlacePrices[0];
                        parkPlaceState[0] = "player2";
                        alert(location + " purchased by Player 2");
                        //Check For Monopoly
                        if (parkPlaceState[0] === "player2" && balticAveState[0] === "player2"){
                            parkPlaceState[1] = true;
                            alert("Player 2 has a monopoly on the Dark Blues");
                        }
                        break;
                    case 3:
                        playerInfo3[3] = playerInfo3[3] - parkPlacePrices[0];
                        parkPlaceState[0] = "player3";
                        alert(location + " purchased by Player 3");
                        //Check For Monopoly
                        if (parkPlaceState[0] === "player3" && balticAveState[0] === "player3"){
                            parkPlaceState[1] = true;
                            alert("Player 3 has a monopoly on the Dark Blues");
                        }
                        break;
                    case 4:
                        playerInfo4[3] = playerInfo4[3] - parkPlacePrices[0];
                        parkPlaceState[0] = "player4";
                        alert(location + " purchased by Player 4");
                        //Check For Monopoly
                        if (parkPlaceState[0] === "player4" && balticAveState[0] === "player4"){
                            parkPlaceState[1] = true;
                            alert("Player 4 has a monopoly on the Dark Blues");
                        }
                        break;
                }
            }
            break;
        case "Boardwalk":
            var confirmPurchase = confirm("The Price of " + location + " is: " + boardwalkPrices[0]+ "\nPress Okay to Purchase, Cancel to Decline");
            if (confirmPurchase === true){
                switch(currentTurn){
                    case 1:
                        playerInfo1[3] = playerInfo1[3] - boardwalkPrices[0];
                        boardwalkState[0] = "player1";
                        alert(location + " purchased by Player 1");
                        //Check For Monopoly
                        if (boardwalkState[0] === "player1" && balticAveState[0] === "player1"){
                            boardwalkState[1] = true;
                            alert("Player 1 has a monopoly on the Dark Blues");
                        }
                        break;
                    case 2:
                        playerInfo2[3] = playerInfo2[3] - boardwalkPrices[0];
                        boardwalkState[0] = "player2";
                        alert(location + " purchased by Player 2");
                        //Check For Monopoly
                        if (boardwalkState[0] === "player2" && balticAveState[0] === "player2"){
                            boardwalkState[1] = true;
                            alert("Player 2 has a monopoly on the Dark Blues");
                        }
                        break;
                    case 3:
                        playerInfo3[3] = playerInfo3[3] - boardwalkPrices[0];
                        boardwalkState[0] = "player3";
                        alert(location + " purchased by Player 3");
                        //Check For Monopoly
                        if (boardwalkState[0] === "player3" && balticAveState[0] === "player3"){
                            boardwalkState[1] = true;
                            alert("Player 3 has a monopoly on the Dark Blues");
                        }
                        break;
                    case 4:
                        playerInfo4[3] = playerInfo4[3] - boardwalkPrices[0];
                        boardwalkState[0] = "player4";
                        alert(location + " purchased by Player 4");
                        //Check For Monopoly
                        if (boardwalkState[0] === "player4" && balticAveState[0] === "player4"){
                            boardwalkState[1] = true;
                            alert("Player 4 has a monopoly on the Dark Blues");
                        }
                        break;
                }
            }
            break;
        default:
            alert("switch statement problem");
            break;
        }
    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
    }
}

function coordToLocationName (coord) {
    var name;
    switch (coord){
        case "1,1":
            name =  "Go";
            break;
        case "2,1":
            name =  "Mediterranean Avenue";
            break;
        case "3,1":
            name =  "Community Chest Browns";
            break;
        case "4,1":
            name =  "Baltic Avenue";
            break;
        case "5,1":
            name =  "Income Tax";
            break;
        case "6,1":
            name =  "Reading Railroad";
            break;
        case "7,1":
            name =  "Oriental Avenue";
            break;
        case "8,1":
            name =  "Chance Light Blues";
            break;
        case "9,1":
            name =  "Vermont Avenue";
            break;
        case "10,1":
            name =  "Connecticut Avenue";
            break;
        case "11,1":
            name =  "Just Visiting";
            break;
        case "11,2":
            name =  "St. Charles Place";
            break;
        case "11,3":
            name =  "Electric Company";
            break;
        case "11,4":
            name =  "States Avenue";
            break;
        case "11,5":
            name =  "Virginia Avenue";
            break;
        case "11,6":
            name =  "Pennsylvania Railroad";
            break;
        case "11,7":
            name =  "St. James Place";
            break;
        case "11,8":
            name =  "Community Chest Oranges";
            break;
        case "11,9":
            name =  "Tennessee Avenue";
            break;
        case "11,10":
            name =  "New York Avenue";
            break;
        case "11,11":
            name =  "Free Parking";
            break;
        case "10,11":
            name =  "Kentucky Avenue";
            break;
        case "9,11":
            name =  "Chance Reds";
            break;
        case "8,11":
            name =  "Indiana Avenue";
            break;
        case "7,11":
            name =  "Illinois Avenue";
            break;
        case "6,11":
            name =  "B & O Railroad";
            break;
        case "5,11":
            name =  "Atlantic Avenue";
            break;
        case "4,11":
            name =  "Ventnor Avenue";
            break;
        case "3,11":
            name =  "Water Works";
            break;
        case "2,11":
            name =  "Marvin Gardens";
            break;
        case "1,11":
            name =  "Go To Jail";
            break;
        case "1,10":
            name =  "Pacific Avenue";
            break;
        case "1,9":
            name =  "North Carolina Avenue";
            break;
        case "1,8":
            name =  "Community Chest Greens";
            break;
        case "1,7":
            name =  "Pennsylvania Avenue";
            break;
        case "1,6":
            name =  "Short Line";
            break;
        case "1,5":
            name =  "Chance Blues";
            break;
        case "1,4":
            name =  "Park Place";
            break;
        case "1,3":
            name =  "Luxury Tax";
            break;
        case "1,2":
            name =  "Boardwalk";
            break;
        default:
            alert("switch statement problem");
            break;
    }
    return name;
}





// Check Location!!!!!!!!!!!


function checkLocation(location){
    switch (location){
        case "Go":
            switch (currentTurn){
                case 1:
                    playerInfo1[3] = playerInfo1[3] + 200;
                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                    break;
                case 2:
                    playerInfo2[3] = playerInfo2[3] + 200;
                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                    break;
                case 3:
                    playerInfo3[3] = playerInfo3[3] + 200;
                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                    break;
                case 4:
                    playerInfo4[3] = playerInfo4[3] + 200;
                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                    break;
            }
            break;
        case "Mediterranean Avenue":
            switch(mediterraneanAveState[0]) {
                case "unowned":
                    //prompt buy command
                    buyCommand(location);
                    break;
                // player 1 owns location
                case "player1":
                    switch(currentTurn){
                        case 2:
                            switch(mediterraneanAveState[2]){
                                case "none":
                                    if (mediterraneanAveState[1] === true){
                                        var rentToPay = mediterraneanAvePrices[2] * 2;
                                    } else {
                                        var rentToPay = mediterraneanAvePrices[2];
                                    }
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo1[3] = playerInfo1[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 1 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    break;
                                case 1:
                                    var rentToPay = mediterraneanAvePrices[3];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo1[3] = playerInfo1[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 1 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    break;
                                case 2:
                                    var rentToPay = mediterraneanAvePrices[4];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo1[3] = playerInfo1[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 1 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    break;
                                case 3:
                                    var rentToPay = mediterraneanAvePrices[5];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo1[3] = playerInfo1[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 1 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    break;
                                case 4:
                                    var rentToPay = mediterraneanAvePrices[6];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo1[3] = playerInfo1[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 1 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    break;
                                case "hotel":
                                    var rentToPay = mediterraneanAvePrices[7];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo1[3] = playerInfo1[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 1 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    break;
                                case "mortgaged":
                                    break;
                            }
                            break;
                        case 3:
                            switch(mediterraneanAveState[2]){
                                case "none":
                                    if (mediterraneanAveState[1] === true){
                                        var rentToPay = mediterraneanAvePrices[2] * 2;
                                    } else {
                                        var rentToPay = mediterraneanAvePrices[2];
                                    }
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 1:
                                    var rentToPay = mediterraneanAvePrices[3];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 2:
                                    var rentToPay = mediterraneanAvePrices[4];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 3:
                                    var rentToPay = mediterraneanAvePrices[5];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 4:
                                    var rentToPay = mediterraneanAvePrices[6];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case "hotel":
                                    var rentToPay = mediterraneanAvePrices[7];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case "mortgaged":
                                    break;
                            }
                            break;
                        case 4:
                            switch(mediterraneanAveState[2]){
                                case "none":
                                    if (mediterraneanAveState[1] === true){
                                        var rentToPay = mediterraneanAvePrices[2] * 2;
                                    } else {
                                        var rentToPay = mediterraneanAvePrices[2];
                                    }
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 1:
                                    var rentToPay = mediterraneanAvePrices[3];
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 2:
                                    var rentToPay = mediterraneanAvePrices[4];
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 3:
                                    var rentToPay = mediterraneanAvePrices[5];
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 4:
                                    var rentToPay = mediterraneanAvePrices[6];
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case "hotel":
                                    var rentToPay = mediterraneanAvePrices[7];
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case "mortgaged":
                                    break;
                            }
                            break;
                    }
                    break;
                //player 2 owns location
                case "player2":
                    switch(currentTurn){
                        case 1:
                            switch(mediterraneanAveState[2]){
                                case "none":
                                    if (mediterraneanAveState[1] === true){
                                        var rentToPay = mediterraneanAvePrices[2] * 2;
                                    } else {
                                        var rentToPay = mediterraneanAvePrices[2];
                                    }
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 1:
                                    var rentToPay = mediterraneanAvePrices[3];
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 2:
                                    var rentToPay = mediterraneanAvePrices[4];
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 3:
                                    var rentToPay = mediterraneanAvePrices[5];
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 4:
                                    var rentToPay = mediterraneanAvePrices[6];
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case "hotel":
                                    var rentToPay = mediterraneanAvePrices[7];
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case "mortgaged":
                                    break;
                            }
                            break;
                        case 2:
                            switch(mediterraneanAveState[2]){
                                case "none":
                                    if (mediterraneanAveState[1] === true){
                                        var rentToPay = mediterraneanAvePrices[2] * 2;
                                    } else {
                                        var rentToPay = mediterraneanAvePrices[2];
                                    }
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 1:
                                    var rentToPay = mediterraneanAvePrices[3];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 2:
                                    var rentToPay = mediterraneanAvePrices[4];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 3:
                                    var rentToPay = mediterraneanAvePrices[5];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 4:
                                    var rentToPay = mediterraneanAvePrices[6];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case "hotel":
                                    var rentToPay = mediterraneanAvePrices[7];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case "mortgaged":
                                    break;
                            }
                            break;
                        case 3:
                            switch(mediterraneanAveState[2]){
                                case "none":
                                    if (mediterraneanAveState[1] === true){
                                        var rentToPay = mediterraneanAvePrices[2] * 2;
                                    } else {
                                        var rentToPay = mediterraneanAvePrices[2];
                                    }
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 1:
                                    var rentToPay = mediterraneanAvePrices[3];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 2:
                                    var rentToPay = mediterraneanAvePrices[4];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 3:
                                    var rentToPay = mediterraneanAvePrices[5];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 4:
                                    var rentToPay = mediterraneanAvePrices[6];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case "hotel":
                                    var rentToPay = mediterraneanAvePrices[7];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case "mortgaged":
                                    break;
                            }
                            break;
                        case 4:
                            switch(mediterraneanAveState[2]){
                                case "none":
                                    if (mediterraneanAveState[1] === true){
                                        var rentToPay = mediterraneanAvePrices[2] * 2;
                                    } else {
                                        var rentToPay = mediterraneanAvePrices[2];
                                    }
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 1:
                                    var rentToPay = mediterraneanAvePrices[3];
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 2:
                                    var rentToPay = mediterraneanAvePrices[4];
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 3:
                                    var rentToPay = mediterraneanAvePrices[5];
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 4:
                                    var rentToPay = mediterraneanAvePrices[6];
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case "hotel":
                                    var rentToPay = mediterraneanAvePrices[7];
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case "mortgaged":
                                    break;
                            }
                            break;
                    }
                    break;
                //player 3 owns location
                case "player3":
                    switch(currentTurn){
                        case 1:
                            switch(mediterraneanAveState[2]){
                                case "none":
                                    if (mediterraneanAveState[1] === true){
                                        var rentToPay = mediterraneanAvePrices[2] * 2;
                                    } else {
                                        var rentToPay = mediterraneanAvePrices[2];
                                    }
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 1:
                                    var rentToPay = mediterraneanAvePrices[3];
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 2:
                                    var rentToPay = mediterraneanAvePrices[4];
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 3:
                                    var rentToPay = mediterraneanAvePrices[5];
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 4:
                                    var rentToPay = mediterraneanAvePrices[6];
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case "hotel":
                                    var rentToPay = mediterraneanAvePrices[7];
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case "mortgaged":
                                    break;
                            }
                            break;
                        case 2:
                            switch(mediterraneanAveState[2]){
                                case "none":
                                    if (mediterraneanAveState[1] === true){
                                        var rentToPay = mediterraneanAvePrices[2] * 2;
                                    } else {
                                        var rentToPay = mediterraneanAvePrices[2];
                                    }
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 1:
                                    var rentToPay = mediterraneanAvePrices[3];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 2:
                                    var rentToPay = mediterraneanAvePrices[4];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 3:
                                    var rentToPay = mediterraneanAvePrices[5];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 4:
                                    var rentToPay = mediterraneanAvePrices[6];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case "hotel":
                                    var rentToPay = mediterraneanAvePrices[7];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case "mortgaged":
                                    break;
                            }
                            break;
                        case 3:
                            switch(mediterraneanAveState[2]){
                                case "none":
                                    if (mediterraneanAveState[1] === true){
                                        var rentToPay = mediterraneanAvePrices[2] * 2;
                                    } else {
                                        var rentToPay = mediterraneanAvePrices[2];
                                    }
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 1:
                                    var rentToPay = mediterraneanAvePrices[3];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 2:
                                    var rentToPay = mediterraneanAvePrices[4];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 3:
                                    var rentToPay = mediterraneanAvePrices[5];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 4:
                                    var rentToPay = mediterraneanAvePrices[6];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case "hotel":
                                    var rentToPay = mediterraneanAvePrices[7];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case "mortgaged":
                                    break;
                            }
                            break;
                        case 4:
                            switch(mediterraneanAveState[2]){
                                case "none":
                                    if (mediterraneanAveState[1] === true){
                                        var rentToPay = mediterraneanAvePrices[2] * 2;
                                    } else {
                                        var rentToPay = mediterraneanAvePrices[2];
                                    }
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 1:
                                    var rentToPay = mediterraneanAvePrices[3];
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 2:
                                    var rentToPay = mediterraneanAvePrices[4];
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 3:
                                    var rentToPay = mediterraneanAvePrices[5];
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 4:
                                    var rentToPay = mediterraneanAvePrices[6];
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case "hotel":
                                    var rentToPay = mediterraneanAvePrices[7];
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case "mortgaged":
                                    break;
                            }
                            break;
                    }
                    break;

                // player4 owns location
                case "player4":
                    switch(currentTurn){
                        case 1:
                            switch(mediterraneanAveState[2]){
                                case "none":
                                    if (mediterraneanAveState[1] === true){
                                        var rentToPay = mediterraneanAvePrices[2] * 2;
                                    } else {
                                        var rentToPay = mediterraneanAvePrices[2];
                                    }
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case 1:
                                    var rentToPay = mediterraneanAvePrices[3];
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case 2:
                                    var rentToPay = mediterraneanAvePrices[4];
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case 3:
                                    var rentToPay = mediterraneanAvePrices[5];
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case 4:
                                    var rentToPay = mediterraneanAvePrices[6];
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case "hotel":
                                    var rentToPay = mediterraneanAvePrices[7];
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case "mortgaged":
                                    break;
                            }
                            break;
                        case 2:
                            switch(mediterraneanAveState[2]){
                                case "none":
                                    if (mediterraneanAveState[1] === true){
                                        var rentToPay = mediterraneanAvePrices[2] * 2;
                                    } else {
                                        var rentToPay = mediterraneanAvePrices[2];
                                    }
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case 1:
                                    var rentToPay = mediterraneanAvePrices[3];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case 2:
                                    var rentToPay = mediterraneanAvePrices[4];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case 3:
                                    var rentToPay = mediterraneanAvePrices[5];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case 4:
                                    var rentToPay = mediterraneanAvePrices[6];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case "hotel":
                                    var rentToPay = mediterraneanAvePrices[7];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case "mortgaged":
                                    break;
                            }
                            break;
                        case 3:
                            switch(mediterraneanAveState[2]){
                                case "none":
                                    if (mediterraneanAveState[1] === true){
                                        var rentToPay = mediterraneanAvePrices[2] * 2;
                                    } else {
                                        var rentToPay = mediterraneanAvePrices[2];
                                    }
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case 1:
                                    var rentToPay = mediterraneanAvePrices[3];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case 2:
                                    var rentToPay = mediterraneanAvePrices[4];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case 3:
                                    var rentToPay = mediterraneanAvePrices[5];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case 4:
                                    var rentToPay = mediterraneanAvePrices[6];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case "hotel":
                                    var rentToPay = mediterraneanAvePrices[7];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case "mortgaged":
                                    break;
                            }
                            break;
                    }
                    break;
            }
            break;
        case "Community Chest Browns":
            break;
        case "Baltic Avenue":
            switch(balticAveState[0]) {
                case "unowned":
                    //prompt buy command
                    buyCommand(location);
                    break;
                // player 1 owns location
                case "player1":
                    switch(currentTurn){
                        case 2:
                            switch(balticAveState[2]){
                                case "none":
                                    if (balticAveState[1] === true){
                                        var rentToPay = balticAvePrices[2] * 2;
                                    } else {
                                        var rentToPay = balticAvePrices[2];
                                    }
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo1[3] = playerInfo1[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 1 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    break;
                                case 1:
                                    var rentToPay = balticAvePrices[3];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo1[3] = playerInfo1[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 1 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    break;
                                case 2:
                                    var rentToPay = balticAvePrices[4];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo1[3] = playerInfo1[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 1 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    break;
                                case 3:
                                    var rentToPay = balticAvePrices[5];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo1[3] = playerInfo1[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 1 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    break;
                                case 4:
                                    var rentToPay = balticAvePrices[6];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo1[3] = playerInfo1[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 1 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    break;
                                case "hotel":
                                    var rentToPay = balticAvePrices[7];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo1[3] = playerInfo1[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 1 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    break;
                                case "mortgaged":
                                    break;
                            }
                            break;
                        case 3:
                            switch(balticAveState[2]){
                                case "none":
                                    if (balticAveState[1] === true){
                                        var rentToPay = balticAvePrices[2] * 2;
                                    } else {
                                        var rentToPay = balticAvePrices[2];
                                    }
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 1:
                                    var rentToPay = balticAvePrices[3];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 2:
                                    var rentToPay = balticAvePrices[4];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 3:
                                    var rentToPay = balticAvePrices[5];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 4:
                                    var rentToPay = balticAvePrices[6];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case "hotel":
                                    var rentToPay = balticAvePrices[7];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case "mortgaged":
                                    break;
                            }
                            break;
                        case 4:
                            switch(balticAveState[2]){
                                case "none":
                                    if (balticAveState[1] === true){
                                        var rentToPay = balticAvePrices[2] * 2;
                                    } else {
                                        var rentToPay = balticAvePrices[2];
                                    }
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 1:
                                    var rentToPay = balticAvePrices[3];
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 2:
                                    var rentToPay = balticAvePrices[4];
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 3:
                                    var rentToPay = balticAvePrices[5];
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 4:
                                    var rentToPay = balticAvePrices[6];
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case "hotel":
                                    var rentToPay = balticAvePrices[7];
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case "mortgaged":
                                    break;
                            }
                            break;
                    }
                    break;
                //player 2 owns location
                case "player2":
                    switch(currentTurn){
                        case 1:
                            switch(balticAveState[2]){
                                case "none":
                                    if (balticAveState[1] === true){
                                        var rentToPay = balticAvePrices[2] * 2;
                                    } else {
                                        var rentToPay = balticAvePrices[2];
                                    }
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 1:
                                    var rentToPay = balticAvePrices[3];
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 2:
                                    var rentToPay = balticAvePrices[4];
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 3:
                                    var rentToPay = balticAvePrices[5];
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 4:
                                    var rentToPay = balticAvePrices[6];
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case "hotel":
                                    var rentToPay = balticAvePrices[7];
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case "mortgaged":
                                    break;
                            }
                            break;
                        case 2:
                            switch(balticAveState[2]){
                                case "none":
                                    if (balticAveState[1] === true){
                                        var rentToPay = balticAvePrices[2] * 2;
                                    } else {
                                        var rentToPay = balticAvePrices[2];
                                    }
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 1:
                                    var rentToPay = balticAvePrices[3];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 2:
                                    var rentToPay = balticAvePrices[4];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 3:
                                    var rentToPay = balticAvePrices[5];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 4:
                                    var rentToPay = balticAvePrices[6];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case "hotel":
                                    var rentToPay = balticAvePrices[7];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case "mortgaged":
                                    break;
                            }
                            break;
                        case 3:
                            switch(balticAveState[2]){
                                case "none":
                                    if (balticAveState[1] === true){
                                        var rentToPay = balticAvePrices[2] * 2;
                                    } else {
                                        var rentToPay = balticAvePrices[2];
                                    }
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 1:
                                    var rentToPay = balticAvePrices[3];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 2:
                                    var rentToPay = balticAvePrices[4];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 3:
                                    var rentToPay = balticAvePrices[5];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 4:
                                    var rentToPay = balticAvePrices[6];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case "hotel":
                                    var rentToPay = balticAvePrices[7];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case "mortgaged":
                                    break;
                            }
                            break;
                        case 4:
                            switch(balticAveState[2]){
                                case "none":
                                    if (balticAveState[1] === true){
                                        var rentToPay = balticAvePrices[2] * 2;
                                    } else {
                                        var rentToPay = balticAvePrices[2];
                                    }
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 1:
                                    var rentToPay = balticAvePrices[3];
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 2:
                                    var rentToPay = balticAvePrices[4];
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 3:
                                    var rentToPay = balticAvePrices[5];
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case 4:
                                    var rentToPay = balticAvePrices[6];
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case "hotel":
                                    var rentToPay = balticAvePrices[7];
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    break;
                                case "mortgaged":
                                    break;
                            }
                            break;
                    }
                    break;
                //player 3 owns location
                case "player3":
                    switch(currentTurn){
                        case 1:
                            switch(balticAveState[2]){
                                case "none":
                                    if (balticAveState[1] === true){
                                        var rentToPay = balticAvePrices[2] * 2;
                                    } else {
                                        var rentToPay = balticAvePrices[2];
                                    }
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 1:
                                    var rentToPay = balticAvePrices[3];
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 2:
                                    var rentToPay = balticAvePrices[4];
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 3:
                                    var rentToPay = balticAvePrices[5];
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 4:
                                    var rentToPay = balticAvePrices[6];
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case "hotel":
                                    var rentToPay = balticAvePrices[7];
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case "mortgaged":
                                    break;
                            }
                            break;
                        case 2:
                            switch(balticAveState[2]){
                                case "none":
                                    if (balticAveState[1] === true){
                                        var rentToPay = balticAvePrices[2] * 2;
                                    } else {
                                        var rentToPay = balticAvePrices[2];
                                    }
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 1:
                                    var rentToPay = balticAvePrices[3];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 2:
                                    var rentToPay = balticAvePrices[4];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 3:
                                    var rentToPay = balticAvePrices[5];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 4:
                                    var rentToPay = balticAvePrices[6];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case "hotel":
                                    var rentToPay = balticAvePrices[7];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case "mortgaged":
                                    break;
                            }
                            break;
                        case 3:
                            switch(balticAveState[2]){
                                case "none":
                                    if (balticAveState[1] === true){
                                        var rentToPay = balticAvePrices[2] * 2;
                                    } else {
                                        var rentToPay = balticAvePrices[2];
                                    }
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 1:
                                    var rentToPay = balticAvePrices[3];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 2:
                                    var rentToPay = balticAvePrices[4];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 3:
                                    var rentToPay = balticAvePrices[5];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 4:
                                    var rentToPay = balticAvePrices[6];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case "hotel":
                                    var rentToPay = balticAvePrices[7];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case "mortgaged":
                                    break;
                            }
                            break;
                        case 4:
                            switch(balticAveState[2]){
                                case "none":
                                    if (balticAveState[1] === true){
                                        var rentToPay = balticAvePrices[2] * 2;
                                    } else {
                                        var rentToPay = balticAvePrices[2];
                                    }
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 1:
                                    var rentToPay = balticAvePrices[3];
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 2:
                                    var rentToPay = balticAvePrices[4];
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 3:
                                    var rentToPay = balticAvePrices[5];
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case 4:
                                    var rentToPay = balticAvePrices[6];
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case "hotel":
                                    var rentToPay = balticAvePrices[7];
                                    playerInfo4[3] = playerInfo4[3] - rentToPay;
                                    playerInfo3[3] = playerInfo3[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 4 paid " + rentToPay + " to Player 3 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo4[3];
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    break;
                                case "mortgaged":
                                    break;
                            }
                            break;
                    }
                    break;

                // player4 owns location
                case "player4":
                    switch(currentTurn){
                        case 1:
                            switch(balticAveState[2]){
                                case "none":
                                    if (balticAveState[1] === true){
                                        var rentToPay = balticAvePrices[2] * 2;
                                    } else {
                                        var rentToPay = balticAvePrices[2];
                                    }
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case 1:
                                    var rentToPay = balticAvePrices[3];
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case 2:
                                    var rentToPay = balticAvePrices[4];
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case 3:
                                    var rentToPay = balticAvePrices[5];
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case 4:
                                    var rentToPay = balticAvePrices[6];
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case "hotel":
                                    var rentToPay = balticAvePrices[7];
                                    playerInfo1[3] = playerInfo1[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 1 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo1[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case "mortgaged":
                                    break;
                            }
                            break;
                        case 2:
                            switch(balticAveState[2]){
                                case "none":
                                    if (balticAveState[1] === true){
                                        var rentToPay = balticAvePrices[2] * 2;
                                    } else {
                                        var rentToPay = balticAvePrices[2];
                                    }
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case 1:
                                    var rentToPay = balticAvePrices[3];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo2[3] = playerInfo2[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case 2:
                                    var rentToPay = balticAvePrices[4];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 2 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case 3:
                                    var rentToPay = balticAvePrices[5];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case 4:
                                    var rentToPay = balticAvePrices[6];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case "hotel":
                                    var rentToPay = balticAvePrices[7];
                                    playerInfo2[3] = playerInfo2[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 2 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo2[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case "mortgaged":
                                    break;
                            }
                            break;
                        case 3:
                            switch(balticAveState[2]){
                                case "none":
                                    if (balticAveState[1] === true){
                                        var rentToPay = balticAvePrices[2] * 2;
                                    } else {
                                        var rentToPay = balticAvePrices[2];
                                    }
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case 1:
                                    var rentToPay = balticAvePrices[3];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case 2:
                                    var rentToPay = balticAvePrices[4];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case 3:
                                    var rentToPay = balticAvePrices[5];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case 4:
                                    var rentToPay = balticAvePrices[6];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case "hotel":
                                    var rentToPay = balticAvePrices[7];
                                    playerInfo3[3] = playerInfo3[3] - rentToPay;
                                    playerInfo4[3] = playerInfo4[3] + rentToPay;
                                    // Alert User That Rent Was Paid
                                    alert("Player 3 paid " + rentToPay + " to Player 4 for rent on " + location);
                                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo3[3];
                                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo4[3];
                                    break;
                                case "mortgaged":
                                    break;
                            }
                            break;
                    }
                    break;
            }
            break;
        case "Income Tax":
            break;
        case "Reading Railroad":
            break;
        case "Oriental Avenue":
            buyCommand(location);
            break;
        case "Chance Light Blues":
            break;
        case "Vermont Avenue":
            buyCommand(location);
            break;
        case "Connecticut Avenue":
            buyCommand(location);
            break;
        case "Just Visiting":
            break;
        case "St. Charles Place":
            buyCommand(location);
            break;
        case "Electric Company":
            break;
        case "States Avenue":
            buyCommand(location);
            break;
        case "Virginia Avenue":
            buyCommand(location);
            break;
        case "Pennsylvania Railroad":
            break;
        case "St. James Place":
            buyCommand(location);
            break;
        case "Community Chest Oranges":
            break;
        case "Tennessee Avenue":
            buyCommand(location);
            break;
        case "New York Avenue":
            buyCommand(location);
            break;
        case "Free Parking":
            break;
        case "Kentucky Avenue":
            buyCommand(location);
            break;
        case "Chance Reds":
            break;
        case "Indiana Avenue":
            buyCommand(location);
            break;
        case "Illinois Avenue":
            buyCommand(location);
            break;
        case "B & O Railroad":
            break;
        case "Atlantic Avenue":
            buyCommand(location);
            break;
        case "Ventnor Avenue":
            buyCommand(location);
            break;
        case "Water Works":
            break;
        case "Marvin Gardens":
            buyCommand(location);
            break;
        case "Go To Jail":
            break;
        case "Pacific Avenue":
            buyCommand(location);
            break;
        case "North Carolina Avenue":
            buyCommand(location);
            break;
        case "Community Chest Greens":
            break;
        case "Pennsylvania Avenue":
            buyCommand(location);
            break;
        case "Short Line":
            break;
        case "Chance Blues":
            break;
        case "Park Place":
            buyCommand(location);
            break;
        case "Luxury Tax":
            break;
        case "Boardwalk":
            buyCommand(location);
            break;
        default:
            alert("switch statement problem");
            break;
    }
}













