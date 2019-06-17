import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mytest from './MyTest';
import Counter from './Counter';

function App() {
  const style1 = {
    color : 'red',
    fontsize : '50px',
    backgroundColor : '#000'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={style1}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="test">
          TEST
        </div>
      </header>

      <Mytest name="fff" />

      <Counter />
    </div>
  );
}

export default App;
