import React from "react";
import WordAppear from "../UI/WordAppear/WordAppear";
import NeonLine from "../UI/NeonLine/NeonLine";
import "../../index.css";
import "./Population.css";
import useScrollReveal from "../../hooks/useScrollReveal";

// Импортируем картинки через React
import pop1 from "../../assets/images/population1.png";
import pop2 from "../../assets/images/population2.png";
import pop3 from "../../assets/images/population3.png";
import pop4 from "../../assets/images/population4.png";
import pop5 from "../../assets/images/population5.png";
import pop6 from "../../assets/images/population6.png";

export default function Population() {
  const reveal = useScrollReveal();
  return (
    <section
      id="population"
      className="section-gradient"
      style={{ padding: "4rem 2rem" }}
    >
      <div className="div-section">
        <h1 className="h1-section">
          <WordAppear
            style={{ color: "var(--poland-white)" }}
            text="Wzrost ludności i przemiany społeczne XVIII wieku"
          />
        </h1>

        {/* Картинки через импорт */}
        <img src={pop1} alt="hero" className="img-section" />
        <NeonLine />

        <p className="p-section" ref={reveal}>
          XVIII wiek przyniósł ogromne zmiany w rolnictwie, które miały bezpośredni wpływ na szybki wzrost liczby ludności. W wielu krajach Europy, szczególnie w Anglii, zaczęto wprowadzać nowe metody uprawy ziemi. Jedną z najważniejszych zmian był płodozmian, czyli system, w którym na tym samym polu uprawiano różne rośliny w kolejnych latach. Dzięki temu ziemia nie wyjaławiała się, a plony były większe i bardziej regularne.
          <br />
          <br />
          Rolnicy zaczęli również korzystać z lepszych narzędzi. W XVIII wieku upowszechniły się żelazne pługi, siewniki oraz maszyny ułatwiające zbiór plonów. W 1701 roku Jethro Tull skonstruował mechaniczny siewnik, który pozwalał siać zboże szybciej i dokładniej niż ręcznie. Takie wynalazki sprawiały, że rolnictwo stawało się coraz bardziej wydajne i potrzebowało mniej pracy ludzkiej.
          <br />
          <br />
          Szczególnie ważną rolę odegrała uprawa ziemniaka. Roślina ta była znana w Europie już wcześniej, ale dopiero w XVIII wieku zaczęto uprawiać ją na masową skalę. Ziemniaki dawały duże plony, były tanie i odporne na trudne warunki pogodowe. Stały się podstawą wyżywienia wielu biedniejszych rodzin, zwłaszcza w Europie Środkowej i Wschodniej. Dzięki nim znacznie rzadziej dochodziło do klęsk głodu.
          <br />
          <br />
          Zwiększona produkcja żywności sprawiła, że społeczeństwa mogły wyżywić znacznie większą liczbę ludzi niż wcześniej. Ludzie byli lepiej odżywieni, silniejsi i bardziej odporni na choroby. To właśnie rozwój rolnictwa stał się jednym z najważniejszych fundamentów wzrostu liczby ludności w XVIII wieku i stworzył warunki do dalszych przemian gospodarczych i społecznych.
        </p>
        <NeonLine />

        <img src={pop2} alt="hero" className="img-section" />
        <NeonLine />
        <p className="p-section" ref={reveal}>
          W XVIII wieku zmiany w rolnictwie wyraźnie wpłynęły na codzienne życie zwykłych ludzi, zwłaszcza na ich sposób odżywiania. Choć dieta nadal była skromna, stała się bardziej stabilna niż w poprzednich stuleciach. Podstawą pożywienia większości społeczeństwa były produkty roślinne, takie jak chleb, kasze, groch oraz ziemniaki. Mięso pojawiało się na stole rzadko, najczęściej tylko w święta, szczególnie wśród biedniejszych warstw.
          <br />
          <br />
          Ważną rolę odgrywał chleb, który w XVIII wieku był głównym źródłem kalorii. W miastach i na wsiach jedzono go codziennie, często w połączeniu z zupami lub warzywami. Dzięki większym plonom zboża ceny chleba były bardziej stabilne, co zmniejszało ryzyko głodu. Nadal jednak zdarzały się lata nieurodzaju, które prowadziły do wzrostu cen i pogorszenia warunków życia.
          <br />
          <br />
          Codzienne życie ludzi było silnie uzależnione od pór roku i pracy fizycznej. Na wsi większość dnia spędzano w polu, a w miastach w warsztatach rzemieślniczych i manufakturach. Praca była ciężka i czasochłonna, dlatego posiłki musiały być sycące i tanie. Ziemniaki, kasze i chleb idealnie spełniały tę funkcję, dostarczając energii potrzebnej do pracy.
          <br />
          <br />
          Różnice w diecie były wyraźne między poszczególnymi warstwami społecznymi. Arystokracja i bogata burżuazja spożywały więcej mięsa, ryb, cukru i egzotycznych produktów, takich jak kawa czy herbata, które stały się modne w XVIII wieku. Zwykli ludzie mieli do nich ograniczony dostęp, jednak nawet uboższe warstwy społeczne korzystały z ogólnej poprawy zaopatrzenia w żywność. Dzięki temu społeczeństwo stopniowo stawało się zdrowsze, co miało duże znaczenie dla dalszego wzrostu liczby ludności.
        </p>
        <NeonLine />

        <img src={pop3} alt="hero" className="img-section" />
        <NeonLine />

        <p className="p-section" ref={reveal}>
          W XVIII wieku medycyna zaczęła wreszcie przynosić konkretne efekty w walce z chorobami. Jednym z największych przełomów było odkrycie pierwszej skutecznej szczepionki. W 1796 roku angielski lekarz Edward Jenner zauważył, że kobiety pracujące przy krowach, które chorowały na ospę krowią, nie zapadają na ospę prawdziwą. Wykorzystał to spostrzeżenie i po raz pierwszy zaszczepił chłopca ośmioletniego syna sąsiadki, podając mu materiał z krosty chorej na ospę krowią. Chłopiec nie zachorował, co okazało się przełomem w historii medycyny.
          <br />
          <br />
          Szczepienia przeciwko ospie prawdziwej stopniowo rozpowszechniły się w Europie i zmniejszyły liczbę zachorowań, ratując życie milionom ludzi. Był to pierwszy przykład metody, która pozwalała zapobiegać chorobie, zamiast tylko ją leczyć. Odkrycie Jennera wywarło ogromny wpływ na wzrost liczby ludności w XVIII wieku – mniej dzieci umierało, a społeczeństwa stawały się coraz liczniejsze.
          <br />
          <br />
          Poza szczepieniami rozwijała się także ogólna wiedza o higienie i zdrowiu. Lekarze zaczęli zauważać związek między czystością a chorobami, a w miastach powstawały pierwsze wodociągi i kanalizacja. Choć warunki życia wciąż były trudne, epidemie przestały dziesiątkować ludność tak często jak wcześniej.
        </p>
        <NeonLine />

        <img src={pop4} alt="hero" className="img-section" />
        <NeonLine />

        <p className="p-section" ref={reveal}>
          W XVIII wieku coraz więcej uwagi zaczęto poświęcać higienie i zdrowiu publicznemu, zwłaszcza w szybko rosnących miastach. Londyn i Paryż były w tym okresie jednymi z największych miast Europy, ale ich rozwój był chaotyczny. Ulice były wąskie i brudne, a kanalizacja prawie nie istniała. Brak czystej wody i nieusuwane nieczystości sprzyjały rozprzestrzenianiu się epidemii, takich jak cholera czy tyfus.
          <br />
          <br />
          Stopniowo wprowadzano zmiany, które poprawiały warunki życia mieszkańców. W Londynie powstały pierwsze publiczne wodociągi, a w Paryżu zaczęto regulować rzekę Sekwanę i oczyszczać ulice. Wprowadzano też proste zasady higieny, np. mycie rąk i utrzymywanie porządku w domach i przychodniach. Choć nie rozumiano jeszcze dokładnie przyczyn chorób, praktyki te pozwalały ograniczyć epidemie i zmniejszać śmiertelność w miastach.
          <br />
          <br />
          Rozwój higieny miał też wpływ na demografię. Ludzie rzadziej chorowali i przeżywali dzieciństwo w większej liczbie. Wzrost liczby mieszkańców miast był więc możliwy nie tylko dzięki lepszej diecie, ale także dzięki poprawie warunków sanitarnych. Powstawanie wodociągów i kanalizacji stało się fundamentem nowoczesnego życia miejskiego i pokazało, że postęp techniczny i naukowy może bezpośrednio ratować życie ludzi.
        </p>
                <NeonLine />

        <img src={pop5} alt="hero" className="img-section" />
        <NeonLine />

        <p className="p-section" ref={reveal}>
          Szybki wzrost liczby ludności w XVIII wieku powodował, że na wsiach coraz trudniej było znaleźć pracę i wyżywić rodziny. W rezultacie wielu ludzi zaczęło przeprowadzać się do miast, gdzie powstawały manufaktury i pierwsze fabryki. W Anglii szczególnie dynamicznie rozwijały się miasta przemysłowe, takie jak Manchester, Birmingham i Liverpool. W ciągu kilkudziesięciu lat niektóre z nich podwajały swoją liczbę mieszkańców.
          <br />
          <br />
          Miasta przyciągały ludzi przede wszystkim możliwością pracy. Robotnicy znajdowali zatrudnienie w przemyśle włókienniczym, metalowym i produkcji narzędzi. Jednak życie w szybko rosnących miastach nie było łatwe. Panowało przeludnienie, a mieszkania były ciasne i często wilgotne. Brak kanalizacji i czystej wody sprzyjał chorobom. Mimo trudnych warunków ludzie wciąż przybywali do miast, ponieważ szansa na stały zarobek była często jedyną możliwością utrzymania rodziny.
          <br />
          <br />
          Rozwój miast zmieniał też krajobraz i codzienne życie mieszkańców. Powstawały nowe ulice, place, magazyny i fabryki. Z jednej strony wzrastało bogactwo i dostępność produktów, z drugiej – ciężka praca i brak zabezpieczeń społecznych sprawiały, że życie robotników było niepewne. Migracje i urbanizacja stały się jednym z najważniejszych procesów XVIII wieku, które kształtowały społeczeństwo nowożytne i przygotowywały grunt pod rewolucję przemysłową.
        </p>
                <NeonLine />

        <img src={pop6} alt="hero" className="img-section" />
        <NeonLine />

        <p className="p-section" ref={reveal}>
          Wraz z szybkim wzrostem liczby ludności i rozwojem miast zmieniała się także struktura społeczeństwa. Obok tradycyjnych warstw, takich jak arystokracja i chłopi, pojawiły się nowe grupy społeczne. Szczególne znaczenie zyskała burżuazja, czyli właściciele fabryk, manufaktur i kapitału. To oni inwestowali w nowe technologie, rozwijali przemysł i zyskiwali coraz większą władzę ekonomiczną.
          <br />
          <br />
          Jednocześnie powstała liczna klasa robotnicza, która pracowała przy maszynach i w fabrykach. Warunki pracy były bardzo trudne: długie godziny, niskie płace, brak zabezpieczeń i częste wypadki. Mechanizacja budziła opór części robotników, którzy bali się utraty pracy. W niektórych regionach dochodziło do niszczenia maszyn – był to wyraz strachu przed bezrobociem i pauperyzacją.
          <br />
          <br />
          Rozwój społeczeństwa wymagał również coraz większej liczby wykształconych ludzi. W XVIII wieku powstawały nowe szkoły, akademie i towarzystwa naukowe. Rosła liczba lekarzy, inżynierów, urzędników i nauczycieli, których potrzebowały szybko rosnące miasta i rozwijający się przemysł. Idee Oświecenia podkreślały znaczenie wiedzy, rozumu i nauki jako podstaw postępu i lepszego życia społeczeństwa.
          <br />
          <br />
          Postęp techniczny i wzrost liczby ludności przynosiły więc zarówno korzyści, jak i wyzwania. Z jednej strony umożliwiały rozwój gospodarczy, poprawę wyżywienia i lepsze zdrowie ludzi. Z drugiej strony prowadziły do nierówności społecznych, trudnych warunków pracy i presji na zasoby naturalne. Mimo tych sprzeczności XVIII wiek stworzył fundamenty nowoczesnego społeczeństwa i przygotował grunt pod rewolucję przemysłową XIX wieku.
        </p>
      </div>
    </section>
  );
}
