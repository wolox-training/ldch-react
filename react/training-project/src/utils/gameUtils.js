const LINES_TO_CHECK = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export function calculateWinner(squares) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < LINES_TO_CHECK.length; i++) {
    const [a, b, c] = LINES_TO_CHECK[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
