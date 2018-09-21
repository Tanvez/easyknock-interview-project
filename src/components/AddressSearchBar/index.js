import React, { Component } from 'react';
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
      location:{}
    };
  
      this.handleSubmit = this.handleSubmit.bind(this);
    }
 
  handleChange = address => {
    this.setState({ address });
  };
 
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => {
        const address = results[0].formatted_address
         this.setState({address})
        return getLatLng(results[0])
      })
      .then(latLng => this.setState({location:latLng}))//route it to gmaps to find location
      .catch(error => console.error('Error', error));//TODO get it to output error and suggest cant find
  };
  handleSubmit(event){
    event.preventDefault();
    const {location} = this.state 
    if(location){
      this.props.setAddress(location)
    } else {
      alert('Failed')
    }
  }
 
  render() {
    
    return (
      <div> 
      <h1 className="addressText">Enter your Address to see how much equity you can tap</h1>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <form onSubmit={this.handleSubmit}>
            <label className="address">Home Address</label>
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
                <input className='continue' type="submit" value="Continue" />

              </div>
            </form>
          )}
        </PlacesAutocomplete>
      </div>
    );
  }
}


export default AddressSearchBar;