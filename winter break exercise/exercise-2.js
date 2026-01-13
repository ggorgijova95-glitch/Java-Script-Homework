// User input
let userNumber = Number(prompt("Enter a number:"));
if (isNaN(userNumber)) {
    alert("Please enter a valid number.");
}
let result = differenceFrom13(userNumber);

// Function to calculate the difference
function differenceFrom13(num) {
    if (num > 13) {
        return (num - 13) * 2;
    } else {
        return 13 - num;
    }
}
console.log("Result:", result);
alert("Result: " + result);
