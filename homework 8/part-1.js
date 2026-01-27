// Part 1: Greeting User
$(document).ready(function(){
    // Handle button click to greet user
$("#greet-btn").click(function(){
    let name=$("#nameInput").val().trim();
    if(name===""){
        $("#greet-message").text("Please enter your name.");
    }else{
        $("#greet-message").text("Hello there "+name+"!");
    }
    
});
});

    