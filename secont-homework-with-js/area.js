// Ask user for a year
let year = Number(prompt("Enter a year:"));

// Calculate zodiac number
let zodiacNumber = (year - 4) % 12;

// Determine Chinese Zodiac using if-else
let zodiacName = "";

if (zodiacNumber === 0) zodiacName = "Rat";
else if (zodiacNumber === 1) zodiacName = "Ox";
else if (zodiacNumber === 2) zodiacName = "Tiger";
else if (zodiacNumber === 3) zodiacName = "Rabbit";
else if (zodiacNumber === 4) zodiacName = "Dragon";
else if (zodiacNumber === 5) zodiacName = "Snake";
else if (zodiacNumber === 6) zodiacName = "Horse";
else if (zodiacNumber === 7) zodiacName = "Goat";
else if (zodiacNumber === 8) zodiacName = "Monkey";
else if (zodiacNumber === 9) zodiacName = "Rooster";
else if (zodiacNumber === 10) zodiacName = "Dog";
else if (zodiacNumber === 11) zodiacName = "Pig";

// Show result
console.log("Year " + year + " is the year of the " + zodiacName);
