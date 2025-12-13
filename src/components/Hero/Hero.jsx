import WordAppear from "../UI/WordAppear/WordAppear";
import "../../index.css";
import "./Hero.css";
import NeonLine from "../UI/NeonLine/NeonLine";
export default function Hero() {
  return (
    <section className="section-gradient" id="hero">
      <div style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
        <h1 className="h1-hero">
          <WordAppear
            style={{ color: "var(--poland-white)" }}
            text="XVIII wiek: kiedy ludzkość powiedziała"
          />
          <br />
          <WordAppear
            style={{ color: "var(--poland-red)" }}
            text="DOŚĆ koniom! i włączyła tryb TURBO"
          />
        </h1>
        <img
          src="/src/assets/images/hero.png"
          alt="hero"
          className="img-hero"
        />
        <NeonLine />
        <p className="p-hero">
          XVIII stulecie przyniosło Europie dynamiczny wzrost ludności,
          rewolucję agrarną oraz narodziny nowych technologii, które stały się
          fundamentem późniejszej rewolucji przemysłowej. Na polach pojawiły się
          nowe maszyny rolnicze, w miastach powstawały manufaktury, a wynalazcy
          — tacy jak James Watt — udoskonalali silnik parowy, który miał
          odmienić świat.
          <br />
          <br />
          To także epoka Oświecenia: rozwój nauki, popularyzacja Encyklopedii,
          reformy społeczne oraz wzmocnienie idei edukacji i racjonalizmu. W
          Rzeczypospolitej działała Komisja Edukacji Narodowej, pierwsze na
          świecie ministerstwo oświaty, a myśliciele tacy jak Hugo Kołłątaj i
          Stanisław Staszic pracowali nad modernizacją kraju.
        </p>
        <NeonLine />
        <p
          style={{
            marginTop: "1.5rem",
            fontSize: "1.15rem",
            maxWidth: "780px",
            marginLeft: "auto",
            marginRight: "auto",
            color: "var(--dark-blue)",
            opacity: 0.9,
            textShadow: "0 1px 3px rgba(255,255,255,0.25)",
          }}
        >
          Ta strona zabierze Cię w podróż po najważniejszych przemianach XVIII
          wieku — od demografii, przez technologię i społeczne reformy, aż po
          wydarzenia, które zbudowały fundamenty nowoczesnej Europy.
        </p>
      </div>
    </section>
  );
}
