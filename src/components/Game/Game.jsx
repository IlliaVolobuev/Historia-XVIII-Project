import React, { useEffect, useRef, useState } from "react";
import Background from "./Background";
import Score from "./Score";
import GameGuide from "./GameGuide";
import "./style.css";

import music1 from "../../assets/music/1.mp3";
import music2 from "../../assets/music/2.mp3";
import music3 from "../../assets/music/3.mp3";
import music4 from "../../assets/music/4.mp3";

const TRACKS = [music1, music2, music3, music4];
const PLAYER_STEP = 3;
const ENEMY_SPAWN_INTERVAL = 1500;
const PLAYER_SIZE = {
  width: 150,
  height: 182,
  circleH: 150,
  squareW: 32,
  squareH: 32,
};
const ENEMY_SIZE = 60;
const TRACK_CHANGE_THRESHOLD = 10;

const ENEMY_TYPES = {
  NORMAL: "normal",
  SHOOTER: "shooter",
  ZIGZAG: "zigzag",
  FAST: "fast",
};

const ENEMY_SPEEDS = {
  [ENEMY_TYPES.NORMAL]: 5,
  [ENEMY_TYPES.ZIGZAG]: 5,
  [ENEMY_TYPES.FAST]: 10,
  [ENEMY_TYPES.SHOOTER]: 5,
};

export default function Game() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [passedEnemies, setPassedEnemies] = useState(0);

  const gameAreaRef = useRef(null);
  const playerElRef = useRef(null);
  const enemiesRef = useRef([]);
  const bulletsRef = useRef([]);
  const animationRef = useRef(null);
  const audioRef = useRef(null);
  const trackIndexRef = useRef(0);

  const keysRef = useRef({
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
  });

  const player = useRef({ x: 50, y: 250 });

  // Audio management
  const playMusic = (index) => {
    if (!audioRef.current) {
      audioRef.current = new Audio(TRACKS[index]);
      audioRef.current.volume = 0.5;
    } else {
      audioRef.current.pause();
      audioRef.current.src = TRACKS[index];
    }

    audioRef.current.currentTime = 0;
    audioRef.current.play().catch((e) => console.warn("Audio blocked:", e));
    trackIndexRef.current = index;
  };

  const stopMusic = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  // Keyboard handling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key in keysRef.current) {
        e.preventDefault();
        keysRef.current[e.key] = true;
      }
    };

    const handleKeyUp = (e) => {
      if (e.key in keysRef.current) {
        e.preventDefault();
        keysRef.current[e.key] = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown, { passive: false });
    window.addEventListener("keyup", handleKeyUp, { passive: false });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // Track switching based on score
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const newIndex =
      Math.floor(passedEnemies / TRACK_CHANGE_THRESHOLD) % TRACKS.length;
    if (newIndex !== trackIndexRef.current) {
      playMusic(newIndex);
    }
  }, [passedEnemies, gameStarted, gameOver]);

  // Game loop
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    // Collision detection
    const checkCollision = (a, b) =>
      a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;

    // Player movement
    const updatePlayerPosition = (width, height) => {
      const p = player.current;

      if (keysRef.current.ArrowUp) p.y -= PLAYER_STEP;
      if (keysRef.current.ArrowDown) p.y += PLAYER_STEP;
      if (keysRef.current.ArrowLeft) p.x -= PLAYER_STEP;
      if (keysRef.current.ArrowRight) p.x += PLAYER_STEP;

      p.x = Math.max(0, Math.min(p.x, width - PLAYER_SIZE.width));
      p.y = Math.max(0, Math.min(p.y, height - PLAYER_SIZE.height));

      playerElRef.current.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
    };

    // Enemy movement
    const updateEnemyPosition = (enemy) => {
      enemy.x -= ENEMY_SPEEDS[enemy.type];

      if (enemy.type === ENEMY_TYPES.ZIGZAG) {
        enemy.y =
          enemy.baseY + Math.sin(enemy.x / enemy.frequency) * enemy.amplitude;
      }

      enemy.el.style.transform = `translate3d(${enemy.x}px, ${enemy.y}px, 0)`;
    };

    // Bullet movement
    const updateBulletPosition = (bullet) => {
      bullet.x -= 7;
      bullet.el.style.transform = `translate3d(${bullet.x}px, ${bullet.y}px, 0)`;
    };

    // Check collisions with player
    const checkPlayerCollisions = () => {
      const p = player.current;
      const circle = {
        x: p.x,
        y: p.y,
        w: PLAYER_SIZE.width,
        h: PLAYER_SIZE.circleH,
      };
      const square = {
        x: p.x + 59,
        y: p.y + 150,
        w: PLAYER_SIZE.squareW,
        h: PLAYER_SIZE.squareH,
      };

      // Check enemy collisions
      for (const enemy of enemiesRef.current) {
        const box = {
          x: enemy.x,
          y: enemy.y,
          w: ENEMY_SIZE - 10,
          h: ENEMY_SIZE - 10,
        };
        if (checkCollision(circle, box) || checkCollision(square, box)) {
          setGameOver(true);
          stopMusic();
          break;
        }
      }

      // Check bullet collisions
      for (const bullet of bulletsRef.current) {
        const bulletBox = { x: bullet.x, y: bullet.y, w: 20, h: 20 };
        if (
          checkCollision(circle, bulletBox) ||
          checkCollision(square, bulletBox)
        ) {
          setGameOver(true);
          stopMusic();
          break;
        }
      }
    };

    const loop = () => {
      const area = gameAreaRef.current;
      if (!area) return;

      const width = area.offsetWidth;
      const height = area.offsetHeight;

      updatePlayerPosition(width, height);

      // Update enemies
      enemiesRef.current.forEach(updateEnemyPosition);

      // Update bullets
      bulletsRef.current.forEach(updateBulletPosition);

      // Remove off-screen enemies
      enemiesRef.current = enemiesRef.current.filter((enemy) => {
        if (enemy.x > -ENEMY_SIZE) return true;
        enemy.el.remove();
        setPassedEnemies((v) => v + 1);
        return false;
      });

      // Remove off-screen bullets
      bulletsRef.current = bulletsRef.current.filter((bullet) => {
        if (bullet.x > -20) return true;
        bullet.el.remove();
        return false;
      });

      checkPlayerCollisions();

      animationRef.current = requestAnimationFrame(loop);
    };

    animationRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationRef.current);
  }, [gameStarted, gameOver]);

  // Enemy spawning
  const getRandomEnemyType = () => {
    const rand = Math.random();
    if (rand < 0.3) return ENEMY_TYPES.SHOOTER;
    if (rand < 0.6) return ENEMY_TYPES.ZIGZAG;
    if (rand < 0.8) return ENEMY_TYPES.FAST;
    return ENEMY_TYPES.NORMAL;
  };

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const spawnEnemy = () => {
      const area = gameAreaRef.current;
      if (!area) return;

      const el = document.createElement("div");
      el.className = "enemy";
      area.appendChild(el);

      const height = area.offsetHeight;
      const type = getRandomEnemyType();
      const baseY = Math.random() * (height - ENEMY_SIZE);

      enemiesRef.current.push({
        el,
        x: area.offsetWidth,
        y: baseY,
        baseY,
        type,
        amplitude: 40,
        frequency: 100,
      });
    };

    const spawnInterval = setInterval(spawnEnemy, ENEMY_SPAWN_INTERVAL);
    return () => clearInterval(spawnInterval);
  }, [gameStarted, gameOver]);

  // Enemy shooting
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const shootBullets = () => {
      const area = gameAreaRef.current;
      if (!area) return;

      enemiesRef.current.forEach((enemy) => {
        if (enemy.type === ENEMY_TYPES.SHOOTER && Math.random() < 0.3) {
          const bulletEl = document.createElement("div");
          bulletEl.className = "bullet";
          area.appendChild(bulletEl);

          bulletsRef.current.push({
            el: bulletEl,
            x: enemy.x,
            y: enemy.y + 15,
          });
        }
      });
    };

    const shootInterval = setInterval(shootBullets, 1000);
    return () => clearInterval(shootInterval);
  }, [gameStarted, gameOver]);

  // Game control
  const resetGame = () => {
    cancelAnimationFrame(animationRef.current);
    stopMusic();

    enemiesRef.current.forEach((e) => e.el.remove());
    enemiesRef.current = [];

    bulletsRef.current.forEach((b) => b.el.remove());
    bulletsRef.current = [];

    player.current = { x: 50, y: 250 };
    setPassedEnemies(0);
    setGameOver(false);
  };

  const startGame = () => {
    resetGame();
    setGameStarted(true);
    playMusic(0);
  };

  const restart = () => {
    resetGame();
    setGameStarted(true);
    playMusic(0);
  };

  const bgIndex = Math.floor(passedEnemies / TRACK_CHANGE_THRESHOLD) % 4;

  return (
    <>
      <div className="game-area" ref={gameAreaRef}>
        <Score value={passedEnemies} />
        <Background bgIndex={bgIndex} />
        <div ref={playerElRef} className="player" />

        {!gameStarted && (
          <div className="game-overlay">
            <button className="game-button" onClick={startGame}>
              Start gry
            </button>
          </div>
        )}

        {gameOver && (
          <div className="game-overlay">
            <div className="game-over-text">Koniec gry!</div>
            <button className="game-button" onClick={restart}>
              Uruchom ponownie
            </button>
          </div>
        )}
      </div>

      <GameGuide />
    </>
  );
}
