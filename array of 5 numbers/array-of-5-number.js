//This is Function to check if value is a valid number
function validateNumber(value) {
  return typeof value === "number" && !isNaN(value);
}

//This is Function to calculate sum
function sumArray(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (!validateNumber(numbers[i])) {
      return "Error: Invalid number entered!";
    }
    sum += numbers[i];
  }

  return sum;
}

// Get numbers using prompt
let numbers = [];

for (let i = 0; i < 5; i++) {
  let input = prompt("Enter number " + (i + 1));
  let number = Number(input);
  numbers.push(number);
}

// Call function and display result
let result = sumArray(numbers);

console.log("Result: " + result);
alert("Result: " + result);