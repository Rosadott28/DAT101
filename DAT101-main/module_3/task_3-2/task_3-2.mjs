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

/* numberofoccurences, sammenligner alle på en.*/
let count = 0;
while (true) {

    const dice = Math.floor(Math.random() * 6)+ 1; //vet man kan bruke math.ceil(math.random()*6) også
    
    const dice2 = Math.floor(Math.random() * 6)+ 1;
    
    const dice3 = Math.floor(Math.random() * 6)+ 1;
    
    const dice4 = Math.floor(Math.random() * 6)+ 1;
    
    const dice5 = Math.floor(Math.random() * 6)+ 1;
    
    const dice6 = Math.floor(Math.random() * 6)+ 1;
    
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

count ++;

if (straight1 && straight2 && straight3 && straight4 && straight5 && straight6 ){
    printOut("straight tok " + count + " kast")
    break;
}
}

printOut(newLine);

printOut("--- Part 7 part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let count2 = 0;
while (true) {
    let diceArray = [];
    for (let i = 0; i < 6; i++) {
        diceArray[i] = Math.floor(Math.random() * 6) + 1;
    }

    let pairs = 0;
    for (let i = 1; i <= 6; i++) {
        let count = 0;
        for (let j in diceArray) {
            let dice = diceArray[j];
            if (dice == i) {
                count++;
            }
        }
        pairs += Math.floor(count / 2);
    }

    count2++;

    if (pairs == 3) {
        printOut(diceArray.toString());    
        printOut("3 par tok " + count2 + " kast")
        break;
    }
}

printOut(newLine);

printOut("--- Part 7.3 ----------------------------------------------------------------------------------------------");
let count3 = 0;
while (true) {
    let diceArray = [];
    for (let i = 0; i < 6; i++) {
        diceArray[i] = Math.floor(Math.random() * 6) + 1;
    }

    let tower2 = false;
    let tower4 = false;
    for (let i = 1; i <= 6; i++) {
        let count = 0;
        for (let j in diceArray) {
            let dice = diceArray[j];
            if (dice == i) {
                count++;
            }
        }
        if (count == 2) {
            tower2 = true;
        }
        if (count == 4) {
            tower4 = true;
        }
    }

    count3++;

    if (tower2 && tower4) {
        printOut(diceArray.toString());    
        printOut("tårn tok " + count3 + " kast")
        break;
    }
}

printOut(newLine);

printOut("--- Part 7.4 ---------------------------------------------------------------------------------------------");

let count4 = 0;
while (true) {
    let diceArray = [];
    for (let i = 0; i < 6; i++) {
        diceArray[i] = Math.floor(Math.random() * 6) + 1;
    }

    let yahtzee = false;

    for (let i = 1; i <= 6; i++) {
        let count = 0;
        for (let j in diceArray) {
            let dice = diceArray[j];
            if (dice == i) {
                count++;
            }
        }
        if (count == 6) {
            yahtzee = true;
        }
    }

    count4++;

    if (yahtzee) {
        printOut(diceArray.toString());    
        printOut("yahtzee tok " + count4 + " kast")
        break;
    }
}
//vet vi egt ikke skulle bruke array men prøvde veldig lenge å finne en løsning 
printOut(newLine);

