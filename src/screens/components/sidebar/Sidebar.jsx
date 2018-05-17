import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
        <aside className="main-sidebar">
            <section className="sidebar" style={{height: 'auto'}}>
              <div className="user-panel">
              </div>
              <ul className="sidebar-menu tree" data-widget="tree" style={{paddingBottom: "100px"}}>
                <li className="header">MAIN NAVIGATION</li>
                <li className="active">
                  <Link to="/">
                    <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                  </Link>
                </li>
                
                <li className="treeview ">
                  <a href="#">
                    <i className="fa fa-map-marker"></i>
                    <span>Phiếu Đăng Ký</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li className=""><a href=""><i className="fa fa-circle-o"></i> District</a></li>
                    <li className=""><a href=""><i className="fa fa-circle-o"></i> Ward</a></li>
                  </ul>
                </li>
              </ul>
            </section>
          </aside>
    );
  }
}

export default Sidebar;