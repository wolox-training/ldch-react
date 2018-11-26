import { actions } from './actions';

const initalState = {
  history: [{ squares: Array(9).fill('') }],
  stepNumber: 0,
  xIsNext: true
};

function reducer(state = initalState, action) {
  switch (action.type) {
    case actions.SET_SQUARE_CLICK:
      return {
        ...state,
        history: action.payload.history,
        stepNumber: action.payload.stepNumber,
        xIsNext: action.payload.xIsNext
      };
    case actions.SET_JUMP_TO:
      return {
        ...state,
        stepNumber: action.payload.stepNumber,
        xIsNext: action.payload.xIsNext
      };
    default:
      return state;
  }
}

export default reducer;
