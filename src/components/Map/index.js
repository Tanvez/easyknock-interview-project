import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import './style.css';
import AddressSearchBar from '../AddressSearchBar'
class MapComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 0,
      lng: 0,
      zoom: 17,
      address:''
    }
  }
  componentDidMount() {
    const {lat, lng, address} = this.props;
    this.setState({lat,lng, address});
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    const {setAddress,setLatlng} = this.props
    return (
      <div>
      <div className='map-container'>
        <LeafletMap center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <Marker position={position}>
            <Popup>
              Property Address <br/>{this.state.address}
            </Popup>
          </Marker>
        </LeafletMap>
        </div>
        <AddressSearchBar setAddress={setAddress} setLatlng={setLatlng}/>
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


export default withRouter(connect(mapState)(MapComponent));
