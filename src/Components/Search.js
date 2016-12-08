import React, { Component } from 'react';

class Search extends Component {

  searchMethod() {
    console.log('searched');
  }
  
  render() {
    return (
      <div>
        <div>
          <title>Search</title>
        </div>
        <div>
          <div id="buttons">
            <label> <input id="query" value='cats' type="text"/><button id="search-button" onClick={ this.searchMethod() }>Search</button></label>
          </div>
          <div id="search-container"></div>
        </div>
      </div>
    );
  }
}

export default Search;
