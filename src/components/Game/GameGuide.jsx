import React from "react";
import "./style.css";
import balloonImg from "../../assets/images/ball.png"; // предполагаемый путь к изображению

export default function GameGuide() {
  return (
    <div className="game-guide">
      <div className="guide-content">
        {/* Картинка слева */}
        <img
          src={balloonImg}
          alt="Balon Montgolfier"
          className="guide-image"
        />

        {/* Текст справа */}
        <div className="guide-text">
          <h2>Przewodnik dla początkujących</h2>
          <p>
            W XVIII wieku bracia Montgolfier wynaleźli pierwszy balon na gorące powietrze. 
            W tej grze wcielasz się w rolę pilota ich balonu! 
            Twoim zadaniem jest unikać ptaków i pocisków, zdobywając jak najwięcej punktów.
          </p>

          <h3>Cel gry:</h3>
          <p>Przeleć jak najdalej balonem, unikając przeszkód i nie uderzając w ptaki ani pociski.</p>

          <h3>Sterowanie:</h3>
          <ul>
            <li>Strzałka w górę: wznoszenie balonu</li>
            <li>Strzałka w dół: obniżanie balonu</li>
            <li>Strzałka w lewo/prawo: przesuwanie balonu</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
