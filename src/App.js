import React, { Component } from 'react';

import Header from './header/Header';
import PostsList from './posts/PostsList';
import ItemList from './items/itemList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PostsList />
      </div>
    );
  }
}

export default App;
