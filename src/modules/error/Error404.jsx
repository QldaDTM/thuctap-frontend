import React, { Component } from 'react';

class Error404 extends Component {
  render() {
    return (
      <section class="content">
        <div class="error-page">
          <div class="error-content">
            <h3><i class="fa fa-warning text-yellow"></i> Oops! Page Not Found.</h3>
            <p>
              We could not find the page you were looking for.
              Meanwhile, you may <a href="/">return to dashboard</a> or try using the search form.
            </p>
            <form class="search-form">
              <div class="input-group">
                <input type="text" name="search" class="form-control" placeholder="Search" />
                <div class="input-group-btn">
                  <button type="submit" name="submit" class="btn btn-warning btn-flat"><i class="fa fa-search"></i></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Error404;