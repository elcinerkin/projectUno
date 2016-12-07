import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Video from 'react-html5video';
import YoutubePlayer from 'react-youtube-player';

class App extends Component {
  
  render() {
    var names = ['Jake', 'Jon', 'Thruster'];

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React app</h2>
        </div>
        <p className="App-intro">
          Capstone project editing <code>src/App.js</code> and save to reload.
        </p>

        <div className="playerContainer">
            {names.map(function(name, index){
              return <YoutubePlayer
              key={ index }
              className="player"
              videoId='LKFuXETZUsI'
              playbackState='playing'
              configuration={
                  {
                      showinfo: 0,
                      controls: 0
                  }
              }/>
            })}
        </div>
      </div>
    );
  }
}

export default App;
