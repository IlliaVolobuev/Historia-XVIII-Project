import React, { useState, useEffect, useRef } from "react";
import Player from "./Player";
import Enemy from "./Enemy";
import Background from "./Background";
import GameOver from "./GameOver";
import "./Game.css";
import Score from "./Score";

export default function Game() {
  const [playerPos, setPlayerPos] = useState({ x: 50, y: 250 });
  const [enemies, setEnemies] = useState([]);
  const [bullets, setBullets] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [passedEnemies, setPassedEnemies] = useState(0);

  const gameAreaRef = useRef(null);
  const keysRef = useRef({
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
  });

  const playerAnimationRef = useRef(null);
  const bgIndex = Math.floor(passedEnemies / 10) % 4;

  // -----------------------------
  // Движение игрока
  // -----------------------------
  useEffect(() => {
    const step = 3;

    const movePlayer = () => {
      if (!gameOver) {
        setPlayerPos((pos) => {
          const width = gameAreaRef.current?.offsetWidth || 1200;
          const height = gameAreaRef.current?.offsetHeight || 420;

          let x = pos.x;
          let y = pos.y;

          if (keysRef.current.ArrowUp) y -= step;
          if (keysRef.current.ArrowDown) y += step;
          if (keysRef.current.ArrowLeft) x -= step;
          if (keysRef.current.ArrowRight) x += step;

          return {
            x: Math.max(0, Math.min(x, width - 150)),
            y: Math.max(0, Math.min(y, height - (150 + 32))),
          };
        });

        playerAnimationRef.current = requestAnimationFrame(movePlayer);
      }
    };

    playerAnimationRef.current = requestAnimationFrame(movePlayer);

    return () => {
      if (playerAnimationRef.current) cancelAnimationFrame(playerAnimationRef.current);
    };
  }, [gameOver]);

  // -----------------------------
  // Клавиши
  // -----------------------------
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key in keysRef.current) keysRef.current[e.key] = true;
    };
    const handleKeyUp = (e) => {
      if (e.key in keysRef.current) keysRef.current[e.key] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // -----------------------------
  // Генерация врагов
  // -----------------------------
  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      const width = gameAreaRef.current?.offsetWidth || 1200;
      const height = gameAreaRef.current?.offsetHeight || 420;

      let type = "normal";
      const chanceShooter = Math.min(0.3 + passedEnemies * 0.01, 0.6);
      const chanceZigzag = Math.min(0.3 + passedEnemies * 0.01, 0.7);
      const chanceFast = Math.min(0.1 + passedEnemies * 0.01, 0.4);

      if (Math.random() < chanceShooter) type = "shooter";
      else if (Math.random() < chanceZigzag) type = "zigzag";
      else if (Math.random() < chanceFast) type = "fast";

      setEnemies((prev) => [
        ...prev,
        {
          id: Date.now(),
          x: width,
          y: Math.random() * (height - 50),
          type: type,
          initialY: 0,
          amplitude: 50 + Math.random() * 30,
          frequency: 100 + Math.random() * 100,
        },
      ]);
    }, 1500);

    return () => clearInterval(interval);
  }, [gameOver, passedEnemies]);

  // -----------------------------
  // Движение врагов и снарядов
  // -----------------------------
  useEffect(() => {
    if (gameOver) return;

    let animationFrameId;

    const moveEnemiesAndBullets = () => {
      setEnemies((prev) => {
        const newEnemies = [];
        let passedCount = 0;

        prev.forEach((e) => {
          let speed = 5;
          if (e.type === "fast") speed = 10;

          let newX = e.x - speed;
          let newY = e.y;

          if (e.type === "zigzag") {
            if (!e.initialY) e.initialY = e.y;
            newY = e.initialY + Math.sin(newX / e.frequency) * e.amplitude;
          }

          if (e.type === "shooter" && Math.random() < 0.02) {
            setBullets((prevBullets) => [
              ...prevBullets,
              { x: e.x, y: e.y + 25, width: 12, height: 12 },
            ]);
          }

          if (newX > -50) newEnemies.push({ ...e, x: newX, y: newY });
          else passedCount += 1;
        });

        if (passedCount > 0) setPassedEnemies((prev) => prev + passedCount);
        return newEnemies;
      });

      setBullets((prev) =>
        prev
          .map((b) => ({ ...b, x: b.x - 7 }))
          .filter((b) => b.x > -10)
      );

      animationFrameId = requestAnimationFrame(moveEnemiesAndBullets);
    };

    animationFrameId = requestAnimationFrame(moveEnemiesAndBullets);

    return () => cancelAnimationFrame(animationFrameId);
  }, [gameOver]);

  // -----------------------------
  // Коллизии
  // -----------------------------
  useEffect(() => {
    if (gameOver) return;

    const circleDiameter = 150;
    const squareSize = 32;
    const enemyWidth = 50;
    const enemyHeight = 50;

    enemies.forEach((e) => {
      const circleBox = { x: playerPos.x, y: playerPos.y, width: circleDiameter, height: circleDiameter };
      const squareBox = { x: playerPos.x + (circleDiameter - squareSize) / 2, y: playerPos.y + circleDiameter, width: squareSize, height: squareSize };
      const enemyBox = { x: e.x, y: e.y, width: enemyWidth, height: enemyHeight };

      const collide = (b1, b2) =>
        b1.x < b2.x + b2.width &&
        b1.x + b1.width > b2.x &&
        b1.y < b2.y + b2.height &&
        b1.y + b1.height > b2.y;

      if (collide(circleBox, enemyBox) || collide(squareBox, enemyBox)) setGameOver(true);
    });

    bullets.forEach((b) => {
      const circleBox = { x: playerPos.x, y: playerPos.y, width: circleDiameter, height: circleDiameter };
      const squareBox = { x: playerPos.x + (circleDiameter - squareSize)/2, y: playerPos.y + circleDiameter, width: squareSize, height: squareSize };
      const bulletBox = b;

      const collide = (b1, b2) =>
        b1.x < b2.x + b2.width &&
        b1.x + b1.width > b2.x &&
        b1.y < b2.y + b2.height &&
        b1.y + b1.height > b2.y;

      if (collide(circleBox, bulletBox) || collide(squareBox, bulletBox)) setGameOver(true);
    });
  }, [playerPos, enemies, bullets, gameOver]);

  // -----------------------------
  // Перезапуск
  // -----------------------------
  const restartGame = () => {
    if (playerAnimationRef.current) cancelAnimationFrame(playerAnimationRef.current);
    keysRef.current = { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false };

    setPlayerPos({ x: 50, y: 250 });
    setEnemies([]);
    setBullets([]);
    setPassedEnemies(0);
    setGameOver(false);
  };

  // -----------------------------
  // Рендер
  // -----------------------------
  return (
    <div className="game-area" ref={gameAreaRef}>
      <Score value={passedEnemies} />
      <Background bgIndex={bgIndex} />

      {!gameOver && <Player x={playerPos.x} y={playerPos.y} />}
      {enemies.map((enemy) => (
        <Enemy key={enemy.id} x={enemy.x} y={enemy.y} />
      ))}

      {bullets.map((b, i) => (
        <div
          key={"bullet-" + i}
          style={{
            position: "absolute",
            top: b.y,
            left: b.x,
            width: b.width,
            height: b.height,
            backgroundColor: "yellow",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
      ))}

      {gameOver && <GameOver />}

      {gameOver && (
        <button
          onClick={restartGame}
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "10px 20px",
            fontSize: "18px",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          Uruchom ponownie
        </button>
      )}
    </div>
  );
}
