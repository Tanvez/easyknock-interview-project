import React, { Component } from 'react';
import { withRouter } from 'react-router-dom' // gives access to history.push
import './style.css'

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
 
class AddressSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      address: '', 
      location:{},
      locationErr:false //used to load can't find address link
    };
  
      this.handleSubmit = this.handleSubmit.bind(this);
    }
 
  handleChange = address => {
    this.setState({locationErr:false})
    this.setState({ address });
  };
 
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => {
        const address = results[0].formatted_address;
         this.setState({address});
         this.props.setAddress(address);
        return getLatLng(results[0])
      })
      .then(latLng => {
        this.setState({location:latLng});
        this.props.setLatlng(latLng);
      })
      .catch(error => console.error('Error', error));
  };
  handleSubmit(event){
    event.preventDefault();
    const {location, address} = this.state;
    
    if(address && location.lat && location.lng ){
     if(this.props.history.location!=='/map')
      {
          this.props.history.push("/map")
      }
    } else {
      this.setState({locationErr:true});
    }
  }
 
  render() {
    console.log()
    return (
      <div className="address"> 
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <form onSubmit={this.handleSubmit}>
            <label className="address">HOME ADDRESS</label>
              <input
                {...getInputProps({
                  placeholder: 'Home Address',
                  className: 'addressBar',
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
                
                <button className="emerald" type="submit">Continue</button>
              </div>
            </form>
          )}
        </PlacesAutocomplete>
        {this.state.locationErr? <div className="address">can't find address</div>:''}  
      </div>
    );
  }
}


export default (withRouter)(AddressSearchBar);