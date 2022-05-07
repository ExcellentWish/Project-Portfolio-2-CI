function myFunction() {
    var links = document.getElementById("myLinks");
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
} // code for hamburger menu

// rpsls js
let computerChoiceDisplay = document.getElementById("computer-choice");
let userChoiceDisplay = document.getElementById("user-choice");
let resultDisplay = document.getElementById("rpsls-result");
let scoreDisplay = document.getElementById("rpsls-score")
let userChoice;
let computerChoice;
let getResults;