import React from "react";
import "./Footer.css";
import ButtonTop from "../UI/Button_Top/BuutonTop";
export default function Footer() {
  return (
    <footer className="footer">
      <p>Autorzy strony: Illia Volobuiev i Kiryl Tolochko</p>
      <p>Rok: 2025</p>
      <ButtonTop />
      {/*<a href="#header" className="btn-accent" style={{ marginTop: "1rem" }}>
        Na górę
      </a>*/}
    </footer>
  );
}
