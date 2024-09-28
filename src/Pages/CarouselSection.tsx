import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../assets/carol1.jpg"; // Replace with actual image paths
import image2 from "../assets/carol2.jpg";
import image3 from "../assets/carol3.jpg";

export const CarouselSection = (props: any) => {
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      showStatus={false}
      className={props.className}
    >
      <img src={image1} alt="Ride Event 1" />

      <img src={image2} alt="Ride Event 2" />

      <img src={image3} alt="Ride Event 3" />
    </Carousel>
  );
};
