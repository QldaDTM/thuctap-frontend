import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import * as loginAction from './../../login/actions';
import * as profileActions from './../../../modules/profile/actions';
import { Loading } from './../../../components';

class Menu extends Component {

  handelLogout = (e)=>{
    e.preventDefault();
    this.props.loginAction.resetSession();
  }

  componentWillMount(){
    let { profile, loginAction, profileActions } = this.props;
    if (profile.data == null){
      profileActions.getMyAccount()
        .then(res => {
          if(!res.id){
            loginAction.resetSession();
          }
        })
        .catch( () => loginAction.resetSession() );
      }  
  }

  render() {
    let { profile } = this.props;
    if(profile.data == null) return (<Loading />)
    return (
      <header className="main-header">
     
        <a href="{k:var url_home}" className="logo">
          <span className="logo-mini"><b>T</b>X</span>
          <span className="logo-lg"><b>Admin</b>TX</span>
        </a>
        <nav className="navbar navbar-static-top">
          <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
            <span className="sr-only">Toggle navigation</span>
          </a>

          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li className="dropdown user user-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <img src="/dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
                  <span className="hidden-xs">{profile.data.fullName}</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="user-header">
                    <img src="/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                    <p>
                      {profile.data.fullName}
                    </p>
                  </li>
                  <li className="user-footer">
                    <div className="pull-left">
                    <Link to="/profile" className="btn btn-default btn-flat">
                      Profile
                    </Link>
                    </div>
                    <div className="pull-right">
                      <a onClick={this.handelLogout} href="#" className="btn btn-default btn-flat">Sign out</a>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" target="_blank"><i className="fa fa-home"></i></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

let mapStateToProps = (state) => {
  let { sessionStudent, profile } = state;
  return { sessionStudent, profile };
};

let mapDispatchToProps = (dispatch) => {
  return {
    loginAction: bindActionCreators(loginAction, dispatch),
    profileActions                : bindActionCreators(profileActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);