function tellStory(storyArray) {
  let name = storyArray[0];
  let mood = storyArray[1];
  let activity = storyArray[2];

let story = "This is " + name + ".\n" +
            name + " is a nice person.\n" +
            "Today they are " + mood + ".\n" +
            "They are " + activity + " all day.\n" +
            "The end.";


  return story;
}

//This is for input from user
let nameInput = prompt("Enter a name:");
let moodInput = prompt("Enter a mood:");
let activityInput = prompt("Enter an activity:");

//inputs into an array
let storyArray = [nameInput, moodInput, activityInput];

// Call the function
let result = tellStory(storyArray);

// Print result
console.log(result);
alert(result);
