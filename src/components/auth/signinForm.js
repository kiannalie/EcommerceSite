import React, { Component } from 'react';

import { reduxForm, Feild } from 'redux-form';

export default class SignInForm extends Component {
    render() {
        const{ className }= this.props;
        
        return (
            <form className={`${className} sign-in-form`}> 
                sign innn
            </form>
        );
    }
}

SignInForm = reduxForm({
    form : 'SignInForm'
})(SignInForm);
