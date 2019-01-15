import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

// creating fun giphy project

class App extends React.Component {

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
      </div>
    );
  }
}

export default App;
