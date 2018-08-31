import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class PlaylistCounter extends Component {
  render() {
    return (
      <div className="aggregate" style={{width: '40%', display: 'inline-block'}}>
        <h2 style={{color: '#fff'}}>{this.props.playlists && this.props.playlists.length} Playlists</h2>
      </div>
    )
  }
} 

class HourCounter extends Component {

  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs);
    }, []);
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration;
    }, 0) 

    return (
      <div className="aggregate" style={{width: '40%', display: 'inline-block'}}>
        <h2 style={{color: '#fff'}}>{Math.floor(totalDuration/(60))} Hours</h2>
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

let fakeServerData = {
  user: {
    name: 'abe312',
    playlists: [
      {
        name: 'My favorites',
        songs: [{name: 'starboy', duration: 1234}, 
        {name: 'in my feelings', duration: 1234}, {name: 'cant feel my face', duration: 1234}]
      },
      {
        name: 'Euphoria',
        artist: 'Enrique',
        songs: [{name: 'I like it', duration: 1234}, {name: 'heartbeat', duration: 1234}, {name: 'Tonight Im loving you', duration: 1234}, {name: 'dirty dancer', duration: 1234}, {name: 'ayer', duration: 1234}]
      },
      {
        name: 'Konvicted',
        artist: 'Akon',
        songs: [{name: 'smack that', duration: 1234}, {name: 'dont matter', duration: 1234}, {name: 'konvicted', duration: 1234}]
      },
      {
        name: 'Recovery',
        artist: 'Eminem',
        songs: [{name: 'love the way you lie', duration: 1234}, {name: 'rap god', duration: 1234} ]
      }
    ]
  }
};
class App extends Component {
  
  state = {
      serverData: {}
    }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        serverData: fakeServerData
      })
    }, 1000);
 
  }
  
  render() {
    let name = "Abhineet";
    let green = "#FF1212";
    let headerStyle = {color: green, 'font-size': '50px'}
    return (
      <div className="App">
        
        {this.state.serverData.user ?
        <div>
          <h1>{this.state.serverData.user.name}'s Playlist</h1>


        <PlaylistCounter playlists={this.state.serverData.user.playlists}/> 
        <HourCounter playlists={this.state.serverData.user.playlists}/>
        <Filter />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <p></p>
        </div> : <p>Loading...</p>
        }
      </div>
    );
  }
}

export default App;
