
import React from 'react';
import axios from 'axios';
import ImageZoom from 'react-medium-image-zoom';

import '../main.css';
import Carousel from './Carousel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      mainImage: '',
      click: false,
      color: 'White',
      product_id: 100,
    };
    this.changeMainPhoto = this.changeMainPhoto.bind(this);
  }
  componentDidMount() {
    this.get(this.state.product_id);
  }
  get(id) {
    axios.get(`http://localhost:3001/photo/${id}`)
      .then((response) => {
        const arr = [];
        for (let i = 0; i < response.data.length; i += 1) {
          arr.push(response.data[i].img_url);
        }
        this.setState({
          products: arr,
          mainImage: arr[0],
        });
      })
      .catch((err =>
        console.log(err)
      ));
  }

  changeColor(color, id) {
    axios.get(`http://localhost:3001/photo/${color}/${id}`)
      .then((response) => {
        const arr = [];
        for (let i = 0; i < response.data.length; i += 1) {
          arr.push(response.data[i].img_url);
        }
        this.setState({
          products: arr,
          mainImage: arr[0],
        });
      })
      .catch((err =>
        console.log(err)
      ));
  }

  ChangeStateColor(event) {
    event.preventDefault();
    this.changeColor(event.target.alt, this.state.product_id);
    this.setState({
      color: event.target.alt,
    });
  }

  changeMainPhoto(event) {
    const clicked = event.target.src;
    this.setState({
      mainImage: clicked,
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
          <div className="container" onClick={() => this.changeState()}> <img src={this.state.mainImage} alt="product" /> </div>
          <Carousel img={this.state.products} func={this.changeMainPhoto} />
        </div>
      );
    }
    return (
      <div>
        <Carousel img={this.state.products} func={this.changeMainPhoto} />
        <div onClick={() => this.changeState()}>
          <ImageZoom
            image={{
        src: this.state.mainImage,
        alt: 'main-image',
        className: 'zoomed',
        style: {
          transition: 'opacity 2.0s ease-in',
           width: '40em',
         },
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

export default App;
