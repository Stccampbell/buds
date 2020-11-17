import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css';

import './components/Login';
import './components/Register';

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
        </div>
      </Router>
    )
  }
}

export default App;
