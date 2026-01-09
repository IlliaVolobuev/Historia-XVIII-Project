import React from "react";
import WordAppear from "../UI/WordAppear/WordAppear";
import NeonLine from "../UI/NeonLine/NeonLine";
import "../../index.css";
import "./Inventions.css";
import useScrollReveal from "../../hooks/useScrollReveal";

// Импортируем картинки через React
import inv1 from "../../assets/images/inventions1.png";
import inv2 from "../../assets/images/inventions2.jpg";
import inv3 from "../../assets/images/inventions3.jpg";
import inv4 from "../../assets/images/inv4.png";
import inv5 from "../../assets/images/inv5.png";
import inv6 from "../../assets/images/inv6.png";

export default function Inventions() {
  const reveal = useScrollReveal();

  return (
    <section
      id="inventions"
      className="section-gradient"
      style={{ padding: "4rem 2rem" }}
    >
      <div className="div-section">
        <h1 className="h1-section">
          <WordAppear
            style={{ color: "var(--poland-white)" }}
            text="Wynalazki i przemysł – techniczny motor rewolucji"
          />
        </h1>

        <img src={inv1} alt="hero" className="img-section" />
        <NeonLine />

        <p className="p-section" ref={reveal}>
          W 1769 roku James Watt opracował ulepszoną maszynę parową, która stała się jednym z najważniejszych wynalazków XVIII wieku. Dzięki niej energia pary mogła być wykorzystywana wydajnie i niezależnie od rzek, wiatrów czy innych naturalnych źródeł. Wcześniejsze maszyny parowe były mało efektywne i używano ich głównie do pompowania wody w kopalniach. Watt wprowadził m.in. osobny skraplacz, co znacznie zwiększyło moc i oszczędność paliwa.
          <br />
          <br />
          Maszyna parowa zmieniła oblicze przemysłu. Dzięki niej fabryki mogły powstawać niemal w każdym miejscu – nie były już zależne od lokalizacji przy rzece czy wodospadzie. Praca mogła trwać całą dobę, co znacznie zwiększało wydajność produkcji. W miastach i regionach przemysłowych powstawały pierwsze linie produkcyjne, a nowe zakłady tworzyły miejsca pracy dla setek osób.
          <br />
          <br />
          Wpływ wynalazku Watta był ogromny. Maszyna parowa stała się technologicznym motorem rewolucji przemysłowej, otwierając drogę do dalszych innowacji w energetyce, transporcie i produkcji. To dzięki niej Europa zaczęła się szybko uprzemysławiać, a kolejne wynalazki – od mechanicznych przędzarek po lokomotywy – mogły pojawić się w praktyce.
        </p>
        <NeonLine />

        <img src={inv2} alt="hero" className="img-section" />
        <NeonLine />

        <p className="p-section" ref={reveal}>
          Anglia w XVIII wieku stała się centrum początku rewolucji przemysłowej, a nie było to przypadkowe. Kraj ten łączył kilka kluczowych czynników: szybki wzrost liczby ludności, rozwinięty handel morski, stabilny system polityczny i dostęp do surowców naturalnych. Węgiel i żelazo były podstawą rozwoju przemysłu ciężkiego – bez nich maszyny i fabryki nie mogłyby funkcjonować. Już w połowie XVIII wieku Londyn, Birmingham i Manchester zaczynały odgrywać rolę głównych ośrodków przemysłowych.
          <br />
          <br />
          Szybki wzrost populacji był jednym z motorów rozwoju przemysłu. W Anglii liczba ludności wzrosła z około 5,5 miliona w 1700 roku do ponad 8 milionów w 1800 roku. To oznaczało większe zapotrzebowanie na żywność, odzież i produkty codziennego użytku – wszystko to napędzało produkcję przemysłową. Miasta stawały się coraz bardziej zatłoczone, ale dzięki masowej produkcji fabryki mogły dostarczać towary dla rosnącego społeczeństwa.
          <br />
          <br />
          Masowe wykorzystanie węgla i rozwój przemysłu ciężkiego miały też swoje konsekwencje. Z jednej strony umożliwiły powstawanie nowych zakładów i fabryk, rozwój energetyki i transportu. Z drugiej strony miasta przemysłowe borykały się z zanieczyszczeniem powietrza, gęstym zaludnieniem i trudnymi warunkami życia dla robotników. Pomimo tych problemów Anglia pozostawała na czele przemian technologicznych, stając się wzorem dla innych krajów europejskich.
        </p>
        <NeonLine />

        <img src={inv3} alt="hero" className="img-section" />
        <NeonLine />

        <p className="p-section" ref={reveal}>
          Jedną z pierwszych i najważniejszych gałęzi rewolucji przemysłowej był przemysł włókienniczy. Produkcja tkanin odpowiadała na rosnące potrzeby ludności w miastach i na wsi. Już w drugiej połowie XVIII wieku mechaniczne przędzarki i krosna zaczęły zastępować tradycyjną pracę ręczną, co pozwalało produkować więcej materiałów w krótszym czasie.
          <br />
          <br />
          W 1733 roku John Kay wynalazł lotną czółen, która znacznie przyspieszyła proces tkania. W kolejnych latach wynalazki takie jak przędzarka wodna Richarda Arkwrighta (1769) umożliwiały produkcję tkanin na dużą skalę. Fabryki włókiennicze zatrudniały setki pracowników, którzy pracowali przy maszynach przez wiele godzin dziennie. Dzięki temu tekstylia stały się tańsze i dostępne dla szerszych grup społecznych.
          <br />
          <br />
          Przemysł włókienniczy miał także ogromny wpływ na rozwój miast. Manchester i Leeds w Anglii stawały się centrami produkcji tkanin, a transport surowców i gotowych produktów wymagał budowy dróg i kanałów. Ten sektor był pierwszym przykładem masowej produkcji przemysłowej, pokazując, jak technologia może zmienić codzienne życie ludzi i całą gospodarkę.
        </p>
        <NeonLine />

        <img src={inv4} alt="hero" className="img-section" />
        <NeonLine />
        <p className="p-section" ref={reveal}>
          Przed pełną industrializacją istniały manufaktury, które stanowiły etap przejściowy między tradycyjnymi warsztatami rzemieślniczymi a fabrykami przemysłowymi. W manufakturach pracowało wielu robotników, z których każdy wykonywał wyspecjalizowaną czynność – jeden przędł nić, drugi tkał materiał, a jeszcze inny przygotowywał barwniki. Taki podział pracy zwiększał wydajność i pozwalał produkować więcej niż w średniowiecznych warsztatach.
          <br />
          <br />
          Choć praca w manufakturach nadal była ręczna, skala produkcji była znacznie większa. Dzięki temu możliwe było zaspokojenie potrzeb rosnącej populacji miast w XVIII wieku. Manufaktury wprowadzały też nowe zasady organizacyjne, np. harmonogramy pracy i podział na zmiany, które przygotowywały robotników i właścicieli fabryk do pracy w systemie przemysłowym.
          <br />
          <br />
          Manufaktury odegrały kluczową rolę w rozwoju technologii i społecznej organizacji pracy. To w nich testowano nowe maszyny i metody produkcji, które później zostały wdrożone w fabrykach parowych i mechanicznych. Dzięki nim industrializacja mogła zacząć się w praktyce, a ludzie stopniowo przyzwyczajali się do pracy w większych zespołach i w nowych warunkach.
        </p>
        <NeonLine />

        <img src={inv5} alt="hero" className="img-section" />
        <NeonLine />

        <p className="p-section" ref={reveal}>
          Postęp techniczny XVIII wieku miał ogromne znaczenie nie tylko w przemyśle, ale także w wojskowości i handlu. Masowa produkcja broni i amunicji stała się możliwa dzięki nowym maszynom i metodom wytwarzania. Armie mogły szybciej się uzbroić, a jednostki wojskowe były lepiej wyposażone niż kiedykolwiek wcześniej. Rozwój techniki zmienił także sposób prowadzenia wojen – zwiększyła się mobilność wojsk i skuteczność działań.
          <br />
          <br />
          Industrializacja wpłynęła również na handel międzynarodowy. Państwa uprzemysłowione potrzebowały surowców, takich jak bawełna, węgiel, metale, oraz rynków zbytu dla swoich produktów. To przyczyniło się do rozwoju handlu światowego, budowy portów, dróg i kanałów transportowych. Europejskie państwa, zwłaszcza Wielka Brytania, zaczęły dominować na morzach i rozwijać kolonie, co było bezpośrednim skutkiem postępu przemysłowego.
          <br />
          <br />
          Dzięki wynalazkom i nowym metodom produkcji zmieniły się także stosunki gospodarcze. Produkcja masowa pozwalała tworzyć tańsze towary, co zwiększało dostępność produktów dla zwykłych ludzi. Industrializacja wprowadziła również konieczność planowania logistyki i transportu na niespotykaną wcześniej skalę – zarówno w kraju, jak i na rynkach zagranicznych.
        </p>
        <NeonLine />

        <img src={inv6} alt="hero" className="img-section" />
        <NeonLine />
        <p className="p-section" ref={reveal}>
          Wynalazki XVIII wieku miały globalny wpływ, ponieważ ich skutki szybko rozprzestrzeniły się poza Europę. Maszyny parowe, mechaniczne przędzarki i nowe metody produkcji tkanin umożliwiły rozwój przemysłu w Ameryce Północnej, w koloniach oraz w Azji. Państwa, które wprowadzały innowacje techniczne, zyskiwały przewagę gospodarczą i militarną nad tymi, które pozostawały w tradycyjnym systemie rzemieślniczym.
          <br />
          <br />
          Industrializacja zmieniała także życie społeczne i ekonomiczne. Produkty masowe stały się tańsze i bardziej dostępne, co poprawiało poziom życia części społeczeństwa. Jednocześnie wymagała ogromnych zasobów naturalnych i pracy ludzkiej, co prowadziło do nowych wyzwań: zanieczyszczenia środowiska, urbanizacji i nierówności społecznych. W ten sposób wynalazki XVIII wieku rozpoczęły proces trwałych przemian, które kształtowały świat przez kolejne stulecia.
          <br />
          <br />
          To, co zaczęło się w Anglii i Europie Zachodniej, szybko stało się fenomenem globalnym. Innowacje techniczne nie tylko zmieniły przemysł i handel, ale też całe społeczeństwa i relacje między państwami. XVIII wiek można więc uznać za początek nowoczesnej epoki przemysłowej, której skutki odczuwamy do dziś.
        </p>
      </div>
    </section>
  );
}
