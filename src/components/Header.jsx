// src/components/Header.jsx
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import Icon from '../assets/images/icon2.svg';
import '../App.css';

export default function Header() {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      id="header"
      className="card-glow"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        alignItems: "center",
      }}
    >
      <img src={Icon} alt="ikonka" className="logo" />
      <nav style={{ display: "flex", gap: "1.5rem" }}>
        <Link to="/">Strona główna</Link>
        <Link to="/population">Wzrost ludności</Link>
        <Link to="/inventions">Wynalazki</Link>
        <Link to="/transport">Transport i komunikacja</Link>
      </nav>
      <button className="theme-toggle" onClick={toggleTheme}>
        {dark ? "Jasny motyw" : "Ciemny motyw"}
      </button>
    </header>
  );
}
