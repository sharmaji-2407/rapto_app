import React from 'react'
import wedding from "../media/wedding.png";
import corporate from "../media/corporate.jpg";
import social from "../media/birthday.jpg";
import party from "../media/party.jpg"

import Carousel from "react-bootstrap/Carousel";

const CarouselComp = () => {




  

  const imageStyle = {
     filter: 'blur(2.5px)'
  }


  return (
    <div>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={wedding}
            alt="First slide"
            style={imageStyle}
          />

          
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={corporate}
            alt="Second slide"
            style={imageStyle}
          />

          
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={social}
            alt="Third slide"
            style={imageStyle}
          />

          
        </Carousel.Item>


        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={party}
            alt="Third slide"
            style={imageStyle}
          />

          
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComp;