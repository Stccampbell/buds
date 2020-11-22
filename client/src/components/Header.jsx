import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render(){
        return(
           <header>
               {/* logo */}
               {/* Search Bar */}
               <Link to="/">Home</Link>
               <Link onClick={this.props.logout} to="/Login">Logout</Link>

           </header>
        )
    }
}

export default Header