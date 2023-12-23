// JavaScript for game logic

// Initialize the game board
const board = document.getElementById('board');
const cells = [];
let currentPlayer = 'X'; // Start with 'X'

for (let i = 0; i < 9; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.dataset.index = i;
  cell.addEventListener('click', () => cellClicked(i));
  cells.push(cell);
  board.appendChild(cell);
}

// Array to represent the game state
const gameBoard = ['', '', '', '', '', '', '', '', ''];

// Function to handle player moves
function cellClicked(index) {
  if (gameBoard[index] === '' && !checkWinner()) {
    gameBoard[index] = currentPlayer;
    cells[index].textContent = currentPlayer;

    if (checkWinner()) {
      alert(`Player ${currentPlayer} wins!`);
      resetGame();
    } else if (gameBoard.every(cell => cell !== '')) {
      alert('It\'s a draw!');
      resetGame();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch players
    }
  }
}

// Function to check for a winner
function checkWinner() {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const condition of winConditions) {
    const [a, b, c] = condition;
    if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return true;
    }
  }
  return false;
}

// Function to reset the game
function resetGame() {
  gameBoard.fill('');
  cells.forEach(cell => {
    cell.textContent = '';
  });
  currentPlayer = 'X';
}

