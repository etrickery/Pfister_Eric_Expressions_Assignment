//Eric Pfister
//February 10th, 2015
//SDI 1502
//Section 01
//Activity: Expression Assignment

//First, choose which direction to convert temperature
var userInput;
var solution;
var choice;     //Variables used to determine a users direction of conversion
var tempConv;
var result;



choice = confirm("If you would like to convert Fahrenheit to Celsius, click OK. \nIf you would like to convert Celsius to Fahrenheit, click CANCEL");
if (choice == true) {
    userInput = prompt("Please enter the temperature in Fahrenheit: ", 72);
    tempConv = (Number(userInput) - 32) * (5 / 9)
    

} else {
    userInput = prompt("Please enter the temperature in Celsius: ", 22);
    tempConv = (Number(userInput) * (9 / 5)) + 32





}

console.log(result);