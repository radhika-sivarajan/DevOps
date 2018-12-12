$(document).ready(function () {
    // Append letters
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

    for (var i = 0; i < letters.length; i++) { // Generate display buttons
        var letterBtn = $("<button>");
        letterBtn.addClass("btn btn-info letter-btn");
        letterBtn.attr("data-letter", letters[i]);
        letterBtn.text(letters[i]);
        $("#buttons").append(letterBtn);
    }

    $(".letter-btn").on("click", function () { //Append button on the other side when click on respective button
        var dispBtn = $("<button>");
        dispBtn.addClass("btn btn-danger disp-btn");
        dispBtn.text($(this).attr("data-letter"));
        $("#display").append(dispBtn);
    });

    $("#clear").on("click", function () { // Clear the new button
        $("#display").empty();
    });

    // Calculator
    var firstNumber;
    var secondNumber;
    var operator;
    var result;
    var isOperatorChosen;
    var isCalculated;

    function initiateCalculater() { // Set initial buttons
        firstNumber = "";
        secondNumber = "";
        operator = "";
        isOperatorChosen = false;
        isCalculated = false;
        $("#first-number, #second-number, #operator, #result").empty();
    }

    $(".number").on("click", function () { // Get numbers
        if (isCalculated) return;
        if (isOperatorChosen) {
            secondNumber += this.value;
            $("#second-number").html(secondNumber);
        } else {
            firstNumber += this.value;
            $("#first-number").html(firstNumber);
        }
    });

    $(".operator").on("click", function () { // Get operator
        if (isCalculated) return;
        isOperatorChosen = true;
        operator = this.value;
        $("#operator").html($(this).text());
    });

    $(".equal").on("click", function () { // Do calculation
        if (isCalculated) return;
        isCalculated = true;

        var result;
        var num1 = parseInt(firstNumber);
        var num2 = parseInt(secondNumber);

        if (operator == "plus") {
            result = num1 + num2;
        } else if (operator == "minus") {
            result = num1 - num2;
        } else if (operator == "divide") {
            result = num1 / num2;
        } else if (operator == "times") {
            result = num1 * num2;
        } else if (operator == "power") {
            result = num1 ^ num2;
        }
        $("#result").html(result);
    });

    $(".clear").on("click", function(){ // Clear the action
        $("#first-number, #second-number, #operator, #result").empty();
        initiateCalculater();
    });

    initiateCalculater();
});