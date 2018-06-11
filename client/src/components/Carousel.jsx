
import React from 'react';
import '../main.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props,
    };
  }

  render() {
    return (
      <div id="container-left">
        <img src={this.state.images.img.main} alt="test" />
        <img src={this.state.images.img.back} alt="test" />
        <div> <img src={this.state.images.img.side} alt="test" /></div>
        <div> <img src={this.state.images.img.collar} alt="test" /></div>
        <div> <img src={this.state.images.img.fabrica} alt="test" /></div>
        <input id="downArrow" type="image" src="https://image.ibb.co/fQGP58/Screen_Shot_2018_06_05_at_11_40_00.png" alt="arrow" />
        <div> <img src={this.state.images.img.product} alt="test" /></div>
      </div>
    );
  }
}

export default Carousel;

