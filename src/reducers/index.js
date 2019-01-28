import { combineReducers } from 'redux';
import GifsReducer from './gifs';

import ModalReducer from './modal';


// combining all of our reducers into the rootReducer
// passing the main reducing function as a parameter
// when creating the store.

// using redux's built-in combineReducers function
// to create a single object that contains a bunch of reducers.
// the key on the object is 'gifs', is the name of the
// piece of the state, and the vaule is the reducer itself
// or more accurately what is being returned by the reducer

const rootReducer = combineReducers({
  gifs: GifsReducer,
  modal: ModalReducer
});

export default rootReducer;
