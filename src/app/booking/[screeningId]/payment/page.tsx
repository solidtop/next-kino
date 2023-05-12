"use client";
import { useEffect, useState } from "react";
import { BookingDetails } from "@/types";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../../../../public/icons/Logo.png";
import Link from "next/link";
import formatDate from "@/utils/formatting";
import SeatsPaymentPage from "@/components/SeatsPaymentPage";
import { isValidCardNumber } from "@/utils/validation";
import ErrorMessage from "@/components/ErrorMessage";

export default function PaymentPage() {
  const { push } = useRouter();
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(
    null
  );
  const [seatArray, setSeatArray] = useState<Array<number>>([]);
  const [cardNumber, setCardNumber] = useState<string>("");
  const [ccv, setCcv] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [cardMonth, setCardMonth] = useState<number>(1);
  const [cardYear, setCardYear] = useState<number>(2023);

  const params = useParams();

  useEffect(() => {
    const loadBookingDetails = async () => {
      const res = await fetch("/api/booking/checkout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const payload = await res.json();
      if (payload.error) {
        alert(payload.error.message);
        push("/");
        return;
      }
      setBookingDetails(payload);
      setSeatArray(payload.seats);
    };

    loadBookingDetails();
  }, []);

  if (!bookingDetails) {
    return null;
  }

  const handlePayment = () => {
    const cardCheck = isValidCardNumber(cardNumber);
    const ccvCheck = isValidCardNumber(ccv);
    const todaysDate = new Date();
    const cardDate = new Date(cardYear, cardMonth, 0);

    if (cardDate > todaysDate) {
    }

    if (
      cardCheck === true &&
      ccvCheck === true &&
      cardNumber.length === 12 &&
      ccv.length === 3 &&
      cardDate > todaysDate
    ) {
      push(`/booking/${params.screeningId}/confirmation`);
    } else {
      setError("Felaktiga kortdetaljer");
    }
  };

  return (
    <>
      <header>
        <Image src={logo} alt="Website logo" className="mt-6 ml-6" />
      </header>

      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          handlePayment();
        }}
        className="mt-10 mx-auto h-[800px] w-2/5">
        {error && <ErrorMessage error={error} setError={setError} />}
        <h1 className="text-3xl font-semibold">Betala med kontokort</h1>
        <div className="flex flex-col sm:flex-row gap-4 bg-container-color rounded p-4 mt-4">
          <img
            className="sm:w-auto sm:h-60 rounded"
            src={
              bookingDetails.screening.attributes.movie.data.attributes.image
                .url
            }
            alt="Movie poster"
          />
          <div className="my-auto ml-2">
            <ul className="bg-container-color rounded ">
              <li className="font-bold text-lg mb-2">
                {
                  bookingDetails.screening.attributes.movie.data.attributes
                    .title
                }
              </li>
              <li className="text-white opacity-70">
                {bookingDetails.screening.attributes.room}
              </li>
              <li className="text-white opacity-70">
                {formatDate(
                  new Date(bookingDetails.screening.attributes.start_time)
                )}
              </li>
              <ul className="flex flex-row flex-wrap mt-2 text-white opacity-70">
                Bokade platser:
                {seatArray.map((seat) => (
                  <SeatsPaymentPage seat={seat} key={seat} />
                ))}
              </ul>

              <hr className=" mb-2 mt-10 opacity-50"></hr>
              <li className="">
                Totalt: {bookingDetails.pricing.amountTotal} kr
              </li>
            </ul>
          </div>
        </div>

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
            id="cardNumber"
            value={cardNumber}
            maxLength={12}
            onChange={(ev) => {
              setCardNumber(ev.target.value);
            }}
            className="w-full h-10 block p-2 bg-white bg-opacity-10 rounded text-lg outline-none outline-offset-0 invalid:outline-2 invalid:outline-red-700"
            placeholder="0000 0000 0000 0000"
            required></input>
        </div>

        <label htmlFor="validityMonth" className="relative top-6">
          Giltighetstid
        </label>
        <div className="mt-6 flex flex-row justify-center gap-3 w-5/5">
          <select
            id="validityMonth"
            onChange={(ev) => {
              setCardMonth(parseInt(ev.target.value));
            }}
            className="h-10 w-3/5 block mt-2 p-2 bg-white bg-opacity-10 rounded text-lg outline-none outline-offset-0 invalid:outline-2 invalid:outline-red-700">
            <option className="bg-container-color" value="1">
              1
            </option>
            <option className="bg-container-color" value="2">
              2
            </option>
            <option className="bg-container-color" value="3">
              3
            </option>
            <option className="bg-container-color" value="4">
              4
            </option>
            <option className="bg-container-color" value="5">
              5
            </option>
            <option className="bg-container-color" value="6">
              6
            </option>
            <option className="bg-container-color" value="7">
              7
            </option>
            <option className="bg-container-color" value="8">
              8
            </option>
            <option className="bg-container-color" value="9">
              9
            </option>
            <option className="bg-container-color" value="10">
              10
            </option>
            <option className="bg-container-color" value="11">
              11
            </option>
            <option className="bg-container-color" value="12">
              12
            </option>
          </select>
          <select
            id="validityYear"
            onChange={(ev) => {
              setCardYear(parseInt(ev.target.value));
            }}
            className="h-10 w-3/5  block mt-2 p-2 bg-white bg-opacity-10 rounded text-lg outline-none outline-offset-0 invalid:outline-2 invalid:outline-red-700">
            <option className="bg-container-color" value="2023">
              2023
            </option>
            <option className="bg-container-color" value="2024">
              2024
            </option>
            <option className="bg-container-color" value="2025">
              2025
            </option>
            <option className="bg-container-color" value="2026">
              2026
            </option>
            <option className="bg-container-color" value="2027">
              2027
            </option>
          </select>
        </div>
        <div className="mt-6">
          <label>Verifikationskod</label>
          <input
            id="ccv"
            maxLength={3}
            onChange={(ev) => {
              setCcv(ev.target.value);
            }}
            className="w-full h-10 block my-2 p-2 bg-white bg-opacity-10 rounded text-lg outline-none outline-offset-0 invalid:outline-2 invalid:outline-red-700"
            placeholder="000"
            required></input>
        </div>

        <div className="mt-8 flex flex-row gap-8">
          <Link
            href="#"
            onClick={() => history.go(-1)}
            className="block w-full my-8 py-2 rounded-full bg-container-color hover:brightness-110 text-center font-semibold">
            Avbryt
          </Link>
          <button
            type="submit"
            className="block w-full my-8 py-2 rounded-full bg-btn-primary-color hover:brightness-110 text-center font-semibold">
            Betala
          </button>
        </div>
      </form>
    </>
  );
}
