import React, {Component} from 'react';
import { Link, withRouter } from "react-router-dom";
import Modal from 'react-modal';

import * as firebase from 'firebase';

import Logo from '../../components/logo/Logo';
import IconPencil from '../../components/icons/IconPencil';

class Header extends Component {
  constructor () {
    super();

    this.state = {
      parentsModal: false,
      parentEmail: '',
      parentPassword: ''
    }
  }

  parentSection(event) {
    event.preventDefault()
    console.log('click');


    // open the modal with password input
    this.setState({ parentsModal: true })


  }

  logout(event) {
    event.preventDefault();

    firebase.auth().signOut().then(() => {
      console.log('Signed Out')
      this.props.history.push('/')
    }).catch( error => {
      console.error('Sign Out Error', error);
    })
  }

  verifyPassword(event) {
    event.preventDefault()

    // console.log('firebase.auth().currentUser', firebase.auth().currentUser);
    var user = firebase.auth().currentUser;
    // var credential = {
    //   password: this.state.parentPassword
    // }

    // Prompt the user to re-provide their sign-in credentials

    // user.reauthenticateWithCredential(credential)
    const _this = this;

    firebase.auth().signInWithEmailAndPassword(this.state.parentEmail, this.state.parentPassword)
      .then(function(res) {
        // User re-authenticated.
        console.log('res', res);

        _this.props.history.push('/parents')
      }).catch(function(error) {
        // An error happened.
        console.log('error of reauth', error);
      });



    // in the modal - type the same password as user is using, on click OK, verify it by firebase backend

    // if password is verified as OK, redirect user to /parents page
    // if password is not ok, show error

    this.setState({ parentsModal: false })
  }


  render() {
    console.log('this.state.parentsModal', this.state.parentsModal);
    return (
      <header className="header">
        <div className="">
          <div className="row">
            <div className="column size_25 position-relative for-logo">
              {/* <Logo /> */}
              app name
            </div>
            <div className="column size_50 for-button">
              {/* <button onClick={this.openModal} type="button" className="btn btn-custom">Nová poznámka<IconPencil fill="#FFF" /></button> */}
            </div>
            <div className="column size_25 for-nav">
              <nav className="nav inline navbar-right text-right">
                <ul>
                  <li role="presentation"><a onClick={event => this.parentSection(event)}>Parents</a></li>
                  <li role="presentation"><a onClick={event => this.logout(event)}>Logout</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {this.state.parentsModal && <Modal
          isOpen={this.state.parentsModal}
          contentLabel="Modal"
        >
          <h2>Type your user password</h2>
          <input
            type="email"
            onChange={e => this.setState({ parentEmail: e.target.value })}
          />
          <input
            type="password"
            onChange={e => this.setState({ parentPassword: e.target.value })}
          />
          <button onClick={e => this.verifyPassword(e)}>OK</button>
        </Modal>}
      </header>
    );
  }
}

const customStyles =
  {
  // overlay : {
  //   position          : 'fixed',
  //   top               : 0,
  //   left              : 0,
  //   right             : 0,
  //   bottom            : 0,
  //   backgroundColor   : 'rgba(0, 0, 0, 0.5)'
  // },
  // content : {
  //   position                   : 'absolute',
  //   top                        : '20px',
  //   left                       : '20px',
  //   right                      : '20px',
  //   bottom                     : '20px',
  //   border                     : '1px solid #ccc',
  //   background                 : '#fff',
  //   overflow                   : 'auto',
  //   WebkitOverflowScrolling    : 'touch',
  //   borderRadius               : '4px',
  //   outline                    : 'none',
  //   padding                    : '20px'
  //
  // }
}

export default withRouter(Header)
