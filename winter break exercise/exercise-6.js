//prompt user for a positive number
let number = Number(prompt("Enter a positive number:"));
//function to check divisibility
function fizzBuzz(number) {
    if (number <= 0 || isNaN(number)) {
        return "Please enter a valid positive number!";
    }

    if (number % 3 === 0 && number % 7 === 0) {
        return "FizzBuzz";
    } else if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 7 === 0) {
        return "Buzz";
    } else {
        return number + " is not divisible by 3 or 7";
    }
}

alert(fizzBuzz(number));
console.log(fizzBuzz(number));
console.log("Input number: " + number);