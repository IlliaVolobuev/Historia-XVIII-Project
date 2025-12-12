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
  const [gameOver, setGameOver] = useState(false);
  const [passedEnemies, setPassedEnemies] = useState(0); // счётчик

  const gameAreaRef = useRef(null);


 const bgIndex = Math.floor(passedEnemies / 10) % 4;


  // -----------------------------
  // УПРАВЛЕНИЕ ИГРОКОМ
  // -----------------------------
  useEffect(() => {
    const handleKey = (e) => {
      const step = 10;
      setPlayerPos((pos) => {
        const width = gameAreaRef.current?.offsetWidth || 1200;
        const height = gameAreaRef.current?.offsetHeight || 420;

        if (e.key === "ArrowUp")
          return { ...pos, y: Math.max(pos.y - step, 0) };
        if (e.key === "ArrowDown")
          return { ...pos, y: Math.min(pos.y + step, height - 150) };
        if (e.key === "ArrowLeft")
          return { ...pos, x: Math.max(pos.x - step, 0) };
        if (e.key === "ArrowRight")
          return { ...pos, x: Math.min(pos.x + step, width - 100) };

        return pos;
      });
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // -----------------------------
  // ГЕНЕРАЦИЯ ВРАГОВ
  // -----------------------------
  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      const width = gameAreaRef.current?.offsetWidth || 1200;
      const height = gameAreaRef.current?.offsetHeight || 420;

      setEnemies((prev) => [
        ...prev,
        {
          id: Date.now(),
          x: width, // спавн за пределами экрана
          y: Math.random() * (height - 50), // высота врага
        },
      ]);
    }, 1500);

    return () => clearInterval(interval);
  }, [gameOver]);

  // -----------------------------
  // ДВИЖЕНИЕ ВРАГОВ + подсчёт пролетевших
  // -----------------------------
useEffect(() => {
  if (gameOver) return;

  let animationFrameId;

  const moveEnemies = () => {
    setEnemies((prevEnemies) => {
      const newEnemies = [];
      let passedCount = 0;

      prevEnemies.forEach((e) => {
        const newX = e.x - 5; // скорость движения
        if (newX > -50) {
          newEnemies.push({ ...e, x: newX });
        } else {
          passedCount += 1;
        }
      });

      if (passedCount > 0) setPassedEnemies(prev => prev + passedCount);

      return newEnemies;
    });

    animationFrameId = requestAnimationFrame(moveEnemies);
  };

  animationFrameId = requestAnimationFrame(moveEnemies);

  return () => cancelAnimationFrame(animationFrameId);
}, [gameOver]);


  // -----------------------------
  // КОЛЛИЗИИ
  // -----------------------------
  useEffect(() => {
    if (gameOver) return;

    const playerWidth = 80; // ширина игрока
    const playerHeight = 80; // высота игрока
    const enemyWidth = 50; // ширина врага
    const enemyHeight = 50; // высота врага

    enemies.forEach((e) => {
      const collide =
        playerPos.x < e.x + enemyWidth &&
        playerPos.x + playerWidth > e.x &&
        playerPos.y < e.y + enemyHeight &&
        playerPos.y + playerHeight > e.y;

      if (collide) setGameOver(true);
    });
  }, [playerPos, enemies, gameOver]);

  // -----------------------------
  // РЕНДЕР
  // -----------------------------
  return (
    <div className="game-area" ref={gameAreaRef}>
      <Score value={passedEnemies} />
    <Background bgIndex={bgIndex} />

 
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
