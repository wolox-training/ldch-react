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

const privateActionsCreators = {
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

const actionCreators = {
  logIn: ({ username, password }) => async dispatch => {
    dispatch(privateActionsCreators.logInProcessing(true));
    let token = null;
    const response = await AuthService.logIn({ username, password });

    if (response.ok) {
      token = response.data.length > 0 ? window.btoa(username + password) : null;
    }

    if (!token) return dispatch(privateActionsCreators.logInFail(true, false));
    dispatch(privateActionsCreators.logInSuccess(token, false));
  }
};

export default actionCreators;
