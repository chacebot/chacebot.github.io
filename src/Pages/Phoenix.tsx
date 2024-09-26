import React, { useState, useEffect } from "react";
import "../Styles/Phoenix.css";
import phoenixLogo from "../assets/phoenix.png";
import backgroundImage from "../assets/background2.png";
import AboutSection from "./AboutSection";
import { CarouselSection } from "./CarouselSection";
import { Footer } from "./Footer";

export const Phoenix: React.FC = () => {
  return (
    <div className="app">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "#181818",
          height: "80%",
        }}
      >
        <div className="headder">
          <img src={phoenixLogo}></img>
          <AboutSection />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "black",
        }}
      >
        <CarouselSection />
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};
