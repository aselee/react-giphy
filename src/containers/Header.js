import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


// Bootstrap navbar 
// Using Link to navigate through the app instantly
// Replacing <a> tags with <Link>, let react-router-dom know it should 
// swap out the component passed into the App instead of refreshing the page.

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            {/* <a href="/" className="navbar-brand">ReactGiphyy</a> */}
            <Link className="navbar-brand" to="/">ReactGiphySearch</Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
              {/* <a className="nav-link" href="/login">Login Here</a> */}
              <Link ClassName="nav-link" to="/login">Login Here</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/signup">Sign in</a> */}
              <Link className="nav-link" to="/signup">Sign in</Link>
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