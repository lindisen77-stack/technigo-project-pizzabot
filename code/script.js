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

if (food === "Pizza") {
  const pizzaChoice = prompt("Vilken pizza vill du ha? 1 = Margherita, 2 = Vesuvio");

  let pizza;

  if (pizzaChoice === "1") {
    pizza = "Margherita";
  }

  else if (pizzaChoice === "2") {
    pizza = "Vesuvio";
  }

  alert(`Du valde ${pizza}!`);
}

if (food === "Pasta") {
  const pastaChoice = prompt("Vilken pasta vill du ha? 1 = Carbonara, 2 = Bolognese");

  let pasta;

  if (pastaChoice === "1") {
    pasta = "Carbonara";
  }

  else if (pastaChoice === "2") {
    pasta = "Bolognese";
  }

  alert(`Du valde ${pasta}!`);
}

if (food === "Salad") {
  const saladChoice = prompt("Vilken sallad vill du ha? 1 = Grekisk sallad, 2 = Räksallad");

  let salad;

  if (saladChoice === "1") {
    salad = "Grekisk sallad";
  }

  else if (saladChoice === "2") {
    salad = "Räksallad";
  }

  alert(`Du valde ${salad}!`);
}

// Step 4 - Age
// Your code goes here

const ageChoice = prompt("Är maten till en vuxen eller ett barn? 1 = vuxen, 2 = barn");

let age;
let price;

if (ageChoice === "1") {
  age = "vuxen";
  price = "15 euro";
}

else if (ageChoice === "2") {
  age = "barn";
  price = "10 euro";
}

alert(`Maten är till en ${age}!`);

alert(`Priset är ${price}!`);

// Step 5 - Order confirmation
// Your code goes here

const confirmationChoice = prompt("Vill du bekräfta beställningen? 1 = Ja, 2 = Nej");

if (confirmationChoice === "1") {
  alert("Tack för din beställning");
}

else if (confirmationChoice === "2") {
  alert("Välkommen åter!");
}