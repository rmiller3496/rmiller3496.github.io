// Global Variables
var numPlayers;
const locationArray = [];
const namedLocationArray = ["Go", "Mediteranean Avenue", "Community Chest Browns", "Baltic Avenue", "Income Tax", "Reading Railroad", "Oriental Avenue", "Chance Light Blues", "Vermont Avenue", "Conneticut Avenue", "Just Visiting", "St. Charles Place", "Electric Company", "St. James Place", "States Avenue", "Virginia Avenue", "Pennsylvania Railroad", "St. James Place", "Community Chest Orange", "Tenessee Avenue", "New York Avenue", "Free Parking", "Kentucky Avenue", "Chance Reds", "Indiana Avenue", "Illnois Avenue", "B & O Railroad", "Atlantic Avenue", "Ventnor Avenue", "Water Works", "Marvin Gardens", "Go To Jail", "Pacific Avenue", "North Carolina Avenue", "Community Chest Greens", "Pennsylvania Avenue", "Short Line", "Chance Dark Blues", "Park Place", "Luxury Tax", "Boardwalk"];
var roll1;
var roll2;
var currentTurn = 1;
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

function createLocationArray() {
    for (var i=1; i < 11; i++){
        locationArray.push(i + ",1");
    }
    for (var i=1; i < 11; i++){
        locationArray.push("10,"+ i);
    }
    for (var i=10; i > 0; i--){
        locationArray.push(i + ",10");
    }
    for (var i=10; i > 0; i--){
        locationArray.push("1," + i);
    }
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