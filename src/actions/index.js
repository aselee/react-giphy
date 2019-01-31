import request from 'superagent';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

// Action Type:
// In Redux, almost always expressed as a const in all caps,
// so that it can be exported for use in other parts of the app(such as the reducers)
export const REQUEST_GIFS = 'REQUEST_GIFS';

// Action types as constants, passing to our action creators
// signInUser() and signOutUser() via required type property
export const SIGN_IN_USER = 'SIGN_IN_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';

const API_URL = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '&api_key=dc6zaTOxFJmzC'; 

// Action Creator:
// Action creators are functions that create actions.
export function requestGifs(term = null) {
  const data = request.get(`${API_URL}${term.replace(/\s/g, '+')}${API_KEY}`);

  // console.log(term);

  // Action:
  // Plain JavaScript object with two pieces:
  // a type (required) and a payload (only required if,
  // you want to pass data along with your action)
  return {
    type: REQUEST_GIFS,
    payload: data
    // term
  }
}


// Adding OPEN_MODAL and CLOSE_MODAL with two action creators, openModal() and closeModal().
// openModal() action creator takes a gif as an argument:
// this will be the gif our modal will render.
export function openModal(gif) {
  return {
    type: OPEN_MODAL,
    gif
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}

// Action types as constants, passing to our action creators
// signInUser() and signOutUser() via required type property

export function signInUser() {
  return {
    type: SIGN_IN_USER
  }
}

export function signOutUser() {
  return {
    type: SIGN_OUT_USER
  }
}