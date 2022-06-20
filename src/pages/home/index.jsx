import React from "react";
import { Section } from "./styles.js";

export default function Home() {
  return (
    <Section>
      <div className="BoxTop">
        <div className="BoxText">
          <h1>Blog da Go-K</h1>
          <br />
          <p>
            Junte-se a milhares de devs e acelere na direção dos seus objetivos.
            Transforme sua carreira em uma jornada de evolução contínua através
            das melhores tecnologias.
          </p>
        </div>
        <div className="BoxImageMouse">
          <img className="ImageMouse" src="/assets/images/mouse.png" />
          <img
            className="ImageMouseArrow"
            src="/assets/images/arrowBottom.png"
          />
        </div>
      </div>
    </Section>
  );
}
