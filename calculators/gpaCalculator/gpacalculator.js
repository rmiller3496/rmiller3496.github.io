var classes = [];
var advOrNot = [];
var classGrade = [];
var gpaPoints = [];
var normalModifier = [4, 3, 2, 1, 0];
var apModifier = [5, 4, 3, 2, 0];
var honorsModifier = [4.4, 3.3, 2.2, 1.1, 0];
var numClasses;
var finalGPA;
var sum = 0;
var classInformation = [];
var howToCreate;



function updateNumberOfClasses (){
    var selectClasses1 = document.getElementById('numberOfClasses');
	numClasses = selectClasses1.options[selectClasses1.selectedIndex].value;
	numClasses = Number(numClasses);
}


function addClasses () {
	if (isNaN(numClasses)){
		alert("Invalid Data");
	} else {
		for (i = 0; i < numClasses; i++ ){
			var className = prompt("Enter Class Name. Include AP or Honors designation")
			classes.push(className);
			classInformation.push([className]);
		}
		for (i = 0; i < numClasses; i++){
			var classDesig = classes[i];
			if (classDesig !== null){
				classDesig = classDesig.toLowerCase()
			}
			if (classDesig.includes("honors")){
				advOrNot.push("H");
			} else if (classDesig.includes("ap")){
				advOrNot.push("AP");
			} else {
				advOrNot.push("none");
			}
		}
		avenueToTake();
	}
}

function avenueToTake() {
	var step1 = prompt("To enter assignment grades to calculate GPA, please type \"assignment\"\nTo Enter Overall Grades, type \"overall\"");
	if (step1 !== null){
		step1 = step1.toLowerCase();
		switch(step1){
			case "assignment":
				takeAssignmentsCreateGrade();
				howToCreate = 5;
				break;
			case "overall":
				var step2 = prompt("To Enter Letter Grade, please type \"letter\"\nTo Enter Numerical Grade, please type \"number\"");
				if (step2 !== null){
					step2 = step2.toLowerCase();
					switch(step2){
						case "letter":
							classGrades();
							howToCreate = 3;
							break;
						case "number":
							classNumGrades();
							howToCreate = 4;
							break;
						default:
							alert("Error Code: Avenue");
							break;
					}
				} else {
					alert("Invalid Choice");
				}
				break;
			default:
				alert("Error Code: Avenue 2");
				break;
		}
	} else {
		alert("Invalid Choice");
	}
}

function classNumGrades(){
	var numClassGradeArray = [];
	for (i = 0; i < numClasses; i++){
		var numToEnter = prompt("Enter Numerical Grade for " + classes[i]);
		if (numToEnter !== null){
			if(isNaN(numToEnter)){
				alert("Non-number entered");
			} else {
				numToEnter = Number(numToEnter);
				numClassGradeArray.push(numToEnter);
				classInformation[i].push(classes[i] + " Grade : " + numToEnter);
			}
		} else {
			alert("No Value Entered");
		}
	}
	numericalGradeToLetter(numClassGradeArray);
}


function takeAssignmentsCreateGrade(){
	var classNumGrade = [];
	for (var i = 0; i < numClasses; i++){
		var assignmentGrades = [];
		var numAssignments = prompt(classes[i] + " selected. Enter Number of Assignments");
		
		if (numAssignments !== null){
			if (isNaN(numAssignments)){
				alert("Non-number entered")
			} else {
				numAssignments = Number(numAssignments);
				var sum = 0;
				var strAssignmentGrades = prompt("Enter all of the numerical grades for the " + numAssignments + " assignments.\nSeperate the scores by a comma. (e.x. 93,94,95)");
				assignmentGrades = strAssignmentGrades.split(",");
				if (assignmentGrades.length !== numAssignments){
					alert("Improper Number of Grades Entered");
					break;
				} else {
				for (var j = 0; j < numAssignments; j++){
					sum += Number(assignmentGrades[j]);
				}
				var classTotalGrade = sum / numAssignments;
				classTotalGrade = classTotalGrade.toFixed(2);
				classNumGrade.push(classTotalGrade);
				classInformation[i].push("Assignment Grades for " + classes[i] + ": " + assignmentGrades);
				classInformation[i].push(classes[i] + " Grade: " + classNumGrade[i]);
				}
			}
		} else {
			alert("No Value Entered")
			break;
		}
		}
		numericalGradeToLetter(classNumGrade);
	}


function numericalGradeToLetter(array){
	for (i = 0; i < array.length; i++){
		if (array[i] >= 93){
			classGrade.push("A");
			classInformation[i].push((classes[i] + ": A"));
		} else if (array[i] >= 85){
			classGrade.push("B");
			classInformation[i].push(classes[i] + ": B");
		} else if (array[i] >= 75){
			classGrade.push("C");
			classInformation[i].push(classes[i] + ": C");
		} else if (array[i] >= 67){
			classGrade.push("D");
			classInformation[i].push(classes[i] + ": D");
		} else {
			classGrade.push("F");
			classInformation[i].push(classes[i] + ": F");
		}
	}
	calculateGPAPoints();
}


function classGrades(){
	for (i = 0; i < numClasses; i++){
		var letterGrade = prompt("Enter grade in letter form. i.e. A or A+\nClass Selected: " + classes[i]);
		classGrade.push(letterGrade);
		classInformation[i].push(classes[i] + " Grade: " + letterGrade);
	}
	calculateGPAPoints();
}


function calculateGPAPoints () {
	for (i=0; i < numClasses; i++){
		var grade = classGrade[i]
		if (grade.includes("+") || grade.includes("-")){
			grade = grade.slice(0, -1);
		}
		switch(grade){
			case "A":
				switch(advOrNot[i]){
					case "AP":
						gpaPoints.push(apModifier[0]);
						break;
					case "H":
						gpaPoints.push(honorsModifier[0]);
						break;
					case "none":
						gpaPoints.push(normalModifier[0]);
						break;
				}
				break;
			case "B":
				switch(advOrNot[i]){
					case "AP":
						gpaPoints.push(apModifier[1]);
						break;
					case "H":
						gpaPoints.push(honorsModifier[1]);
						break;
					case "none":
						gpaPoints.push(normalModifier[1]);
						break;
				}
				break;
			case "C":
				switch(advOrNot[i]){
					case "AP":
						gpaPoints.push(apModifier[2]);
						break;
					case "H":
						gpaPoints.push(honorsModifier[2]);
						break;
					case "none":
						gpaPoints.push(normalModifier[2]);
						break;
				}
				break;
			case "D":
				switch(advOrNot[i]){
					case "AP":
						gpaPoints.push(apModifier[3]);
						break;
					case "H":
						gpaPoints.push(honorsModifier[3]);
						break;
					case "none":
						gpaPoints.push(normalModifier[3]);
						break;
				}
				break;
			case "F":
				switch(advOrNot[i]){
					case "AP":
						gpaPoints.push(apModifier[4]);
						break;
					case "H":
						gpaPoints.push(honorsModifier[4]);
						break;
					case "none":
						gpaPoints.push(normalModifier[4]);
						break;
				}
				break;
		}
		classInformation[i].push(classes[i] + " GPA: " + gpaPoints.slice(-1));
	}
	calculateFullGPA();
}

function calculateFullGPA() {
	for (i=0; i < numClasses; i++){
		sum += Number(gpaPoints[i]);
	}
	console.log(classInformation);
	alert("Your GPA is: " + (sum / numClasses));
	classInformation.push("Overall GPA is " + (sum / numClasses));
	writeStuff();
}


function writeStuff(){
	document.write("<h1 align = \"center\" style=\"color: black; outline-style: solid; outline-color: darkgray; padding: 5px\">" + "Grade Report" + "</p>");
	for (i = 0; i < (numClasses); i++){
		var toPrint = classInformation[i][0];
		document.writeln("<h3 style=\"font-weight: bold;\">" + toPrint + "</h3>");
		for (j = 1; j < classInformation[i].length; j++){
			var toPrint = classInformation[i][j];
			document.writeln("<ul style=\"color: green;\">" + toPrint + "</ul>");
			console.log(toPrint);
		}
	}
	var overallGPA = classInformation.slice(-1);
	document.write("<h2>" + "Overall GPA: " + overallGPA + "</h2>");
}