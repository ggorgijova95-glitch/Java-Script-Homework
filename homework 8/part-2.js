$(document).ready(function () {

    function isValidColor(color) {
        let test = $("<div></div>");
        test.css("color", color);
        return test.css("color") !== "";
    }

    $("#generateBtn").click(function () {

        let text = $("#textInput").val().trim();
        let color = $("#colorInput").val().trim();

        $("#message").text("");

        if (text === "" || color === "") {
            $("#message").text("Both fields are required");
            return;
        }
        if (!isNaN(text)) {
            $("#message").text("Text cannot be a number");
            return;
        }

        if (!isValidColor(color)) {
            $("#message").text("Invalid color");
            return;
        }

        let header = $("<h1></h1>")
            .text(text)
            .css("color", color);

        $("#result").append(header);
    });

});

