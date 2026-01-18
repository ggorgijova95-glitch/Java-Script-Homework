// Given array of numbers
let numbers = [2, 4, 5];

let list = document.getElementById("numberList");
let sum = 0;
let equationText = "";

// Print numbers in the list
for (let i = 0; i < numbers.length; i++) {
  let li = document.createElement("li");
  li.textContent = numbers[i];
  list.appendChild(li);

  sum += numbers[i];

  equationText += numbers[i];
  if (i < numbers.length - 1) {
    equationText += " + ";
  }
}

// Print sum
document.getElementById("sumResult").textContent =
  "Sum: " + sum;

// Bonus: Print equation
document.getElementById("equation").textContent =
  equationText + " = " + sum;
