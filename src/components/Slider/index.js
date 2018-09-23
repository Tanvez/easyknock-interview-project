import React, {Component} from 'react';
import Slider, { Range } from 'rc-slider';

import 'rc-slider/assets/index.css';


class SliderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 50,
    };
  }
  onSliderChange = (value) => {
    this.setState({
      value,
    });
  }
  onAfterChange = (value) => {
    console.log(value); 
  }
  render() {
    return (
      <div className='page-format'>
      <h1 className="addressText" style={{fontSize:'5vh'}} >How much of your home equity would you like to access?</h1>
        <form>
        <Slider value={this.state.value}
          onChange={this.onSliderChange} onAfterChange={this.onAfterChange}
        />
        <div style={{textAlign:'center', paddingTop:'10px'}}>
        <button className="emerald" style={{display:'inline-block'}} type="submit">Continue</button>
        </div>
        </form>
      </div>
    );
  }
}

export default SliderComponent