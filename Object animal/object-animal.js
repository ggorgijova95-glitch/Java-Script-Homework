//# Homework 4

//## Part 1.Create OBJECT animal with 2 properties and 1 method:
//name
//kind
//speak (method)
//this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”
//Bonus: enter the values from prompt

//my solution
// Ask the user for animal details
let animalName = prompt("Enter the animal name:");
let animalKind = prompt("Enter the animal kind (Dog, Cat, etc.):");

// Create the animal object
let animal = {
  name: animalName,
  kind: animalKind,
  speak: function(message) {
    console.log(this.kind + " says: '" + message + "'");
  }
};

// Ask the user what the animal should say
let message = prompt("What should the animal say?");

// Call the speak method
animal.speak(message);
