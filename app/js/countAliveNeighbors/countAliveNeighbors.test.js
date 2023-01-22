import countAliveNeighbors from "./countAliveNeighbors.js";

describe("Given a countAliveNeighbors function", () => {
  describe("When it receives a random cells position", () => {
    test("Then it should return the correct number of alive neighbors", () => {
      const board = [
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 0],
      ];
      const cellX = 2;
      const cellY = 2;

      const aliveNeighbors = countAliveNeighbors(board, cellX, cellY);

      expect(aliveNeighbors).toBe(1);
    });
  });
});
