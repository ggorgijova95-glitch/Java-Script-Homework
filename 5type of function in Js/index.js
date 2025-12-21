//second way to check types
function checkType(value) {
    let type = typeof value;
    console.log(type);
    alert("Type is: " + type);
    return type;
}

// 1. object
checkType({});

// 2. boolean
let userBoolean = confirm("Click OK for true, Cancel for false");
checkType(userBoolean);

// 3. number
let userNumber = Number(prompt("Enter a number:"));
checkType(userNumber);

// 4. string
let userString = prompt("Enter some text:");
checkType(userString);

// 5. undefined
let userUndefined;
checkType(userUndefined);
