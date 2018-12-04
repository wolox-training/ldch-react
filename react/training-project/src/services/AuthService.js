import api from '../config/api';

export default {
  logIn: ({ username, password }) => api.get('/users', { username, password }),
  getUserToken: token => api.get('/sessions', { token }),
  logOut: token => api.delete(`/sessions/${token}`)
};
