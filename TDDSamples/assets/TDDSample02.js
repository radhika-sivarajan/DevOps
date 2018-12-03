var computerChoices = ["r", "p", "s"];
var wins = 0;
var losses = 0;
var ties = 0;

document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);
    if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {
        if ((userGuess === "r") && (computerGuess === "s")) {
            wins++;
        }
        else if ((userGuess === "r") && (computerGuess === "p")) {
            losses++;
        }
        else if ((userGuess === "s") && (computerGuess === "r")) {
            losses++;
        }
        else if ((userGuess === "s") && (computerGuess === "p")) {
            wins++;
        }
        else if ((userGuess === "p") && (computerGuess === "r")) {
            wins++;
        }
        else if ((userGuess === "p") && (computerGuess === "s")) {
            losses++;
        }
        else if (userGuess === computerGuess) {
            ties++;
        }
        var html = " Win : " + wins + " Loss: " + losses + " Tie :" + ties;
        document.getElementById("display").innerHTML = html;
    } else {
        alert("Please enter Lowercase R P or S")
    }
}