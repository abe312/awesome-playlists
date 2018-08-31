import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class Aggregate extends Component {
  render() {
    return (
      <div className="aggregate" style={{width: '40%', display: 'inline-block'}}>
        <h2 style={{color: '#fff'}}>Number text</h2>
      </div>
    )
  }
} 

// let defaultTextColor = '#fff';
//    <div style={{color: defaultTextColor}}></div>
class Filter extends Component {
  render() {
    return (
      
      <div className="white">
        <img src="" alt=""/>
        <input type="text"/>
        Filter
      </div>
    )
  }
}

class Playlist extends Component {
  render() {
    return     <div className="white playlist">
        <img src="" alt=""/>
        <h3>Playlist name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
  
  }
}

class App extends Component {
  render() {
    let name = "Abhineet";
    let green = "#FF1212";
    let headerStyle = {color: green, 'font-size': '50px'}
    return (
      <div className="App">
        <h1>Title</h1>
        <Aggregate /> 
        <Aggregate />
        <Filter />
        <p></p>
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <p></p>
      </div>
    );
  }
}

export default App;
