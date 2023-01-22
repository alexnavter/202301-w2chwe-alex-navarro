const generateBoard = (rows, columns) => {
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];

    for (let j = 0; j < columns; j++) {
      board[i][j] = Math.round(Math.random());
    }
  }

  return board;
};

export default generateBoard;
