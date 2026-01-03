//It is recommended to use AI tools for this task. 
// Write a JavaScript program to display the reading status of some book. 
// The object should have the next properties: title, author, readingStatus and a method that will return info depending
// on the readingStatus e.g. Already read 'The Robots of dawn' by Isaac Asimov. (if true) 
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.(if false). 
// Bonus: enter the values from prompt()

//my solution:
// Ask for book title until it's valid
let bookTitle = prompt("Enter the book title:");
while (!bookTitle || !isNaN(parseInt(bookTitle))) {
  bookTitle = prompt("Invalid! Enter the book title (text only):");
}

// Ask for book author until it's valid
let bookAuthor = prompt("Enter the book author:");
while (!bookAuthor || !isNaN(parseInt(bookAuthor))) {
  bookAuthor = prompt("Invalid! Enter the book author (text only):");
}

// Ask for reading status
let statusInput = prompt("Have you read the book? (yes or no)");
while (!statusInput || (statusInput.toLowerCase() !== "yes" && statusInput.toLowerCase() !== "no")) {
  statusInput = prompt("Invalid! Have you read the book? (yes or no)");
}
// Convert reading status to boolean
statusInput = statusInput.toLowerCase();
let readingStatus = null;
if (statusInput === "yes") {
  readingStatus = true;
} else if (statusInput === "no") {
  readingStatus = false;
} else {
  readingStatus = null; // handle invalid input later
}

// Create the book object
let book = {
  title: bookTitle,
  author: bookAuthor,
  readingStatus: readingStatus,
  getInfo: function () {
    if (this.readingStatus === true) {
      return "Already read '" + this.title + "' by " + this.author + ".";
    } else if (this.readingStatus === false) {
      return "You still need to read '" + this.title + "' by " + this.author + ".";
    } else {
      return "Invalid reading status.";
    }
  }
};

// Show result
console.log(book.getInfo());

