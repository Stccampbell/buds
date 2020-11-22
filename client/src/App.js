import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css';

import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

class App extends Component {
  constructor(){
    super()
    this.state = {
      auth: false,
    }
  }

  componentDidMount() {
    fetch('/api/auth/verify', { credentials: 'include' })
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
    fetch('/api/auth/login', {
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
    fetch('/api/auth/register', {
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
      console.log(this.state.auth)
      this.setState({
        auth: res.auth,
        user: res.data.user
      })
    }).catch(err => console.log(err))
  }

  logout = () => {
    fetch('/api/auth/logout', {
      credentials: 'include',
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        auth: res.auth,
        user: res.data.user,
      })
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Header logout={this.logout}/>

          
          <Route exact path ='/' render={() => (
            !this.state.auth
            ? <Redirect to='/Login' />
            : <Dashboard />

          )} />

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
