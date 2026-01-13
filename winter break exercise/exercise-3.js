// User input
let firstNumber = Number(prompt("Enter first integer:"));
let secondNumber = Number(prompt("Enter second integer:"));
let result = closerTo100(firstNumber, secondNumber);

function closerTo100(num1, num2) {

    // Check for invalid input FIRST
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return 
    }

    if (num1 < 0 || num2 < 0) {
        alert("Negative numbers are not allowed!");
        return 
    }
    if (num1>100 || num2>100) {
        alert("Numbers greater than 100 are not allowed!");
        return 
    }

    // Calculate distance from 100
    let diff1 = 100 - num1;
    if (diff1 < 0) diff1 = diff1 * -1;

    let diff2 = 100 - num2;
    if (diff2 < 0) diff2 = diff2 * -1;

    // Compare distances
    if (diff1 < diff2) {
        return num1 + " is closer to 100";
    } else if (diff2 < diff1) {
        return num2 + " is closer to 100";
    } else {
        return "Both numbers are equally close to 100";
    }
}

// Output
console.log("First Number:", firstNumber);
console.log("Second Number:", secondNumber);
console.log("Result: ", result);
alert(result);


