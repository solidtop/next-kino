"use client";
import { useEffect, useState } from "react";
import { BookingDetails } from "@/types";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../../../../public/icons/biospegeln.png";
import ErrorMessage from "@/components/ErrorMessage";
import PaymentSummary from "@/components/PaymentSummary";
import PaymentDetails from "@/components/PaymentDetails";

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

  /* Replace with request to a real payment api using something like Stripe */

  const handlePayment = async (
    cardNumber: string,
    ccv: string,
    cardYear: number,
    cardMonth: number,
    bookingDetails: BookingDetails
  ) => {
    const paymentDetails = {
      cardNumber,
      ccv,
      cardYear,
      cardMonth,
      bookingDetails,
    };

    try {
      const res = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentDetails),
      });

      const payload = await res.json();

      if (payload === "Payment valid") {
        push(`/booking/${params.screeningId}/confirmation`);
      } else {
        setError("Felaktiga kortdetaljer");
      }
    } catch (err) {
      console.log(err);
    }
  };

  /* -------------------------------- */

  return (
    <>
      <header>
        <Image
          src={logo}
          alt="spegeln logo"
          width={96}
          className="mt-6 ml-6 w-24"
        />
      </header>

      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          handlePayment(cardNumber, ccv, cardYear, cardMonth, bookingDetails);
        }}
        className="mt-10 mx-auto h-[800px] w-2/5"
      >
        {error && <ErrorMessage error={error} setError={setError} />}
        <h1 className="text-3xl font-semibold">Betala med kontokort</h1>

        <PaymentSummary bookingDetails={bookingDetails} seatArray={seatArray} />
        <PaymentDetails
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          setCardMonth={setCardMonth}
          setCardYear={setCardYear}
          setCcv={setCcv}
        />
      </form>
    </>
  );
}
