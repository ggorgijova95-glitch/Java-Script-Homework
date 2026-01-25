$(document).ready(function(){
$("#greet-btn").click(function(){
    let name = prompt("Please enter your name:");
    if (!isNaN(name)){ 
        alert("Please enter a valid name.");
        return;
    }
    $("#greet-message").text("Hello there " + name + "!");
});
});

    