function myFunction() {
  var links = document.getElementById("myLinks");
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
} // code for hamburger menu


// whack a mole
const squares = document.getElementsByClassName('square');
const mole = document.getElementsByClassName('mole');
let timeLeft = document.getElementById('time-left');
let scoreWhackaMole = document.getElementById('whack-a-mole-score') 