import React from 'react';
import './style.css';
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyCqAHzHVigI9d30wnhWUwQk5XmA4WRjioY");
 
// Enable or disable logs. Its optional.
Geocode.enableDebug();

const options = [
  'Alabama','Alaska','American Samoa','Arizona',
  'Arkansas','California','Colorado','Connecticut',
  'Delaware','District of Columbia','Federated States of Micronesia',
  'Florida','Georgia','Guam','Hawaii','Idaho','Illinois',
  'Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine',
  'Marshall Islands','Maryland','Massachusetts','Michigan',
  'Minnesota','Mississippi','Missouri','Montana','Nebraska',
  'Nevada','New Hampshire','New Jersey','New Mexico','New York',
  'North Carolina','North Dakota','Northern Mariana Islands',
  'Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico',
  'Rhode Island','South Carolina','South Dakota','Tennessee','Texas',
  'Utah','Vermont','Virgin Island','Virginia','Washington',
  'West Virginia','Wisconsin','Wyoming'
].map((state)=>({label:state,value:state.toLowerCase()}))

class AddressForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
      street:'',
      city:'',
      zipcode:'',
      lat:0,
      lng:0
    }
   this.selectHandleChange = this.selectHandleChange.bind(this);
   this.onChange = this.onChange.bind(this)
   this.handleSubmit = this.handleSubmit.bind(this) 
  }
  
  selectHandleChange = (event) => {
    this.setState({ selectedOption:event.target.value })
  }

  onChange=(event)=>{
    const {value, name} = event.target;
    this.setState({[name]:value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {street, city, selectedOption, zipcode} = this.state;
    const address = street+','+city+','+selectedOption+','+zipcode;
    Geocode.fromAddress(address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        this.setState({lat, lng})
        this.props.setAddress(address)
        this.props.setLatlng({lat, lng})
      },
      error => {
        console.error(error);
      }
    );
  }
  render() {
    return (
      <div className="row">
        <form className="form-container" onSubmit={this.handleSubmit}>
          <label>STREET</label><input onChange={this.onChange} name='street' placeholder="Street"></input>
          <label>CITY</label><input onChange={this.onChange} name='city' placeholder="City"></input>
          <div>
          <label className="state-label">STATE</label>
          <select  onChange={this.selectHandleChange}>
            <option value='default'>Select a State</option>
            {options.map((state, idx)=><option key={idx} value={state.value}>{state.label}</option>)}
          </select>
          <div className= 'zip-container'><label>ZIPCODE</label><input name="zipcode" onChange={this.onChange} placeholder="ZIPCODE"></input></div>
          </div>
          <div style={{textAlign:'center', paddingTop:'10px'}}>
            <button className="emerald" style={{display:'inline-block'}} type="submit">Continue</button>
          </div>
      </form>
    </div>
    );
  }
}
export default AddressForm;
