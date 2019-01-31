import { SIGN_IN_USER, SIGN_OUT_USER } from '../actions';


// setting the initialState for the user to be signed out,
// but if the SIGN_IN_USER is fired, a new copy of the state
// is created with authenticated set to true(the reducer should
// act as a "Save-As" functionality instead of mutating the state)
// if SIGN_OUT_USER is fired, a new copy is created and authenticated
// is set to false. 

const initialState = {
  authenticated: false
};

export default function gifs (state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_USER:
    return {
      ...state, authenticated: true
    };
    case SIGN_OUT_USER:
    return {
      ...state, authenticated: false
    };
    default: 
    return state;
  }
}