'use strict';

let color = 'black';

// Function to choose the color for the square
const colorSquare = function () {
  if (color === 'random') {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
};

// Function to create the board
const createBoard = function (size) {
  const board = document.querySelector('.board');
  const squares = board.querySelectorAll('div');

  squares.forEach((div) => div.remove());

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.addEventListener('mouseover', colorSquare);
    square.style.backgroundColor = 'white';
    board.insertAdjacentElement('beforeend', square);
  }
};

// Function to change the size of the board
const changeSize = function (input) {
  if (input >= 2 && input <= 100) {
    createBoard(input);
  } else {
    console.log('Wrong Input!');
  }
};

// Function to change the color
const changeColor = function (choice) {
  color = choice;
};

// Function to reset the game
const resetBoard = function () {
  const board = document.querySelector('.board');
  const squares = board.querySelectorAll('div');

  squares.forEach((div) => (div.style.backgroundColor = 'white'));
};
