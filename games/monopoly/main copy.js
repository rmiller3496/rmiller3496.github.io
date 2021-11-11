// Global Variables
var numPlayers;
var roll1;
var roll2;
var currentTurn = 1;
var playerIndex = currentTurn - 1;
var freeParkingAmount = 0;
var unmortgaged = [];
var mortgaged = [];
var doublesCounter;

// Info for All Addresses
//[owned or not (if owned -> player number), monopoly or not *not actually being used as of now* , num houses/hotels or mortgaged, price, price per house, rent, 1 house, 2 houses, 3 houses, 4 houses, hotel, mortgage refund]
//[0]                                      [1]                                                      [2]                             [3]    [4]             [5]   [6]    [7]         [8]       [9]      [10]     [11]     
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

// Info For Railroads
// [owned or not (if owned -> player number), mortaged or not (bool), rent 1 rr, 2rr, 3rr, 4rr, mortgage refund, cost]
// [0]                                        [1]                     [2]       [3]   [4]  [5]  [6]             [7]
const readingRailRoadInfo = ["unowned", false, 25, 50, 100, 200, 100, 200];
const pennsylvaniaRailRoadInfo = ["unowned", false, 25, 50, 100, 200, 100, 200];
const bandoRailRoadInfo = ["unowned", false, 25, 50, 100, 200, 100, 200];
const shortLineInfo = ["unowned", false, 25, 50, 100, 200, 100, 200];

// Info for Utilities
//[owned or not (if owned -> player number), mortgaged or not (bool), 1 multiplier, 2 multiplier, mortgage refund, cost]
//[0]                                        [1]                      [2]           [3]           [4]             [5]
const electricCompanyInfo = ["unowned", false, 4, 10, 75, 150];
const waterWorksInfo = ["unowned", false, 4, 10, 75, 150];


// player data is stored as follows:
// [positionx, positiony, direction, money, rr owned, utilities owned]
// [0]         [1]        [2]        [3]   [4]        [5]
const playerInfo = [[1, 1, "left", 1500, 0, 0], [1, 1, "left", 1500, 0, 0], [1, 1, "left", 1500, 0, 0], [1, 1, "left", 1500, 0, 0]]
const playerProperties = [[], [], [], []];
const playerMonopolies = [[], [], [], []];


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
                    document.getElementById("player1").setAttribute("background-color", "transparent");
                    document.getElementById("player2").setAttribute("background-color", "#FFFF00");
                    break;
                case 2:
                    currentTurn = 1;
                    document.getElementById("player2").setAttribute("background-color", "transparent");
                    document.getElementById("player1").setAttribute("background-color", "#FFFF00");
                    break;
            }
            break;
        case 3:
            switch(currentTurn){
                case 1:
                    currentTurn = 2;
                    document.getElementById("player1").setAttribute("background-color", "transparent");
                    document.getElementById("player2").setAttribute("background-color", "#FFFF00");
                    document.getElementById("player3").setAttribute("background-color", "transparent");
                    break;
                case 2:
                    currentTurn = 3;
                    document.getElementById("player1").setAttribute("background-color", "transparent");
                    document.getElementById("player3").setAttribute("background-color", "#FFFF00");
                    document.getElementById("player2").setAttribute("background-color", "transparent");
                    break;
                case 3:
                    currentTurn = 1;
                    document.getElementById("player3").setAttribute("background-color", "transparent");
                    document.getElementById("player1").setAttribute("background-color", "#FFFF00");
                    document.getElementById("player2").setAttribute("background-color", "transparent");
                    break;
            }
            break;
        case 4:
            switch(currentTurn){
                case 1:
                    currentTurn = 2;
                    document.getElementById("player1").setAttribute("background-color", "transparent");
                    document.getElementById("player2").setAttribute("background-color", "#FFFF00");
                    document.getElementById("player3").setAttribute("background-color", "transparent");
                    document.getElementById("player4").setAttribute("background-color", "transparent");
                    break;
                case 2:
                    currentTurn = 3;
                    document.getElementById("player1").setAttribute("background-color", "transparent");
                    document.getElementById("player3").setAttribute("background-color", "#FFFF00");
                    document.getElementById("player2").setAttribute("background-color", "transparent");
                    document.getElementById("player4").setAttribute("background-color", "transparent");
                    break;
                case 3:
                    currentTurn = 4;
                    document.getElementById("player1").setAttribute("background-color", "transparent");
                    document.getElementById("player4").setAttribute("background-color", "#FFFF00");
                    document.getElementById("player2").setAttribute("background-color", "transparent");
                    document.getElementById("player3").setAttribute("background-color", "transparent");
                    break;
                case 4:
                    currentTurn = 1;
                    document.getElementById("player4").setAttribute("background-color", "transparent");
                    document.getElementById("player1").setAttribute("background-color", "#FFFF00");
                    document.getElementById("player2").setAttribute("background-color", "transparent");
                    document.getElementById("player3").setAttribute("background-color", "transparent");
                    break;
            }
            break;
        
        }document.getElementById("turnIndicator").innerHTML("Turn: Player " + currentTurn);
    doublesCounter = 0;
    var button = document.getElementById("diceRoll");
    button.disabled = false;   
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
        player1Title.setAttribute("id", "player1");
        player1Title.setAttribute("class", "players");
        player1Title.setAttribute("background-color", "#FFFF00");
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
    if (roll1 === roll2){
        doublesCounter += 1;
        if (doublesCounter === 3){
            // Go To Jail
        } else {
            alert("Doubles!!");
            rollDice();
        }
    } else {
        var button = document.getElementById("diceRoll");
        button.disabled = false; 
    }
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
    var playerIndex = currentTurn - 1
    var totalRoll = roll1 + roll2;
    var locationX = playerInfo[playerIndex][0];
    var locationY = playerInfo[playerIndex][1];
    var change;
    var direction = playerInfo[playerIndex][2];
    switch (direction){
        case "left":
            locationX = locationX + totalRoll;
            if (locationX > 11){
                change = locationX - 11;
                direction = "up";
                locationX = 11;
                locationY = 1 + change;
            } 
            playerInfo[playerIndex][0] = locationX;
            playerInfo[playerIndex][1] = locationY;
            playerInfo[playerIndex][2] = direction;
        break;
    case "up":
        locationY = locationY + totalRoll;
        if (locationY > 11){
            change = locationY - 11;
            direction = "right";
            locationY = 11;
            locationX = 11 - change;
        } 
        playerInfo[playerIndex][0] = locationX;
        playerInfo[playerIndex][1] = locationY;
        playerInfo[playerIndex][2] = direction;
        break;
    case "right":
        locationX = locationX - totalRoll;
        if (locationX < 1){
            change = 1 - locationX;
            direction = "down";
            locationX = 1;
            locationY = 11 - change;
        } 
        playerInfo[playerIndex][0] = locationX;
        playerInfo[playerIndex][1] = locationY;
        playerInfo[playerIndex][2] = direction;
        break;
    case "down":
        locationY = locationY - totalRoll;
        if (locationY < 1){
            change = 1 - locationX;
            direction = "left";
            locationY = 1;
            locationX = 1 + change;
        } 
        playerInfo[playerIndex][0] = locationX;
        playerInfo[playerIndex][1] = locationY;
        playerInfo[playerIndex][2] = direction;
        break;
    }
    var locationIdentifer = locationX + "," + locationY;
    var locationName = coordToLocationName(locationIdentifer);
    var locationUpdate = document.getElementById("location" + (currentTurn));
    locationUpdate.innerHTML = "Location: " + locationName;
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
    var playerIndex = currentTurn - 1;
    switch (location){
        case "Go":
            playerInfo[playerIndex][3] = playerInfo[playerIndex][3] + 200;
            document.getElementById("cash" + currentTurn).innerHTML = "Cash: " + playerInfo[playerIndex][3];
            alert('Collected 200 for Passing Go')
            break;
        case "Mediterranean Avenue":
            locationOptions(mediterraneanAveInfo, location, "regular", "browns");
            break;
        case "Community Chest Browns":
            break;
        case "Baltic Avenue":
            locationOptions(balticAveInfo, location, "regular", "browns");
            break;
        case "Income Tax":
            playerInfo[playerIndex][3] = playerInfo[playerIndex][3] - 200;
            document.getElementById("cash" + currentTurn).innerHTML = "Cash: " + playerInfo[playerIndex][3];
            freeParkingAmount += 200;
            alert("Paid 200 for Income Tax");
            break;
        case "Reading Railroad":
            locationOptions(readingRailRoadInfo, location, "railroad");
            break;
        case "Oriental Avenue":
            locationOptions(orientalAveInfo, location, "regular", "light blues");
            break;
        case "Chance Light Blues":
            break;
        case "Vermont Avenue":
            locationOptions(vermontAveInfo, location, "regular", "light blues");
            break;
        case "Connecticut Avenue":
            locationOptions(connecticutAveInfo, location, "regular", "light blues");
            break;
        case "Just Visiting":
            break;
        case "St. Charles Place":
            locationOptions(stCharlesPlaceInfo, location, "regular", "purples");
            break;
        case "Electric Company":
            locationOptions(electricCompanyInfo, location, "utilities")
            break;
        case "States Avenue":
            locationOptions(statesAveInfo, location, "regular", "purples");
            break;
        case "Virginia Avenue":
            locationOptions(virginiaAveInfo, location, "regular", "purples");
            break;
        case "Pennsylvania Railroad":
            locationOptions(pennsylvaniaRailRoadInfo, location, "railroad");
            break;
        case "St. James Place":
            locationOptions(stJamesPlaceInfo, location, "regular", "oranges");
            break;
        case "Community Chest Oranges":
            break;
        case "Tennessee Avenue":
            locationOptions(tennesseeAveInfo, location, "regular", "oranges");
            break;
        case "New York Avenue":
            locationOptions(newYorkAveInfo, location, "regular", "oranges");
            break;
        case "Free Parking":
            var playerIndex = currentTurn - 1;
            playerInfo[playerIndex][3] = playerInfo[playerIndex][3] + freeParkingAmount;
            alert("Player " + currentTurn + " got " + freeParkingAmount + " from Free Parking");
            freeParkingAmount = 0;
            break;
        case "Kentucky Avenue":
            locationOptions(kentuckyAveInfo, location, "regular", "reds");
            break;
        case "Chance Reds":
            break;
        case "Indiana Avenue":
            locationOptions(indianaAveInfo, location, "regular", "reds");
            break;
        case "Illinois Avenue":
            locationOptions(illinoisAveInfo, location, "regular", "reds");
            break;
        case "B & O Railroad":
            locationOptions(bandoRailRoadInfo, location, "railroad");
            break;
        case "Atlantic Avenue":
            locationOptions(atlanticAveInfo, location, "regular", "yellows");
            break;
        case "Ventnor Avenue":
            locationOptions(ventnorAveInfo, location, "regular", "yellows");
            break;
        case "Water Works":
            locationOptions(waterWorksInfo, location, "utilities")
            break;
        case "Marvin Gardens":
            locationOptions(marvinGardensInfo, location, "regular", "yellows");
            break;
        case "Go To Jail":
            break;
        case "Pacific Avenue":
            locationOptions(pacificAveInfo, location, "regular", "greens");
            break;
        case "North Carolina Avenue":
            locationOptions(northCarolinaAveInfo, location, "regular", "greens");
            break;
        case "Community Chest Greens":
            break;
        case "Pennsylvania Avenue":
            locationOptions(pennsylvaniaAveInfo, location, "regular", "greens");
            break;
        case "Short Line":
            locationOptions(shortLineInfo, location, "railroad");
            break;
        case "Chance Dark Blues":
            break;
        case "Park Place":
            locationOptions(parkPlaceInfo, location, "regular", "dark blues");
            break;
        case "Luxury Tax":
            playerInfo[playerIndex][3] = playerInfo[playerIndex][3] - 100;
            document.getElementById("cash" + currentTurn).innerHTML = "Cash: " + playerInfo[playerIndex][3];
            freeParkingAmount += 100;
            alert("Paid 100 for Luxury Tax");
            break;
        case "Boardwalk":
            locationOptions(boardwalkInfo, location, "regular", "dark blues");
            break;
        default:
            alert("switch statement problem");
            break;
    }
}

function locationOptions(locationArray, location, locationType, region){
    switch (locationType){
        case "regular":
            if (locationArray[0] === currentTurn){
                alert("Location Owned By Current Player");
            } else if (locationArray[0] === "unowned"){
                buyPrompt(locationArray, location, region);
            } else {
                rentDue(locationArray, location);
            }
            break;
        case "railroad":
            if (locationArray[0] === currentTurn){
                alert("Location Owned By Current Player")
            } else if (locationArray[0] === "unowned"){
                buyRRPrompt(locationArray, location);
            } else {
                payRentRailroads(locationArray, location);
            }
            break;
        case "utilities":
            if (locationArray[0] === currentTurn){
                alert("Location Owned By Current Player")
            } else if (locationArray[0] === "unowned"){
                buyUtilityPrompt(locationArray, location);
            } else {
                payRentUtility(locationArray, location);
            }
            break;
        case "chance":
            break;
        case "community chest":
            break;
    }
}

function buyUtilityPrompt(locationArray, location){
    var intentToBuy = confirm(location + " is available! Press Ok to Continue, Press Cancel To Decline");
    var playerIndex = currentTurn - 1;
    if (intentToBuy === true){
        var confirmPurchase = confirm("The Price of " + location + " is: " + locationArray[5] + "\nPress Okay to Purchase, Cancel to Decline");
        if (confirmPurchase === true){
            if (playerInfo[playerIndex][3] >= locationArray[5]){
                playerInfo[playerIndex][3] = playerInfo[playerIndex][3] - locationArray[5];
                playerProperties[playerIndex].push(location);
                locationArray[0] = currentTurn;
                playerInfo[playerIndex][5] = playerInfo[playerIndex][5] + 1;
                alert("Player " + currentTurn + " purchased " + location);
                document.getElementById("cash" + currentTurn).innerHTML = "Cash: " + playerInfo[playerIndex][3]; 
            } else {
                alert("Insufficient Funds");
            }
        }
    }
}

function payRentUtility(locationArray, location){
    var ownerIndex = locationArray[0] - 1;
    var landerIndex = currentTurn - 1;
    var numberOfUtilityOwned = playerInfo[ownerIndex][5];
    var rentToPay;
    if (locationArray[1] === false){
        switch (numberOfUtilityOwned){
            case 1:
                rentToPay = locationArray[2] * (roll1 + roll2);
                completeRentTransaction (landerIndex, ownerIndex, rentToPay)
                break;
            case 2:
                rentToPay = locationArray[3] * (roll1 + roll2);
                completeRentTransaction (landerIndex, ownerIndex, rentToPay)
                break;
        }
        alert("Player " + (landerIndex + 1) + " paid " + rentToPay + " to Player " + (ownerIndex + 1) + " for rent on " + location);
    }
}

function buyRRPrompt(locationArray, location){
    var intentToBuy = confirm(location + " is available! Press Ok to Continue, Press Cancel To Decline");
    var playerIndex = currentTurn - 1;
    if (intentToBuy === true){
        var confirmPurchase = confirm("The Price of " + location + " is: " + locationArray[7] + "\nPress Okay to Purchase, Cancel to Decline");
        if (confirmPurchase === true){
            if (playerInfo[playerIndex][3] >= locationArray[7]){
                playerInfo[playerIndex][3] = playerInfo[playerIndex][3] - locationArray[7];
                playerProperties[playerIndex].push(location);
                locationArray[0] = currentTurn;
                playerInfo[playerIndex][4] = playerInfo[playerIndex][4] + 1;
                alert("Player " + currentTurn + " purchased " + location);
                document.getElementById("cash" + currentTurn).innerHTML = "Cash: " + playerInfo[playerIndex][3]; 
            } else {
                alert("Insufficient Funds");
            }
        }
    }
}

function payRentRailroads(locationArray, location){
    var ownerIndex = locationArray[0] - 1;
    var landerIndex = currentTurn - 1;
    var numberOfRROwned = playerInfo[ownerIndex][4];
    var rentToPay;
    if (locationArray[1] === false){
        switch (numberOfRROwned){
            case 1:
                rentToPay = locationArray[2];
                completeRentTransaction (landerIndex, ownerIndex, rentToPay)
                break;
            case 2:
                rentToPay = locationArray[3];
                completeRentTransaction (landerIndex, ownerIndex, rentToPay)
                break;
            case 3:
                rentToPay = locationArray[4];
                completeRentTransaction (landerIndex, ownerIndex, rentToPay)
                break;
            case 4:
                rentToPay = locationArray[5];
                completeRentTransaction (landerIndex, ownerIndex, rentToPay)
                break;
        }
        alert("Player " + (landerIndex + 1) + " paid " + rentToPay + " to Player " + (ownerIndex + 1) + " for rent on " + location);
    }
}

function buyPrompt (locationArray, location, region) {
    var intentToBuy = confirm(location + " is available! Press Ok to Continue, Press Cancel To Decline");
    var playerIndex = currentTurn - 1;
    if (intentToBuy === true){
        var confirmPurchase = confirm("The Price of " + location + " is: " + locationArray[3]+ "\nPress Okay to Purchase, Cancel to Decline");
        if (confirmPurchase === true){
            if (playerInfo[playerIndex][3] >= locationArray[3]){
                playerInfo[playerIndex][3] = playerInfo[playerIndex][3] - locationArray[3];
                playerProperties[playerIndex].push(location);
                locationArray[0] = currentTurn;
                alert("Player " + currentTurn + " purchased " + location);
                document.getElementById("cash" + currentTurn).innerHTML = "Cash: " + playerInfo[playerIndex][3];
                checkForMonopoly(region); 
            } else {
                alert("Insufficient Funds");
            }
        }
    }
}

function rentDue (locationArray, location){
    var ownerIndex = locationArray[0] - 1;
    var landerIndex = currentTurn - 1
    var rentToPay;
    switch (locationArray[2]){
        case "none":
            if (locationArray[1] === true){
                rentToPay = locationArray[5] * 2;
            } else {
                rentToPay = locationArray[5];
            }
            completeRentTransaction(landerIndex, ownerIndex, rentToPay);
            break;
        case 1:
            rentToPay = locationArray[6];
            completeRentTransaction(landerIndex, ownerIndex, rentToPay);
            break;
        case 2:
            rentToPay = locationArray[7];
            completeRentTransaction(landerIndex, ownerIndex, rentToPay);
            break;
        case 3:
            rentToPay = locationArray[8];
            completeRentTransaction(landerIndex, ownerIndex, rentToPay);
            break;
        case 4:
            rentToPay = locationArray[9];
            completeRentTransaction(landerIndex, ownerIndex, rentToPay);
            break;
        case "hotel":
            rentToPay = locationArray[10];
            completeRentTransaction(landerIndex, ownerIndex, rentToPay);
            break;
        case "mortgaged":
            alert(location + " is Mortgaged");
            break;
    }
    alert("Player " + (landerIndex + 1) + " paid " + rentToPay + " to Player " + (ownerIndex + 1) + " for rent on " + location);
}

function completeRentTransaction (landerIndex, ownerIndex, rentToPay){
    playerInfo[landerIndex][3] = playerInfo[landerIndex][3] - rentToPay;
    playerInfo[ownerIndex][3] = playerInfo[ownerIndex][3] + rentToPay;
    document.getElementById("cash" + (ownerIndex + 1)).innerHTML = "Cash: " + playerInfo[ownerIndex][3];
    document.getElementById("cash" + (landerIndex + 1)).innerHTML = "Cash: " + playerInfo[landerIndex][3];
}

function viewProperties () {
    var player1Properties = playerProperties[0];
    var player2Properties = playerProperties[1];
    var player3Properties = playerProperties[2];
    var player4Properties = playerProperties[3];
    if (numPlayers === 2){
        alert('Player 1 Properties: ' + player1Properties + "\nPlayer 2 Properties: " + player2Properties);
    } else if (numPlayers === 3){
        alert('Player 1 Properties: ' + player1Properties +"\nPlayer 2 Properties: " + player2Properties +'\nPlayer 3 Properties: ' + player3Properties);
    } else if (numPlayers === 4){
        alert('Player 1 Properties: ' + player1Properties + "\nPlayer 2 Properties: " + player2Properties + '\nPlayer 3 Properties: ' + player3Properties +'\nPlayer 4 Properties: ' + player4Properties);
    }
}

function checkForMonopoly(region){
    var comparer;
    var playerIndex = currentTurn - 1;
    switch(region){
        case "browns":
            if (mediterraneanAveInfo[0] === balticAveInfo[0]){
                playerMonopolies[playerIndex].push("browns");
                alert("Player " + currentTurn + " has a monopoly on the " + region);
            }
            break;
        case "light blues":
            comparer = orientalAveInfo[0];
            if (vermontAveInfo[0] === comparer && connecticutAveInfo[0] === comparer){
                playerMonopolies[playerIndex].push("light blues");
                alert("Player " + currentTurn + " has a monopoly on the " + region);
            }
            break;
        case "purples":
            comparer = stCharlesPlaceInfo[0];
            if (statesAveInfo[0] === comparer && virginiaAveInfo[0] === comparer){
                playerMonopolies[playerIndex].push("purples");
                alert("Player " + currentTurn + " has a monopoly on the " + region);
            }
            break;
        case "oranges":
            comparer = stJamesPlaceInfo[0];
            if (tennesseeAveInfo[0] === comparer && newYorkAveInfo[0] === comparer){
                playerMonopolies[playerIndex].push("oranges");
                alert("Player " + currentTurn + " has a monopoly on the " + region);
            }
            break;
        case "reds":
            comparer = kentuckyAveInfo[0];
            if (indianaAveInfo[0] === comparer && illinoisAveInfo[0] === comparer){
                playerMonopolies[playerIndex].push("reds");
                alert("Player " + currentTurn + " has a monopoly on the " + region);
            }
            break;
        case "yellows":
            comparer = atlanticAveInfo[0];
            if (ventnorAveInfo[0] === comparer && marvinGardensAveInfo[0] === comparer){
                playerMonopolies[playerIndex].push("yellows");
                alert("Player " + currentTurn + " has a monopoly on the " + region);
            }
            break;
        case "greens":
            comparer = pacificAveInfo[0];
            if (northCarolinaAveInfo[0] === comparer && pennsylvaniaAveInfo[0] === comparer){
                playerMonopolies[playerIndex].push("greens");
                alert("Player " + currentTurn + " has a monopoly on the " + region);
            }
            break;
        case "dark blues":
            if (parkPlaceInfo[0] === boardwalkInfo[0]){
                playerMonopolies[playerIndex].push("dark blues");
                alert("Player " + currentTurn + " has a monopoly on the " + region);
            }
            break;
    }
}

function resetAndGrabLists() {
    var playerIndex = currentTurn - 1;
    var unmortgaged = [];
    var mortgaged = [];
    for (var i=0; i < playerProperties[playerIndex].length; i++){
        var locationInfo = playerProperties[playerIndex][i];
        if (locationInfo === "Electric Company" || locationInfo === "Water Works"){
            if (checkStateOfProperty(locationInfo, 1) === false){
                unmortgaged.push(locationInfo);
            } else {
                mortgaged.push(locationInfo); 
            }
        } else if (locationInfo === "B & O Railroad" ||locationInfo === "Reading Railroad" ||locationInfo === "Pennsylvania Railroad" ||locationInfo === "Short Line"){
            if (checkStateOfProperty(locationInfo, 1) === false){
                unmortgaged.push(locationInfo);
            } else {
                mortgaged.push(locationInfo);
            }
        } else {
            if (checkStateOfProperty(locationInfo, 2) === "mortgaged"){
                mortgaged.push(locationInfo);
            } else {
                unmortgaged.push(locationInfo);
            }
        }
    }
    return [unmortgaged, mortgaged];
}

function mortgageProperty() {
    playerIndex = currentTurn - 1;
    var option1 = prompt("Type 'mortgage' to mortgage a property. Type 'unmortgage' to unmortgage a property");
    if (option1 !== null){
        option1 = option1.toLowerCase();
        var houseData = resetAndGrabLists();
        switch (option1){
            case "mortgage":
                var chooseLocation = prompt("Enter Location Name as it is displayed to mortgage the property\n" + "Unmortgaged: " +houseData[0]+ "\nMortgaged: " + mortgaged);
                if (houseData[0].includes(chooseLocation)){
                    if (chooseLocation === "Electric Company" || chooseLocation === "Water Works"){
                        var amount = checkStateOfProperty(chooseLocation, 4);
                        changeStateOfProperty(chooseLocation, 1, true);
                    } else if (chooseLocation === "B & O Railroad" ||chooseLocation === "Reading Railroad" ||chooseLocation === "Pennsylvania Railroad" ||chooseLocation === "Short Line"){
                        var amount = checkStateOfProperty(chooseLocation, 6);
                        changeStateOfProperty(chooseLocation, 1, true);
                    } else {
                        var amount = checkStateOfProperty(chooseLocation, 11);
                        changeStateOfProperty(chooseLocation, 2, "mortgaged");
                    }
                    playerInfo[playerIndex][3] = playerInfo[playerIndex][3] + amount;
                    document.getElementById("cash" + (playerIndex + 1)).innerHTML = "Cash: " + playerInfo[playerIndex][3];
                    alert("Action Complete");
                } else {
                    alert("Invalid Location Selection");
                }
                break;
            case "unmortgage":
                var chooseLocation = prompt("Enter Location Name as it is displayed to mortgage the property\n" + "Unmortgaged: " +houseData[0]+ "\nMortgaged: " + houseData[1]);
                if (houseData[1].includes(chooseLocation)){
                    if (chooseLocation === "Electric Company" || chooseLocation === "Water Works"){
                        var amount = checkStateOfProperty(chooseLocation, 4);
                        changeStateOfProperty(chooseLocation, 1, false);
                    } else if (chooseLocation === "B & O Railroad" ||chooseLocation === "Reading Railroad" ||chooseLocation === "Pennsylvania Railroad" ||chooseLocation === "Short Line"){
                        var amount = checkStateOfProperty(chooseLocation, 6);
                        changeStateOfProperty(chooseLocation, 1, false);
                    } else {
                        var amount = checkStateOfProperty(chooseLocation, 11);
                        changeStateOfProperty(chooseLocation, 2, "none");
                    }
                    amount = amount * 1.1;
                    if (playerInfo[playerIndex][3] >= amount){
                        playerInfo[playerIndex][3] = playerInfo[playerIndex][3] - amount;
                        document.getElementById("cash" + (playerIndex + 1)).innerHTML = "Cash: " + playerInfo[playerIndex][3];
                        alert("Action Complete");
                    } else {
                        alert("Insufficent Funds");
                    }
                } else {
                    alert("Invalid Location Selection");
                }
                break;
            case "default":
                alert("Invalid Selection");
                break;
        }
    } else {
        alert("No selection made");
    }
}


function changeStateOfProperty (location, index, newValue){
    switch (location){
        case "Mediterranean Avenue":
            mediterraneanAveInfo[index] = newValue;
            break;
        case "Baltic Avenue":
            balticAveInfo[index] = newValue;
            break;
        case "Reading Railroad":
            readingRailRoadInfo[index] = newValue;
            break;
        case "Oriental Avenue":
            orientalAveInfo[index] = newValue;
            break;
        case "Vermont Avenue":
            vermontAveInfo[index] = newValue;
            break;
        case "Connecticut Avenue":
            connecticutAveInfo[index] = newValue;
            break;
        case "St. Charles Place":
            stCharlesPlaceInfo[index] = newValue;
            break;
        case "Electric Company":
            electricCompanyInfo[index] = newValue;
            break;
        case "States Avenue":
            statesAveInfo[index] = newValue;
            break;
        case "Virginia Avenue":
            virginiaAveInfo[index] = newValue;
            break;
        case "Pennsylvania Railroad":
            pennsylvaniaAveInfo[index] = newValue;
            break;
        case "St. James Place":
            stJamesPlaceInfo[index] = newValue;
            break;
        case "Tennessee Avenue":
            tennesseeAveInfo[index] = newValue;
            break;
        case "New York Avenue":
            newYorkAveInfo[index] = newValue;
            break;
        case "Kentucky Avenue":
            kentuckyAveInfo[index] = newValue;
            break;
        case "Indiana Avenue":
            indianaAveInfo[index] = newValue;
            break;
        case "Illinois Avenue":
            illinoisAveInfo[index] = newValue;
            break;
        case "B & O Railroad":
            bandoRailRoadInfo[index] = newValue;
            break;
        case "Atlantic Avenue":
            atlanticAveInfo[index] = newValue;
            break;
        case "Ventnor Avenue":
            ventnorAveInfo[index] = newValue;
            break;
        case "Water Works":
            waterWorksInfo[index] = newValue;
            break;
        case "Marvin Gardens":
            marvinGardensInfo[index] = newValue;
            break;
        case "Pacific Avenue":
            pacificAveInfo[index] = newValue;
            break;
        case "North Carolina Avenue":
            northCarolinaAveInfo[index] = newValue;
            break;
        case "Pennsylvania Avenue":
            pennsylvaniaAveInfo[index] = newValue;
            break;
        case "Short Line":
            shortLineInfo[index] = newValue;
            break;
        case "Park Place":
            parkPlaceInfo[index] = newValue;
            break;
        case "Boardwalk":
            boardwalkInfo[index] = newValue;
            break;
        default:
            alert("switch statement problem");
            break;
    }
}

function checkStateOfProperty (location, index){
    switch (location){
        case "Mediterranean Avenue":
            return mediterraneanAveInfo[index];
        case "Baltic Avenue":
            return balticAveInfo[index];
            
        case "Reading Railroad":
            return readingRailRoadInfo[index];
            
        case "Oriental Avenue":
            return orientalAveInfo[index];
            
        case "Vermont Avenue":
            return vermontAveInfo[index];
            
        case "Connecticut Avenue":
            return connecticutAveInfo[index];
            
        case "St. Charles Place":
            return stCharlesPlaceInfo[index];
            
        case "Electric Company":
            return electricCompanyInfo[index];
            
        case "States Avenue":
            return statesAveInfo[index];
            
        case "Virginia Avenue":
            return virginiaAveInfo[index];
            
        case "Pennsylvania Railroad":
            return pennsylvaniaAveInfo[index];
            
        case "St. James Place":
            return stJamesPlaceInfo[index];
            
        case "Tennessee Avenue":
            return tennesseeAveInfo[index];
            
        case "New York Avenue":
            return newYorkAveInfo[index];
            
        case "Kentucky Avenue":
            return kentuckyAveInfo[index];
            
        case "Indiana Avenue":
            return indianaAveInfo[index];
            
        case "Illinois Avenue":
            return illinoisAveInfo[index];
            
        case "B & O Railroad":
            return bandoRailRoadInfo[index];
            
        case "Atlantic Avenue":
            return atlanticAveInfo[index];
            
        case "Ventnor Avenue":
            return ventnorAveInfo[index];
            
        case "Water Works":
            return waterWorksInfo[index];
            
        case "Marvin Gardens":
            return marvinGardensInfo[index];
            
        case "Pacific Avenue":
            return pacificAveInfo[index];
            
        case "North Carolina Avenue":
            return northCarolinaAveInfo[index];
            
        case "Pennsylvania Avenue":
            return pennsylvaniaAveInfo[index];
            
        case "Short Line":
            return shortLineInfo[index];
            
        case "Park Place":
            return parkPlaceInfo[index];
            
        case "Boardwalk":
            return boardwalkInfo[index];
            
        default:
            alert("switch statement problem");
            break;
    }
}

function addHouses() {
    var playerIndex = currentTurn - 1;
    var option4 = confirm("These are the sets of properties that are available to build on " + playerMonopolies[playerIndex]);
    if (playerMonopolies[playerIndex].includes(option4)){
        switch (option4){
            case "browns":
                if (checkIfMortgaged(option4) === true){
                    alert("Property/Properties Are Mortgaged. Please Unmortgage to Build");
                } else {
                    var numHouses = balticAveInfo[2];
                    if (numHouses !== "hotel"){
                        var afirm = confirm("The " + region + " has " + numHouses + " houses.\nA upgrade costs " + (balticAveInfo[4] * 2) +".\nPress Okay to Confirm Upgrade, Press Cancel to Cancel");
                        if (afirm === true){
                            if (numHouses === "none"){
                                var newNumHouses = 1;
                            } else if (numHouses !== 4){
                                var newNumHouses = numHouses + 1;
                            } else {
                                var newNumHouses = "hotel";
                            }
                            changeStateOfProperty(balticAveInfo, 2, newNumHouses);
                            changeStateOfProperty(mediterraneanAveInfo, 2, newNumHouses);
                            if (checkIfEnoughMoney(balticAveInfo[4] * 2, playerIndex) === true){
                                playerInfo[playerIndex][3] -= balticAveInfo[4] * 2;
                                document.getElementById("cash" + (playerIndex + 1)).innerHTML = "Cash: " + playerInfo[playerIndex][3];
                                alert("Property Upgraded");
                            } else {
                                alert("Not Enough Money");
                            }
                        }
                    } else {
                        alert("Unable to Upgrade Futher");
                    }
                }
                break;
            case "light blues":
                if (checkIfMortgaged(option4) === true){
                    alert("Property/Properties Are Mortgaged. Please Unmortgage to Build");
                } else {
                    var numHouses = orientalAveInfo[2];
                    if (numHouses !== "hotel"){
                        var afirm = confirm("The " + region + " has " + numHouses + " houses.\nA upgrade costs " + (orientalAveInfo[4] * 3) +".\nPress Okay to Confirm Upgrade, Press Cancel to Cancel");
                        if (afirm === true){
                            if (numHouses === "none"){
                                var newNumHouses = 1;
                            } else if (numHouses !== 4){
                                var newNumHouses = numHouses + 1;
                            } else {
                                var newNumHouses = "hotel";
                            }
                            changeStateOfProperty(vermontAveInfo, 2, newNumHouses);
                            changeStateOfProperty(orientalAveInfo, 2, newNumHouses);
                            changeStateOfProperty(connecticutAveInfo, 2, newNumHouses);
                            if (checkIfEnoughMoney(vermontAveInfo[4] * 3, playerIndex) === true){
                                playerInfo[playerIndex][3] -= vermontAveInfo[4] * 3;
                                document.getElementById("cash" + (playerIndex + 1)).innerHTML = "Cash: " + playerInfo[playerIndex][3];
                                alert("Property Upgraded");
                            } else {
                                alert("Not Enough Money");
                            }
                        }
                    } else {
                        alert("Unable to Upgrade Futher");
                    }
                }
                break;
            case "purples":
                if (checkIfMortgaged(option4) === true){
                    alert("Property/Properties Are Mortgaged. Please Unmortgage to Build");
                } else {
                    var numHouses = stCharlesPlaceInfo[2];
                    if (numHouses !== "hotel"){
                        var afirm = confirm("The " + region + " has " + numHouses + " houses.\nA upgrade costs " + (stCharlesPlaceInfo[4] * 3) +".\nPress Okay to Confirm Upgrade, Press Cancel to Cancel");
                        if (afirm === true){
                            if (numHouses === "none"){
                                var newNumHouses = 1;
                            } else if (numHouses !== 4){
                                var newNumHouses = numHouses + 1;
                            } else {
                                var newNumHouses = "hotel";
                            }
                            changeStateOfProperty(stCharlesPlaceInfo, 2, newNumHouses);
                            changeStateOfProperty(statesAveInfo, 2, newNumHouses);
                            changeStateOfProperty(virginiaAveInfo, 2, newNumHouses);
                            if (checkIfEnoughMoney(stCharlesPlaceInfo[4] * 3, playerIndex) === true){
                                playerInfo[playerIndex][3] -= stCharlesPlaceInfo[4] * 3;
                                document.getElementById("cash" + (playerIndex + 1)).innerHTML = "Cash: " + playerInfo[playerIndex][3];
                                alert("Property Upgraded");
                            } else {
                                alert("Not Enough Money");
                            }
                        }
                    } else {
                        alert("Unable to Upgrade Futher");
                    }
                }
                break;
            case "oranges":
                if (checkIfMortgaged(option4) === true){
                    alert("Property/Properties Are Mortgaged. Please Unmortgage to Build");
                } else {
                    var numHouses = stJamesPlaceInfo[2];
                    if (numHouses !== "hotel"){
                        var afirm = confirm("The " + region + " has " + numHouses + " houses.\nA upgrade costs " + (stJamesPlaceInfo[4] * 3) +".\nPress Okay to Confirm Upgrade, Press Cancel to Cancel");
                        if (afirm === true){
                            if (numHouses === "none"){
                                var newNumHouses = 1;
                            } else if (numHouses !== 4){
                                var newNumHouses = numHouses + 1;
                            } else {
                                var newNumHouses = "hotel";
                            }
                            changeStateOfProperty(stJamesPlaceInfo, 2, newNumHouses);
                            changeStateOfProperty(tennesseeAveInfo, 2, newNumHouses);
                            changeStateOfProperty(newYorkAveInfo, 2, newNumHouses);
                            if (checkIfEnoughMoney(stJamesPlaceInfo[4] * 3, playerIndex) === true){
                                playerInfo[playerIndex][3] -= stJamesPlaceInfo[4] * 3;
                                document.getElementById("cash" + (playerIndex + 1)).innerHTML = "Cash: " + playerInfo[playerIndex][3];
                                alert("Property Upgraded");
                            } else {
                                alert("Not Enough Money");
                            }
                        }
                    } else {
                        alert("Unable to Upgrade Futher");
                    }
                }
                break;
            case "reds":
                if (checkIfMortgaged(option4) === true){
                    alert("Property/Properties Are Mortgaged. Please Unmortgage to Build");
                } else {
                    var numHouses = kentuckyAveInfo[2];
                    if (numHouses !== "hotel"){
                        var afirm = confirm("The " + region + " has " + numHouses + " houses.\nA upgrade costs " + (kentuckyAveInfo[4] * 3) +".\nPress Okay to Confirm Upgrade, Press Cancel to Cancel");
                        if (afirm === true){
                            if (numHouses === "none"){
                                var newNumHouses = 1;
                            } else if (numHouses !== 4){
                                var newNumHouses = numHouses + 1;
                            } else {
                                var newNumHouses = "hotel";
                            }
                            changeStateOfProperty(kentuckyAveInfo, 2, newNumHouses);
                            changeStateOfProperty(indianaAveInfo, 2, newNumHouses);
                            changeStateOfProperty(illinoisAveInfo, 2, newNumHouses);
                            if (checkIfEnoughMoney(kentuckyAveInfo[4] * 3, playerIndex) === true){
                                playerInfo[playerIndex][3] -= kentuckyAveInfo[4] * 3;
                                document.getElementById("cash" + (playerIndex + 1)).innerHTML = "Cash: " + playerInfo[playerIndex][3];
                                alert("Property Upgraded");
                            } else {
                                alert("Not Enough Money");
                            }
                        }
                    } else {
                        alert("Unable to Upgrade Futher");
                    }
                }
                break;
            case "yellows":
                if (checkIfMortgaged(option4) === true){
                    alert("Property/Properties Are Mortgaged. Please Unmortgage to Build");
                } else {
                    var numHouses = marvinGardensInfo[2];
                    if (numHouses !== "hotel"){
                        var afirm = confirm("The " + region + " has " + numHouses + " houses.\nA upgrade costs " + (marvinGardensInfo[4] * 3) +".\nPress Okay to Confirm Upgrade, Press Cancel to Cancel");
                        if (afirm === true){
                            if (numHouses === "none"){
                                var newNumHouses = 1;
                            } else if (numHouses !== 4){
                                var newNumHouses = numHouses + 1;
                            } else {
                                var newNumHouses = "hotel";
                            }
                            changeStateOfProperty(marvinGardensInfo, 2, newNumHouses);
                            changeStateOfProperty(ventnorAveInfo, 2, newNumHouses);
                            changeStateOfProperty(atlanticAveInfo, 2, newNumHouses);
                            if (checkIfEnoughMoney(marvinGardensInfo[4] * 3, playerIndex) === true){
                                playerInfo[playerIndex][3] -= marvinGardensInfo[4] * 3;
                                document.getElementById("cash" + (playerIndex + 1)).innerHTML = "Cash: " + playerInfo[playerIndex][3];
                                alert("Property Upgraded");
                            } else {
                                alert("Not Enough Money");
                            }
                        }
                    } else {
                        alert("Unable to Upgrade Futher");
                    }
                }
                break;
            case "greens":
                if (checkIfMortgaged(option4) === true){
                    alert("Property/Properties Are Mortgaged. Please Unmortgage to Build");
                } else {
                    var numHouses = pacificAveInfo[2];
                    if (numHouses !== "hotel"){
                        var afirm = confirm("The " + region + " has " + numHouses + " houses.\nA upgrade costs " + (pacificAveInfo[4] * 3) +".\nPress Okay to Confirm Upgrade, Press Cancel to Cancel");
                        if (afirm === true){
                            if (numHouses === "none"){
                                var newNumHouses = 1;
                            } else if (numHouses !== 4){
                                var newNumHouses = numHouses + 1;
                            } else {
                                var newNumHouses = "hotel";
                            }
                            changeStateOfProperty(pacificAveInfo, 2, newNumHouses);
                            changeStateOfProperty(northCarolinaAveInfo, 2, newNumHouses);
                            changeStateOfProperty(pennsylvaniaAveInfo, 2, newNumHouses);
                            if (checkIfEnoughMoney(pacificAveInfo[4] * 3, playerIndex) === true){
                                playerInfo[playerIndex][3] -= pacificAveInfo[4] * 3;
                                document.getElementById("cash" + (playerIndex + 1)).innerHTML = "Cash: " + playerInfo[playerIndex][3];
                                alert("Property Upgraded");
                            } else {
                                alert("Not Enough Money");
                            }
                        }
                    } else {
                        alert("Unable to Upgrade Futher");
                    }
                }
                break;
            case "dark blues":
                if (checkIfMortgaged(option4) === true){
                    alert("Property/Properties Are Mortgaged. Please Unmortgage to Build");
                } else {
                    var numHouses = parkPlaceInfo[2];
                    if (numHouses !== "hotel"){
                        var afirm = confirm("The " + region + " has " + numHouses + " houses.\nA upgrade costs " + (parkPlaceInfo[4] * 2) +".\nPress Okay to Confirm Upgrade, Press Cancel to Cancel");
                        if (afirm === true){
                            if (numHouses === "none"){
                                var newNumHouses = 1;
                            } else if (numHouses !== 4){
                                var newNumHouses = numHouses + 1;
                            } else {
                                var newNumHouses = "hotel";
                            }
                            changeStateOfProperty(parkPlaceInfo, 2, newNumHouses);
                            changeStateOfProperty(boardwalkInfo, 2, newNumHouses);
                            if (checkIfEnoughMoney(parkPlaceInfo[4] * 2, playerIndex) === true){
                                playerInfo[playerIndex][3] -= parkPlaceInfo[4] * 2;
                                document.getElementById("cash" + (playerIndex + 1)).innerHTML = "Cash: " + playerInfo[playerIndex][3];
                                alert("Property Upgraded");
                            } else {
                                alert("Not Enough Money");
                            }

                        }
                    } else {
                        alert("Unable to Upgrade Futher");
                    }
                }
                break;
                
        }
    }
}

function checkIfMortgaged (region){
    switch (region){
        case "browns":
            if (mediterraneanAveInfo[2] === "mortgaged" || balticAveInfo[2] === "mortgaged"){
                return true
            } else {
                return false
            }
        case "light blues":
            if (connecticutAveInfo[2] === "mortgaged" || vermontAveInfo[2] === "mortgaged" || orientalAveInfo[2] === "mortgaged"){
                return true
            } else {
                return false
            }
        case "purples":
            if (stCharlesPlaceInfo[2] === "mortgaged" || statesAveInfo[2] === "mortgaged" || virginiaAveInfo[2] === "mortgaged"){
                return true
            } else {
                return false
            }
        case "oranges":
            if (stJamesPlaceInfo[2] === "mortgaged" || tennesseeAveInfo[2] === "mortgaged" || newYorkAveInfo[2] === "mortgaged"){
                return true
            } else {
                return false
            }
        case "reds":
            if (kentuckyAveInfo[2] === "mortgaged" || indianaAveInfo[2] === "mortgaged" || illinoisAveInfo[2] === "mortgaged"){
                return true
            } else {
                return false
            }
        case "yellows":
            if (marvinGardensInfo[2] === "mortgaged" || ventnorAveInfo[2] === "mortgaged" || atlanticAveInfo[2] === "mortgaged"){
                return true
            } else {
                return false
            }
        case "greens":
            if (pennsylvaniaAveInfo[2] === "mortgaged" || northCarolinaAveInfo[2] === "mortgaged" || pacificAveInfo[2] === "mortgaged"){
                return true
            } else {
                return false
            }
        case "dark blues":
            if (parkPlaceInfo[2] === "mortgaged" || boardwalkInfo[2] === "mortgaged"){
                return true
            } else {
                return false
            }
    }
}

function checkIfEnoughMoney (price, playerIndex){
    if (playerInfo[playerIndex][3] > price){
        return true;
    } else {
        return false;
    }
}