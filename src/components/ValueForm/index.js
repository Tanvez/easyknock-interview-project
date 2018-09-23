import React, { Component } from 'react';
import NumberFormat from 'react-number-format'

class ValueForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeValue:0,
      mortgage:0,
      taxes:0
    }
    this.onValueChange = this.onValueChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onValueChange=(values,event)=>{
    const { floatValue} = values; // optional: formattedValue, value, floatValue 
    const {name} = event.target;
    this.setState({[name]: floatValue})
  }

  onSubmit=(event)=>{
    event.preventDefault();
    console.log(this.props.setValTaxMort)
    this.props.setValTaxMortg(this.state);
  }

  
  render() {
    return (
      <div className='page-format'>
      <h1 className="addressText" style={{fontSize:'5vh'}} >Is your home information below accurate?</h1>
      <form className="form-container" onSubmit={this.onSubmit}>
          <label>VALUE OF HOME</label>
          <NumberFormat placeholder='$' thousandSeparator={true} prefix={'$'} name='homeValue' onValueChange={this.onValueChange} required minLength="1" min='1'/>
          <label>VALUE OF MORTGAGE</label>
          <NumberFormat placeholder='$' thousandSeparator={true} prefix={'$'} name='mortgage' onValueChange={this.onValueChange} required minLength="1" min='1'/>
          <label>ANNUAL TAXES</label>
          <NumberFormat placeholder='$' thousandSeparator={true} prefix={'$'} name='taxes' onValueChange={this.onValueChange} required minLength="1" min='1'/>
          <button className="emerald" style={{marginLeft:0}} type="submit">Continue</button>
          </form>
      </div>
    );
  }
}

export default ValueForm;