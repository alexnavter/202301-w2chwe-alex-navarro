const generateBoard = (rows, columns) => {
  const board = [];
  const row = [];
  const column = [];

  for (let i = 0; i < rows; i++) {
    board[i] = row;

    for (let j = 0; j < columns; j++) {
      board[i][j] = column;
    }
  }

  return board;
};

export default generateBoard;
