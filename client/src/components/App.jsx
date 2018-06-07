
import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import '../main.css';
import images from './firstImages';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: images.polo,
      mainImage: images.polo[0],
      click: false,
    };
    this.get = this.get.bind(this);
  }
  componentDidMount() {
    this.get();
  }
  get() {
    axios.get('/home')
      .then((response) => {
        this.setState({
          products: response.data,
        });
      });
  }

  slideUp(hidden) {
    if (this.state.click === false) {
      $('#container-left').slideUp('slow');
      $('#slide').append(`<div id="container-left" key={index}> <img src= ${hidden} alt="thumbnails" /> </div>`).fadeIn('slow').addClass('1');
      $('#topArrow').remove();
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
      $('#slide').prepend($('<input id="topArrow" type="image" src="https://image.ibb.co/fQGP58/Screen_Shot_2018_06_05_at_11_40_00.png" alt="arrow" />'));
      this.setState({
        click: false,
      });
    });
    $('#topArrow').on('click', (event) => {
      event.preventDefault();
      this.slideUp();
    });
    const thumbnails = [];
    const allImages = [];
    let extras = [];
    const hidden = [];
    for (let i = 0; i < this.state.products.length; i += 1) {
      allImages.push(<div id="allImages"> <img src={this.state.products.length[i]} alt="thumbnails" /> </div>);
    }
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
            <img src={this.state.mainImage} alt="test" />
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
        {this.state.products.map((img, index) =>
          <div id="container-left" key={index}> <img src={img} alt="thumbnails" /> </div>)}
      </div>
    );
  }
}

export default App;
