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

					case "m/s":
						switch(unitSpeed2){
							
							case "ft/s":
								convertedSpeed = speedToConvert * 3.281;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							case "mph":
								convertedSpeed = speedToConvert * 2.237;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							case "km/h":
								convertedSpeed = speedToConvert * 3.6;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							case "knots":
								convertedSpeed = speedToConvert * 1.944;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							default:
								alert("Invalid Unit Selection");
								break;
						}
						break;
					case "ft/s":
						switch(unitSpeed2){
							
							case "m/s":
								convertedSpeed = speedToConvert / 3.281;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							case "mph":
								convertedSpeed = speedToConvert / 1.467;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							case "km/h":
								convertedSpeed = speedToConvert * 1.097;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							case "knots":
								convertedSpeed = speedToConvert / 1.688;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							default:
								alert("Invalid Unit Selection");
								break;
	
						}
						break;
					case "mph":
						switch(unitSpeed2){
							
							case "ft/s":
								convertedSpeed = speedToConvert * 1.467;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							case "m/s":
								convertedSpeed = speedToConvert / 2.237;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							case "km/h":
								convertedSpeed = speedToConvert * 1.609;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							case "knots":
								convertedSpeed = speedToConvert / 1.151;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							default:
								alert("Invalid Unit Selection");
								break;
						}
						break;
					case "km/h":
						switch(unitSpeed2){
							
							case "ft/s":
								convertedSpeed = speedToConvert / 1.097;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							case "mph":
								convertedSpeed = speedToConvert / 1.609;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							case "m/s":
								convertedSpeed = speedToConvert / 3.6;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							case "knots":
								convertedSpeed = speedToConvert / 1.852;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							default:
								alert("Invalid Unit Selection");
								break;
	
						}
						break;
					case "knots":
						switch(unitSpeed2){
							
							case "ft/s":
								convertedSpeed = speedToConvert * 1.688;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							case "mph":
								convertedSpeed = speedToConvert * 1.151;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							case "m/s":
								convertedSpeed = speedToConvert / 1.944;
								alertConverted(speedToConvert, convertedSpeed, unitSpeed1, unitSpeed2);
								break;
							case "km/h":
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
	alert(val1 + " " + unit1 + " is " + val2 + " " + unit2);
}
