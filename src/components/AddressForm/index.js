// import React, { Component } from 'react';
// import Select from 'react-select';

// const states = [
//                 'Alabama','Alaska','American Samoa','Arizona',
//                 'Arkansas','California','Colorado','Connecticut',
//                 'Delaware','District of Columbia','Federated States of Micronesia',
//                 'Florida','Georgia','Guam','Hawaii','Idaho','Illinois',
//                 'Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine',
//                 'Marshall Islands','Maryland','Massachusetts','Michigan',
//                 'Minnesota','Mississippi','Missouri','Montana','Nebraska',
//                 'Nevada','New Hampshire','New Jersey','New Mexico','New York',
//                 'North Carolina','North Dakota','Northern Mariana Islands',
//                 'Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico',
//                 'Rhode Island','South Carolina','South Dakota','Tennessee','Texas',
//                 'Utah','Vermont','Virgin Island','Virginia','Washington',
//                 'West Virginia','Wisconsin','Wyoming'
//               ].map((state)=>({lable:state,value:state}))

// class AddressForm extends Component {
  
//    state= {
//       street:'',
//       city:'',
//       selectedOption:null,
//       zipcode:0,
//       stateOptions:states
//     }
//     handleChange = (selectedOption) => {
//       this.setState({ selectedOption });
//       console.log(`Option selected:`, selectedOption);
//     }

//   render() {
//     const {selectedOption, stateOptions} = this.state
//     return (
//       <div>
//       <form>
//       <label>STREET</label>
//         <input placeholder="Street"></input>
//       <label>CITY</label>  
//         <input placeholder="City"></input>
//         <label>ZIPCODE</label>
//         <input placeholder="ZIPCODE"></input>
//       </form>
//       <Select  value={selectedOption}
//       onChange={this.handleChange} options={stateOptions} />
//       </div>
//     );
//   }
// }

// export default AddressForm

import React from 'react';
import Select from 'react-select';
import './style.css';

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
  state = {
    selectedOption: null,
    street:'',
    city:'',
    zipcode:''

  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <div className="row">
        <form>
          <label>STREET</label><input placeholder="Street"></input>
          <label>CITY</label><input placeholder="City"></input>
          <Select
            className='selector'
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          />
          <label>ZIPCODE</label><input placeholder="ZIPCODE"></input>
      </form>
    </div>
    );
  }
}
export default AddressForm;