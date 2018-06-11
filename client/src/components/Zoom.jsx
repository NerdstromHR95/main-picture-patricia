import React from 'react';
import '../main.css';
import ImageZoom from 'react-medium-image-zoom';
import Colors from './Colors';
import { Circle } from 'react-color';

class Zoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      color: 'white',
    };
  }

  changeState() {
    if (this.state.click === false) {
      this.setState({
        click: true,
      });
    } else {
      this.setState({
        click: false,
      });
    }
  }

  render() {
    if (this.state.click === false) {
      return (
        <div>
          <img className="main" src={this.props.img} onClick={() => this.changeState()} />
        </div>
      );
    }
    return (
      <div onClick={() => this.changeState()}>
        <ImageZoom
          image={{
          src: this.props.img,
          alt: 'main-image',
          className: 'main',
          style: { width: '50em' },
        }}
          zoomImage={{
          src: this.props.img,
          alt: 'main-image',
        }}
        />
        <div id="container-color">
        <div id="color"> <p> Color: </p> </div>
        <div id="black-picker"> <img alt="Black" src="https://n.nordstrommedia.com/ImageGallery/store/product/SwatchMedium/1/_101963241.jpg?crop=fit&w=31&h=31" /></div>
        <div id="red-picker">
          <img alt="Red" src="https://n.nordstrommedia.com/ImageGallery/store/product/SwatchMedium/18/_12214758.jpg?crop=fit&w=31&h=31" />
        </div>
        <div id="white-picker">
          <img alt="White" src="https://n.nordstrommedia.com/ImageGallery/store/product/SwatchMedium/6/_101841106.jpg?crop=fit&w=31&h=31" />
        </div>
        </div>
      </div>
    );
  }
}

export default Zoom;
