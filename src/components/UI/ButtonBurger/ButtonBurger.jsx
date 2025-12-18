import { useState } from "react";
import { Link } from "react-router-dom";
import "./ButtonBurger.css";

export default function ButtonBurger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={`burger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Strona główna</Link>
        <Link to="/population" onClick={() => setOpen(false)}>Wzrost ludności</Link>
        <Link to="/inventions" onClick={() => setOpen(false)}>Wynalazki</Link>
        <Link to="/transport" onClick={() => setOpen(false)}>Transport i komunikacja</Link>
        <Link to="/test" onClick={() => setOpen(false)}>Zdać test</Link>
        <Link to="/game" onClick={() => setOpen(false)}>Gra</Link>
      </div>
    </>
  );
}
