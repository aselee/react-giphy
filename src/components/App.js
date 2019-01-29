import React from 'react';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import { history } from './../store/configureStore';

// Routing all the containers
import Header from '../containers/Header';
import Home from '../containers/Home';
import Signup from '../containers/Signup';
import Login from '../containers/Login';
import Favorites from '../containers/Favorites';

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
            <Route path="/signup" component={ Signup }/>
            <Route path="/login" component={ Login }/>
            <Route path="/favorites" component={ Favorites }/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

