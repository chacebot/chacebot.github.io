import React, { useState, useEffect } from "react";
import "../Styles/Phoenix.css";
import phoenixLogo from "../assets/phoenix.png";
import backgroundImage from "../assets/fire1.jpg";
import AboutSection from "./AboutSection";
import { CarouselSection } from "./CarouselSection";
import { Footer } from "./Footer";

export const Phoenix: React.FC = () => {
  return (
    <div className="app">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <img className="logo" src={phoenixLogo}></img>
      </div>
      <AboutSection className="about" />
      <CarouselSection className="carousel" />
      <Footer className="footer" />
    </div>
  );
};
