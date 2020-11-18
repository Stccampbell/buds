import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css';

import Login from './components/Login';
import Register from './components/Register';

class App extends Component {
  constructor(){
    super()
    this.state = {
      auth: false,
    }
  }

  componentDidMount() {
    fetch('', {credentials: 'include' })
    .then(res => res.json())
    .then(res => {
      this.setState({
        auth: res.auth,
        user: res.data.user,
      })
    }).catch(err => console.log(err));
  }

  handleLoginSubmit = (e, data) => {
    e.preventDefault();
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      this.setState({
        auth: res.auth,
        user: res.data.user
      })
    }).catch(err => console.log(err));
  }

  handleRegisterSubmit = (e, data) => {
    e.preventDefault();
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      this.setState({
        auth: res.auth,
        user: res.data.user
      })
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <Router>
        <div className='App'>
          {/* <Header/> */}

          
          <Route exact path ='/' render={() => {

          }} />

          <Route exact path='/Login' render={() => (
            this.state.auth
            ? <Redirect to='/' />
            : <Login handleLoginSubmit={this.handleLoginSubmit} />
          )} />

          <Route exact path='/Register' render={() => (
            this.state.auth
            ? <Redirect to='/' />
            : <Register handleRegisterSubmit={this.handleRegisterSubmit} />
          )} />

        </div>
      </Router>
    )
  }
}

export default App;
