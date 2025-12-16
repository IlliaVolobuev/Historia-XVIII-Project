import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext"; // <- здесь важно
import { Link } from "react-router-dom";
import Icon from "../../assets/images/icon2.svg";
import "../../App.css";
import "./Header.css";

export default function Header() {
  const { dark, toggleTheme } = useContext(ThemeContext); // <- исправлено

  return (
    <header id="header" className="card-glow header-card">
      <img src={Icon} alt="ikonka" className="logo" />
      <nav style={{ display: "flex", gap: "1.5rem" }}>
        <Link to="/">Strona główna</Link>
        <Link to="/population">Wzrost ludności</Link>
        <Link to="/inventions">Wynalazki</Link>
        <Link to="/transport">Transport i komunikacja</Link>
        <Link to="/test">Zdać test</Link>
        <Link to="/game">Gra</Link>
      </nav>
      <button className="theme-toggle" onClick={toggleTheme}>
        {dark ? "Jasny motyw" : "Ciemny motyw"}
      </button>
    </header>
  );
}
