// Ask the user how many numbers they want to enter
let count = parseInt(prompt("How many numbers do you want to enter?"));

// Initialize max and min as null
let max = null;
let min = null;

// Loop to get each number
for (let i = 1; i <= count; i++) {
    let num = parseFloat(prompt("Enter number " + i + ":"));

    if (!isNaN(num)) { // Only use valid numbers
        if (max === null || num > max) max = num;
        if (min === null || num < min) min = num;
    } else {
        alert("That is not a number, try again.");
        i--; // repeat this iteration
    }
}

// Calculate sum
let sum = max + min;

// Show result
console.log("Max: " + max + ", Min: " + min + ", Sum: " + sum);
alert("Max: " + max + ", Min: " + min + ", Sum: " + sum);