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
            : <Login />
          )} />

          <Route exact path='/Register' render={() => (
            this.state.auth
            ? <Redirect to='/' />
            : <Register />
          )} />

        </div>
      </Router>
    )
  }
}

export default App;
