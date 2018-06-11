import React from 'react';
import ImageZoom from 'react-medium-image-zoom';
import '../main.css';


class Zoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      color: 'white',
    };
  }

  ChangeStateColor(event) {
    event.preventDefault();
    this.props.changeColor(event.target.alt);
    this.setState({
      color: event.target.alt,
    });
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
      <div>
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
      </div>
        <div id="container-color">
          <div id="color"> <p> Color: {this.state.color} </p> </div>
          <div id="black-picker" onClick={e => this.ChangeStateColor(e)}> <img alt="Black" src="https://n.nordstrommedia.com/ImageGallery/store/product/SwatchMedium/1/_101963241.jpg?crop=fit&w=31&h=31" /></div>
          <div id="red-picker" onClick={e => this.ChangeStateColor(e)}>
          <img alt="Red" src="https://n.nordstrommedia.com/ImageGallery/store/product/SwatchMedium/18/_12214758.jpg?crop=fit&w=31&h=31" />
        </div>
          <div id="white-picker" onClick={e => this.ChangeStateColor(e)}>
          <img alt="White" src="https://n.nordstrommedia.com/ImageGallery/store/product/SwatchMedium/6/_101841106.jpg?crop=fit&w=31&h=31" />
        </div>
        </div>
      </div>
    );
  }
}

export default Zoom;
