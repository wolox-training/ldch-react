import { actions } from './actions';

const initalState = {
  token: null,
  loginFail: false,
  processing: false
};

function reducer(state = initalState, action) {
  switch (action.type) {
    case actions.LOG_IN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        processing: action.payload.processing,
        loginFail: action.payload.loginFail
      };
    case actions.LOG_IN_FAIL:
      return {
        ...state,
        loginFail: action.payload.bool,
        processing: action.payload.processing
      };
    case actions.LOG_IN_PROCESSING:
      return {
        ...state,
        processing: action.payload
      };
    case actions.LOG_OUT_SUCCESS:
      return {
        ...state,
        token: actions.payload
      };
    default:
      return state;
  }
}

export default reducer;
