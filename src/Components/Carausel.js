import React from 'react';
import defaultImg from '../defaultImg.png';
import uuid from 'uuidv4';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

export default function Carousel(props) {
  const { img } = props;

  return (
    <Slider autoplay={1000}>
      {img.map(item => (
        <img
          key={uuid()}
          className="d-block w-100"
          src={item}
          alt="slide"
          onError={e => {
            e.target.onerror = null;
            e.target.src = defaultImg;
          }}
        />
      ))}
    </Slider>
  );
}
