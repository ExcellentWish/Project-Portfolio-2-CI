const squares = document.querySelectorAll(".connect4-grid div");
const result = document.querySelector('#result');
const displayCurrentPlayer = document.querySelector('#current-player');
let currentPlayer = 1;

function checkBoard(){
    for(let y = 0; y < winningArrays.length; y++){
        const square1 = squares[winningArrays[y][0]]
        const square2 = squares[winningArrays[y][1]]
        const square3 = squares[winningArrays[y][2]]
        const square4 = squares[winningArrays[y][3]]
      
      //check squares to see if they all have a the class of player one
      if(square1.classList.contains('player-one') && square2.classList.contains('player-one')
         && square3.classList.contains('player-one') && square4.classList.contains('player-one'))
         {
             result.innerHTML= 'Player One Wins!!'
         }
         if(square1.classList.contains('player-two') && square2.classList.contains('player-two')
         && square3.classList.contains('player-two') && square4.classList.contains('player-two'))
         {
             result.innerHTML= 'Player Two Wins!!'
         }
       } 
    }