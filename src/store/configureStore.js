// Redux store

import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore (initialState) {

  // using redux's createStore function to create the store.
  // passing the store to the rootReducer,
  // so that the can update the state tree of the app.

  const store = createStore(
    rootReducer,
    initialState,
    // adding redux dev tools chrome extension to access the store.
    window.devToolsExension ? window.devToolsExtension() : undefined
  );
  
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}