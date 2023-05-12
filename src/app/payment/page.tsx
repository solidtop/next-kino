import { useEffect, useState } from "react";
import { BookingDetails } from "@/types";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/icons/Logo.png";

export default function PaymentPage() {
  return (
    <>
      <header>
        <Image src={logo} alt="Website logo" className="mt-6 ml-6" />
      </header>

      <form className="mt-32 mx-auto h-[800px] w-2/5">
        <h1 className="text-3xl font-semibold">Betala med kontokort</h1>
        <ul className="bg-container-color rounded p-3 mt-6">
          <li>Title</li>
          <li className="text-white opacity-50">Stora salongen</li>
          <li className="text-white opacity-50">Time</li>

          <hr className=" mb-2 mt-10 opacity-50"></hr>
          <li className="">Totalt: *insert* kr</li>
        </ul>

        <div className="mt-8">
          <h2 className="text-3xl font-semibold">Fyll i dina kortdetaljer</h2>
          <p className="mt-4">
            Fyll i dina kortuppgifter nedan och klicka på “Betala” för att
            slutföra köpet. Kom ihåg att ta med dig något av korten som användes
            vid köpet, eller din köpbekräftelse med referensnummer och kod, när
            du ska hämta ut dina biljetter.
          </p>
        </div>

        <div className="mt-8">
          <label htmlFor="cardNumber">Kortnummer</label>
          <input
            className="w-full h-8 block p-2 bg-white bg-opacity-10 rounded text-lg outline-none outline-offset-0 invalid:outline-2 invalid:outline-red-700"
            placeholder="0000 0000 0000 0000"
            id="cardNumber"></input>
        </div>

        <label htmlFor="validityMonth" className="relative top-6">
          Giltighetstid
        </label>
        <div className="mt-6 flex flex-row justify-center gap-3 w-5/5">
          <input
            id="validityMonth"
            className="h-8 w-3/5 block mt-2 p-2 bg-white bg-opacity-10 rounded text-lg outline-none outline-offset-0 invalid:outline-2 invalid:outline-red-700"></input>
          <input
            id="validityYear"
            className="h-8 w-3/5  block mt-2 p-2 bg-white bg-opacity-10 rounded text-lg outline-none outline-offset-0 invalid:outline-2 invalid:outline-red-700"></input>
        </div>
        <div className="mt-6">
          <label>Verifikationskod</label>
          <input
            className="w-full h-8 block my-2 p-2 bg-white bg-opacity-10 rounded text-lg outline-none outline-offset-0 invalid:outline-2 invalid:outline-red-700"
            placeholder="000"></input>
        </div>

        <div className="mt-8">
          <button>Avbryt</button>
          <button>Betala</button>
        </div>
      </form>
    </>
  );
}
