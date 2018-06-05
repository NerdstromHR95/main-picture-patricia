
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
      <div>
        <p id="results"> Results </p>
        <div id="container-left">
          <img src={this.state.images.img.main} alt="test" />
          <img src={this.state.images.img.back} alt="test" />
          <img src={this.state.images.img.side} alt="test" />
          <img src={this.state.images.img.collar} alt="test" />
          <img src={this.state.images.img.fabrica} alt="test" />
        </div>
      </div>
    );
  }
}
export default Carousel;
