

function showValueAndType(value) {
    console.log("Value:", value);
    console.log("Type:", typeof value);
    console.log("------------");
}

showValueAndType({});                                    // object
showValueAndType(confirm("OK = true, Cancel = false"));  // boolean
showValueAndType(Number(prompt("Enter a number:")));     // number
showValueAndType(prompt("Enter text:"));                 // string

let x;
showValueAndType(x);                                     // undefined