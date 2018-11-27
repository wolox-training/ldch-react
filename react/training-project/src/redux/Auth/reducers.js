import { actions } from './actions';

const initalState = {
  token: null,
  loginFail: false
};

function reducer(state = initalState, action) {
  switch (action.type) {
    case actions.LOG_IN_SUCCESS:
      return {
        ...state,
        token: action.payload
      };
    case actions.LOG_IN_FAIL:
      return {
        ...state,
        loginFail: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
