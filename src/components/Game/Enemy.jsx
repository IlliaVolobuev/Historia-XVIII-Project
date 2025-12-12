import React from "react";
import "./Enemy.css";

export default function Enemy({ x, y }) {
  return <div className="enemy" style={{ left: x, top: y }} />;
}
