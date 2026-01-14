/*//input array
let numbers = [1, 2, 3, 4, 5];
let result = reverseArray(numbers);
// Function to reverse an array
function reverseArray(array) {
  let reversed = [];

  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }

  return reversed;
}
//output
console.log("Original Array:");
console.log(numbers);
console.log("Reversed Array:");
console.log(result);*/

//Secont way to do it
let number = Number(prompt("Enter a number from 1 to 100:"));
let array = [];

// Function to reverse an array
function reverseArray(arr) {
  let reversed = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }

  return reversed;
}

// Validation
if (isNaN(number) || number <= 0 || number > 100) {
  console.log("Please enter a valid number between 1 and 100.");
} else {

  // Create array from 1 to number
  for (let i = 1; i <= number; i++) {
    array.push(i);
  }

  let reversedArray = reverseArray(array);

  console.log("Original Array:");
  console.log(array);

  console.log("Reversed Array:");
  console.log(reversedArray);
}
