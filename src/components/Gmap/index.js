import React,{Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import GoogleMapReact from 'google-map-react';

import './style.css'
import AddressSearchBar from '../AddressSearchBar'

const style = {
  height: '300px',
  width: '26rem',
  display:'inline-block'
}

export class MapContainer extends Component {
constructor(props) {
  super(props);
  this.state = {
    lat: 0,
    lng: 0,
    address:''
  }
}

  render() {
    const {lat, lng, address} = this.props;
    console.log(lat, lng)
    return (
      <div style={{textAlign:'center'}}>
        <Map 
          style={style}
          google={this.props.google} 
          zoom={14}
          initialCenter={{
            lat,
            lng
          }}
          onClick={this.onMapClicked}
          >

          <Marker onClick={this.onMarkerClick}
                  name={address} />

          <InfoWindow onClose={this.onInfoWindowClose}>
          </InfoWindow>
        </Map>
      
      </div>

    );
  }
}

const mapState = ({address,lng,lat})=> {
  return{
    address,
    lng,
    lat
  }
}

const routerMapContainer = withRouter(connect(mapState)(MapContainer))

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCqAHzHVigI9d30wnhWUwQk5XmA4WRjioY")
})(routerMapContainer)




// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class MapContainer extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 14
//   };

//   render() {
//     const {lat, lng, address} = this.props;
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key:"AIzaSyCqAHzHVigI9d30wnhWUwQk5XmA4WRjioY"}}
//           defaultCenter={{lat,lng}}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={59.955413}
//             lng={30.337844}
//             text={'Kreyser Avrora'}
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default withRouter(connect(mapState)(MapContainer));

