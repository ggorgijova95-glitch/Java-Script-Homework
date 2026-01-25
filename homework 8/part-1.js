// Part 1: Greeting User
$(document).ready(function(){
    // Handle button click to greet user
$("#greet-btn").click(function(){
    let name = prompt("Please enter your name:");
    // Validate name input
    if (!isNaN(name)){ 
        alert("Please enter a valid name.");
        return;
    }
    // Display greeting message
    $("#greet-message").text("Hello there " + name + "!");
});
});

    