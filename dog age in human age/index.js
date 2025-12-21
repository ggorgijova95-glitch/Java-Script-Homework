function humanToDogAge(humanYears) {
    return humanYears * 7;
}

function dogToHumanAge(dogYears) {
    return dogYears / 7;
}

let choice = prompt("Type 'human' or 'dog'");

if (choice === "human") {
    let age = Number(prompt("Enter human age:"));
    console.log("Dog age:", humanToDogAge(age));
} else if (choice === "dog") {
    let age = Number(prompt("Enter dog age:"));
    console.log("Human age:", dogToHumanAge(age));
} else {
    console.log("Invalid choice");
}
