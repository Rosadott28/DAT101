"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------

// Task 1: Rectangle Calculations
function cmbTask1CalculateClick() {
  // Get the width and height from input fields
  const width = parseFloat(document.getElementById("txtRectWidth").value);
  const height = parseFloat(document.getElementById("txtRectHeight").value);

  // Validate the input values
  if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
    alert("Please enter positive numbers for width and height.");
    return;
  }

  // Calculate perimeter and area
  const perimeter = 2 * (width + height);
  const area = width * height;

  // Display the results
  document.getElementById("txtTask1Output").textContent = `Circumference = ${perimeter}, Area = ${area}`;
}

// Attach the event listener to the Calculate button
document.getElementById("cmbTask1Calculate").addEventListener("click", cmbTask1CalculateClick);

//--- Part 2 ----------------------------------------------------------------------------------------------

// Task 2: Dynamic Word List
const task2Words = []; // Array to store the words

function txtTask2WordKeyPress(event) {
  // Check if the pressed key is "Enter"
  if (event.key === "Enter") {
    const inputField = document.getElementById("txtTask2Word");
    const word = inputField.value.trim(); // Get the entered word and trim whitespace

    // If the word is not empty, add it to the array
    if (word) {
      task2Words.push(word);

      // Update the output
      const wordCount = task2Words.length;
      document.getElementById("txtTask2Output").textContent = 
        `Number of words = ${wordCount}: ${task2Words.join(", ")}`;

      // Clear the input field
      inputField.value = "";
    }
  }
}

// Attach the event listener to the input field
document.getElementById("txtTask2Word").addEventListener("keypress", txtTask2WordKeyPress);


//--- Part 3 ----------------------------------------------------------------------------------------------
// Task 3: Checkbox Evaluation
function cmbTask3CheckAnswerClick() {
  // Select all checkboxes with name="chkTask3"
  const checkboxes = document.querySelectorAll("input[name='chkTask3']:checked");

  // Collect the text associated with each checked checkbox
  const selectedTexts = Array.from(checkboxes).map(checkbox => checkbox.parentElement.textContent.trim());

  // Update the output
  if (selectedTexts.length > 0) {
    document.getElementById("txtTask3Output").textContent = 
      `You selected: ${selectedTexts.join(", ")}`;
  } else {
    document.getElementById("txtTask3Output").textContent = "No checkboxes selected.";
  }
}

// Attach the event listener to the Check Answer button
document.getElementById("cmbTask3CheckAnswer").addEventListener("click", cmbTask3CheckAnswerClick);


//--- Part 4 ----------------------------------------------------------------------------------------------
// Task 4: Radio Button Selection
function initializeCarRadios() {
  const carContainer = document.getElementById("divTask4Cars");
  carContainer.innerHTML = ""; // Clear the container in case of reinitialization

  // Loop through the CarTypes array to create radio buttons
  CarTypes.forEach(car => {
    const radioWrapper = document.createElement("label");

    // Create radio button input
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "carRadio";
    radio.value = car.caption;

    // Add radio button and label text
    radioWrapper.appendChild(radio);
    radioWrapper.appendChild(document.createTextNode(car.caption));
    radioWrapper.appendChild(document.createElement("br")); // Line break

    // Append to the car container
    carContainer.appendChild(radioWrapper);
  });
}

function displaySelectedCar() {
  // Find the selected radio button
  const selectedRadio = document.querySelector("input[name='carRadio']:checked");

  // Update the output with the selected car or a default message
  if (selectedRadio) {
    document.getElementById("txtTask4Output").textContent = `You selected: ${selectedRadio.value}`;
  } else {
    document.getElementById("txtTask4Output").textContent = "No car selected.";
  }
}

// Initialize radio buttons on page load
initializeCarRadios();

// Attach event listener to update output on radio button selection
document.getElementById("divTask4Cars").addEventListener("change", displaySelectedCar);


//--- Part 5 ----------------------------------------------------------------------------------------------
// Task 5: Dropdown Selection
function selectTask5AnimalsChange() {
  // Get the selected option
  const dropdown = document.getElementById("selectTask5Animals");
  const selectedAnimal = dropdown.options[dropdown.selectedIndex].text;

  // Update the output with the selected animal
  document.getElementById("txtTask5Output").textContent = `You selected: ${selectedAnimal}`;
}

// Attach the change event listener to the dropdown
document.getElementById("selectTask5Animals").addEventListener("change", selectTask5AnimalsChange);


//--- Part 6 ----------------------------------------------------------------------------------------------
// Task 6: Dynamic Dropdown & Selection
function initializeTask6Dropdown() {
  const dropdown = document.getElementById("selectTask6Girls");
  dropdown.innerHTML = ""; // Clear any existing options

  // Populate dropdown with names from GirlsNames array
  GirlsNames.forEach(name => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    dropdown.appendChild(option);
  });
}

function selectTask6GirlsChange() {
  // Get the selected name
  const dropdown = document.getElementById("selectTask6Girls");
  const selectedName = dropdown.options[dropdown.selectedIndex].text;

  // Update the output with the selected name
  document.getElementById("txtTask6Output").textContent = `You selected: ${selectedName}`;
}

// Initialize the dropdown with names from GirlsNames array
initializeTask6Dropdown();

// Attach the change event listener to the dropdown
document.getElementById("selectTask6Girls").addEventListener("change", selectTask6GirlsChange);

//--- Part 7 ----------------------------------------------------------------------------------------------
// Task 7: Table Population
function initializeMovieGenreDropdown() {
  const genreDropdown = document.getElementById("selectMovieGenre");
  genreDropdown.innerHTML = ""; // Clear existing options

  // Populate the dropdown with options from MovieGenre array
  MovieGenre.forEach(genre => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreDropdown.appendChild(option);
  });
}

function cmbAddMovieClick() {
  // Get values from the input fields
  const movieTitle = document.getElementById("txtMovieTitle").value.trim();
  const movieGenre = document.getElementById("selectMovieGenre").value;
  const movieDirector = document.getElementById("txtMovieDirector").value.trim();
  const movieRate = document.getElementById("txtMovieRate").value.trim();

  // Validate input fields
  if (!movieTitle || !movieDirector || !movieRate || isNaN(movieRate) || movieRate < 1 || movieRate > 10) {
    alert("Please enter valid movie details. Ensure the rate is between 1 and 10.");
    return;
  }

  // Get reference to the movie table
  const movieTable = document.getElementById("tblMovies");

  // Create a new row
  const newRow = movieTable.insertRow();

  // Populate the row with the movie details
  const cell1 = newRow.insertCell(0); // Nr
  const cell2 = newRow.insertCell(1); // Title
  const cell3 = newRow.insertCell(2); // Genre
  const cell4 = newRow.insertCell(3); // Director
  const cell5 = newRow.insertCell(4); // Rate

  // Set cell values
  cell1.textContent = movieTable.rows.length - 1; // Row index (skip header)
  cell2.textContent = movieTitle;
  cell3.textContent = movieGenre;
  cell4.textContent = movieDirector;
  cell5.textContent = movieRate;

  // Clear input fields for next entry
  document.getElementById("txtMovieTitle").value = "";
  document.getElementById("txtMovieDirector").value = "";
  document.getElementById("txtMovieRate").value = "5"; // Reset to default
}

// Initialize the dropdown with genres on page load
initializeMovieGenreDropdown();

// Attach the event listener to the "Add Movie!" button
document.getElementById("cmbAddMovie").addEventListener("click", cmbAddMovieClick);

