import React from "react";
import WordAppear from "../UI/WordAppear/WordAppear";
import NeonLine from "../UI/NeonLine/NeonLine";
import "../../index.css";
import "./Hero.css";

// Импортируем картинку через React (Vite обработает её и положит в dist)
import heroImg from "../../assets/images/hero.png";

export default function Hero() {
  return (
    <section className="section-gradient1" id="hero">
      <div className="div-section">
        <h1 className="h1-section">
          <WordAppear
            style={{ color: "var(--poland-white)" }}
            text="XVIII wiek: kiedy ludzkość powiedziała"
          />
          <WordAppear
            style={{ color: "var(--poland-red)" }}
            text="DOŚĆ koniom! i włączyła tryb TURBO"
          />
        </h1>

        {/* Картинка теперь через импорт */}
        <img src={heroImg} alt="hero" className="img-section" />

        <NeonLine />

        <WordAppear
          className="p-section1"
          text={`     XVIII stulecie przyniosło Europie dynamiczny wzrost ludności,
          rewolucję agrarną oraz narodziny nowych technologii, które stały się
          fundamentem późniejszej rewolucji przemysłowej. Na polach pojawiły się
          nowe maszyny rolnicze, w miastach powstawały manufaktury, a wynalazcy
          — tacy jak James Watt — udoskonalali silnik parowy, który miał
          odmienić świat.

          To także epoka Oświecenia: rozwój nauki, popularyzacja Encyklopedii,
          reformy społeczne oraz wzmocnienie idei edukacji i racjonalizmu. W
          Rzeczypospolitej działała Komisja Edukacji Narodowej, pierwsze na
          świecie ministerstwo oświaty, a myśliciele tacy jak Hugo Kołłątaj i
          Stanisław Staszic pracowali nad modernizacją kraju.`}
        />

        <NeonLine />

        <p className="p-hero-footer">
          Ta strona zabierze Cię w podróż po najważniejszych przemianach XVIII
          wieku — od demografii, przez technologię i społeczne reformy, aż po
          wydarzenia, które zbudowały fundamenty nowoczesnej Europy.
        </p>
      </div>
    </section>
  );
}
