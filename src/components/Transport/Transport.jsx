import WordAppear from "../UI/WordAppear/WordAppear";
import "../../index.css";
import "./Transport.css";
import NeonLine from "../UI/NeonLine/NeonLine";

export default function Transport() {
  return (
    <section
      id="transport"
      className="section-gradient"
      style={{ padding: "4rem 2rem" }}
    >
      <div style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
        <h1 className="h1-hero">
          <WordAppear
            style={{ color: "var(--poland-white)" }}
            text="Transport, komunikacja i świat w ruchu"
          />
        </h1>
        <img
          src="/src/assets/images/transport1.jpg"
          alt="hero"
          className="img-hero"
        />
        <NeonLine />
        <p className="p-hero">
          Rozwój transportu był niezbędnym warunkiem industrializacji XVIII
          wieku. Bez sprawnego przemieszczania surowców, towarów i ludzi
          niemożliwa byłaby produkcja na dużą skalę. Rosnące miasta i fabryki
          wymagały stałych dostaw żywności, węgla i materiałów, co wymusiło
          modernizację infrastruktury.
        </p>
        <NeonLine />
        <img
          src="/src/assets/images/Transport2.png"
          alt="hero"
          className="img-hero"
        />
        <NeonLine />
        <p className="p-hero">
          Szczególne znaczenie miały kanały i ulepszone drogi. Transport wodny
          był tani i wydajny, dlatego kanały stały się kluczowym elementem
          gospodarki przemysłowej. Łączyły regiony produkcyjne z rynkami zbytu i
          portami morskimi. Ulepszone drogi skracały czas podróży, zmniejszały
          koszty handlu i integrowały gospodarkę wewnętrzną państw.
        </p>
        <NeonLine />
        <img
          src="/src/assets/images/Transport3.png"
          alt="hero"
          className="img-hero"
        />
        <NeonLine />
        <p className="p-hero">
          Rozwój transportu przyczynił się do szybkiego wzrostu miast. Ośrodki
          położone przy kanałach i ważnych szlakach komunikacyjnych rozwijały
          się najszybciej, przyciągając ludność i kapitał. Migracje stały się
          masowym zjawiskiem, a tempo życia wyraźnie wzrosło.
        </p>
        <NeonLine />
        <img
          src="/src/assets/images/Transport4.png"
          alt="hero"
          className="img-hero"
        />
        <NeonLine />
        <p className="p-hero">
          Równolegle następował rozwój komunikacji. Szybszy przepływ informacji
          miał ogromne znaczenie dla handlu, administracji i wojska. Państwa
          mogły sprawniej zarządzać gospodarką i armią, co wzmacniało ich
          pozycję międzynarodową.
        </p>
        <img
          src="/src/assets/images/Transport5.png"
          alt="hero"
          className="img-hero"
        />
        <NeonLine />
        <p className="p-hero">
          Industrializacja i rozwój transportu wpłynęły także na handel
          międzynarodowy. Towary mogły być przewożone szybciej i taniej na duże
          odległości, co połączyło rynki w skali światowej. Był to początek
          nowoczesnej gospodarki globalnej.
        </p>
        <NeonLine />
        <img
          src="/src/assets/images/Transport6.png"
          alt="hero"
          className="img-hero"
        />
        <NeonLine />
        <p className="p-hero">
          Długofalowe skutki tych procesów były ogromne: trwała urbanizacja,
          rozwój przemysłu, masowe społeczeństwo i ciągły postęp techniczny.
          XVIII wiek zapoczątkował zmiany, które do dziś kształtują
          współczesny świat.
        </p>
      </div>
    </section>
  );
}
