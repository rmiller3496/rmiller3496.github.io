// Multiple Physics Calculators

var initialVelocity;
var finalVelocity;
var changeInVelocity;
var time;
var acceleration;
var deltaX;
var typeOfVelocity;

// Equation 1

function eqn1FinalVelocity() {
		//Get Data
		initialVelocity = prompt("Enter Initial Velocity (in m/s)");
		
		//check for null value
		if (initialVelocity === null){
			alert("No value entered");
		} else {
			initialVelocity = Number(initialVelocity);
			time = prompt("Enter Time (in seconds)");
			if (time === null){
				alert("No value entered");
			} else {
				time = Number(time);
				if (time < 0){
					alert("Negative Time");
				} else {
					acceleration = prompt("Enter Acceleration (in m/s/s)");
					if (acceleration === null){
						alert("No value entered");
					} else {
						acceleration = Number(acceleration)
						//check for improper number
						if (isNaN(initialVelocity) || isNaN(time) || isNaN(acceleration)){
							if (isNaN(initialVelocity)){
								alert("Improper Initial Velocity");
							} else if (isNaN(time)){
								alert("Improper Time");
							} else if (isNaN(acceleration)){
								alert("Improper Acceleration");
							} else {
								alert("Unexpected Error");
							}
						} else {
							//calculate final velocity
							finalVelocity = initialVelocity + (acceleration * time);
							alert("Final Velocity is " + finalVelocity + " m/s");
						}
					}
				}
			}
		}	
}

  function eqn1InitialVelocity() {
		//Get Data
		finalVelocity = prompt("Enter Final Velocity (in m/s)");
		
		//check for null value
		if (finalVelocity === null){
			alert("No value entered");
		} else {
			finalVelocity = Number(finalVelocity);
			time = prompt("Enter Time (in seconds)");
			if (time === null){
				alert("No value entered");
			} else {
				time = Number(time);
				if (time < 0){
					alert("Negative Time");
				} else {
					acceleration = prompt("Enter Acceleration (in m/s/s)");
					if (acceleration === null){
						alert("No value entered");
					} else {
						acceleration = Number(acceleration)
						//check for improper number
						if (isNaN(finalVelocity) || isNaN(time) || isNaN(acceleration)){
							if (isNaN(finalVelocity)){
								alert("Improper Final Velocity");
							} else if (isNaN(time)){
								alert("Improper Time");
							} else if (isNaN(acceleration)){
								alert("Improper Acceleration");
							} else {
								alert("Unexpected Error");
							}
						} else {
							//calculate final velocity
							initialVelocity = ((acceleration * time) - finalVelocity) * -1;
							alert("Initial Velocity is " + initialVelocity + " m/s");
						}
					}
				}
			}
		}		
  }

  function eqn1Acceleration() {
		//Get Data
		typeOfVelocity = prompt("Which type of velocity do you want to enter: Change in Velocity or Final and Initial Velocity?");
		if (typeOfVelocity !== null){
			typeOfVelocity = typeOfVelocity.toLowerCase();
		}
		
		if (typeOfVelocity === "change" || typeOfVelocity === "change in" || typeOfVelocity === "change in velocity"){
			changeInVelocity = prompt("Enter the change in velocity (in m/s)");
			
			if (changeInVelocity === null){
				alert("No Value Entered");
			} else {
				changeInVelocity = Number(changeInVelocity);
				time = prompt("Enter Time (in seconds)");
				if (time === null){
					alert("No Value Entered");
				} else {
					time = Number(time);
					if (time < 0){
						alert("Negative Time")
					} else {
						if (isNaN(changeInVelocity) || isNaN(time)){
							if (isNaN(changeInVelocity)){
								alert("Improper Change In Velocity");
							} else if (isNaN(time)){
								alert("Improper Time");
							} else {
								alert("Unknown Error");
							}
						} else {
							acceleration = changeInVelocity / time;
							alert("Acceleration is " + acceleration + " m/s/s");
							}
					}
				}
			}
		} else if (typeOfVelocity === "final and initial" || typeOfVelocity === "final and initial velocity" || typeOfVelocity === "initial and final"){
			
			finalVelocity = prompt("Enter the final velocity (in m/s)");
			if (finalVelocity === null){
				alert("No Value Entered");
			} else {
				finalVelocity = Number(finalVelocity);
				initialVelocity = prompt("Enter the initial velocity (in m/s)");
				if (initialVelocity === null){
					alert("No Value Entered");
				} else {
					initialVelocity = Number(initialVelocity);
					time = prompt("Enter Time (in seconds)");
					if (time === null){
						alert("No Value Entered");
					} else {
						time = Number(time);
						if (time < 0){
							alert("Negative Time")
						} else {
						
							if (isNaN(initialVelocity) || isNaN(finalVelocity) || isNaN(time)){
								if (isNaN(initialVelocity)){
									alert("Improper Initial Velocity");
								} else if (isNaN(finalVelocity)){
									alert("Improper Final Velocity");
								}	else if (isNaN(time)){
									alert("Improper Time");
								} else {
									alert("Unknown Error");
								}
							} else {
								acceleration = (finalVelocity - initialVelocity) / time;
								alert("Acceleration is " + acceleration + " m/s/s");
							}
						}
					}
				}
			}
		} else {
			alert("Improper Selection");
		}
}

  function eqn1Time() {
		//Get Data
		typeOfVelocity = prompt("Which type of velocity do you want to enter: Change in Velocity or Final and Initial Velocity?");
		if (typeOfVelocity !== null){
			typeOfVelocity = typeOfVelocity.toLowerCase();
		}
		
		if (typeOfVelocity === "change" || typeOfVelocity === "change in" || typeOfVelocity === "change in velocity"){
			changeInVelocity = prompt("Enter the change in velocity (in m/s)");
			
			if (changeInVelocity === null){
				alert("No Value Entered");
			} else {
				changeInVelocity = Number(changeInVelocity);
				acceleration = prompt("Enter Acceleration (in m/s/s)");
				if (acceleration === null){
					alert("No Value Entered");
				} else {
					acceleration = Number(acceleration);
					
					if (isNaN(changeInVelocity) || isNaN(acceleration)){
						if (isNaN(changeInVelocity)){
							alert("Improper Change In Velocity");
						} else if (isNaN(acceleration)){
							alert("Improper Acceleration");
						} else {
							alert("Unknown Error");
						}
					} else {
						time = changeInVelocity / acceleration;
						alert("Time is " + time + " seconds");
					}
				}
			}
		} else if (typeOfVelocity === "final and initial" || typeOfVelocity === "final and initial velocity" || typeOfVelocity === "initial and final"){
			
			finalVelocity = prompt("Enter the final velocity (in m/s)");
			if (finalVelocity === null){
				alert("No Value Entered");
			} else {
				finalVelocity = Number(finalVelocity);
				initialVelocity = prompt("Enter the initial velocity (in m/s)");
				if (initialVelocity === null){
					alert("No Value Entered");
				} else {
					initialVelocity = Number(initialVelocity);
					acceleration = prompt("Enter Acceleration (in m/s/s)");
					if (acceleration === null){
						alert("No Value Entered");
					} else {
						acceleration = Number(acceleration);
						
					  if (isNaN(initialVelocity) || isNaN(finalVelocity) || isNaN(acceleration)){
							if (isNaN(initialVelocity)){
								alert("Improper Initial Velocity");
							} else if (isNaN(finalVelocity)){
								alert("Improper Final Velocity");
							}	else if (isNaN(acceleration)){
								alert("Improper Acceleration");
							} else {
								alert("Unknown Error");
							}
						} else {
							time = (finalVelocity - initialVelocity) / acceleration;
							if (time < 0){
								alert("Impossible Values, Negative Time")
							} else {
								alert("Time is " + time + " seconds");
							}
						}
					}
				}
			}
		} else {
			alert("Improper Selection");
		}
	}
