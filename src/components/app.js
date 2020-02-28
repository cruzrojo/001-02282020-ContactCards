import React, { Component } from 'react';

import ContactContainer from "./contact-container"

export default class App extends Component {

  render() {
    return (
      <div className='app'>
        <ContactContainer />
      </div>
    );
  }
}