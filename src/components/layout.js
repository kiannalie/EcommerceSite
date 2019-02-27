import React, { Component } from 'react';

export default class Layout extends Component {
  render() {
    return (
      <div className='Layout'>
        {/* <h1>ECOM</h1> */}
        {this.props.children}
      
      </div>
    );
  }
}
