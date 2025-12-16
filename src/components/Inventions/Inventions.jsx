import React from "react";
import WordAppear from "../UI/WordAppear/WordAppear";
import NeonLine from "../UI/NeonLine/NeonLine";
import "../../index.css";
import "./Inventions.css";

// Импортируем картинки через React
import wattImg from "../../assets/images/Watt.png";
import englandImg from "../../assets/images/England-Rev.jpg";
import fabricMachineImg from "../../assets/images/Fabric-machine.jpg";
import glassImg from "../../assets/images/glass.jpg";
import warImg from "../../assets/images/war.png";
import islandImg from "../../assets/images/island.jpg";

export default function Inventions() {
  return (
    <section
      id="inventions"
      className="section-gradient"
      style={{ padding: "4rem 2rem" }}
    >
      <div style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
        <h1 className="h1-hero">
          <WordAppear
            style={{ color: "var(--poland-white)" }}
            text="Wynalazki i przemysł – techniczny motor rewolucji"
          />
        </h1>

        <img src={wattImg} alt="hero" className="img-hero" />
        <NeonLine />

        <p className="p-hero">
          XVIII wiek był epoką przełomowych wynalazków, które zmieniły sposób
          produkcji i funkcjonowania gospodarki. Najważniejszym z nich była
          maszyna parowa Jamesa Watta, uważana za kluczowy czynnik rewolucji
          przemysłowej. Umożliwiła ona wykorzystanie energii pary w sposób
          wydajny i niezależny od warunków naturalnych, takich jak wiatr czy
          rzeki. Dzięki temu fabryki mogły powstawać niemal wszędzie i pracować
          bez przerwy.
        </p>
        <NeonLine />

        <img src={englandImg} alt="hero" className="img-hero" />
        <NeonLine />

        <p className="p-hero">
          To właśnie Anglia stała się centrum początku rewolucji przemysłowej,
          ponieważ łączyła kilka istotnych czynników: szybki wzrost ludności,
          rozwinięty handel, stabilny system polityczny oraz dostęp do surowców,
          zwłaszcza węgla. Masowe wykorzystanie węgla miało ogromne konsekwencje
          – umożliwiło rozwój przemysłu ciężkiego, hutnictwa i energetyki, ale
          jednocześnie doprowadziło do zanieczyszczenia środowiska i trudnych
          warunków życia w miastach przemysłowych.
        </p>
        <NeonLine />

        <img src={fabricMachineImg} alt="hero" className="img-hero" />
        <NeonLine />

        <p className="p-hero">
          Jedną z pierwszych i najważniejszych gałęzi industrializacji był
          przemysł włókienniczy. Produkcja tkanin odpowiadała na podstawowe
          potrzeby szybko rosnącej ludności. Mechaniczne krosna i przędzarki
          pozwalały produkować tanie tekstylia na masową skalę, co uczyniło ten
          sektor liderem przemian przemysłowych.
        </p>
        <NeonLine />

        <img src={glassImg} alt="hero" className="img-hero" />
        <NeonLine />

        <p className="p-hero">
          Wcześniejszą formą produkcji były manufaktury, które różniły się od
          średniowiecznych warsztatów rzemieślniczych skalą i organizacją pracy.
          W manufakturach pracowało wielu robotników wykonujących
          wyspecjalizowane czynności, co zwiększało wydajność, choć nadal
          opierało się głównie na pracy ręcznej. Był to etap przejściowy między
          rzemiosłem a systemem fabrycznym.
        </p>
        <NeonLine />

        <img src={warImg} alt="hero" className="img-hero" />
        <NeonLine />

        <p className="p-hero">
          Postęp techniczny miał również znaczenie dla wojskowości. Masowa
          produkcja broni, lepsza logistyka i nowe technologie zwiększyły
          możliwości armii i zmieniły sposób prowadzenia wojen. Industrializacja
          wpływała też na handel międzynarodowy – państwa uprzemysłowione
          potrzebowały surowców i rynków zbytu, co doprowadziło do rozwoju
          handlu światowego.
        </p>
        <NeonLine />

        <img src={islandImg} alt="hero" className="img-hero" />
        <NeonLine />

        <p className="p-hero">
          Techniczne innowacje XVIII wieku uznaje się za globalny przełom,
          ponieważ ich skutki szybko rozprzestrzeniły się poza Europę.
          Zapoczątkowały one procesy, które trwale zmieniły gospodarkę,
          społeczeństwo i relacje między państwami.
        </p>
      </div>
    </section>
  );
}
