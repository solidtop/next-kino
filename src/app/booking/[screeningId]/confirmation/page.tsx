"use client";

import TicketSummary from "@/components/TicketSummary";
import { BookingDetails } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ConfirmationPage() {
  const { push } = useRouter();
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(
    null
  );

  useEffect(() => {
    const loadBookingDetails = async () => {
      const res = await fetch("/api/booking/confirm", {
        method: "POST",
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
    };

    loadBookingDetails();
  }, []);

  if (!bookingDetails) {
    return null;
  }

  return (
    <main className="flex flex-col gap-4 items-center my-8 p-4">
      <h1 className="text-3xl semi-bold mx-4">Bokningsbekräftelse</h1>
      <p>Tack för din bokning!</p>
      <TicketSummary bookingDetails={bookingDetails} />
      <p>Kvitto och biljetter har skickats till din mail</p>
      <Link
        href="/"
        className="inline-flex items-center h-10 my-6 px-4 rounded-full lg:mx-10 bg-btn-primary-color hover:brightness-110"
      >
        <img
          src="/icons/chevron-left-solid.svg"
          alt="chevron left"
          className="w-2 mr-2"
        />
        Tillbaka till startsidan
      </Link>
    </main>
  );
}
