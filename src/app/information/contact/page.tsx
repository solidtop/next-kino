import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="mt-10 mx-auto w-4/5 md:w-2/5">
        <section className="mt-12">
          <h2 className="font-bold text-xl mb-1">ÖPPETTIDER</h2>
          <p>Måndag till fredag: 13.30-23.00</p>
          <p>Lördag och söndag 12.30-23.00</p>
        </section>

        <section className="mt-12">
          <h2 className="font-bold text-xl mb-1">
            ÖPPETTIDER UNDER JUL & NYÅR
          </h2>
          <p>23 december: 12-19</p>
          <p>24 december: Stängt</p>
          <p>25-30 december: 12-23</p>
          <p>31 december: 16.30-18</p>
          <p>1 januari: 14-23</p>
          <p>2-8 januari: 12-23</p>
        </section>

        <section className="mt-12">
          <h2 className="font-bold text-xl mb-1">TELEFONTIDER</h2>
          <p>
            På grund av säsongens höga belastning har vi just nu stängt av
            telefonen. Skicka gärna ditt ärende till vår melj
            info@sundsvallspegeln.se, så hjälper vi dig så fort vi kan.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-bold text-xl mb-1">KONTAKT</h2>
          <p>KASSAN - info@sundsvallspegeln.se</p>
        </section>

        <section className="mt-12">
          <h2 className="font-bold text-xl mb-1">
            ÄR DU INTRESSERAD AV ATT HYRA SPEGELN?
          </h2>
          <p>
            Skicka din hyresförfrågan till John Doe som innehåller svar på
            följande frågor:
          </p>
          <p>
            -Beskriv arrangemanget
            <br />
            -Vilka är ni?
            <br />
            -Datumförslag
            <br />
            -Antal timmar/kvällstid eller dagtid?
            <br />
            -Tekniska förutsättningar?
            <br />
            -Öppet eller slutet evenemang?
          </p>
          <p>Du kan melja svaren till johndoe@sundsvallspegeln.se</p>
        </section>

        <section className="mt-12">
          <h2 className="font-bold text-xl mb-1">PRESSVISNINGAR</h2>
          <p>
            Skicka din förfrågan till John Doe via johndoe@sundsvallspegeln.se
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}
