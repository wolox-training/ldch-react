import React, { Component } from 'react';

import LoginForm from './layout';

/* eslint-disable no-func-assign */
class LoginPage extends Component {
  submit = vals => {
    window.alert(JSON.stringify(vals, null, 4)); // eslint-disable-line
  };

  render() {
    return <LoginForm onSubmit={this.submit} />;
  }
}

export default LoginPage;
