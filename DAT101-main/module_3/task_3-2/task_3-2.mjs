"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let countToTen = "";
let countFromTen = "";
for ( let i = 1; i <= 10; i++){
    countToTen += " " + i.toString();
}
printOut(countToTen + newLine);

for ( let i = 10; i > 0; i--){
    countFromTen += " " + i.toString();
}
printOut(countFromTen + newLine);
printOut(newLine);
    
printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let targetNumber = 45;
let guessedNumber = Math.floor(Math.random()*60) + 1;

while (guessedNumber !== targetNumber) {

    // printOut((guessedNumber + " not " + targetNumber).toString());
    guessedNumber = Math.floor(Math.random()*60) + 1;
}
printOut(guessedNumber + " is the target number " + targetNumber);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

let targetNumber1 = Math.floor(Math.random() * 1000000) + 1;
let guessedNumber1 = "";
let numberOfGuesses = 0;

let startTime = Date.now();

do {
    guessedNumber1 = Math.floor(Math.random() * 1000000) + 1;
    numberOfGuesses++;
} while (guessedNumber1 !== targetNumber1);

let endTime = Date.now();

let duration = endTime - startTime;

printOut("Target number was:" + targetNumber);
printOut("Number of guesses:" + numberOfGuesses);
printOut("Time taken (milliseconds):" + duration);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let stringBuilder = "";
for (let number = 2; number < 200; number++){
    let isPrime = true;

    let factor = 2; 
    while (factor <= Math.sqrt(number)) {
        if (number % factor === 0) {
            isPrime = false; 
            break; 
        }
        factor++; 
    }
    if (isPrime) {
        stringBuilder += number.toString() + ", ";
    }
}
if (stringBuilder != "") {
    stringBuilder = stringBuilder.substring(0, stringBuilder.length - 2);
}
printOut(stringBuilder);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

for (let row = 1; row <= 7; row++) {
    let line = "";
    
    for (let col = 1; col <= 9; col++) {
        line += "K" + col + "R" + row + " ";
    }
    
    printOut(line.trim());
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

for (let student = 1; student <= 5; student++) {

let grade = Math.floor(Math.random() * 236)+ 1;
let percentage = (grade / 236) * 100;

let letterGrade;
if (percentage >= 89) {
    letterGrade = 'A';
} else if (percentage >= 77) {
    letterGrade = 'B';
} else if (percentage >= 65) {
    letterGrade = 'C';
} else if (percentage >= 53) {
    letterGrade = 'D';
} else if (percentage >= 41) {
    letterGrade = 'E';
} else {
    letterGrade = 'F';
}

printOut("Student " + student + ": " + grade + " points (" + percentage.toFixed(2) + "%) - Grade: " + letterGrade);
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let count = 0;
while (true) {

    let dice = Math.floor(Math.random() * 6)+ 1;
    
    let dice2 = Math.floor(Math.random() * 6)+ 1;
    
    let dice3 = Math.floor(Math.random() * 6)+ 1;
    
    let dice4 = Math.floor(Math.random() * 6)+ 1;
    
    let dice5 = Math.floor(Math.random() * 6)+ 1;
    
    let dice6 = Math.floor(Math.random() * 6)+ 1;
    
let target = 1;
let straight1 = dice == target || dice2 == target || dice3 == target || dice4 == target || dice5 == target || dice6 == target;
target++;
let straight2 = dice == target || dice2 == target || dice3 == target || dice4 == target || dice5 == target || dice6 == target;
target++;
let straight3 = dice == target || dice2 == target || dice3 == target || dice4 == target || dice5 == target || dice6 == target;
target++;
let straight4 = dice == target || dice2 == target || dice3 == target || dice4 == target || dice5 == target || dice6 == target;
target++;
let straight5 = dice == target || dice2 == target || dice3 == target || dice4 == target || dice5 == target || dice6 == target;
target++;
let straight6 = dice == target || dice2 == target || dice3 == target || dice4 == target || dice5 == target || dice6 == target;

if (straight1 && straight2 && straight3 && straight4 && straight5 && straight6 ){
    printOut("straight tok " + count + " kast")
    break;
}

count ++;

}

printOut(newLine);

printOut("--- Part 7 part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let count2 = 0;
while (true) {

    let dice = Math.floor(Math.random() * 6)+ 1;
    
    let dice2 = Math.floor(Math.random() * 6)+ 1;
    
    let dice3 = Math.floor(Math.random() * 6)+ 1;
    
    let dice4 = Math.floor(Math.random() * 6)+ 1;
    
    let dice5 = Math.floor(Math.random() * 6)+ 1;
    
    let dice6 = Math.floor(Math.random() * 6)+ 1;
    
let target = 1;
let par= dice == dice2 || dice == dice3 || dice == dice4 || dice == dice5 || dice == dice6 || dice6 == target;
target++;
let par2 = dice == target || dice2 == target || dice3 == target || dice4 == target || dice5 == target || dice6 == target;
target++;
let par3 = dice == target || dice2 == target || dice3 == target || dice4 == target || dice5 == target || dice6 == target;
target++;
let par4 = dice == target || dice2 == target || dice3 == target || dice4 == target || dice5 == target || dice6 == target;
target++;
let par5 = dice == target || dice2 == target || dice3 == target || dice4 == target || dice5 == target || dice6 == target;
target++;
let par6 = dice == target || dice2 == target || dice3 == target || dice4 == target || dice5 == target || dice6 == target;

if (straight1 && straight2 && straight3 && straight4 && straight5 && straight6 ){
    printOut("straight tok " + count2 + " kast")
    break;
}

count ++;

}



printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
