const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
let timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score')
let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;