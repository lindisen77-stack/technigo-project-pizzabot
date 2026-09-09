// Start here

// Step 1 - Welcome and introduction
// Your code goes here

alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const name = prompt("Vad heter du?");

alert(
  `Hi and welcome ${name}!`
)
// Step 2 - Food choice
// Your code goes here

const foodChoice = prompt("Vilken maträtt vill du beställa? Välj maträtt: 1 = Pizza, 2 = Pasta, 3 = Salad");

let food;

if (foodChoice === "1") {
  food = "Pizza";
}

else if (foodChoice === "2") {
  food = "Pasta";
}

else if (foodChoice === "3") {
  food = "Salad";
}

alert(`Du valde ${food}!`);

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
