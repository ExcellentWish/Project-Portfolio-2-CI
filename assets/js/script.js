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

// This is to generate a choice for the computer when playing rpsls
function generateComputerChoice(){
  let randomNumber = Math.floor(Math.random() * 5);
  if(randomNumber === 0){
    computerChoice = "rock";
  } else if (randomNumber === 1){
    computerChoice = "paper";
  }else if (randomNumber === 2){
    computerChoice = "sissors";
  }else if (randomNumber === 3){
    computerChoice = "lizard";
  }else if (randomNumber === 4){
    computerChoice = "spock"
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}