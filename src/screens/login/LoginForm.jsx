// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { api, localStorage } from './../../utils';
import { withNotification } from './../../components';
import * as loginAction from './actions';

class LoginForm extends React.Component<Props> {
  _userInput: ?HTMLInputElement = null;
  _passInput: ?HTMLInputElement = null;

  handleSubmit = (e) =>{
    e.preventDefault();

    let idUser = null;
    let password = null;

    if (this._userInput != null) idUser = this._userInput.value;
    if (this._passInput != null) password = this._passInput.value;

    if (idUser !== null && password !== null) {
      if (this._passInput != null) this._passInput.value = "";

      api.student.getOneByStudentID(idUser)
        .then( res => {
          if(res){
            this.props.loginAction.saveSessionState({idStudent: res.studentId, id: res.id});
            this.props.notification.s('Thông Báo', 'Đăng Nhập Thành Công');
          }
          else this.props.notification.e('Thông Báo', 'Thông Tin Không Chính Xác');
        })
        .catch(e => {
          this.props.notification.e('Thông Báo', 'Có lổi Xảy ra');
        })
    }
  }
  
  render() {
    return (
      <div className="login-box">
          <div className="login-logo">
            <a href=""><b>Admin</b>TX</a>
          </div>
          <div className="login-box-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form onSubmit={ this.handleSubmit } method="post" className="mainform">
              <div className="form-group has-feedback">
                <input ref={e => this._userInput = e} name="id" className="form-control" placeholder="Mã số sinh viên" />
                <span className="fa fa-user form-control-feedback"></span>
              </div>
              <div className="form-group has-feedback">
                <input ref={e => this._passInput = e} name="password"  type="password" form-valid="str:6:32" className="form-control" placeholder="Password" />
                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
              </div>
              <div className="row">
                <div className="col-xs-8">
                </div>
                <div className="col-xs-4">
                  <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                </div>
              </div>
            </form>
          </div>
        </div>
    );
  }
};

let mapStateToProps = (state) => {
  let { sessionStudent } = state;
  return { sessionStudent };
};

let mapDispatchToProps = (dispatch) => {
  return {
    loginAction: bindActionCreators(loginAction, dispatch),
  };
};

export default withNotification(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
