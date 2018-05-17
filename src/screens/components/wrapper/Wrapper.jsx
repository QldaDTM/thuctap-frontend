import React, { Component } from 'react';

import { Breadcrumb, Content } from './../';

class Wrapper extends Component {
  render() {
    return (
      <div className="content-wrapper" style={{minHeight: '916px'}}>
        <Breadcrumb />
    
        <Content />
      </div>
    );
  }
}

export default Wrapper;