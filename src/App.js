import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { Router, Route, Switch, Link } from 'react-router-dom'

//actions 
import {setAddress, setLatlng} from './store'

import history from './history'
import {AddressSearchBar, MapComponent, AddressForm} from './components'

class App extends Component {
  render() {
    const {setAddress, setLatlng} = this.props;
    return (
      <Router className="App" history={history}>
        <div>
          <header className="App-header">
          <Link to='/' className="custom-logo-link">
            <img width="246" height="90" src="https://easyknock.com/wp-content/uploads/2018/08/eklogo.png" className="custom-logo" alt="EasyKnock" itemProp="logo" sizes="100vw"/>
          </Link>
          </header>
          <h1 className="addressText">Enter your address to see how much equity you can tap</h1>
            {<Switch>
              <Route exact path="/"  render={()=><AddressSearchBar setAddress={setAddress} setLatlng={setLatlng}/>}/>
              <Route exact path="/map" render={()=><MapComponent  setAddress={setAddress} setLatlng={setLatlng}/>} />
              <Route exact path="/addressform" render={()=><AddressForm setAddress={setAddress} setLatlng={setLatlng} />}/>
            </Switch>}
        </div>
      </Router>
    );
  }
}


const mapDispatch={
  setAddress,
  setLatlng
}

export default connect(null, mapDispatch)(App);
