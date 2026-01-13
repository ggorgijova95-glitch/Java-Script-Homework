/*// Ask the user to enter 5 strings
let str1 = prompt("Enter first string:");
let str2 = prompt("Enter second string:");
let str3 = prompt("Enter third string:");
let str4 = prompt("Enter fourth string:");
let str5 = prompt("Enter fifth string:");

// Create an array with the strings
let array = [str1, str2, str3, str4, str5];

// Join all strings into one
let result = array.join(", ");

// Show the result
console.log(result);
alert("The joined string is: " + result);*/

// Prompt user for string elements
let array = [];
let count = 5; // we want 5 elements
let element;

for (let i = 0; i < count; i++) {
    let element = prompt("Enter string " + (i + 1) + ":");

    // Validate input: cannot be empty, cancelled, or a number
    while (element === "" || element === null || !isNaN(element)) {
        element = prompt("Please enter a valid string (not a number) for element " + (i + 1) + ":");
    }

    array.push(element); // add valid input to the array
}

// Join all elements with a new line "\n"
let result = array.join("\n");

// Show the result
alert("The joined strings are:\n" + result);
console.log("Joined Strings:\n" + result);
