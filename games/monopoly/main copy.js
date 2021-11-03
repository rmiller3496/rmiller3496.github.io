// Global Variables
var numPlayers;
var roll1;
var roll2;
var currentTurn = 1;

// State for All Addresses
//[owned or not (if owned -> player name), monopoly or not, num houses/hotels or mortgaged, price, price per house, rent, 1 house, 2 houses, 3 houses, 4 houses, hotel, mortgage]
//[0]                                      [1]              [2]                             [3]    [4]              [5]    [6]      [7]     [8]         [9]      [10]   [11]     
const mediterraneanAveInfo =  ["unowned", false, "none", 60, 50, 2, 10, 30, 90, 160, 250, 30];
const balticAveInfo =  ["unowned", false, "none", 60, 50, 4, 20, 60, 180, 320, 450, 30];
const orientalAveInfo =  ["unowned", false, "none", 100, 50, 6, 30, 90, 270, 400, 550, 50];
const vermontAveInfo =  ["unowned", false, "none", 100, 50, 6, 30, 90, 270, 400, 550, 50];
const connecticutAveInfo =  ["unowned", false, "none", 120, 50, 8, 40, 100, 300, 450, 600, 60];
const stCharlesPlaceInfo =  ["unowned", false, "none", 140, 100, 10, 50, 150, 450, 625, 750, 70];
const statesAveInfo =  ["unowned", false, "none", 140, 100, 10, 50, 150, 450, 625, 750, 70];
const virginiaAveInfo =  ["unowned", false, "none", 160, 100, 12, 60, 180, 500, 700, 900, 80];
const stJamesPlaceInfo =  ["unowned", false, "none", 180, 100, 14, 70, 200, 550, 750, 950, 90];
const tennesseeAveInfo =  ["unowned", false, "none", 180, 100, 14, 70, 200, 550, 750, 950, 90];
const newYorkAveInfo =  ["unowned", false, "none", 200, 100, 16, 80, 220, 600, 800, 1000, 100];
const kentuckyAveInfo =  ["unowned", false, "none", 220, 150, 18, 90, 250, 700, 875, 1050, 110];
const indianaAveInfo =  ["unowned", false, "none", 220, 150, 18, 90, 250, 700, 875, 1050, 110];
const illinoisAveInfo =  ["unowned", false, "none", 240, 150, 20, 100, 300, 750, 925, 1100, 120];
const atlanticAveInfo =  ["unowned", false, "none", 260, 150, 22, 110, 330, 800, 975, 1150, 130];
const ventnorAveInfo =  ["unowned", false, "none", 260, 150, 22, 110, 330, 800, 975, 1150, 130];
const marvinGardensInfo =  ["unowned", false, "none", 280, 150, 24, 120, 360, 850, 1025, 1200, 140];
const pacificAveInfo =  ["unowned", false, "none", 300, 200, 26, 130, 390, 900, 1100, 1275, 150];
const northCarolinaAveInfo =  ["unowned", false, "none", 300, 200, 26, 130, 390, 900, 1100, 1275, 150];
const pennsylvaniaAveInfo =  ["unowned", false, "none", 320, 200, 28, 150, 450, 1000, 1200, 1400, 160];
const parkPlaceInfo =  ["unowned", false, "none", 350, 200, 35, 175, 500, 1100, 1300, 1500, 175];
const boardwalkInfo =  ["unowned", false, "none", 400, 200, 50, 200, 600, 1400, 1700, 2000, 200];


// player data is stored as follows:
// [positionx, positiony, direction, money]
// [0]         [1]        [2]        [3] 
const playerInfo= [[1, 1, "left", 1500, "", ""], [1, 1, "left", 1500, "", ""], [1, 1, "left", 1500, "", ""], [1, 1, "left", 1500, "", ""]]
const playerProperties = [[], [], [], []];
// Stuff to Do On Start
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


// Change the turn


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


// Create HTML Text 


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


// Dice Functions


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


// Move Function


function movePlayers() {
    var totalRoll = roll1 + roll2;
    switch(currentTurn){
        case 1:
            var locationX = playerInfo[0][0];
            var locationY = playerInfo[0][1];
            var change;
            var direction = playerInfo[0][2];
            switch (direction){
                case "left":
                    locationX = locationX + totalRoll;
                    if (locationX > 11){
                        change = locationX - 11;
                        direction = "up";
                        locationX = 11;
                        locationY = 1 + change;
                    } 
                    playerInfo[0][0] = locationX;
                    playerInfo[0][1] = locationY;
                    playerInfo[0][2] = direction;
                    break;
                case "up":
                    locationY = locationY + totalRoll;
                    if (locationY > 11){
                        change = locationY - 11;
                        direction = "right";
                        locationY = 11;
                        locationX = 11 - change;
                    } 
                    playerInfo[0][0] = locationX;
                    playerInfo[0][1] = locationY;
                    playerInfo[0][2] = direction;
                    break;
                case "right":
                    locationX = locationX - totalRoll;
                    if (locationX < 1){
                        change = 1 - locationX;
                        direction = "down";
                        locationX = 1;
                        locationY = 11 - change;
                    } 
                    playerInfo[0][0] = locationX;
                    playerInfo[0][1] = locationY;
                    playerInfo[0][2] = direction;
                    break;
                case "down":
                    locationY = locationY - totalRoll;
                    if (locationY < 1){
                        change = 1 - locationX;
                        direction = "left";
                        locationY = 1;
                        locationX = 1 + change;
                    } 
                    playerInfo[0][0] = locationX;
                    playerInfo[0][1] = locationY;
                    playerInfo[0][2] = direction;
                    break;
            }
            var locationIdentifer = locationX + "," + locationY;
            var locationName = coordToLocationName(locationIdentifer);
            var locationUpdate = document.getElementById("location1");
            locationUpdate.innerHTML = "Location: " + locationName;
            break;
        case 2:
            var locationX = playerInfo[1][0];
            var locationY = playerInfo[1][1];
            var change;
            var direction = playerInfo[1][2];
            switch (direction){
                case "left":
                    locationX = locationX + totalRoll;
                    if (locationX > 11){
                        change = locationX - 11;
                        direction = "up";
                        locationX = 11;
                        locationY = 1 + change;
                    } 
                    playerInfo[1][0] = locationX;
                    playerInfo[1][1] = locationY;
                    playerInfo[1][2] = direction;
                    break;
                case "up":
                    locationY = locationY + totalRoll;
                    if (locationY > 11){
                        change = locationY - 11;
                        direction = "right";
                        locationY = 11;
                        locationX = 11 - change;
                    } 
                    playerInfo[1][0] = locationX;
                    playerInfo[1][1] = locationY;
                    playerInfo[1][2] = direction;
                    break;
                case "right":
                    locationX = locationX - totalRoll;
                    if (locationX < 1){
                        change = 1 - locationX;
                        direction = "down";
                        locationX = 1;
                        locationY = 11 - change;
                    } 
                    playerInfo[1][0] = locationX;
                    playerInfo[1][1] = locationY;
                    playerInfo[1][2] = direction;
                    break;
                case "down":
                    locationY = locationY - totalRoll;
                    if (locationY < 1){
                        change = 1 - locationX;
                        direction = "left";
                        locationY = 1;
                        locationX = 1 + change;
                    } 
                    playerInfo[1][0] = locationX;
                    playerInfo[1][1] = locationY;
                    playerInfo[1][2] = direction;
                    break;
            }
            var locationIdentifer = locationX + "," + locationY;
            var locationName = coordToLocationName(locationIdentifer);
            var locationUpdate = document.getElementById("location2");
            locationUpdate.innerHTML = "Location: " + locationName;
            break;
        case 3:
            var locationX = playerInfo[2][0];
            var locationY = playerInfo[2][1];
            var change;
            var direction = playerInfo[2][2];
            switch (direction){
                case "left":
                    locationX = locationX + totalRoll;
                    if (locationX > 11){
                        change = locationX - 11;
                        direction = "up";
                        locationX = 11;
                        locationY = 1 + change;
                    } 
                    playerInfo[2][0] = locationX;
                    playerInfo[2][1] = locationY;
                    playerInfo[2][2] = direction;
                    break;
                case "up":
                    locationY = locationY + totalRoll;
                    if (locationY > 11){
                        change = locationY - 11;
                        direction = "right";
                        locationY = 11;
                        locationX = 11 - change;
                    } 
                    playerInfo[2][0] = locationX;
                    playerInfo[2][1] = locationY;
                    playerInfo[2][2] = direction;
                    break;
                case "right":
                    locationX = locationX - totalRoll;
                    if (locationX < 1){
                        change = 1 - locationX;
                        direction = "down";
                        locationX = 1;
                        locationY = 11 - change;
                    } 
                    playerInfo[2][0] = locationX;
                    playerInfo[2][1] = locationY;
                    playerInfo[2][2] = direction;
                    break;
                case "down":
                    locationY = locationY - totalRoll;
                    if (locationY < 1){
                        change = 1 - locationX;
                        direction = "left";
                        locationY = 1;
                        locationX = 1 + change;
                    } 
                    playerInfo[2][0] = locationX;
                    playerInfo[2][1] = locationY;
                    playerInfo[2][2] = direction;
                    break;
            }
            var locationIdentifer = locationX + "," + locationY;
            var locationName = coordToLocationName(locationIdentifer);
            var locationUpdate = document.getElementById("location3");
            locationUpdate.innerHTML = "Location: " + locationName;
            break;
        case 4:
            var locationX = playerInfo[3][0];
            var locationY = playerInfo[3][1];
            var change;
            var direction = playerInfo[3][2];
            switch (direction){
                case "left":
                    locationX = locationX + totalRoll;
                    if (locationX > 11){
                        change = locationX - 11;
                        direction = "up";
                        locationX = 11;
                        locationY = 1 + change;
                    } 
                    playerInfo[3][0] = locationX;
                    playerInfo[3][1] = locationY;
                    playerInfo[3][2] = direction;
                    break;
                case "up":
                    locationY = locationY + totalRoll;
                    if (locationY > 11){
                        change = locationY - 11;
                        direction = "right";
                        locationY = 11;
                        locationX = 11 - change;
                    } 
                    playerInfo[3][0] = locationX;
                    playerInfo[3][1] = locationY;
                    playerInfo[3][2] = direction;
                    break;
                case "right":
                    locationX = locationX - totalRoll;
                    if (locationX < 1){
                        change = 1 - locationX;
                        direction = "down";
                        locationX = 1;
                        locationY = 11 - change;
                    } 
                    playerInfo[3][0] = locationX;
                    playerInfo[3][1] = locationY;
                    playerInfo[3][2] = direction;
                    break;
                case "down":
                    locationY = locationY - totalRoll;
                    if (locationY < 1){
                        change = 1 - locationX;
                        direction = "left";
                        locationY = 1;
                        locationX = 1 + change;
                    } 
                    playerInfo[3][0] = locationX;
                    playerInfo[3][1] = locationY;
                    playerInfo[3][2] = direction;
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


// Coord to Location Name



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
            name =  "Chance Dark Blues";
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

function checkLocation (location){
    // Call fxn to check if rent is due
    // If it returns anything but "available" or "mortgaged", calculate and do rent
    // If "available", call buy fxn
    // If mortgaged, do nothing
    switch (location){
        case "Go":
            switch (currentTurn){
                case 1:
                    playerInfo[0][3] = playerInfo[0][3] + 200;
                    document.getElementById("cash1").innerHTML = "Cash: " + playerInfo[0][3];
                    break;
                case 2:
                    playerInfo[1][3] = playerInfo[1][3] + 200;
                    document.getElementById("cash2").innerHTML = "Cash: " + playerInfo[1][3];
                    break;
                case 3:
                    playerInfo[2][3] = playerInfo[2][3] + 200;
                    document.getElementById("cash3").innerHTML = "Cash: " + playerInfo[2][3];
                    break;
                case 4:
                    playerInfo[3][3] = playerInfo[3][3] + 200;
                    document.getElementById("cash4").innerHTML = "Cash: " + playerInfo[3][3];
                    break;
            }
            break;
        case "Mediterranean Avenue":
            locationOptions(mediterraneanAveInfo, location);
            break;
        case "Baltic Avenue":
            locationOptions(balticAveInfo, location);
        case "Income Tax":
            break;
        case "Reading Railroad":
            break;
        case "Oriental Avenue":
            locationOptions(orientalAveInfo, location);
            break;
        case "Chance Light Blues":
            break;
        case "Vermont Avenue":
            locationOptions(vermontAveInfo, location);
            break;
        case "Connecticut Avenue":
            locationOptions(connecticutAveInfo, location);
            break;
        case "Just Visiting":
            break;
        case "St. Charles Place":
            locationOptions(stCharlesPlaceInfo, location);
            break;
        case "Electric Company":
            break;
        case "States Avenue":
            locationOptions(statesAveInfo, location);
            break;
        case "Virginia Avenue":
            locationOptions(virginiaAveInfo, location);
            break;
        case "Pennsylvania Railroad":
            break;
        case "St. James Place":
            locationOptions(stJamesPlaceInfo, location);
            break;
        case "Community Chest Oranges":
            break;
        case "Tennessee Avenue":
            locationOptions(tennesseeAveInfo, location);
            break;
        case "New York Avenue":
            locationOptions(newYorkAveInfo, location);
            break;
        case "Free Parking":
            break;
        case "Kentucky Avenue":
            locationOptions(kentuckyAveInfo, location);
            break;
        case "Chance Reds":
            break;
        case "Indiana Avenue":
            locationOptions(indianaAveInfo, location);
            break;
        case "Illinois Avenue":
            locationOptions(illinoisAveInfo, location);
            break;
        case "B & O Railroad":
            break;
        case "Atlantic Avenue":
            locationOptions(atlanticAveInfo, location);
            break;
        case "Ventnor Avenue":
            locationOptions(ventnorAveInfo, location);
            break;
        case "Water Works":
            break;
        case "Marvin Gardens":
            locationOptions(marvinGardensInfo, location);
            break;
        case "Go To Jail":
            break;
        case "Pacific Avenue":
            locationOptions(pacificAveInfo, location);
            break;
        case "North Carolina Avenue":
            locationOptions(northCarolinaAveInfo, location);
            break;
        case "Community Chest Greens":
            break;
        case "Pennsylvania Avenue":
            locationOptions(pennsylvaniaAveInfo, location);
            break;
        case "Short Line":
            break;
        case "Chance Dark Blues":
            break;
        case "Park Place":
            locationOptions(parkPlaceInfo, location);
            break;
        case "Luxury Tax":
            break;
        case "Boardwalk":
            locationOptions(boardwalkInfo, location);
            break;
        default:
            alert("switch statement problem");
            break;
    }
}

function locationOptions(locationArray, location){
    if (locationArray[0] === currentTurn){
        alert("Location Owned By Current Player");
    } else if (locationArray[0] === "unowned"){
        buyPrompt(locationArray, location);
    } else {
        return "Rent Due";
        // Call Rent Prompt
    }
}

function buyPrompt (locationArray, location) {
    var playerIndex = currentTurn - 1;
    var intentToBuy = confirm(location + " is available! Press Ok to Continue, Press Cancel To Decline");
    if (intentToBuy === true){
        var confirmPurchase = confirm("The Price of " + location + " is: " + locationArray[3]+ "\nPress Okay to Purchase, Cancel to Decline");
        if (confirmPurchase === true){
            playerInfo[playerIndex][3] = playerInfo[playerIndex][3] - locationArray[3];
            playerProperties[playerIndex].push(location);
            locationArray[0] = currentTurn;
            alert("Player " + currentTurn + " purchased " + location);
            document.getElementById("cash" + currentTurn).innerHTML = "Cash: " + playerInfo[playerIndex][3];
        }
    }
}