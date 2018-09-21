import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'

//actions 
import {setAddress} from './store'

import {AddressSearchBar} from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        
          <AddressSearchBar setAddress={this.props.setAddress}/>
      </div>
    );
  }
}

const mapDispatch={
  setAddress
}

export default connect(null, mapDispatch)(App);
