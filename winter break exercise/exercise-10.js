// Prompt the user to enter a number
let num = Number(prompt("Enter a number:"));
// Function to create a countdown array from a given number to zero
function countdown(num) {
  let result = [];

  for (let i = num; i >= 0; i--) {
    result.push(i);
  }

  return result;
}

console.log("Input Number:", num);
console.log("Countdown Array:");
console.log(countdown(num)); 

