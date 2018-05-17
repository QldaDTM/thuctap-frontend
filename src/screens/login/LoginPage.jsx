// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LoginForm from './LoginForm';

class LoginPage extends React.Component<Props> {
  render() {
    let { sessionStudent } = this.props;
    if(sessionStudent.idStudent != null)
      return (<Redirect to="/" />);
    return (
      <div className="login-page">
        <div className="" style={{height: 'auto', minHeight: '100%'}}>
          <LoginForm />
        </div>
      </div>
      
    );
  }
};

let mapStateToProps = (state) => {
  let { sessionStudent } = state;
  return { sessionStudent };
};

export default connect(mapStateToProps, null)(LoginPage);