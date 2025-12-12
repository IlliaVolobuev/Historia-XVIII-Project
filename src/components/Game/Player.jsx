import React from "react";
import "./Player.css";

export default function Player({ x, y }) {
  return <div className="player" style={{ left: x, top: y }} />;
}
