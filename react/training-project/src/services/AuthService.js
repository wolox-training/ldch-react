import api from '../config/api';

export default {
  logIn: ({ username, password }) => api.get('/users', { username, password }),
  getToken: token => api.get('/sessions/', { token }),
  postToken: token => api.post('/sessions/', { token }),
  logOut: tokenid => api.delete(`/sessions/${tokenid}`)
};
