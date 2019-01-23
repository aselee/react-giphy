import request from 'superagent';

// Action Type:
// In Redux, almost always expressed as a const in all caps,
// so that it can be exported for use in other parts of the app(such as the reducers)
export const REQUEST_GIFS = 'REQUEST_GIFS';

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