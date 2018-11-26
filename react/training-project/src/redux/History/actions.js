import { calculateWinner } from '~utils/gameUtils';

export const actions = {
  HANDLE_CLICK: '@@HISTORY/HANDLE_CLICK',
  BLOCK_ON_WINNER: '@@HISTORY/BLOCK_ON_WINNER',
  SET_SQUARE_CLICK: '@@HISTORY/SET_SQUARE_CLICK',
  SET_JUMP_TO: '@@HISTORY/SET_JUMP_TO'
};

const actionCreators = {
  setSquareClick: newState => ({
    type: actions.SET_SQUARE_CLICK,
    payload: newState
  }),
  handleClick: ({ history, stepNumber, xIsNext, id }) => {
    const newhistory = history.slice(0, stepNumber + 1);
    const current = newhistory[newhistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[id]) {
      return {
        type: actions.BLOCK_ON_WINNER
      };
    }
    squares[id] = xIsNext ? 'X' : 'O';
    return dispatch => {
      dispatch(
        actionCreators.setSquareClick({
          history: newhistory.concat([{ squares }]),
          stepNumber: newhistory.length,
          xIsNext: !xIsNext
        })
      );
    };
  },

  setJumTo: step => ({
    type: actions.SET_JUMP_TO,
    payload: {
      stepNumber: step,
      xIsNext: step % 2 === 0
    }
  })
};

export default actionCreators;
