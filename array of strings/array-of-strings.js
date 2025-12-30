//Declare a function named makeSentence
function makeSentence(wordsArray) {
  //Start with an empty string
  let sentence = "";

  //Loop through the array using index i
  for (let i = 0; i < wordsArray.length; i++) {
    sentence += wordsArray[i];  // Add the current word

    //space after the word, except for the last one
    if (i < wordsArray.length - 1) {
      sentence += " ";
    }
  }

  //Return the final sentence
  return sentence;
}

// Example usage
let words = ["Hello", "there", "students", "of", "AvengaAcademy", "!"];
let result = makeSentence(words);

//Show result in console and alert
console.log(result);  // Output: Hello there students of AvengaAcademy !
alert(result);


