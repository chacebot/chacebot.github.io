import React from "react";
import { Reveal } from "./Reveal";

const AboutSection = (props: any) => {
  return (
    <div className={props.className}>
      <Reveal>
        <h2>About Phoenix MC</h2>
      </Reveal>
      <Reveal>
        <p>
          Our purpose is to promote sane, sober, and safe motorcycling, to
          provide assistance and information to those who wish to conquer the
          slavery of addiction and to carry the message to the addict who still
          suffers.
        </p>
      </Reveal>
    </div>
  );
};

export default AboutSection;
