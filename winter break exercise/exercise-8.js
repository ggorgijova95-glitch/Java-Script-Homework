// Creating an array with ten elements including falsy values
let myArray = [
  10,
  "Hello",
  null,
  undefined,
  NaN,
  "",
  false,
  25,
  true,
  "JS"
];
// Calling the function to remove falsy values
let cleanedArray = removeFalsyValues(myArray);

// Function to remove falsy values from an array
function removeFalsyValues(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      result.push(array[i]);
    }
  }

  return result;
}
// Using the function to clean the array
console.log("Original Array:");
console.log(myArray);
console.log("Array after removing falsy values:");
console.log(cleanedArray);
// Output: [10, "Hello", 25, true, "JS"]

