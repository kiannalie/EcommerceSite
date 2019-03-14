import React, { Component } from 'react';

export default class FormInput extends Component {
    render(){
        const { className, title, type, placeholder, input } = this.props;
        return(
            <div className={`${className} = form-input`}>

                <label className='form-input__label'> {title} </label> 
                <input className='form-iniput__input' type={type} placeholder={placeholder} {...input} />
           </div>
        )
    }
}