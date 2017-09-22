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
      parentPassword: '',
      authError: ''
    }
  }

  parentSection(event) {
    event.preventDefault()

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

    var user = firebase.auth().currentUser;

    // Prompt the user to re-provide their sign-in credentials

    // user.reauthenticateWithCredential(credential)


    console.log('this.state.parentEmail, this.state.parentPassword', this.state.parentEmail, this.state.parentPassword);


    const _this = this;

    firebase.auth().signInWithEmailAndPassword(this.state.parentEmail, this.state.parentPassword)
      .then(function(res) {
        // User re-authenticated.
        console.log('res', res);


        // if success, close the modal
        _this.setState({
          parentsModal: false,
          authError: ''
        })

        _this.props.history.push('/parents')

      }).catch(function(error) {
        // An error happened.
        console.log('error of reauth', error);
        _this.setState({ authError: error.message })
      });



    // in the modal - type the same password as user is using, on click OK, verify it by firebase backend

    // if password is verified as OK, redirect user to /parents page
    // if password is not ok, show error

  }

  logoutToMainContent(e) {
    e.preventDefault()

    this.props.history.push('/player')
  }

  renderParentsLink() {
    if (this.props.history.location.pathname === '/parents') {
      return <Link to="/player">Back</Link>
    }

    return <Link to="/parents" onClick={event => this.parentSection(event)}>Parents</Link>
  }

  render() {
    // console.log('this.props.history', this.props.history.location.pathname);
    return (
      <header className="header">
        <div className="">
          <div className="row">
            <div className="column size_25 position-relative for-logo">
              {/* <Logo /> */}
              app name
            </div>
            <div className="column size_50 for-button">
            </div>
            <div className="column size_25 for-nav">
              <nav className="nav inline navbar-right text-right">
                <ul>
                  {this.renderParentsLink()}
                  <Link to="/" onClick={event => this.logout(event)}>Logout</Link>
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
          <button onClick={() => this.setState({ parentsModal: false })}>Cancel</button>
          <div>{this.state.authError}</div>
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
