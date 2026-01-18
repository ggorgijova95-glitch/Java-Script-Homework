// Ask for recipe name
let recipeName = prompt("Enter the recipe name:");

// Ask how many ingredients
let ingredientCount = parseInt(prompt("How many ingredients do you need?"));

// Array to store ingredients
let ingredients = [];

// Ask for each ingredient
for (let i = 0; i < ingredientCount; i++) {
  let ingredient = prompt("Enter ingredient " + (i + 1) + ":");
  ingredients.push(ingredient);
}

// Print recipe name as heading
document.getElementById("recipeTitle").textContent = recipeName;

// Print ingredients as unordered list
let list = document.getElementById("ingredientList");

for (let i = 0; i < ingredients.length; i++) {
  let li = document.createElement("li");
  li.textContent = ingredients[i];
  list.appendChild(li);
}
