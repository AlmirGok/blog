import React from "react";
import { Section } from "./styles.js";

export default function Home() {
  return (
    <Section>
      <div className="BoxTop">
        <div className="BoxText">
          <h1>Blog da GO-K</h1>
          <br />
          <p>
            Lorem ipsum hac posuere taciti iaculis curabitur ultrices primis,
            lobortis sociosqu egestas rutrum taciti leo nisl quis leo, luctus
            consequat lectus luctus risus at risus.
          </p>
        </div>
        <div className="BoxImageMouse">
          <img className="ImageMouse" alt="" src="/assets/images/mouse.png" />
          <img
            className="ImageMouseArrow"
            alt=""
            src="/assets/images/arrowBottom.png"
          />
        </div>
      </div>
    </Section>
  );
}
