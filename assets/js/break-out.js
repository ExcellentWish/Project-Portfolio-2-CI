const scoreDisplay = document.querySelector('#score');
let score = 0;
const grid = document.querySelector('.break-out-grid');
const blockWidth = 100;
const blockHeight = 20;

class Block{
    constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis]
    this.topLeft = [xAxis, yAxis + blockHeight]
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}


function addBlocks(){
    for(let i = 0; i < blocks.length; i++){
   
       const block = document.createElement('div');
       block.classList.add('block');
       block.style.left = blocks[i].bottomLeft[0] + 'px';
       block.style.bottom = blocks[i].bottomLeft[1] + 'px';
       grid.appendChild(block);
     }
   }
   addBlocks();