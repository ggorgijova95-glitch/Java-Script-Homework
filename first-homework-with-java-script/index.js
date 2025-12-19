// Ask user for number of phones
let phones = Number(prompt("Enter number of phones:"));

// Price and tax
let price = 119.95;
let taxRate = 0.05;

// Calculate total
let total = phones * price;
let finalPrice = total + (total * taxRate);

// Show result in console
console.log("Number of phones: " + phones);
console.log("Final price with 5%tax: $" + finalPrice);
