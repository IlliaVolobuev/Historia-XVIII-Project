import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext"; // <- здесь важно
import { Link } from "react-router-dom";
import Icon from "../../assets/images/icon2.svg";
import ButtonBurger from "../UI/ButtonBurger/ButtonBurger"; // <- импортi
import "../../App.css";
import "./Header.css";
import { NavLink } from "react-router-dom";
export default function Header() {
  const { dark, toggleTheme } = useContext(ThemeContext); // <- исправлено

  return (
    <header id="header" className="card-glow header-card">
      <img src={Icon} alt="ikonka" className="logo" />
      <nav style={{ display: "flex", gap: "1.5rem" }}>
        <NavLink to="/" end>
          Strona główna
        </NavLink>
        <NavLink to="/population">Wzrost ludności</NavLink>
        <NavLink to="/inventions">Wynalazki</NavLink>
        <NavLink to="/transport">Transport i komunikacja</NavLink>
        <NavLink to="/test">Zdać test</NavLink>
        <NavLink to="/game">Gra</NavLink>
      </nav>

      <button className="theme-toggle" onClick={toggleTheme}>
        {dark ? "Jasny motyw" : "Ciemny motyw"}
      </button>
      <ButtonBurger />
    </header>
  );
}
