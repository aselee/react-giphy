import React from 'react';
import { Router } from 'react-router';
import { Route, Redirect} from 'react-router-dom';
import { history } from '../store/configureStore';

import { connect } from 'react-redux';

// Routing all the containers
import Header from './Header';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Favorites from './Favorites';



// Have two functions that returnthe Route components. Passing through a component
// and checking whether the user is authenticated, then either returning the component that is being 
// passed as an arguement or redirecting them to the '/login' or '/favorites' location.
// PrivateRoutes are restricted to the authenticated users, and PublicRoutes are restricted to users who are not logged in.
const PrivateRoute = ({component: Component, authenticated, ...props}) => {
  return (
    <Route
      {...props}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />} 
      />
  );
}

// Calling both the PublicRoute and PrivateRoute rather than just the vanilla Route. 
// Passing through whether if the user has been authenticated from the store. 
const PublicRoute = ({component: Component, authenticated, ...props}) => {
  return (
    <Route
      {...props}
      render={(props) => authenticated === false
        ? <Component {...props} />
        : <Redirect to='/favorites' />}
      />
    );
  };

class App extends React.Component {
  
  render() {

    return (
      // wrapping all of the code in ConnectedRouter component 
      // from react-router-redux and passing the history object.
      // ConnectedRouter based on the end of the app's URL.
      // For ex, url/favorites and uses it as a path to render the components.
      <Router history={history}>
        <div>
          {/* Header will be rendered in every page */}
          <Header />
          {/* Can add a Footer here to render on every page */}
          <div className="container">
          {/* passing in the component that should render 
          whenever a path contains exactly "/:" */}
            <Route exact path="/" component={ Home }/>
            {/* <Route path="/signup" component={ Signup }/>
            <Route path="/login" component={ Login }/>
            <Route path="/favorites" component={ Favorites }/> */}
            <PublicRoute authenticated={this.props.authenticated} path="/signup" component={ Signup } />
            <PublicRoute authenticated={this.props.authenticated} path="/login" component={ Login } />
            <PrivateRoute authenticated={this.props.authenticated} path="/favorites" component={ Favorites } />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return { authenticated: state.auth.authenitcated };
};


export default connect (mapStateToProps)(App);

