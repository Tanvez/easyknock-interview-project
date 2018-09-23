import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { Router, Route, Switch, Link } from 'react-router-dom'

//actions 
import {setAddress, setLatlng, setValTaxMortg} from './store'

import history from './history'
import {AddressSearchBar, MapComponent, AddressForm, ValueForm, Slider, Gmap } from './components'

class App extends Component {
  render() {
    const addressHeader = <h1 className="addressText">Enter your address to see how much equity you can tap</h1>
    const {setAddress, setLatlng, setValTaxMortg} = this.props;
    return (
      <Router className="App" history={history}>
        <div>
          <header className="App-header">
          <Link to='/' className="custom-logo-link">
            <img width="246" height="90" src="https://easyknock.com/wp-content/uploads/2018/08/eklogo.png" className="custom-logo" alt="EasyKnock" itemProp="logo" sizes="100vw"/>
          </Link>
          </header>
            {<Switch>
              <Route exact path="/"  render={()=><div className='page-format'>{addressHeader}<AddressSearchBar setAddress={setAddress} setLatlng={setLatlng}/> </div>}/>
              <Route exact path="/map" render={()=><div className='page-format'>{addressHeader}<MapComponent  setAddress={setAddress} setLatlng={setLatlng}/></div>} />
              <Route exact path="/addressform" render={()=><div className='page-format'>{addressHeader}<AddressForm setAddress={setAddress} setLatlng={setLatlng}/></div>}/>
              <Route exact path ="/valueform" render={()=><ValueForm setValTaxMortg={setValTaxMortg}/>}/>
              <Route exact path ="/slider" component={Slider}/>
              <Route exact path ="/gmap" render={()=><div className='page-format'>{addressHeader} <Gmap setAddress={setAddress} setLatlng={setLatlng} /></div>} />
            </Switch>}
        </div>
      </Router>
    );
  }
}


const mapDispatch={
  setAddress,
  setLatlng,
  setValTaxMortg
}

export default connect(null, mapDispatch)(App);
