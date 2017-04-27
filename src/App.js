import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='firstRow' style={{position:"relative"}}>
          <div className='s circle-init'>
            <h1>S</h1>
          </div>
          <div className='p circle-init'>
            <h1>P</h1>
          </div>
          <div className='e1 circle-init'>
            <h1>E</h1>
          </div>
          <div className='n circle-init'>
            <h1>N</h1>
          </div>
          <div className='c circle-init'>
            <h1>C</h1>
          </div>
          <div className='e2 circle-init'>
            <h1>E</h1>
          </div>
          <div className='r circle-init'>
            <h1>R</h1>
          </div>
        </div>

        <div className='secondRow' style={{position:"relative"}}>
          <div className='t circle-init'>
            <h1>T</h1>
          </div>
          <div className='a circle-init'>
            <h1>A</h1>
          </div>
          <div className='y circle-init'>
            <h1>Y</h1>
          </div>
          <div className='l circle-init'>
            <h1>L</h1>
          </div>
          <div className='o circle-init'>
            <h1>O</h1>
          </div>
          <div className='r circle-init'>
            <h1>R</h1>
          </div>
        </div>
        <script src="/static/main.js"></script>
      </div>
    );
  }
}

export default App;
