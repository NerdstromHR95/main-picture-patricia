
import React from 'react';
import '../main.css';
import images from './dummydata';
import Carousel from './Carousel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: images,
      mainImage: images[0].main,
    };
  }

  changeMainImage(img) {
    this.setState = {
      mainImage: img,
    };
  }

  render() {
    return (
      <div>
        <div id="container">
          <img src={this.state.mainImage} alt="test" />
        </div>
        {this.state.products.map((img, index) =>
          <Carousel func={this.changeMainImage} img={img} key={index} />)}
      </div>
    );
  }
}

export default App;
