export default function Hero() {
  return (
    <section className="section-gradient" id="hero">
      <h1>Как технический прогресс XVIII века изменил мир</h1>
      <p style={{ maxWidth: "600px", marginTop: "1rem" }}>
        В XVIII веке человечество вступило в эпоху быстрых изменений — от роста
        населения до появления революционных изобретений.
      </p>

      <a href="#population">
        <button className="btn" style={{ marginTop: "1.5rem" }}>
          Узнать больше
        </button>
      </a>
    </section>
  );
}

