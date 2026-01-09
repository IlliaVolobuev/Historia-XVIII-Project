import React from "react";
import WordAppear from "../UI/WordAppear/WordAppear";
import NeonLine from "../UI/NeonLine/NeonLine";
import "../../index.css";
import "./Transport.css";
import useScrollReveal from "../../hooks/useScrollReveal";

// Импортируем картинки через React
import transport1Img from "../../assets/images/transport1.jpg";
import transport2Img from "../../assets/images/transport2.png";
import transport3Img from "../../assets/images/transport3.png";
import transport4Img from "../../assets/images/transport4.png";
import transport5Img from "../../assets/images/Transport5.png";
import transport6Img from "../../assets/images/transport6.png";

export default function Transport() {
  const reveal = useScrollReveal();
  return (
    <section
      id="transport"
      className="section-gradient"
      style={{ padding: "4rem 2rem" }}
    >
      <div className="div-section">
        <h1 className="h1-section">
          <WordAppear
            style={{ color: "var(--poland-white)" }}
            text="Transport, komunikacja i świat w ruchu"
          />
        </h1>

        <img src={transport1Img} alt="hero" className="img-section" />
        <NeonLine />

        <p className="p-section" ref={reveal}>
          W XVIII wieku rozwój transportu stał się kluczowy dla przemysłu i miast. Fabryki i zakłady produkcyjne wymagały stałych dostaw surowców, takich jak węgiel, żelazo czy bawełna, a także żywności dla rosnącej liczby mieszkańców. Bez sprawnego przewozu tych dóbr produkcja masowa byłaby niemożliwa, a rozwój miast i fabryk – znacznie spowolniony.
          <br />
          <br />
          Transport był też niezbędny dla ludności – mieszkańcy miast potrzebowali codziennych dostaw żywności i materiałów, a rosnące ośrodki miejskie wymagały sprawnej komunikacji między dzielnicami i regionami. To zmusiło państwa i przedsiębiorców do modernizacji infrastruktury – budowy nowych dróg, mostów i kanałów.
          <br />
          <br />
          Rozwój transportu w XVIII wieku można więc uznać za prawdziwy fundament rewolucji przemysłowej. Bez sprawnych dróg i kanałów fabryki nie mogłyby działać, a handel wewnętrzny i międzynarodowy byłby znacznie utrudniony.
        </p>
        <NeonLine />

        <img src={transport2Img} alt="hero" className="img-section" />
        <NeonLine />

        <p className="p-section" ref={reveal}>
          Kanały i ulepszone drogi odegrały w XVIII wieku kluczową rolę w rozwoju gospodarki przemysłowej. Transport wodny był tani i wydajny – pozwalał przewozić ciężkie surowce, takie jak węgiel czy żelazo, z kopalń do miast i fabryk oraz dalej do portów. W Anglii jednym z najbardziej znanych przykładów jest kanał Bridgewater, wybudowany w latach 1761–1765, który obniżył koszty transportu węgla o około 50% i przyczynił się do szybkiego rozwoju Manchesteru.
          <br />
          <br />
          Ulepszone drogi – brukowane, szutrowane i lepiej utrzymywane – skracały czas podróży między miastami i regionami. Dzięki nim handel wewnętrzny był tańszy i szybszy, a transport towarów stał się bardziej niezawodny. Przewożono nie tylko surowce, ale też gotowe produkty, co umożliwiało ich sprzedaż na dalszych rynkach.
          <br />
          <br />
          Kanały i drogi nie tylko przyspieszały przemieszczanie dóbr, ale także integrowały gospodarkę – regiony przemysłowe stały się ze sobą połączone, a powstawanie nowych tras transportowych sprzyjało wzrostowi miast i handlu.
        </p>
        <NeonLine />

        <img src={transport3Img} alt="hero" className="img-section" />
        <NeonLine />

        <p className="p-section" ref={reveal}>
          Rozwój transportu miał bezpośredni wpływ na wzrost miast i urbanizację w XVIII wieku. Ośrodki położone przy kanałach, rzekach i ważnych drogach komunikacyjnych rozwijały się najszybciej, przyciągając ludność z okolicznych wsi. Ludzie migrowali w poszukiwaniu pracy w fabrykach, w przemyśle włókienniczym, metalowym i spożywczym, a miasta oferowały większe możliwości zarobku niż tradycyjne rolnictwo.
          <br />
          <br />
          Manchester, Leeds czy Birmingham w Anglii były przykładami miast, które gwałtownie rosły dzięki strategicznemu położeniu przy kanałach i szlakach transportowych. W ciągu kilku dekad populacja niektórych miast podwajała się, a tempo życia i aktywność gospodarcza wzrosły w sposób niespotykany wcześniej w historii.
          <br />
          <br />
          Wzrost miast przy szlakach transportowych miał też konsekwencje społeczne. Powstawały nowe dzielnice mieszkaniowe, rozwijała się infrastruktura, a społeczności miejskie stawały się coraz bardziej zróżnicowane pod względem zawodowym i społecznym. Transport stał się więc nie tylko narzędziem przemysłu, ale także czynnikiem kształtującym całe społeczeństwa miejskie.
        </p>
        <NeonLine />

        <img src={transport4Img} alt="hero" className="img-section" />
        <NeonLine />

        <p className="p-section" ref={reveal}>
          W XVIII wieku równolegle z rozwojem transportu następował postęp w komunikacji. Szybszy przepływ informacji miał ogromne znaczenie dla handlu, administracji państwowej i wojska. Firmy mogły szybciej dowiadywać się o cenach surowców i zamówieniach, a władze państwowe sprawniej zarządzać podatkami, zasobami i wojskiem.
          <br />
          <br />
          Rozwój komunikacji obejmował ulepszanie systemu pocztowego, lepsze utrzymanie dróg i wprowadzanie usług kurierskich. Listy, które wcześniej szły tygodniami, mogły teraz docierać w kilka dni. W niektórych regionach Europy zaczęto tworzyć regularne połączenia między dużymi miastami i portami, co znacznie ułatwiało handel i kontakty między regionami.
          <br />
          <br />
          Szybsza wymiana informacji sprzyjała również rozwojowi przemysłu. Fabryki mogły reagować na zapotrzebowanie rynku, koordynować produkcję i transport, a przedsiębiorcy mogli wprowadzać innowacje szybciej niż wcześniej. Komunikacja stała się więc jednym z fundamentów dynamicznej gospodarki XVIII wieku.
        </p>

        <img src={transport5Img} alt="hero" className="img-section" />
        <NeonLine />

        <p className="p-section" ref={reveal}>
          Rozwój transportu w XVIII wieku miał ogromny wpływ na handel międzynarodowy. Dzięki kanałom, ulepszonym drogą i statkom handlowym towary mogły być przewożone szybciej i taniej na duże odległości. To pozwalało państwom uprzemysłowionym eksportować produkty masowe, takie jak tkaniny, broń czy maszyny, do innych krajów i kolonii.
          <br />
          <br />
          Porty morskie, takie jak Liverpool, Bristol czy Londyn, stały się kluczowymi centrami handlu światowego. Statki transportowały surowce potrzebne w fabrykach – bawełnę z Indii i Ameryki, metale i węgiel – oraz gotowe produkty do rynków zagranicznych. Rozwój floty handlowej i portów był więc bezpośrednio związany z industrializacją i wzrostem gospodarczym państw.
          <br />
          <br />
          Globalny handel przyspieszył również rozwój infrastruktury transportowej w kraju. Drogi, kanały i późniejsze koleje były projektowane tak, by ułatwiać przewóz towarów do portów i dalej do odbiorców na całym świecie. W ten sposób XVIII wiek położył fundamenty nowoczesnej gospodarki globalnej.
        </p>
        <NeonLine />

        <img src={transport6Img} alt="hero" className="img-section" />
        <NeonLine />

        <p className="p-section" ref={reveal}>
          Długofalowe skutki rozwoju transportu i komunikacji w XVIII wieku były ogromne. Trwała urbanizacja – miasta rosły szybko, a nowe dzielnice i ośrodki przemysłowe powstawały w miejscach strategicznych przy kanałach, drogach i portach. Industrializacja i rozwój transportu umożliwiły powstanie masowego społeczeństwa, w którym ludzie migrowali za pracą, a codzienne życie stawało się bardziej dynamiczne i zorganizowane.
          <br />
          <br />
          Rozwój infrastruktury transportowej przyczynił się także do rozwoju przemysłu. Fabryki mogły produkować większe ilości towarów, a przedsiębiorcy szybciej reagować na potrzeby rynku. Handel wewnętrzny i międzynarodowy stał się bardziej efektywny, co pozwoliło krajom uprzemysłowionym zdobywać przewagę gospodarczą nad innymi państwami.
          <br />
          <br />
          Dzięki postępowi transportu i komunikacji XVIII wiek zapoczątkował procesy, które kształtują współczesny świat. Masowe społeczeństwa, globalny handel, szybka wymiana informacji i nowoczesna infrastruktura – wszystko to ma swoje początki w innowacjach transportowych tamtej epoki.
        </p>
      </div>
    </section>
  );
}
