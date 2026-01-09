import { Link } from "react-router-dom";
import Icon from "../../assets/images/icon2.svg";
import ButtonBurger from "../UI/ButtonBurger/ButtonBurger"; // <- импортi
import "../../App.css";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Switch from "../UI/Button_Theme/Button_Theme";
export default function Header() {

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
      <Switch />
      <ButtonBurger />
    </header>
  );
}
