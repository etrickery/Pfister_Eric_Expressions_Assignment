//Eric Pfister
//February 10th, 2015
//SDI 1502
//Section 01
//Activity: Expression Assignment



/*
This script is designed to accept user input representing a temperature,and then convert that from fahrenheit to celsius
or the other way around. The user must first choose which direction to convert, and then input the requested temperature.
The temperature is then converted and displayed in a concatenated statement within the console log.

The user is prompted to select the direction, Fahrenheit to Celsius or Celsius to Fahrenheit. This is stored as true or
false in the variable "choice", depending on the user's selection of "OK" or "CANCEL".

The variables defined below are used to determine the desired conversion, and then output is displayed in the console
using the result variable. The equations used in these calculations are as follows:

C° = 5/9 * (F° - 32)
F° = (9/5 * C°) + 32

"tempConv" stores the results of these equations.

"result" is the defined concatenated statement that details the user's desired results.

To include more complexity, an array contains calculations to convert to Kelvin as well, which is also displayed.
This also required changing result to an array as well.

 */
var locaTemp;               //Added location to display more information
var userInput;              //The user's temperature input to be converted
var choice;                 //Variables used to determine a users direction of conversion
var tempConv = [0, 1];      //This array contains the result of the conversions
var result = [0, 1];        //The concatenated statement detailing the results of the conversion


//First, choose which direction to convert temperature
choice = confirm("If you would like to convert Fahrenheit to Celsius, click OK. \nIf you would like to convert Celsius to Fahrenheit, click CANCEL");

//Next, indicate the location of respective temperature
locaTemp = prompt("Please enter the location: ", "Indianapolis");



if (choice == true) {                                                           //Fahrenheit to Celsius

    userInput = prompt("Please enter " + (locaTemp) + "'s temperature in Fahrenheit: ", 72);     //Request for value to be converted

    //Display the current temperature (user inputs)
    console.log("The current temperature in " + (locaTemp) + " is " + (userInput) + "° Fahrenheit.");

    tempConv[0] = (Number(userInput) - 32) * (5 / 9);                           //Formula to convert the temperature
    tempConv[0] = tempConv[0].toFixed(1);                                       //Needed to trim the decimal for aesthetics
    tempConv[1] = (Number(tempConv[0]) + 273);                                  //Convert the temperature to Kelvin
    tempConv[1] = tempConv[1].toFixed(1);                                       //Needed to trim the decimal for aesthetics

    result[0] = "Converting Fahrenheit to Celsius: " + (userInput) + "° Fahrenheit is equal to " + (tempConv[0]) + "° Celsius.";

    console.log("°C = 5/9 * (°F - 32)");                                        //Displays the equation used in console log


} else {                                                                        //Celsius to Fahrenheit

    userInput = prompt("Please enter " + (locaTemp) + "'s temperature in Celsius: ", 22);        //Request for value to be converted

    //Display the current temperature (user inputs)
    console.log("The current temperature in " + (locaTemp) + " is " + (userInput) + "° Celsius.");

    tempConv[0] = (Number(userInput) * (9 / 5)) + 32;                           //Formula to convert the temperature
    tempConv[0] = tempConv[0].toFixed(1);                                       //Needed to trim the decimal for aesthetics
    tempConv[1] = (Number(userInput) + 273);                                    //Convert the temperature to Kelvin
    tempConv[1] = tempConv[1].toFixed(1);                                       //Needed to trim the decimal for aesthetics

    result[0] = "Converting Celsius to Fahrenheit: " + (userInput) + "° Celsius is equal to " + (tempConv[0]) + "° Fahreneit.";

    console.log("°F = (9/5 * °C) + 32");                                        //Displays the equation used in console log

}


//Display the results in Kelvin as well
result[1] = "This can also be represented as " + (tempConv[1]) + "° Kelvin. ";

console.log(result[0]);             //Output the result string to the console log, detailing the calculations.
console.log("°K = °C + 273");       //Display the expression used to determine the Kelvin conversion.
console.log(result[1]);             //Displays the result of solving for Kelvin in a concatenated statement.





