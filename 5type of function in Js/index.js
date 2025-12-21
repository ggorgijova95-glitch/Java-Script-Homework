// Function that accepts a value, prints its type, and returns the type
function showValueAndType(value) {
    console.log("Value:", value);
    console.log("Type:", typeof value);
    return typeof value;
}

// 1. Object
let obj = { name: "Gabriela", age: 23 };
showValueAndType(obj);

// 2. Boolean
let bool = true;
showValueAndType(bool);

// 3. Number (keep asking until user enters valid number)
let num;
while (true) {
    let userNumberInput = prompt("Enter a number:");
    num = parseInt(userNumberInput); // only number input uses parseInt
    if (!isNaN(num)) break;
    alert("Invalid number! Please enter a valid number.");
}
showValueAndType(num);

// 4. String (keep asking until user enters something, keep as string)
let str;
while (true) {
    let userStringInput = prompt("Enter a string:");
    if (userStringInput !== null && userStringInput.trim() !== "") {
        str = userStringInput; // keep it as string, even if it contains numbers
        break;
    }
    alert("Please enter a non-empty string!");
}
showValueAndType(str);

// 5. Undefined
let undef;
showValueAndType(undef);
