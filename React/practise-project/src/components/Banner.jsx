import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../assets/img-1.jpg";
import image2 from "../assets/img-2.jpg";
import image3 from "../assets/img-3.jpg";

const Banner = () => (
  <>
    <Carousel interval={1000} className="mt-4" >
      <Carousel.Item style={{height:"500px"}}>
        <img className="d-block w-100 rounded"  src={image1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item style={{height:"500px"}}> 
        <img
          className="d-block w-100 rounded"
          src={image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{height:"500px"}}>
        <img className="d-block w-100 rounded" src={image3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>

  </>
);

export default Banner;
