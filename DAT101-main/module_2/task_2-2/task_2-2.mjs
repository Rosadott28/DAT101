"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let result = 2 + 3 * 2 - 4 * 6;
let withresult = 2 + (3 * (2 - 4) * 6);
printOut(withresult.toString());
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let meter = 25;
let centimeter = 34;
const inches = 25.4;
let millis = meter * 1000 + centimeter * 10;

let result2 = Math.round(millis / inches * 100) / 100;

printOut(result2.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let days = 3;
let hours = 12; 
let minutes = 14;
let seconds = 45; 

let dMin = Math.round((days * 24) * 60);
let hMin = Math.round(hours * 60);
let sMin = Math.round(seconds / 60);

let result3 = dMin + hMin + minutes + sMin;

printOut(result3.toString());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let orgMinutes = 6322.52;
let Days = Math.round(orgMinutes / (24*60)); 
let remainingMin = orgMinutes % (24*60);

let Hours = Math.round(remainingMin / 60);
remainingMin = remainingMin % 60;

let Seconds = Math.round((remainingMin % 1) * 60);

let Minutes = Math.round(remainingMin);
let result4 = "Days: " + Days + ". Hours: " + Hours + ". Minutes: " + Minutes + ". seconds: " + Seconds;
printOut( result4.toString());
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/ // rate 76 - 8.6
let usdToNok = 76 / 8.6;
let nokToUsd = 8.6 / 76;

let usd = 54;
let nok = 76;

let mengdeNok = Math.round(usd * usdToNok);
let result5 = mengdeNok + " NOK & "+ usd + " USD";

printOut(result5.toString());
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let text = "There is much between heaven and earth that we do not understand.";

printOut(text.length.toString());
printOut(text.charAt(18));
printOut(text.substring(34, 34 + 8));
printOut(text.indexOf("earth").toString());

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("5 > 3: " + (5 > 3).toString());
printOut("7 >= 7: " + (7 >= 7).toString());
printOut("a > b: " + ("a" > "b").toString());
printOut("1 < a: " + (1 < "a").toString());
printOut("2500 < abcd: " + (2500 > "abcd").toString());
printOut("arne !== thomas: " + ("arne" !== "thomas").toString());
printOut("(2 === 5) === true: " + ((2 === 5) === true).toString());
printOut("(abcd > bcd) === false: " + (("abcd" > "bcd") === false).toString());

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(parseInt("254").toString());
printOut(parseFloat("57.23").toString());
const s = "25 kroner"
printOut(s.substring(0,s.indexOf(" kroner")).toString());

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut((Math.round(Math.random() * 360) + 1).toString());

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let totalDays = 131;
let weeks = Math.floor(totalDays / 7);
let days1 = totalDays % 7;

printOut(("weeks: " + weeks).toString());
printOut(("days: " + days1).toString());
printOut(newLine);