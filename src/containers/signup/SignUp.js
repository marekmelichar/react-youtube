import React, {Component} from 'react';

import * as firebase from 'firebase';

// import { browserHistory } from 'react-router';
// import Header from '../components/Header.jsx';

import { Link } from "react-router-dom";

import IconNotes from '../../components/icons/IconNotes';
import IconMail from '../../components/icons/IconMail';
import IconLock from '../../components/icons/IconLock';

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      passwordConfirm: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    document.body.classList.toggle('main-page', this.props.mainPageClass);
  }

  componentWillUnmount() {
    document.body.classList.remove('main-page');
  }

  onSubmit(event) {
    event.preventDefault();

    let el = event.target;

    let email = this.state.email;
    let password = this.state.password;
    let confirmPassword = this.state.passwordConfirm;

    let auth = firebase.auth()

    const signUp = auth.createUserWithEmailAndPassword(email, password)
    signUp.then(
      user => console.log('user', user)
    ).catch(err => {
      console.log('error', err)
    })

    // if (password === confirmPassword && password !== "" && confirmPassword !== "") {
    //   let userInfo = { email, password };
    //
    //   Accounts.createUser(userInfo, function(err){
    //     if (err) {
    //       Bert.alert({
    //         title: 'Nastal problém,',
    //         message: 'prosím zkuste to znovu',
    //         type: 'danger',
    //         style: 'growl-top-right',
    //         icon: 'fa-info',
    //         hideDelay: 2500
    //       });
    //     } else {
    //       Meteor.loginWithPassword(email, password, function(err){
    //         if (err) {
    //           Bert.alert({
    //             title: 'Nastal problém,',
    //             message: 'prosím zkuste to znovu',
    //             type: 'danger',
    //             style: 'growl-top-right',
    //             icon: 'fa-info',
    //             hideDelay: 2500
    //           });
    //         } else {
    //           browserHistory.push('/posts');
    //         }
    //       });
    //     }
    //   });
    // } else {
    //   Bert.alert({
    //     title: 'Vaše hesla se neshodují,',
    //     message: 'prosím zadejte hesla znovu',
    //     type: 'info',
    //     style: 'growl-top-right',
    //     icon: 'fa-info',
    //     hideDelay: 2500
    //   });
    // }
  }

  render() {
    return(
      <div>
        <div className="row">
          <div className="column size_100">
            {/* <div className="icon-wrapper"><IconNotes fill="#2DB5CF" /></div> */}
            <h1>Sign up</h1>
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
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password-confirm"
                  placeholder="Potvrdit heslo"
                  onChange={event => this.setState({ passwordConfirm: event.target.value })}
                />
                <div className="icon-wrapper"><IconLock fill="#707680" /></div>
              </div>
              <button type="submit" className="btn btn-default">Registrovat se</button>
            </form>
            <div className="margin-bottom-1">nebo</div>
            <Link className="margin-bottom-1" to="/">Zpět na hlavní stranu</Link>
          </div>
        </div>
      </div>
    );
  }
}
