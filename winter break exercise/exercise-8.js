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
let cleanedArray = removeFalsyValues(myArray);
console.log(cleanedArray);
// Output: [10, "Hello", 25, true, "JS"]

