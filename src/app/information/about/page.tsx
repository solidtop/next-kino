import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <div className="mt-10 mx-auto w-4/5 md:w-3/5">
        <section className="">
          <h2 className="font-bold text-xl mb-1">SPEGELN BIO, BAR & BISTRO</h2>
          <p>
            Spegeln är en biograf med egen bistro och bar på Lilltorget i
            centrala Sundsvall. Det är den gamla biografen Alcazar, byggd 1964
            och senare omdöpt till Camera, som sedan 1998 heter Spegeln. I
            november 2014 öppnade Spegeln en bar och bistro och blev i och med
            det Sundsvalls första biobar.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-bold text-xl mb-1">
            VI SÖKER KOCK FÖR EXTRA JOBB
          </h2>
          <p>
            Vi söker dig som älskar både mat och film - och som har möjlighet
            att jobba kvällar utefter behov under våren och sen betydligt mer
            under sommaren! Under sommaren gäller dagtid såväl som kvällstid.
            Det viktigaste är att du är energirik och arbetsvillig samt att du
            har några års erfarenhet från att jobba i restaurangkök.
          </p>
          <br />
          <p>
            Spegeln är en varierande arbetsplats där god mat och dryck serveras
            på ett annorlunda sätt: i kombination med bra film på bio! Är du
            intresserad av att söka eller känner du kanske någon som skulle
            passa in i vårt team? Mejla ditt CV och personliga brev till
            johndoe@sundsvallspegeln.se.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-bold text-xl mb-1">
            SPEGELNS ÖGONSTEN - ALCAZAR
          </h2>
          <p>
            Våran biosalong Alcazar betraktar vi som vår ögonsten. Med 70
            platser, en bemannad bar och bord bredvid stolarna. Den är utrustad
            med 7-1-ljud och 4K bild. Namnet är historiskt och betyder mycket
            för biografen.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-bold text-xl mb-1">
            EN DEL AV FOLKETS HUS OCH PARKER
          </h2>
          <p>
            Spegeln drivs av folkrörelsen Folkets Hus och Parker som omfattar
            fler än 500 demokratiska mötesplatser i hela Sverige. I
            riksorganisationen samlas Folkets Hus, folkparker, biografer och
            liknande lokala arrangörer, som tillsammans lockar miljontals
            besökare varje år.
          </p>
          <br />
          <p>
            Folkets Hus och Parkers värdegrund bygger på de grundläggande
            principerna om jämlikhet, jämställdhet och allas lika värde. Folket
            Hus och Parker är en partipolitiskt och religiöst obunden
            organisation. Tack vare delaktighet och ideellt engagemang skapar vi
            tillsammans möjligheter för människor i hela landet att ta del av
            kultur, nöje och möten.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}
