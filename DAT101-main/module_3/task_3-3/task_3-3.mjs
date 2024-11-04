"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printTodayInNorwegian() {
    const today = new Date();
    const norwegianDate = today.toLocaleDateString("no-NB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    printOut(norwegianDate.charAt(0).toUpperCase() + norwegianDate.slice(1));
}

printTodayInNorwegian();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

// Funksjon som beregner antall dager igjen til lanseringen av 2XKO
function calculateDaysUntilRelease() {
    const releaseDate = new Date(2025, 4, 14); 
    const today = new Date();
    const difference = releaseDate - today;
    const daysRemaining = Math.ceil(difference / (1000 * 60 * 60 * 24));
    // Skriver ut hvor mange dager som gjenstår ved å bruke .toString()
    printOut("Det er " + daysRemaining.toString() + " dager igjen til lanseringen av 2XKO!! 🎮🔥");
    return daysRemaining;
}

// Funksjon som kombinerer dagens dato og nedtelling til lanseringen
function displayDateAndCountdown() {
    printOut("Dagens dato er: ");
    printTodayInNorwegian();
    calculateDaysUntilRelease();
    printOut(newLine);
}

displayDateAndCountdown();

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

// Funksjon som beregner diameter, omkrets og areal av en sirkel
function calculateCircleProperties(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * Math.pow(radius, 2);
    
    printOut("Diameter: " + diameter);
    printOut("Omkrets: " + circumference.toFixed(0)); // Avrundet til null desimaler
    printOut("Areal: " + area.toFixed(0)); // Avrundet til null desimaler
}

// Kaller funksjonen med en gitt radius
calculateCircleProperties(5); // Du kan endre 5 til ønsket radius

printOut(newLine);


printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
// Funksjon som beregner omkrets og areal av et rektangel
function calculateRectangleProperties(rectangle) {
    const width = rectangle.width;
    const height = rectangle.height;
    
    const circumference = 2 * (width + height);
    const area = width * height;
    
    // Skriver ut omkrets og areal
    printOut("Omkrets: " + circumference);
    printOut("Areal: " + area);
}

// Eksempel på å kalle funksjonen med et objekt som inneholder bredde og høyde
calculateRectangleProperties({ width: 10, height: 5 }); // Endre verdier etter behov

printOut(newLine);


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Funksjon som håndterer konvertering mellom Celsius, Fahrenheit og Kelvin
printOut("Convert 47 celsius")
function convertTemperature(temp, tempType) {
    let celsius, fahrenheit, kelvin;

    // Konverterer basert på tempType
    if (tempType === "Celsius") {
        celsius = temp;
        fahrenheit = Math.floor((celsius * 9/5) + 32);
        kelvin = Math.floor(celsius + 273.15);
    } else if (tempType === "Fahrenheit") {
        fahrenheit = temp;
        celsius = Math.floor((fahrenheit - 32) * 5/9);
        kelvin = Math.floor(celsius + 273.15);
    } else if (tempType === "Kelvin") {
        kelvin = temp;
        celsius = Math.floor(kelvin - 273.15);
        fahrenheit = Math.floor((celsius * 9/5) + 32);
    }

    // Skriver ut resultatene som heltall
    printOut("Celsius: " + celsius);
    printOut("Fahrenheit: " + fahrenheit);
    printOut("Kelvin: " + kelvin);
}

// Kaller funksjonen med verdien 47 grader Celsius
convertTemperature(47, "Celsius");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

// Funksjon for å beregne pris uten moms
function calculateNetPrice(gross, vatGroup) {
    // Definer moms-satser
    const vatRates = {
        normal: 25,
        food: 15,
        hotel: 10,
    };

    // Sjekk om VAT-gruppen finnes
    const vat = vatRates[vatGroup.toLowerCase()];
    if (vat === undefined) {
        printOut(`${vatGroup} is unknown tax-group!`);
        return;
    }

    // Beregn nettopris
    const netPrice = (100 * gross) / (vat + 100);
    printOut(`${gross} is ${netPrice.toFixed(2)} without tax`);
}

// Test-tilfeller
const testCases = [
    { gross: 100, group: "normal" },
    { gross: 150, group: "food" },
    { gross: 50, group: "hotel" },
    { gross: 75, group: "textile" }
];

// Kjør funksjonen for hvert test-tilfelle
testCases.forEach(({ gross, group }) => {
    calculateNetPrice(gross, group);
});

printOut(newLine);


printOut("---- Task 7 ------------------------------------------------------------------------------------------------");

// Function to calculate speed, distance, or time
function calculateSpeedDistanceTime(speed, distance, time) {
    // Count how many parameters are missing
    const missingParams = [speed, distance, time].filter(param => param === undefined).length;

    // If more than one parameter is missing, return NaN
    if (missingParams > 1) {
        return NaN;
    }

    // Calculate based on which parameter is missing
    if (speed === undefined) {
        // Speed = Distance / Time
        if (distance !== undefined && time !== undefined && time !== 0) {
            return distance / time; // Calculate speed
        }
    } else if (time === undefined) {
        // Time = Distance / Speed
        if (distance !== undefined && speed !== undefined && speed !== 0) {
            return distance / speed; // Calculate time
        }
    } else if (distance === undefined) {
        // Distance = Speed * Time
        if (speed !== undefined && time !== undefined) {
            return speed * time; // Calculate distance
        }
    }

    // If no calculation was possible, return NaN
    return NaN;
}

// Test cases formatted to match the image
const testCases2 = [
    { speed: 75, distance: 50, time: undefined },      // Calculate time
    { speed: 60, distance: 120, time: undefined },     // Calculate time
    { speed: 70, distance: 105, time: undefined },     // Calculate time
    { speed: undefined, distance: 50, time: NaN },     // Calculate speed with missing time
];

// Call the function for each test case and display formatted results
testCases2.forEach(({ speed, distance, time }) => {
    const result = calculateSpeedDistanceTime(speed, distance, time);
    if (time === undefined) time = result.toFixed(2); // Format time as two decimal places if calculated
    if (speed === undefined) speed = result.toFixed(2); // Format speed as two decimal places if calculated

    printOut(`Speed = ${speed === undefined ? 'undefined' : speed} km/h`);
    printOut(`Distance = ${distance} km`);
    printOut(`Time = ${time === undefined ? 'NaN' : time} h\n`);
    printOut(newLine);
});

printOut(newLine);

printOut("--- Task 8 ----------------------------------------------------------------------------------------------");

function createText(text, maxSize, char, insertAtEnd) {
    if (text.length < maxSize && insertAtEnd === true) {
        let placeholder = "";
        while (text.length + placeholder.length < maxSize)
            {
                placeholder += char;
            }

            text = placeholder + text;

    }

    else if(text.length < maxSize && insertAtEnd === false)
        {
            let placeholder = "";

            while (text.length+ placeholder.length > maxSize)
                {   
                    placeholder += char;
                }
    

        text = text + placeholder;
        }
        else
        {
            return text;
        }

       return text;
    }

let modText1 = createText("this is a text",60, "\u00A0", false);
let modText2 = createText("this is a text",60, "\u00A0 ", true);

printOut(modText1);
printOut(modText2);
printOut(newLine);


printOut("--- Part 9 ---------------------------------------------------------------------------------------------");

// Function to create and check the mathematical expressions
function checkMathExpressions(lines) {
    let num = 1;  // Starting number

    for (let i = 1; i <= lines; i++) {
        // Determine number of elements on the left and right side
        let leftSideElements = i + 1;   // Left side starts with 2 elements and grows
        let rightSideElements = i;      // Right side starts with 1 element and grows

        // Get the numbers for the left and right sides
        let leftSideNumbers = Array.from({ length: leftSideElements }, (_, index) => num + index);
        let rightSideNumbers = Array.from({ length: rightSideElements }, (_, index) => num + leftSideElements + index);

        // Calculate the sum of left and right sides
        let leftSum = leftSideNumbers.reduce((acc, val) => acc + val, 0);
        let rightSum = rightSideNumbers.reduce((acc, val) => acc + val, 0);

        // Print the expression in the required format
        printOut(leftSideNumbers.join(" ") + " = " + rightSideNumbers.join(" "));

        // Check if the sums are equal
        if (leftSum !== rightSum) {
            printOut("Error: The two sides are not equal in line " + i);
            return;  // Stop if the sums are not equal
        }

        // Move to the next number sequence
        num += leftSideElements + rightSideElements;
    }

    // If all lines are correct
    printOut("Mathematics is fun!");
}

checkMathExpressions(200);
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

function factorial(n) {
    if (n <= 1) return 1;      // Base case: factorial of 1 is 1
    return n * factorial(n - 1);  // Recursive case: n * factorial of (n - 1)
}

// Example usage

let number = 9;
let result = factorial(number).toString();

printOut("factorial(" + number + ") is " + result);              // Should print 120 for factorial of 5

printOut(newLine);

