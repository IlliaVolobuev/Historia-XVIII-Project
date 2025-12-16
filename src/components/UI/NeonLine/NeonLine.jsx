import React from "react";
import "./NeonLine.css";

export default function NeonLine({ className = "", style = {} }) {
  return <div className={`neon-line ${className}`} style={style}></div>;
}

