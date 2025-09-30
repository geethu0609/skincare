import React from "react";
import { Carousel } from "react-bootstrap";

// Import images
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.jpg";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
