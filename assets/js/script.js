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
let scoreDisplay = document.getElementById("rpsls-score");
let computerScoreDisplay = document.getElementById("computer-rpsls-score");
let score = 0;
let computerScore = 0;
let userChoice = '';
let computerChoice = '';
let getResults;
let possibleChoice = document.querySelectorAll(".rpsls-btn");

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener("click", (event) => {
  userChoice = event.target.id;
  userChoiceDisplay.innerHTML = userChoice;

  generateComputerChoice();
  generateResults();
}))

// This is to generate a choice for the computer when playing rpsls
function generateComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 5);
  if (randomNumber === 0) {
    computerChoice = "rock";
  } else if (randomNumber === 1) {
    computerChoice = "paper";
  } else if (randomNumber === 2) {
    computerChoice = "sissors";
  } else if (randomNumber === 3) {
    computerChoice = "lizard";
  } else if (randomNumber === 4) {
    computerChoice = "spock"
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}



function generateResults() {
  if (computerChoice === userChoice) {
    getResults = 'draw';
  } else if (computerChoice === 'sissors' && userChoice === "rock") {
    getResults = 'You Won';
    score++;
  } else if (computerChoice === 'sissors' && userChoice === "spock") {
    getResults = 'You Won';
    score++;
  } else if (computerChoice === 'paper' && userChoice === "sissors") {
    getResults = 'You Won';
    score++;
  } else if (computerChoice === 'paper' && userChoice === 'lizard') {
    getResults = 'You Won';
    score++;
  } else if (computerChoice === 'rock' && userChoice === "paper") {
    getResults = 'You Won';
    score++;
  } else if (computerChoice === 'rock' && userChoice === "spock") {
    getResults = 'You Won';
    score++;
  } else if (computerChoice === 'lizard' && userChoice === "rock") {
    getResults = 'You Won';
    score++;
  } else if (computerChoice === 'lizard' && userChoice === "sissors") {
    getResults = 'You Won';
    score++;
  } else if (computerChoice === 'spock' && userChoice === "paper") {
    getResults = 'You Won';
    score++;
  } else if (computerChoice === 'spock' && userChoice === "lizard") {
    getResults = 'You Won';
    score++;
  } else {
    getResults = 'You Lost';
    computerScore++;
  }

  if(score === 5){ // for a win of the game
    getResults = ' You Won The Game';
    } else if (computerScore === 5){
    getResults = ' Computer Has Won The Game'
  }

  resultDisplay.innerHTML = getResults;
  scoreDisplay.innerHTML = score;
  computerScoreDisplay.innerHTML = computerScore;
}

document.getElementById('rpsls-reset').addEventListener('click', reset);

function reset() {
    document.getElementById('user-choice').innerHTML = '';
    document.getElementById('computer-choice').innerHTML = '';
    document.getElementById('rpsls-score').innerHTML = 0;
    document.getElementById('computer-rpsls-score').innerHTML = 0;
    score = 0;
    computerScore = 0;
    resultDisplay.innerHTML = '';
}
