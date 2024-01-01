export type value = 'X' | 'O' | null;

export type BoardState = value[];

const createBoardState = () => Array<value>(9).fill(null);

function calculateWinner(boardState: BoardState) {
  const winnerCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winnerCombinations.length; i++) {
    const [a, b, c] = winnerCombinations[i];
    if (
      boardState[a] &&
      boardState[a] === boardState[b] &&
      boardState[a] === boardState[c]
    ) {
      return boardState[a];
    }
  }
  return null;
}
