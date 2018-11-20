export const actions = {
  LOGIN: '@@AUTH/LOGIN'
};

export default {
  logIn: (email, token) => ({
    type: actions.LOGIN,
    payload: {
      email,
      token
    }
  })
};
