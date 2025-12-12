import React from "react";
import "./Score.css";

export default function Score({ value }) {
  return <div className="score">Przeleciało <span className="caunter">{value}</span> ptaków:</div>;
}

