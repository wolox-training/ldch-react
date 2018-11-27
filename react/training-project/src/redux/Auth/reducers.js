import { actions } from './actions';

const initalState = {
  token: null
};

function reducer(state = initalState, action) {
  switch (action.type) {
    case actions.LOG_IN_SUCCESS:
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
