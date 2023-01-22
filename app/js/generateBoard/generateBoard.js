let generateBoard = (rows, columns) => {
  const board = [];
  const row = [];
  const column = [];

  //new Array(rows);

  for (let i = 0; i < rows; i++) {
    board[i] = row;

    for (let j = 0; j < columns; j++) {
      board[i][j] = column;
    }
  }

  return board;
};

console.log(generateBoard(5, 5));

export default generateBoard;
