import React, { useState, useEffect, useRef } from "react";
import Player from "./Player";
import Enemy from "./Enemy";
import Background from "./Background";
import GameOver from "./GameOver";
import "./Game.css";

export default function Game() {
  const [playerPos, setPlayerPos] = useState({ x: 50, y: 250 });
  const [enemies, setEnemies] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const gameAreaRef = useRef(null);

  // -----------------------------
  // УПРАВЛЕНИЕ ИГРОКОМ
  // -----------------------------
  useEffect(() => {
    const handleKey = (e) => {
      const step = 10;

      setPlayerPos((pos) => {
        if (e.key === "ArrowUp")
          return { ...pos, y: Math.max(pos.y - step, 0) };

        if (e.key === "ArrowDown")
          return { ...pos, y: Math.min(pos.y + step, 420) }; // учитываем 600px высоту

        if (e.key === "ArrowLeft")
          return { ...pos, x: Math.max(pos.x - step, 0) };

        if (e.key === "ArrowRight") {
          const width = gameAreaRef.current?.offsetWidth || 1200;
          return { ...pos, x: Math.min(pos.x + step, width - 50) };
        }

        return pos;
      });
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // -----------------------------
  // ГЕНЕРАЦИЯ ВРАГОВ (НЕ зависит от игрока)
  // -----------------------------
  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      const width = gameAreaRef.current?.offsetWidth || 1200;

      setEnemies((prev) => [
        ...prev,
        {
          id: Date.now(),
          x: width, // спавн за пределами экрана
          y: Math.random() * (420- 50), // высота поля
        },
      ]);
    }, 1500);

    return () => clearInterval(interval);
  }, [gameOver]);

  // -----------------------------
  // ДВИЖЕНИЕ ВРАГОВ (СТАБИЛЬНОЕ)
  // -----------------------------
  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setEnemies((prevEnemies) =>
        prevEnemies
          .map((e) => ({ ...e, x: e.x - 5 }))
          .filter((e) => e.x > -50)
      );
    }, 30); // 30 — плавнее чем 50

    return () => clearInterval(interval);
  }, [gameOver]);

  // -----------------------------
  // КОЛЛИЗИИ — ОТДЕЛЬНО
  // -----------------------------
useEffect(() => {
  if (gameOver) return;

  const playerWidth = 100;   // ширина картинки игрока
  const playerHeight = 150;  // высота картинки игрока
  const enemyWidth = 50;     // ширина врага
  const enemyHeight = 50;    // высота врага

  enemies.forEach((e) => {
    const collide =
      playerPos.x < e.x + enemyWidth &&
      playerPos.x + playerWidth > e.x &&
      playerPos.y < e.y + enemyHeight &&
      playerPos.y + playerHeight > e.y;

    if (collide) {
      setGameOver(true);
    }
  });
}, [playerPos, enemies, gameOver]);

  // -----------------------------
  // РЕНДЕР
  // -----------------------------
  return (
    <div className="game-area" ref={gameAreaRef}>
      <Background />

      {gameOver ? (
        <GameOver />
      ) : (
        <>
          <Player x={playerPos.x} y={playerPos.y} />

          {enemies.map((enemy) => (
            <Enemy key={enemy.id} x={enemy.x} y={enemy.y} />
          ))}
        </>
      )}
    </div>
  );
}
