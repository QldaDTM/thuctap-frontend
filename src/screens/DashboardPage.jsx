// @flow

import * as React from 'react';

import { Menu, Sidebar, Wrapper, Footer } from './components';

type Props = {
};

class DashboardPage extends React.Component<Props> {
  render() {
    return (
      <div className="wrapper" style={{height: 'auto', minHeight: '100%'}}>
        <Menu />
        <Sidebar />
        <Wrapper />
        <Footer />
        <div className="control-sidebar-bg"></div>
      </div>
    );
  }
};

export default DashboardPage;