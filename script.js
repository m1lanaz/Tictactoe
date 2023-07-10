let playersTurn = true;
let computerTurn = false;
let gameOver = false;

function checkWin() {
  // Define the winning combinations
  const winningCombinations = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonals
    [0, 4, 8],
    [2, 4, 6]
  ];

  // Check if any winning combination is present
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      boardItem[a].classList.contains('player') &&
      boardItem[b].classList.contains('player') &&
      boardItem[c].classList.contains('player')
    ) {
      return 'Player';
    } else if (
      boardItem[a].classList.contains('computer') &&
      boardItem[b].classList.contains('computer') &&
      boardItem[c].classList.contains('computer')
    ) {
      return 'Computer';
    }
  }

  return null; // Return null if no winner
}

function isDraw() {
  for (const cell of boardItem) {
    if (!cell.classList.contains('player') && !cell.classList.contains('computer')) {
      return false; // If any cell is still empty, it's not a draw
    }
  }
  return true; // If all cells are filled and no winner, it's a draw
}

function endGame(winner) {
  gameOver = true;
  const h2Element = document.querySelector('h2');
  if (winner) {
    h2Element.textContent = `${winner} wins!`;
  } else {
    h2Element.textContent = "It's a draw!";
  }
}

function myFunc(i) {
  if (gameOver || boardItem[i].classList.contains('player') || boardItem[i].classList.contains('computer')) {
    return; // Exit the function if the game is over or the cell is already marked
  }

  const currentClass = playersTurn ? 'player' : 'computer';
  boardItem[i].classList.add(currentClass);

  // Create the appropriate icon based on the current player
  let newIcon = document.createElement("i");
  if (playersTurn) {
    newIcon.classList.add("bi", "bi-x");
  } else {
    newIcon.classList.add("bi", "bi-circle");
  }

  boardItem[i].appendChild(newIcon);

  const winner = checkWin();
  if (winner) {
    endGame(winner);
    return; // Exit the function if a winner is found
  }

  if (isDraw()) {
    endGame(null); // It's a draw
    return; // Exit the function if it's a draw
  }

  playersTurn = !playersTurn;

  const h2Element = document.querySelector('h2');
  h2Element.textContent = playersTurn ? "Player's turn" : "Computer's turn";

  if (!playersTurn && !gameOver) {
    setTimeout(computerMove, 500);
  }
}

function computerMove() {
  const emptyCells = Array.from(boardItem).filter(cell => !cell.classList.contains('player') && !cell.classList.contains('computer'));
  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  const randomCell = emptyCells[randomIndex];
  randomCell.click();
}

const boardItem = document.getElementsByClassName('boardItem');
for (let i = 0; i < boardItem.length; i++) {
    boardItem[i].addEventListener('click', myFunc.bind(null, i));
}
