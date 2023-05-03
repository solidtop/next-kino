"use client";

import { useEffect, useRef, useState } from "react";
import BackButton from "@/components/BackButton";
import BookingSummary from "@/components/BookingSummary";
import TicketMenu from "@/components/TicketMenu";
import NumericHeader from "@/components/NumericHeader";
import DetailsForm from "@/components/DetailsForm";
import UserDetails from "@/components/UserDetails";
import { BookingDetails } from "@/types";

// PLACEHOLDER: Based on next-auth useSession()
const loggedIn = false;
const session = loggedIn
  ? {
      user: {
        email: "john@gmail.com",
        name: "John Doe",
        bonusPoints: 5,
      },
    }
  : null;

export default function BookingPage() {
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const timer = useRef<number | undefined>(undefined);

  // Fetch & register booking details from server API
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

  const handleUpdate = (bookingDetails: BookingDetails): void => {
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
            ...bookingDetails,
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
              <section id="tickets">
                <NumericHeader number="1" title="Välj biljettyper" />
                <TicketMenu
                  bookingDetails={bookingDetails}
                  onUpdate={handleUpdate}
                />
              </section>
              <section id="details">
                <NumericHeader number="3" title="Fyll i detaljer" />
                {!session && (
                  <DetailsForm
                    bookingDetails={bookingDetails}
                    setBookingDetails={setBookingDetails}
                  />
                )}
                {session && <UserDetails user={session.user} />}
              </section>
            </form>
          </main>
        </>
      )}
    </div>
  );
}
