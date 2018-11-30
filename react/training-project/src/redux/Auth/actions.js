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

  logInSuccess: (token, processing, loginFail) => ({
    type: actions.LOG_IN_SUCCESS,
    payload: {
      token,
      processing,
      loginFail
    }
  }),

  logOutSuccess: () => ({
    type: actions.LOG_OUT_SUCCESS,
    payload: null
  })
};

const actionCreators = {
  logIn: ({ username, password }) => async dispatch => {
    dispatch(privateActionsCreators.logInProcessing(true));
    const response = await AuthService.logIn({ username, password });

    if (response.ok && response.data.length > 0) {
      const token = window.btoa(username + password);
      const tokenPosted = await AuthService.postToken(token);

      if (!tokenPosted.ok) return dispatch(privateActionsCreators.logInFail(true, false));
      dispatch(privateActionsCreators.logInSuccess(token, false, false));
    } else {
      dispatch(privateActionsCreators.logInFail(true, false));
    }
  },

  logOut: token => async dispatch => {
    const response = await AuthService.getToken(token);

    if (response.ok && response.data.length > 0) {
      response.data.forEach(async element => {
        const deletedToken = await AuthService.logOut(element.id);
        if (!deletedToken.ok) return { type: actions.LOG_OUT_FAIL };
      });

      dispatch(privateActionsCreators.logOutSuccess());
    } else {
      return { type: actions.LOG_OUT_FAIL };
    }
  }
};

export default actionCreators;
