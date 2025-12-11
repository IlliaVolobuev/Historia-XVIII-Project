
export default function Hero() {
  return (
    <section className="section-gradient" id="hero">
      <div style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "800",
            marginBottom: "1rem",
            color: "var(--dark-blue)", // контраст с градиентом
            textShadow: "0 2px 6px rgba(0,0,0,0.15)",
          }}
        >
          XVIII wiek: kiedy ludzkość powiedziała
          <br />
          <span style={{ color: "var(--color-bg)" }}>„DOŚĆ koniom!”</span>  
          i włączyła tryb TURBO
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.7",
            background: "rgba(255,255,255,0.35)",
            padding: "1.4rem 1.8rem",
            borderRadius: "14px",
            boxShadow: "var(--shadow-md)",
            fontWeight: 500,
            color: "var(--dark-blue)",
          }}
        >
          XVIII stulecie przyniosło Europie dynamiczny wzrost ludności,
          rewolucję agrarną oraz narodziny nowych technologii, które stały się
          fundamentem późniejszej rewolucji przemysłowej. Na polach pojawiły się
          nowe maszyny rolnicze, w miastach powstawały manufaktury, a wynalazcy —
          tacy jak James Watt — udoskonalali silnik parowy, który miał odmienić
          świat.
          <br />
          <br />
          To także epoka Oświecenia: rozwój nauki, popularyzacja Encyklopedii,
          reformy społeczne oraz wzmocnienie idei edukacji i racjonalizmu. W
          Rzeczypospolitej działała Komisja Edukacji Narodowej, pierwsze na
          świecie ministerstwo oświaty, a myśliciele tacy jak Hugo Kołłątaj i
          Stanisław Staszic pracowali nad modernizacją kraju.
        </p>

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
