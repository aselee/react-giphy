import React from 'react';
import { connect } from 'react-redux';

// Bootstrap navbar 

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a href="/" className="navbar-brand">ReactGiphyy</a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
              <a className="nav-link" href="/login">Login Here</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup">Sign in</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Header);