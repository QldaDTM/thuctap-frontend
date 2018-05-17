// @flow

import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

type Props = {
  component: React.ComponentType<{}>,
  signedIn: boolean,
  redirect: string,
  childProps?: any
};

class AuthRoute extends React.Component<Props> {
  renderComponent = () => {
    let { component: Component, childProps } = this.props;

    return (<Component { ...childProps } />);
  };

  redirect = (url: string) => {
    return (<Redirect to={ url } />);
  }

  render() {
    let { signedIn, redirect, component, childProps, ...rest } = this.props;
    return ( <Route { ...rest } render={ props => signedIn ? this.renderComponent() : this.redirect(redirect) } />);
  }
}

export default AuthRoute;
