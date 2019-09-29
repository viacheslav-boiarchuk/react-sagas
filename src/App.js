import React from 'react';
import logo from './logo.svg';
import './App.css';
let flag = 1;

function App(props) {

    if (flag < 2) {
        setTimeout(function () {
            return props.fetchFilms({
                symbol1: 'ONE!'
            });
        },2000);
        flag++;
    }

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
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
      </header>
    </div>
  );
}

export default App;
