import React, {Component} from 'react';
import Header from '../header/Header';

export default class MainContent extends Component {

  constructor () {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Header />
        main content
      </div>
    );
  }
}
