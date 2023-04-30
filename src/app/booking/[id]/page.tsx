"use client";

import { useEffect, useRef, useState } from "react";
import BackButton from "@/components/BackButton";
import BookingSummary from "@/components/BookingSummary";
import TicketTypeMenu from "@/components/TicketMenu";
import { BookingDetails, BookingForm } from "@/types";
import { useParams } from "next/navigation";

export default function BookingPage() {
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const timer = useRef<number | undefined>(undefined);
  const params = useParams();

  // NOTE: Fetch booking info from server API, included to demonstrate menu functionality
  useEffect(() => {
    const loadBookingDetails = async () => {
      try {
        const res = await fetch("/api/booking/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const payload = await res.json();
        setBookingDetails(payload);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadBookingDetails();
  }, []);

  // NOTE: Make update request to server api, included to demonstrate menu functionality
  const handleUpdate = ({ tickets }: BookingForm): void => {
    clearTimeout(timer.current);

    // Set delay before sending request (prevents request spam)
    timer.current = window.setTimeout(async () => {
      setIsLoading(true);

      try {
        const res = await fetch("/api/booking/update", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...tickets,
            bookingId: params.id, // Placeholder
            seats: [], // Placeholder
          }),
        });
        const payload = await res.json();
        setBookingDetails(payload);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <BackButton />

      {bookingDetails && (
        <>
          <BookingSummary bookingDetails={bookingDetails} />
          <main className="flex flex-col gap-y-4 md:w-2/3 lg:w-1/2 p-4 lg:mx-auto">
            <form onSubmit={(ev) => ev.preventDefault()}>
              <TicketTypeMenu
                onUpdate={handleUpdate}
                tickets={bookingDetails.tickets}
              />
            </form>
          </main>
        </>
      )}

      {isLoading && <p className="text-center m-auto">Loading...</p>}
    </div>
  );
}
