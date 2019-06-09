$(document).ready(function () {

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
