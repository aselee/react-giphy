import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';

// creating fun giphy project

class App extends React.Component {

  // Need to mock up fake data to pass to our components.
  // Adding constructor function and intialize the state 
  // with an array of gifs.
  // Need to call super() to access this.state.
  // creating a GifList component and pace it directly below
  // the SearchBar, passing through the gifs objects,
  // that we set on our App's state as a prop.
  constructor() {
    super();
    this.state = {
      gifs: [
        {
          id: 1,
          url: 'http://fakeimg.pl/300/'
        },
        {
          id: 2,
          url: 'http://fakeimg.pl/300/'
        },
        {
          id: 3,
          url: 'http://fakeimg.pl/300/'
        }
      ]
    }
  }

  handleTermChange(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <SearchBar
          // setting a new property, onTermChange
          // it becomes availabe with the child component via this.props.
          // Using the onTermChange property to pass the handleTermChange() callback
          // from our App our SearchBar.
          onTermChange={this.handleTermChange}
        />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
