import AuthService from '../../services/AuthService';

export const actions = {
  LOG_IN: '@@AUTH/LOG_IN',
  LOG_IN_SUCCESS: '@@AUTH/LOG_IN_SUCCESS',
  LOG_IN_FAIL: '@@AUTH/LOG_IN_FAIL',
  LOG_IN_PROCESSING: '@AUTH/LOG_IN_PROCESSING',
  LOG_OUT: '@@AUTH/V',
  LOG_OUT_SUCCESS: '@@AUTH/LOG_OUT_SUCCESS',
  LOG_OUT_FAIL: '@@AUTH/LOG_OUT_FAIL'
};

const actionCreators = {
  logIn: user => dispatch => {
    dispatch(actionCreators.logInProcessing(true));
    setTimeout(async () => {
      const token = await AuthService.logIn(user);
      if (!token) return dispatch(actionCreators.logInFail(true, false));
      dispatch(actionCreators.logInSuccess(token, false));
    }, 1500);
  },

  logInProcessing: bool => ({
    type: actions.LOG_IN_PROCESSING,
    payload: bool
  }),

  logInFail: (bool, processing) => ({
    type: actions.LOG_IN_FAIL,
    payload: {
      bool,
      processing
    }
  }),

  logInSuccess: (token, processing) => ({
    type: actions.LOG_IN_SUCCESS,
    payload: {
      token,
      processing
    }
  })
};

export default actionCreators;
