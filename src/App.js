import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

class App extends React.Component {

  handleTermChange(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <SearchBar
          onTermChange={this.handleTermChange}
        />
      </div>
    );
  }
}

export default App;
