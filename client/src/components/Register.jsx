import React, { Component } from 'react'

class Register extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            username: '',
            password: '',
        }
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        })
    }

    render(){
        return(
            <>
                <form className='loginForm' onSubmit={(e) => this.props.handleRegisterSubmit(e, this.state)}>
                    <input
                    type='email'
                    name='email'
                    value={this.state.email}
                    placeholder='Email'
                    onChange={this.handleChange}
                    />

                    <input
                    type='text'
                    name='username'
                    value={this.state.email}
                    placeholder='Username'
                    onChange={this.handleChange}
                    />

                    <input
                    type='password'
                    name='password'
                    value={this.state.email}
                    placeholder='Username'
                    onChange={this.handleChange}
                    />
                    
                    <input type='submit' value='Register' />
                </form>
            </>
        )
    }
}

export default Register