import api from '../config/api';

export default {
  logIn: async ({ username, password }) => {
    let token = null;
    let answer = null;
    const user = await api.get('/users', { username });

    if (user.data.length > 0) {
      token = password === user.data[0].password ? window.btoa(username + password) : null;
    }
    if (token) {
      const response = await api.post('/sessions', { token });
      answer = response.ok ? response.data.token : null;
    }

    return answer;
  },

  getUserToken: async token => {
    const response = await api.get('/sessions', { token });
    return response.ok ? response.data.token : null;
  },

  logOut: async token => {
    const response = await api.delete(`/sessions/${token}`);
    return response.ok ? response.data : null;
  }
};
