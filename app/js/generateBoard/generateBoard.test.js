import generateBoard from "./generateBoard.js";

describe("Given a function generateBoard", () => {
  describe("When it receives a 5", () => {
    test("Then it creates a 2D array of 5 rows", () => {
      const rows = 5;
      const columns = 5;

      const expectedResult = [
        [[], [], [], [], []],
        [[], [], [], [], []],
        [[], [], [], [], []],
        [[], [], [], [], []],
        [[], [], [], [], []],
      ];

      const board = generateBoard(rows, columns);

      expect(board).toStrictEqual(expectedResult);
    });
  });
});
