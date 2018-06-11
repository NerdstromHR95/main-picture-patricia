
import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import '../main.css';
import Zoom from './Zoom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      mainImage: '',
      click: false,
    };
    this.get = this.get.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }
  componentDidMount() {
    this.get();
  }
  get() {
    axios.get('http://localhost:3001/home')
      .then((response) => {
        const arr = [];
        for (let i = 0; i < response.data.length; i++) {
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
  changeColor(color) {
    axios.post(`http://localhost:3001/color${color}request`, {
      body: color,
    })
      .then((response) => {
        const arr = [];
        for (let i = 0; i < response.data.length; i++) {
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

  slideUp(hidden) {
    if (this.state.click === false) {
      $('#container-left').slideUp('slow');
      $('#slide').append(`<div id="container-left" key={index}> <img src= ${hidden} alt="thumbnails" /> </div>`).fadeIn('slow').addClass('1');
      $('#topArrow').hide();
      $('#top').prepend($('<input id="downArrow" type="image" src="https://image.ibb.co/fQGP58/Screen_Shot_2018_06_05_at_11_40_00.png" alt="arrow" />'));
      this.setState({
        click: true,
      });
    }
  }

  changeMainPhoto(event) {
    const clicked = event.target.src;
    this.setState({
      mainImage: clicked,
    });
  }

  render() {
    $('#downArrow').on('click', () => {
      $('#downArrow').remove();
      $('#container-left').slideDown('slow');
      $('.1').remove();
      $('#slide').append($('<input id="topArrow" type="image" src="https://image.ibb.co/fQGP58/Screen_Shot_2018_06_05_at_11_40_00.png" alt="arrow" />'));
      this.setState({
        click: false,
      });
    });
    $('#topArrow').on('click', (event) => {
      event.preventDefault();
      this.slideUp();
    });
    const thumbnails = [];
    let extras = [];
    const hidden = [];

    extras = this.state.products.slice(5, this.state.products.length + 1);
    for (let i = 0; i < extras.length; i += 1) {
      hidden.push(extras[i]);
    }
    if (this.state.products.length >= 5) {
      for (let i = 0; i < 5; i += 1) {
        thumbnails.push(this.state.products[i]);
      }
      return (
        <div>
          <div id="container">
            <Zoom img={this.state.mainImage} changeColor={this.changeColor} />
          </div>
          <div id="top" />
          {thumbnails.map((img, index) =>
            <div onClick={(event => this.changeMainPhoto(event))} id="container-left" key={index}> <img src={img} alt="thumbnails" /> </div>)}
          <div id="slide" />
          <input onClick={() => this.slideUp(hidden)} id="topArrow" type="image" src="https://image.ibb.co/fQGP58/Screen_Shot_2018_06_05_at_11_40_00.png" alt="arrow" />
        </div>
      );
    }
    return (
      <div>
        <div id="container">
          <img src={this.state.mainImage} alt="test" />
        </div>
        <div id="left-container">
          {this.state.products.map((img, index) =>
            <div id="container-left" key={index}> <img src={img.img_url} alt="thumbnails" /> </div>)}
        </div>
      </div>
    );
  }
}

export default App;
