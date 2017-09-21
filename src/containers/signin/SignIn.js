import React, { Component } from "react";

import * as actions from '../../actions';
import { connect } from "react-redux";

// import { browserHistory } from 'react-router'
import { Link, withRouter } from "react-router-dom";

import * as firebase from 'firebase';

// import SignUp from './signup/SignUp';

import IconNotes from '../../components/icons/IconNotes';
import IconMail from '../../components/icons/IconMail';
import IconLock from '../../components/icons/IconLock';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    let el = event.target;

    let email = this.state.email;
    let password = this.state.password;

    let auth = firebase.auth()

    const signIn = auth.signInWithEmailAndPassword(email, password)
    signIn.then(e => {
      // console.log(e)
      // this.props.auth(true)
      this.props.history.push('/player')
    }).catch(err => {
      console.log('error', err)
    })
  }

  render() {
    return(
      <div className="main-page">
        <div className="row">
          <div className="column size_100">
            {/* <div className="icon-wrapper"><IconNotes fill="#2DB5CF" /></div> */}
            <h1>Login</h1>
            <form onSubmit={event => this.onSubmit(event)}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                  onChange={event => this.setState({ email: event.target.value })}
                />
                <div className="icon-wrapper"><IconMail fill="#707680" /></div>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Heslo"
                  onChange={event => this.setState({ password: event.target.value })}
                />
                <div className="icon-wrapper"><IconLock fill="#707680" /></div>
              </div>
              <button type="submit" className="btn btn-default">Přihlásit se</button>
            </form>
            <div className="margin-bottom-1">nebo</div>
            <Link className="margin-bottom-1" to="/signup">Registrovat se</Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log('state', state);
  return {

  };
}

// because of combination of connect and withRouter:
SignIn = connect(mapStateToProps, actions)(SignIn)
export default withRouter(SignIn)
