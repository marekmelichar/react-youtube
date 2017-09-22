import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});

    // if (BANNED_WORDS.includes(term)) {
    //   console.log('term', term);
    //
    //   return false;
    // } else {
    // }

    return this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
