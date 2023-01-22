const countAliveNeighbors = (board, cellX, cellY) => {
  let aliveNeighbors = 0;

  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      if (x === 0 && y === 0) continue;
      if (board[cellX + x] && board[cellX + x][cellY + y] === 1) {
        aliveNeighbors++;
      }
    }
  }

  return aliveNeighbors;
};

export default countAliveNeighbors;
