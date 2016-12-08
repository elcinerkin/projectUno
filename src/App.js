import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Components/Search.js';
import YoutubePlayer from 'react-youtube-player';
import YTSearch from 'youtube-api-search';

const options = {apiKey:"AIzaSyAGtX0a8ICU-ih6JysuKlOke64BXhG8ysA"};

class App extends Component {

  render() {
    var ids = [1, 2, 3];

    var test = function(a){console.log('a',a);};

    YTSearch({options:options}, test );

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Capstone React App</h2>
        </div>
        <Search />
        <div className="playerContainer">
            {ids.map(function(id, index){
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
