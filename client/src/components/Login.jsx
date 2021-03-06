import React from 'react';
import { Component } from 'react'

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }

    render(){
        return(
            <>
                <form className="loginForm" onSumbit={(e) => this.props.handleLoginSubmit(e, this.state)}>
                    <input
                    type='text'
                    name='username'
                    value={this.state.username}
                    placeholder='Username'
                    onChange={this.handleChange}
                    />
                    <input
                    type='password'
                    name='password'
                    value={this.state.password}
                    placeholder='Password'
                    onChange={this.handleChange}
                    />

                    <input type='submit' value='Login' />
                </form>
            </>
        )
    }
}

export default Login