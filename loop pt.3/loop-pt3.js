// Ask the user how many students
let count = parseInt(prompt("How many students?"));

let fullNames = [];

// Loop for each student
for (let i = 1; i <= count; i++) {
    let first = prompt("Enter first name of student " + i + ":");
    let last = prompt("Enter last name of student " + i + ":");
    
    let fullName = i + ". " + first + " " + last;
    fullNames.push(fullName);
}

// Show result in console
console.log(fullNames);
alert("Student names:\n" + fullNames.join("\n"));
