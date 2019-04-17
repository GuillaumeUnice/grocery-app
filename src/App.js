import React, { Component } from 'react';
import './App.css';

import GroceryList from './grocery-list/grocery-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Grocery List</h1>
        </header>
        <div className="AppContent">
          <GroceryList />
        </div>
      </div>
    );
  }
}

export default App;
