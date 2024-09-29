import React, { useState, useEffect } from "react";
import "../Styles/Phoenix.css";
import phoenixLogo from "../assets/phoenix.png";
import backgroundImage from "../assets/fire1.jpg";
import AboutSection from "./AboutSection";
import { CarouselSection } from "./CarouselSection";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

export const Phoenix: React.FC = () => {
  return (
    <div className="app">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <motion.div
          className="logo"
          animate={{ y: [-1000, 100] }}
          transition={{ delay: 0.75 }}
        >
          <img src={phoenixLogo}></img>
        </motion.div>
      </div>
      <AboutSection className="about" />
      <CarouselSection className="carousel" />
      <Footer className="footer" />
    </div>
  );
};
