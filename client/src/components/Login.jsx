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
            
            </>
        )
    }
}