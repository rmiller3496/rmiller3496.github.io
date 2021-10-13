// Unit Conversions

// Speed Conversions
var speedToConvert;
var convertedSpeed;
var unitSpeed1;
var unitSpeed2;


function updateSpeedSelection1(){
	var selectSpeed1 = document.getElementById('speedInitialUnit');
	unitSpeed1 = selectSpeed1.options[selectSpeed1.selectedIndex].value;
	console.log(unitSpeed1);
}

function updateSpeedSelection2(){
	var selectSpeed2 = document.getElementById('speedFinalUnit');
	unitSpeed2 = selectSpeed2.options[selectSpeed2.selectedIndex].value;
	console.log(unitSpeed2);
}

function speedDataAndConvert() {
	speedToConvert = Number(prompt("Enter Your Speed/Velocity"));
	if (speedToConvert === null){
		alert("No Value Entered");
	} else {
		if (isNaN(speedToConvert)){
			alert("Improper Speed/Velocity")
		} else{
			if (unitSpeed1 === unitSpeed2){
				alertConverted(speedToConvert, speedToConvert, unitSpeed1, unitSpeed2);
			} else {
				if (unitSpeed1 === "main" && unitSpeed2 === "main"){
					alert('Invalid Unit Selection');
				} else {
				switch(unitSpeed1){

					case  "m/s":
						switch(unitSpeed2){
							
							case " ft/s":
								convertedSpeed = speedToConvert * 3.281;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							case " mph":
								convertedSpeed = speedToConvert * 2.237;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							case " km/h":
								convertedSpeed = speedToConvert * 3.6;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							case " knots":
								convertedSpeed = speedToConvert * 1.944;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							default:
								alert("Invalid Unit Selection");
								break;
						}
						break;
					case " ft/s":
						switch(unitSpeed2){
							
							case " m/s":
								convertedSpeed = speedToConvert / 3.281;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							case " mph":
								convertedSpeed = speedToConvert / 1.467;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							case " km/h":
								convertedSpeed = speedToConvert * 1.097;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							case " knots":
								convertedSpeed = speedToConvert / 1.688;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							default:
								alert("Invalid Unit Selection");
								break;
	
						}
						break;
					case " mph":
						switch(unitSpeed2){
							
							case " ft/s":
								convertedSpeed = speedToConvert * 1.467;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							case " m/s":
								convertedSpeed = speedToConvert / 2.237;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							case " km/h":
								convertedSpeed = speedToConvert * 1.609;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							case " knots":
								convertedSpeed = speedToConvert / 1.151;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							default:
								alert("Invalid Unit Selection");
								break;
						}
						break;
					case " km/h":
						switch(unitSpeed2){
							
							case " ft/s":
								convertedSpeed = speedToConvert / 1.097;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							case " mph":
								convertedSpeed = speedToConvert / 1.609;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							case " m/s":
								convertedSpeed = speedToConvert / 3.6;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							case " knots":
								convertedSpeed = speedToConvert / 1.852;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							default:
								alert("Invalid Unit Selection");
								break;
	
						}
						break;
					case " knots":
						switch(unitSpeed2){
							
							case " ft/s":
								convertedSpeed = speedToConvert * 1.688;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							case " mph":
								convertedSpeed = speedToConvert * 1.151;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							case " m/s":
								convertedSpeed = speedToConvert / 1.944;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							case " km/h":
								convertedSpeed = speedToConvert * 1.852;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							default:
								alert("Invalid Unit Selection");
								break;
	
						}
						break;
				default:
					alert("Invalid Unit Selection");
					break;
				}
				}
			}
		}
	}
}

function alertConverted(val1, val2, unit1, unit2){
	alert(val1 + unit1 + " is " + val2 + unit2);
}


var tempToConvert;
var convertedTemp;
var unitTemp1;
var unitTemp2;


function updateTempSelection1(){
	var selectTemp1 = document.getElementById('tempInitialUnit');
	unitTemp1 = selectTemp1.options[selectTemp1.selectedIndex].value;
	console.log(unitTemp1);
}

function updateTempSelection2(){
	var selectTemp2 = document.getElementById('tempFinalUnit');
	unitTemp2 = selectTemp2.options[selectTemp2.selectedIndex].value;
	console.log(unitTemp2);
}

function tempDataAndConvert() {
	tempToConvert = Number(prompt("Enter Your Temperature"));
	if (tempToConvert === null){
		alert("No Value Entered");
	} else {
		if (isNaN(tempToConvert)){
			alert("Improper Temperature")
		} else{
			if (unitTemp1 === unitTemp2){
				alertConverted(tempToConvert, tempToConvert, unitTemp1, unitTemp2);
			} else {
				if (unitTemp1 === "main" && unitTemp2 === "main"){
					alert('Invalid Unit Selection');
				} else {
				switch(unitTemp1){

					case "℉":
						switch(unitTemp2){
							
							case "℃":
								convertedTemp = (tempToConvert - 32) * (5/9);
								alertConverted(tempToConvert, convertedTemp, unitTemp1, unitTemp2);
								break;
							case "K":
								convertedTemp = ((tempToConvert - 32) *(5/9)) + 273.15;
								alertConverted(tempToConvert, convertedTemp, unitTemp1, unitTemp2);
								break;
							default:
								alert("Invalid Unit Selection");
								break;
						}
						break;

					case "℃":
						switch(unitTemp2){
							
							case "℉":
								convertedTemp = (tempToConvert * (9/5)) + 32;
								alertConverted(tempToConvert, convertedTemp, unitTemp1, unitTemp2);
								break;
							case "K":
								convertedTemp = tempToConvert + 273.15;
								alertConverted(tempToConvert, convertedTemp, unitTemp1, unitTemp2);
								break;
							default:
								alert("Invalid Unit Selection");
								break;
	
						}
						break;
						
					case "K":
						switch(unitTemp2){
							
							case "℉":
								convertedTemp = ((tempToConvert - 273.15) * (9/5)) + 32;
								alertConverted(tempToConvert, convertedTemp, unitTemp1, unitTemp2);
								break;
							case "℃":
								convertedTemp = TempToConvert - 273.15;
								alertConverted(tempToConvert, convertedTemp, unitTemp1, unitTemp2);
								break;
						}
						break;
				default:
					alert("Invalid Unit Selection");
					break;
				}
				}
			}
		}
	}
}
