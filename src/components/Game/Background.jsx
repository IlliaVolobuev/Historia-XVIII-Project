import React from "react";
import "./style.css";
import bg1 from "../../assets/images/fon1.webp";
import bg2 from "../../assets/images/fon2.webp";
import bg3 from "../../assets/images/fon3.webp";
import bg4 from "../../assets/images/fon4.webp";

const backgrounds = [bg1, bg2, bg3, bg4];

export default function Background({ bgIndex }) {
  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}
    />
  );
}
