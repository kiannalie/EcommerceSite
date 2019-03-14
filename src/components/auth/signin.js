import React, { Component } from 'react';

import SignInForm from './signInForm';

class SignIn extends Component {

    onSubmit= (feilds) => {
        console.log(feilds);
    }
    render() {
        return (
            <div className='sign-in'>
                <SignInForm onSubmit={this.onSubmit} className='sign-in__form' />
            </div>
        )
    }
}


export default SignIn;

