// JavaScript code to dynamically create an <h1> element based on user input
$(document).ready(function() {
    $("#generate-h1").click(function() {
        let text = prompt("Enter the text for the header:");
        let color = prompt("Enter the color for the header");

        // Validate text
        if (text === "") {
            $("#message").text("Error: Text cannot be empty.");
            return;
        }
        if (!isNaN(text)) {
            $("#message").text("Error: Text cannot be a number.");
            return;
        }
    
        
        // Validate color by testing in a temporary element
        let isValidColor = $("<div>").css("color", color).css("color") !== "";
        if (!isValidColor) {
            $("#message").text("Error: Invalid color entered.");
            return;
        }

        // Create new header dynamically
        let newHeader = $("<h1>").text(text).css("color", color);
        $("#message").text(""); // clear error message
        $("body").append(newHeader); // add header below inputs/button
        })
        
    });
