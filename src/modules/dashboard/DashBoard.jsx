import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as breadcrumbActions from './../../screens/components/breadcrumb/actions';

class DashBoard extends Component {

  componentWillMount(){
    let breadcrumb = {
      name: 'Dashboard',
      action: '',
      breadcrumb: []
    };
    this.props.breadcrumbActions.setBreadcrumb(breadcrumb);

  }
  render() {
    return (
      <section className="content">
        <div className="row">
          <div className="col-lg-3 col-xs-6">
            <div className="small-box bg-aqua">
              <div className="inner">
                <h3>10</h3>
                <p>Số Môn Đăng Ký</p>
              </div>
              <div className="icon">
                <i className="fa fa-users"></i>
              </div>
              <a href="#" className="small-box-footer"> <i className="fa"></i></a>
            </div>
          </div>
          <div className="col-lg-3 col-xs-6">
            <div className="small-box bg-green">
              <div className="inner">
                <h3>10<sup style={{fontSize: '20px'}}></sup></h3>
                <p>Số Môn Chưa Đăng Ký</p>
              </div>
              <div className="icon">
                <i className="fa fa-pencil"></i>
              </div>
              <a href="#" className="small-box-footer"><i className="fa"></i></a>
            </div>
          </div>
          <div className="col-lg-3 col-xs-6">
            <div className="small-box bg-yellow">
              <div className="inner">
                <h3>10</h3>
                <p>Schools</p>
              </div>
              <div className="icon">
                <i className="fa fa-university"></i>
              </div>
              <a href="#" className="small-box-footer"><i className="fa"></i></a>
            </div>
          </div>
          <div className="col-lg-3 col-xs-6">
            <div className="small-box bg-red">
              <div className="inner">
                <h3>10</h3>
                <p>Test</p>
              </div>
              <div className="icon">
                <i className="fa fa-list"></i>
              </div>
              <a href="#" className="small-box-footer"><i className="fa"></i></a>
            </div>
          </div>
        </div>
        <div className="row">
          <section className="col-lg-7 connectedSortable ui-sortable">
            <div className="box box-primary">
              <div className="box-header ui-sortable-handle" style={{cursor: 'move'}}>
                <i className="ion ion-clipboard"></i>
                <h3 className="box-title">Danh Sách Môn Học Đang Mở</h3>
                <div className="box-tools pull-right">
                </div>
              </div>
              <div className="box-body">
                <ul className="todo-list ui-sortable">
                    <li>
                      <span className="handle ui-sortable-handle">
                      <i className="fa fa-ellipsis-v"></i>
                      <i className="fa fa-ellipsis-v"></i>
                      </span>
                      <span className="text"><a target="_blank" href="#">name</a></span>
                    
                      <small className="label label-danger"><i className="fa fa-clock-o"></i> 20-12-2018}</small>
                      
                      <div className="tools">
                        <a href="#"><i className="fa fa-edit"></i></a>
                      </div>
                    </li>
                </ul>
              </div>
              <div className="box-footer clearfix no-border">
              </div>
            </div>
        
          </section>
          <section className="col-lg-5 connectedSortable ui-sortable">
            <div className="box box-solid bg-green-gradient">
              <div className="box-header ui-sortable-handle" style={{cursor: 'move'}}>
                <i className="fa fa-calendar"></i>
                <h3 className="box-title">Calendar</h3>
                <div className="pull-right box-tools">
                  <div className="btn-group">
                  </div>
                  <button className="btn btn-success btn-sm" data-widget="collapse"><i className="fa fa-minus"></i></button>
                  <button className="btn btn-success btn-sm" data-widget="remove"><i className="fa fa-times"></i></button>
                </div>
              </div>
              <div className="box-body no-padding">
                <div id="calendar" style={{width: '100%'}}>
                  <div className="datepicker datepicker-inline">
                    <div className="datepicker-years" style={{display: 'none'}}>
                      <table className="table table-condensed">
                        <thead>
                          <tr>
                            <th className="prev" style={{visibility: 'visible'}}>«</th>
                            <th colSpan="5" className="datepicker-switch">2010-2019</th>
                            <th className="next" style={{visibility: 'visible'}}>»</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan="7"><span className="year old">2009</span><span className="year">2010</span><span className="year">2011</span><span className="year">2012</span><span className="year">2013</span><span className="year">2014</span><span className="year">2015</span><span className="year">2016</span><span className="year">2017</span><span className="year">2018</span><span className="year">2019</span><span className="year new">2020</span></td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th colSpan="7" className="today" style={{display: 'none'}}>Today</th>
                          </tr>
                          <tr>
                            <th colSpan="7" className="clear" style={{display: 'none'}}>Clear</th>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="row">
            <section className="col-lg-12 connectedSortable ui-sortable">
                <div className="box box-primary">
                  <div className="box-header ui-sortable-handle" style={{cursor: 'move'}}>
                    <i className="fa fa-history"></i>
                    <h3 className="box-title">Danh Sách Môn Học Đã Đăng Ký</h3>
                    <div className="box-tools pull-right">
                    </div>
                  </div>
                  <div className="box-body">
                      <table id="dataTable" className="table table-bordered table-striped">
                          <thead>
                            <tr>
                              <th width="10%">ID</th>
                              <th>Member</th>
                              <th>Subject</th>
                              <th>Time</th>
                              <th width="100px">Point</th>
                              <th width="150px">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                              <tr>
                                <td>1</td>
                                <td>
                                  <a href="#">name</a>
                                </td>
                                <td >name</td>
                                <td >10 Phút</td>
                                <td>10 Điểm</td>
                                <td>
                                  <span  className="label label-sussecc">Open</span>
                                </td>
                              </tr>
                          </tbody>
                        </table>
                  </div>
                  <div className="box-footer clearfix no-border">
                  </div>
                </div>
              </section>
        </div>
      </section>
    );
  }
}
let mapStateToProps = (state) => {
  let {  } = state;
  return {  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    breadcrumbActions       : bindActionCreators(breadcrumbActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);