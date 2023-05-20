import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Tickets() {
  return (
    <>
      <Header />
      <div className="mt-10 mx-auto w-4/5 md:w-3/5">
        <section className="mt-12 mx-auto text-center">
          <h2 className="font-bold text-xl mb-1">BILJETTINFO</h2>
          <p>
            Biljetter finns att köpa på Sundsvallspegelns hemsida eller i kassan
            på plats.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-bold text-3xl mb-4">FRÅGOR & SVAR</h2>
          <h3 className="underline text-xl mb-1">
            HUR KÖPER JAG BILJETTER PÅ HEMSIDAN?
          </h3>
          <p>
            Betalningen på hemsidan sker antingen med ett betalkort eller
            presentkort, det går endast att använda ett betalsätt per köp. Vid
            köp via hemsidan skickas en bokningsbekräftelse via mail. Vid
            försäljning av biljetter gäller endast direktköp.
          </p>
          <br />
          <h3 className="underline  text-xl mb-1">
            VARFÖR HAR JAG INTE FÅTT EN BOKNINGSBEKRÄFTELSE?
          </h3>
          <p>
            Ibland hamnar bekräftelsemailet i mottagarens skräppost. Om du
            märker att du inte får någon bokningsbekräftelse på dina köp, kan du
            godkänna vår mejladress som vi skickar bekräftelsen ifrån via din
            mejl.
          </p>
          <br />
          <h3 className="underline  text-xl mb-1">
            VARFÖR FUNGERAR DET INTE ATT KÖPA BILJETT PÅ HEMSIDAN?
          </h3>
          <p>
            Vi har märkt att det kan vara problem att köpa biljetter med
            webbläsaren Explorer. Andra webbläsare ska fungera fint. Har du ett
            Nordea-kort kan du behöva kontakta din bank för att låsa upp ditt
            kort för internetköp.
          </p>
          <br />
          <h3 className="underline  text-xl mb-1">
            TAR NI EMOT FILMSTADEN-BILJETTER?
          </h3>
          <p>Nej, då vi inte är en del av deras koncern.</p>
        </section>

        <section className="mt-12">
          <h2 className="font-bold text-xl mb-1">ÅTERKÖP OCH BYTEN</h2>
          <p>
            Det går bra att göra återköp eller byta biljetterna till en annan
            visning senast 24 timmar innan filmen börjar. Återköp och byten av
            biljetter görs endast på biografen.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-bold text-xl mb-1">
            BILJETTSLÄPP OCH KOMMANDE PREMIÄRER
          </h2>
          <p>
            Varje måndag efter lunch släpper vi biljetter till allt som ska
            visas på Spegeln den kommande bioveckan (fre-tors). Biljetterna till
            specialvisningarna och Live på bio släpper vi däremot löpande.
            Aktuellt program hittar du alltid på vår hemsida.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-bold text-xl mb-1">TILLGÄNGLIGHET</h2>
          <p>
            Biografen är utrustad med rullstolshiss och samtliga salonger har
            rullstolsplatser. Maxvikt för rullstolshissen är 200 kg. Vid högre
            vikt, vänligen kontakta oss på info@sundsvallspegeln.se minst en dag
            innan ditt besök. Vi hjälper gärna till.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-bold text-xl mb-1">ÅLDERSGRÄNSER</h2>
          <p>
            7 år: Filmer med 7-årsgräns kan även ses av yungre barn i vuxet
            sällskap.
          </p>
          <p>
            11 år: Filmer med 11-årsgräns kan även ses av barn från 7 år i vuxet
            sällskap.
          </p>
          <p>
            15 år: Filmer med 15-årsgräns kan även ses av barn från 7 år i vuxet
            sällskap.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}
