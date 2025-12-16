import React from "react";
import WordAppear from "../UI/WordAppear/WordAppear";
import NeonLine from "../UI/NeonLine/NeonLine";
import "../../index.css";
import "./Population.css";

// Импортируем картинки через React
import potatoImg from "../../assets/images/potato.png";
import doctorRowImg from "../../assets/images/Doctor-row.png";
import city1Img from "../../assets/images/city1.png";
import city2Img from "../../assets/images/city2.png";

export default function Population() {
  return (
    <section
      id="population"
      className="section-gradient"
      style={{ padding: "4rem 2rem" }}
    >
      <div style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
        <h1 className="h1-hero">
          <WordAppear
            style={{ color: "var(--poland-white)" }}
            text="Wzrost ludności i przemiany społeczne XVIII wieku"
          />
        </h1>

        {/* Картинки через импорт */}
        <img src={potatoImg} alt="hero" className="img-hero" />
        <NeonLine />

        <p className="p-hero">
          XVIII wiek przyniósł gwałtowny wzrost liczby ludności, który stał się
          jednym z najważniejszych czynników rewolucji przemysłowej. Poprawa
          wyżywienia, zwłaszcza rozpowszechnienie ziemniaka, a także rozwój
          medycyny i pierwszych szczepień spowodowały spadek śmiertelności.
          Ludzie żyli dłużej, rodziło się więcej dzieci, a społeczeństwa szybko
          się rozrastały.
        </p>
        <NeonLine />

        <img src={doctorRowImg} alt="hero" className="img-hero" />
        <NeonLine />

        <p className="p-hero">
          Postęp techniczny miał bezpośredni wpływ na procesy demograficzne.
          Nowe narzędzia rolnicze i lepsza organizacja produkcji zwiększyły
          ilość żywności, co zmniejszyło ryzyko klęsk głodu. Jednocześnie rozwój
          sanitariatu, kanalizacji i podstaw higieny publicznej ograniczył
          rozprzestrzenianie się chorób. Medycyna i technika wzajemnie się
          wspierały – bez postępu technicznego nie byłoby możliwe budowanie
          szpitali, wodociągów ani skuteczna walka z epidemiami.
        </p>
        <NeonLine />

        <img src={city1Img} alt="hero" className="img-hero" />
        <NeonLine />

        <p className="p-hero">
          Szybki przyrost ludności doprowadził do głębokich zmian społecznych.
          Na wsi pojawiła się nadwyżka ludności, której rolnictwo nie było w
          stanie utrzymać. Coraz więcej ludzi przenosiło się do miast, gdzie
          znajdowali pracę w manufakturach i fabrykach. Dlatego rozwój miast
          stał się jedną z najbardziej charakterystycznych cech XVIII wieku.
          Miasta rosły szybko, ale często chaotycznie, co prowadziło do
          przeludnienia i trudnych warunków życia.
          <br />
          <br />
          Rewolucja przemysłowa zmieniła strukturę społeczeństwa. Obok
          arystokracji i chłopstwa pojawiły się nowe grupy: burżuazja
          przemysłowa oraz liczna klasa robotnicza. System fabryczny całkowicie
          odmienił warunki pracy – robotnicy pracowali długo, przy maszynach,
          często w niebezpiecznych warunkach. Choć przemysł dawał zatrudnienie,
          niósł też wyzysk i brak zabezpieczeń socjalnych.
        </p>
        <NeonLine />

        <img src={city2Img} alt="hero" className="img-hero" />
        <NeonLine />

        <p className="p-hero">
          Postępowi technicznemu towarzyszyły liczne sprzeczności. Z jednej
          strony poprawiał on poziom życia i umożliwiał rozwój gospodarczy, z
          drugiej prowadził do biedy, nierówności i degradacji środowiska.
          Mechanizacja wywoływała opór części robotników, którzy obawiali się
          utraty pracy w warunkach nadmiaru siły roboczej.
          <br />
          <br />
          Rosnące i coraz bardziej złożone społeczeństwo potrzebowało
          wykształconych urzędników, inżynierów i lekarzy. Dlatego w XVIII wieku
          wzrosła potrzeba edukacji, co było zgodne z ideami Oświecenia,
          podkreślającymi znaczenie wiedzy, rozumu i nauki.
        </p>
      </div>
    </section>
  );
}
