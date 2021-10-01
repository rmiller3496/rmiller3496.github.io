function mathCalculator() {  
    var toPrint = 0;
    toPrint = calculate();
    if (toPrint !== undefined) {
      mathAlert(toPrint);
    }
  }  
   
  //Enter Even Odd Calculator
  
  function singleNumberEvenOrOdd() {
      //Setup Variable
      var testValue = 0;
      
      //Get Number
      testValue = Math.abs(Number(prompt("Enter a number to test if it is Even or Odd.")));
      
      //Call Function and Print 
      
      if (testValue - Math.floor(testValue) !== 0){
        simplePrint("The value entered was a decimal, which is neither odd nor even.");
      }
      
      checkUnd = testEvenOrOdd(testValue);
      
      if (checkUnd !== undefined) {
        evenOddPrint(checkUnd);
      }
  }
    
    
  function twoNumberEvenOrOddCalculator() {
      
      //Variable Creation
      var evenOddMathValue = 0;
      //Call Calculate to get value to check
      evenOddMathValue = calculate();
      
      if (evenOddMathValue - Math.floor(evenOddMathValue)) {
        simplePrint("The value entered is a decimal, which is neither even nor odd.");
        checkUnd = undefined;
      }
      
      //Check Even or Odd
      checkUnd = testEvenOrOdd(evenOddMathValue);
      if (checkUnd !== undefined){
        evenOddMathPrint(evenOddMathValue, checkUnd);
      }
      
  }
    
  
  
  
                          //Function Declarations\\
  
  
  //add function:
  var add1 = 0;
  var add2 = 0;
  var addResult = 0;
  
  function add(add1, add2) {
    addResult = add1 + add2;
    return addResult;
  }
  
  //subtract function:
  var sub1 = 0;
  var sub2 = 0;
  var subResult = 0;
  
  function subtract(sub1, sub2) {
    subResult = sub1 - sub2;
    return subResult;
  }
  
  //multiply function:
  var mul1 = 0;
  var mul2 = 0;
  var mulResult = 0;
  
  function multiply(mul1, mul2) {
    mulResult = mul1 * mul2;
    return mulResult;
  }
  
  //divide function:
  var div1 = 0;
  var div2 = 0;
  var divResult = 0;
  
  function divide(div1, div2){
    divResult = div1 / div2;
    return divResult;
  }
  
  //remainder function:
  var rem1 = 0;
  var rem2 = 0;
  var remResult = 0;
  function remainder(rem1, rem2) {
    remResult = rem1 % rem2;
    return remResult;
  }
  
  //power function:
  var power1 = 0;
  var power2 = 0;
  var powerResult = 0;
  
  function power(power1, power2) {
    powerResult = power1 ** power2;
    return powerResult;
  }
                                //Print Functions\
  function mathAlert(solution) {
    alert("The value of the calculation is " + solution);
  }
  
  function mathPrint(number3, modifier2, number4, solution2) {
    console.log(number3 + " " + modifier2 + " " + number4 + " = " + solution2);
  }
  
  function evenOddPrint(evaluated) {
    console.log("The number is " + evaluated);
    alert("The number is " + evaluated);
  }
  
  function evenOddMathPrint(resulting, state){
    console.log("The resulting value is " + resulting + " and it is " + state);
    alert("The resulting value is " + resulting + " and it is " + state);
  }
  
  function evenOddArithPrint(num1, result1){
    console.log("The value calculated is " + num1 + " and it is " + result1 + ".");
    alert("The value calculated is " + num1 + " and the " + result1 + ".");
  }
  
  function simplePrint(text) {
    console.log(text);
    alert(text);
  }
  
  
  //EvenOrOddFunction
  var singleNumberCheck = 0;
  var evenOrOdd = 0;
  var state1 = 0;
  
  function testEvenOrOdd(singleNumberCheck){
    //Check if even or odd
      evenOrOdd = singleNumberCheck % 2;
      
    //Return Result
      if (singleNumberCheck === 0) {
        simplePrint("The value 0 was entered, which is neither odd nor even.");
        return;
      }else if (evenOrOdd === 0) {
        state1 = "even"
      } else if (evenOrOdd === 1) {
        state1 = "odd"
      } else {
        simplePrint("The number was entered incorrectly. Please try again.");
        return;
      }
    return state1;
  }
  
  //Calculator Function
  function calculate() {
      //Get Data
      var number1 = Number(prompt("Welcome to the Math Calculator!\nEnter First Number"));
      if (!number1) {
        simplePrint("The number was entered incorrectly, please run again.");
        return;
      }
      var modifier = prompt("What is your modifier?");
      if (!modifier) {
        simplePrint("Modifier was entered incorrectly, please run again.");
        return;
      }
      var number2 = Number(prompt("Enter Second Number"));
      if (!number2) {
        simplePrint("The second number was entered incorrectly, please run again.");
        return;
      }
    
      //Define Result Value
      var result = 0;
    
      //Check For Invalid Data
      if (!number1 || !number2) {
        simplePrint("Numbers were entered incorrectly, please run again.");
      }
    
      //Calcuator
      if (modifier === "add" || modifier === "+") {
        result = add(number1, number2);
      } else if (modifier === "subtract" || modifier === "-"){
        result = subtract(number1, number2);
      } else if (modifier === "multiply" || modifier === "*"){
        result = multiply(number1, number2);
      } else if (modifier === "divide" || modifier === "/"){
        result = divide(number1, number2);
      } else if (modifier === "remainder" || modifier === "%"){
        result = remainder(number1, number2);
      } else if (modifier === "power" || modifier === "^"){
        result = power(number1, number2);
      } else {
        simplePrint("Data entered was invalid, please run again.");
        return;
      }
      mathPrint(number1, modifier, number2, result);
    return result;
  }
  
  //Sum to a Number Calculator
  
  function sumToANumber() {
    
    var addedSum = 0;
    var topNumber = Number(prompt("What is the ending number?"));
    for (var h = 0; h < topNumber + 1; h++){
      addedSum = addedSum + h;
      console.log("Number: " + h + " Sum:" + addedSum);
    }
  
    alert("The sum of all values from 0 to " + topNumber + " is " + addedSum);
  
  }
  