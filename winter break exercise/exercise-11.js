  // Prompt the user to enter the count of numbers
  let count = Number(prompt("How many numbers do you want to enter?"));
  let arr = [];
  let result = [];
  //function to transform the array based on odd/even rules
function transformArrayWithPrompt() {
  if (count <= 0) {
    alert("Please enter a valid positive number for the count.Try again.");
    return;
  }
  else if (isNaN(count)) {
    alert("Please enter a valid number.Try again.");
    return;
  }
  // Get numbers from the user
  for (let i = 0; i < count; i++) {
    let num = Number(prompt("Enter number " + (i + 1)));
    if (num >= 100) {
      alert("Please enter a number less than 100.Try again.");
      return;
    }
    else if (isNaN(num)) {
      alert("Please enter a valid number.Try again.");
      return;
    }
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



