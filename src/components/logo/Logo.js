import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';

import IconNotes from '../icons/IconNotes';

class Logo extends Component {
  render() {
    return(
      <Link className="logo" to="/posts">
        <h3 className="heading"><span className="head">name of my app</span><span className="icon"><IconNotes fill="#2DB5CF" /></span></h3>
      </Link>
    );
  }
}

export default withRouter(Logo)
