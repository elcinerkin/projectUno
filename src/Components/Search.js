import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import $ from 'jquery';
import YoutubePlayer from 'react-youtube-player';

const options = {apiKey:"AIzaSyAGtX0a8ICU-ih6JysuKlOke64BXhG8ysA"};

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submit = this.submit.bind(this);
  }

  getInitialState() {
    return { data: null };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  submit(a) {
    this.setState({data:a}).bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    YTSearch({options:options, term:this.state.value}, this.submit);
  }

  render() {
    if (!this.state.data) {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Search 
            <input id="query" type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    } else {
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Search 
            <input id="query" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div className="playerContainer">
            {this.state.data.map(function(id, index){
              return <YoutubePlayer
              key={ index }
              className="player"
              videoId={ id.id.videoId }
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
}
export default Search;