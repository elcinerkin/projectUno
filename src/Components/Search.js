import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

const options = {apiKey:"AIzaSyAGtX0a8ICU-ih6JysuKlOke64BXhG8ysA"};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  submit(a) {
    console.log('boos',a); 
  }

  handleSubmit(event) {
    event.preventDefault();
    YTSearch({options:options, term:this.state.value}, this.submit);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search 
          <input id="query" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default Search;