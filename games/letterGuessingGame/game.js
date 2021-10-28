/* Error Codes:
    Code 1: Error with identifying html document
    Code 2: Confirm Statemnet Malfunction
    Code 3: Random Word Selection Error
*/

// Random Words
var numWords = 5;
var words4 = ["frog", "home", "expo", "desk", "book"];
var words5 = ["apple", "ghost", "chair", "iphone", "jacket"];
var words6 = ["wizard", "genome", "marker", "school", "aligns"];
var words7 = ["qualify", "biology", "console", "consult", "student"];
var words8 = ["identify", "computer", "quandary", "morality", "centered"];

// Global Variables
var key;
var keyArray = [];

// Find Which HTML Document is being displayed
var gameMode = location.pathname.split('/').pop();

//Update screen to reflect gamemode as well as get any information required.
switch (gameMode){    
    case "pvp.html":
        document.getElementById('gameMode').innerHTML = "<h4> PvP Selected </h4>";
        getKey();
        alert(keyArray);
        break;
    case "solo.html":
        document.getElementById('gameMode').innerHTML = "<h4> Solo Selected </h4>";
        selectKey();
        alert(keyArray);
        break;
    default:
        alert("Error Code 1");
        break;
}

// Get Word for PvP Mode
function getKey () {
    key = prompt("Enter Word for other player(s) to guess. No Spaces/Special Characters\nWord Must be between 4 and 8 letters\nEnter \"stop\" to stop");
    if (key.length > 8 || key.length < 4){
        alert("Word is too long/short");
        getKey();
    }
    //Prevent User from entering nothing
    if (key === null){
        alert("Key Cannot Be Blank");
        getKey();
    }
    //Confirm Word & Create Array
    if (key !== "stop"){
        var afirm = confirm("Confirm the word:  " + key + "\nIf not, press cancel");
        if (afirm === true){
            keyArray = strToArray(key, keyArray);
        } else if (afirm === false){
            getKey();
        } else {
            alert("Error Code 2");
        } 
    }
}

// Get Key For Solo
function selectKey () {
    var chooseLength = prompt("Enter A number between 4 and 8 to select the length of the word that you will guess.\nEnter \"stop\" to cancel");
    if (chooseLength !== null){
        chooseLength = Number(chooseLength);
        if (isNaN(chooseLength)){
            alert("Non Number Entered");
            selectKey();
        } else {
            var selector = Math.floor(Math.random() * (numWords - 1));
            switch(chooseLength){
                case 4:
                    key = words4[selector];
                    keyArray = strToArray(key, keyArray);
                    break;
                case 5:
                    key = words5[selector];
                    keyArray = strToArray(key, keyArray);
                    break;
                case 6:
                    key = words6[selector];
                    keyArray = strToArray(key, keyArray);
                    break;
                case 7:
                    key = words7[selector];
                    keyArray = strToArray(key, keyArray);
                    break;
                case 8:
                    key = words7[selector];
                    keyArray = strToArray(key, keyArray);
                    break;
                default:
                    alert("Error Code 3");
                    break;
            }
        }
    } else if (chooseLength === "stop") {
        // Stop
    } else {
        alert("No Value Entered");
        selectKey();
    }
}

// String to Array
function strToArray (str, array){
    array = str.split("");
    return array;
}