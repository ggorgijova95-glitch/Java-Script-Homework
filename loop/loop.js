// Ask the user for the start and end of the range
let start = parseInt(prompt("Enter the start of the range:"));
let end = parseInt(prompt("Enter the end of the range:"));

let output = "";

for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
        output += i + "\n"; // Even number: add newline
    } else {
        output += i + " ";   // Odd number: add space
    }
}

console.log(output);
alert("Check the console for the output!");
