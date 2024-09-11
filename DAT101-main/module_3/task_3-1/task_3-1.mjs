"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 8;
if (wakeUpTime === 7) {
  printOut("I can take the bus to school.");
} else if (wakeUpTime === 8) {
  printOut("u can take the train");
} else {
  printOut(" u have to take the car to school");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number = 0;

if (number > 0) {
  printOut("Positive");
} else if (number < 0) {
  printOut("Negative");
} else {
  printOut("The number is zero.");
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let size = Math.floor(Math.random() * 8) + 1;

printOut("Uploaded image size: " + size + " MP");


if ( size >= 4 ) {
  printOut("thank you");
}
 else {
  printOut("The image is too small");
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let Size = Math.floor(Math.random() * 8) + 1;

if ( Size <= 6) {
  printOut("The image is too big");
} else if ( Size >= 4 ) {
  printOut("thank you");
}
 else {
  printOut("The image is too small");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList = ["January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"];
  const noOfMonth = monthList.length;
  const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
  
  if (monthName.includes("r")) {
    printOut("You must take vitamin D");
  } else {
    printOut("You do not need to take vitamin D");
  }
  //genius. skal bruke dette for å ta vitamin d fremover. 
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
