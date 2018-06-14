import React from 'react';
import Slider from 'react-slick';

import '../main.css';

const Carousel = (props) => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: props.img.length - 1,
    arrows: true,
    vertical: true,
    accessibility: true,
    verticalSwiping: true,
    className: 'carousel',
  };
  return (
    <div id="test">
      <Slider {...settings} >
        {props.img.map((img, index) =>
          <div onClick={(event => props.func(event))} id="container-left" key={index}> <img src={img} alt="thumbnails" /> </div>)}
      </Slider>
    </div>
  );
};


export default Carousel;
