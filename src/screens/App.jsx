import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { NotifycationProvider } from './../components';

import configureStore from './store';
import Routes from './Routes';
import { localStorage, api } from './../utils';

let initialState: GlobalState = localStorage.loadState('idStudent');
let store = configureStore({sessionStudent: initialState.sessionStudent});

class App extends Component {

  setSession = (userId, token, created, ttl, saveInfo) => {
    let payload = {
      userId,
      token,
      created,
      ttl
    };
    localStorage.saveState('sessionStudent', payload);
  };

  handleSuccess = (info, saveInfo: boolean): void => {
    this.setSession(info.userId, info.token, info.created, info.ttl, saveInfo);
  }

  componentWillMount(){
    let auth  = localStorage.loadState('sessionStudent');
    if(!auth.sessionStudent){
      api.user.login('admin', 'admin@ict.edu.vn')
        .then(resp => {
          this.handleSuccess(resp)
        })
        .catch(err => console.log(err));
    }
      
  }

  render() {
    return (
      <NotifycationProvider >
        <Provider store={ store }>
          <Router>
            <Routes />
          </Router>
        </Provider>
      </NotifycationProvider>
    );
  }
}

export default App;
