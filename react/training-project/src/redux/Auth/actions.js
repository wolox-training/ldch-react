import AuthService from '../../services/AuthService';

export const actions = {
  LOG_IN: '@@AUTH/LOG_IN',
  LOG_IN_SUCCESS: '@@AUTH/LOG_IN_SUCCESS',
  LOG_IN_FAIL: '@@AUTH/LOG_IN_FAIL',
  LOG_OUT: '@@AUTH/V',
  LOG_OUT_SUCCESS: '@@AUTH/LOG_OUT_SUCCESS',
  LOG_OUT_FAIL: '@@AUTH/LOG_OUT_FAIL'
};

const actionCreators = {
  logIn: user => async dispatch => {
    const token = await AuthService.logIn(user);
    if (!token) return dispatch(actionCreators.logInFail(true));
    dispatch(actionCreators.logInSuccess(token));
  },

  logInFail: bool => ({
    type: actions.LOG_IN_FAIL,
    payload: bool
  }),

  logInSuccess: token => ({
    type: actions.LOG_IN_SUCCESS,
    payload: token
  })
};

export default actionCreators;
