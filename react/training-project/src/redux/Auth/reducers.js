import { actions } from './actions';

const initalState = {
  token: null,
  loginFail: false,
  processing: false,
  userdata: {
    name: null,
    photoUrl: null,
    charge: null,
    description: null,
    won: 0,
    lost: 0,
    draw: 0
  }
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
        token: action.payload
      };
    case actions.SET_USER_DATA:
      return {
        ...state,
        userdata: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
