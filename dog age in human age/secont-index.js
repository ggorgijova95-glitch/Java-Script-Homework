function dogToHumanAge(dogYears) {
    if (dogYears <= 1) {
        return dogYears * 15;
    } else if (dogYears <= 2) {
        return 15 + (dogYears - 1) * 9;
    } else {
        return 24 + (dogYears - 2) * 5;
    }
}

function humanToDogAge(humanYears) {
    if (humanYears <= 15) {
        return humanYears / 15;
    } else if (humanYears <= 24) {
        return 1 + (humanYears - 15) / 9;
    } else {
        return 2 + (humanYears - 24) / 5;
    }
}

// Ask user what they want to calculate
let choice = prompt("Type 'dog' to convert dog → human\nType 'human' to convert human → dog");

if (choice === "dog") {
    let dogAge = Number(prompt("Enter dog's age:"));
    let result = dogToHumanAge(dogAge);
    console.log("Dog age:", dogAge);
    console.log("Human age:", result);
} 
else if (choice === "human") {
    let humanAge = Number(prompt("Enter human age:"));
    let result = humanToDogAge(humanAge);
    console.log("Human age:", humanAge);
    console.log("Dog age:", result.toFixed(1));
} 
else {
    console.log("Invalid choice");
}