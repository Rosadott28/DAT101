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
    const releaseDate = new Date(2025, 4, 14); // Merk: Måneder er null-indeksert, så 4 er mai
    const today = new Date();
    // Beregner forskjellen i millisekunder
    const difference = releaseDate - today;
    // Konverterer millisekunder til dager
    const daysRemaining = Math.ceil(difference / (1000 * 60 * 60 * 24));
    // Skriver ut hvor mange dager som gjenstår ved å bruke .toString()
    printOut("Det er " + daysRemaining.toString() + " dager igjen til lanseringen av 2XKO!! 🎮🔥");
    // Returnerer antall dager som gjenstår
    return daysRemaining;
}

// Funksjon som kombinerer dagens dato og nedtelling til lanseringen
function displayDateAndCountdown() {
    // Kaller funksjonen for å vise dagens dato
    printOut("Dagens dato er: ");
    printTodayInNorwegian();
    // Kaller funksjonen for å vise nedtelling til lanseringen av 2XKO
    calculateDaysUntilRelease();
    printOut(newLine);
}

// Kaller funksjonen for å vise resultatene
displayDateAndCountdown();

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
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
