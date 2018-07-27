import React, { Component } from 'react';
import './App.css';
import index from "./index";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <index />
      </div>
    );
  }
}

export default App;