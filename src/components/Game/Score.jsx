import React from "react";
import "./Score.css";

export default function Score({ value }) {
  return <div className="score">Пролетело: {value}</div>;
}

