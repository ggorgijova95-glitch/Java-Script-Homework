  // Prompt the user to enter the count of numbers
  let count = Number(prompt("How many numbers do you want to enter?"));
  let arr = [];
  let result = [];
  //function to transform the array based on odd/even rules
function transformArrayWithPrompt() {
  // Get numbers from the user
  for (let i = 0; i < count; i++) {
    let num = Number(prompt("Enter number " + (i + 1)));
    arr.push(num);
  }
  
  // Transform the numbers
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      // odd → +1
      result.push(arr[i] + 1);
    } else {
      // even → -1
      result.push(arr[i] - 1);
    }
  }

  // Display the original and transformed arrays
  console.log("Original array:", arr);
  console.log("Transformed array:", result);
}

// Call the function
transformArrayWithPrompt();



