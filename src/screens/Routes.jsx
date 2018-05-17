// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import DashboardPage from './DashboardPage';
import AuthRoute from './AuthRoute';
import LoginPage from './login/LoginPage';

import * as profileActions from './../modules/profile/actions';
import * as loginAction from './../screens/login/actions';
import { Loading } from './../components';


class Routes extends React.Component<Props> {

  render() {
    let { sessionStudent, profile } = this.props;
    let signedIn = (sessionStudent)  && (sessionStudent.idStudent != null);
    
    return (
      <Switch>
        <Route path='/login' component={ LoginPage } />
        <AuthRoute path='/' signedIn={ signedIn } redirect="/login" component={ DashboardPage } />
      </Switch>
    );
  }
};

let mapStateToProps = (state) => {
  let { sessionStudent } = state;
  return { sessionStudent};
};

export default withRouter(connect(mapStateToProps, null)(Routes));