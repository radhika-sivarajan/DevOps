$(document).ready(function () {
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

    for (var i = 0; i < letters.length; i++) {
        var letterBtn = $("<button>");
        letterBtn.addClass("btn btn-info letter-btn");
        letterBtn.attr("data-letter", letters[i]);
        letterBtn.text(letters[i]);
        $("#buttons").append(letterBtn);
    }

    $(".letter-btn").on("click", function () {
        var dispBtn = $("<button>");
        dispBtn.addClass("btn btn-danger disp-btn");
        dispBtn.text($(this).attr("data-letter"));
        $("#display").append(dispBtn);
    });

    $("#clear").on("click", function () {
        $("#display").empty();
    });
});
