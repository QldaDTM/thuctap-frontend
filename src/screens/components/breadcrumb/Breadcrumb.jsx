import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Breadcrumb extends Component {
  render() {
    let { breadcrumb } = this.props;
    let { breadcrumb: breadcrumbList } = breadcrumb;
    return (
      <section className="content-header">
        <h1>{breadcrumb.breadcrumb_name}<small>{breadcrumb.breadcrumb_action}</small></h1>
        <ol className="breadcrumb">
            <li>
                <Link to="/"><i className="fa fa-dashboard"></i> Dashboard</Link>
            </li>
            {(breadcrumbList.length > 0) ? (breadcrumbList.map( (e, i) => {
              let url = (e.url != null) ? (<Link to={e.url}>{e.name}</Link>) : `${e.name}`;
              return (<li key={i} className={(url == '') ? 'active' : ''}> {url}</li>)
            }) ) : null}
            
            
        </ol>
    </section>
    );
  }
}

let mapStateToProps = (state) => {
  let { breadcrumb } = state;
  return { breadcrumb };
};

export default connect(mapStateToProps, null)(Breadcrumb);