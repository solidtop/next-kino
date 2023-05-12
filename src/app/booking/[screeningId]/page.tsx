"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import BackButton from "@/components/BackButton";
import BookingSummary from "@/components/BookingSummary";
import TicketMenu from "@/components/TicketMenu";
import NumericHeader from "@/components/NumericHeader";
import DetailsForm from "@/components/DetailsForm";
import UserDetails from "@/components/UserDetails";
import ErrorMessage from "@/components/ErrorMessage";
import SeatingChart from "@/components/SeatingChart";
import SeatingLegend from "@/components/SeatingLegend";
import PaymentSection from "@/components/PaymentSection";
import { getTicketsQuantity } from "@/utils/validation";
import { BookingDetails } from "@/types";

// PLACEHOLDER: Remove when implementing jwt session
const loggedIn = false;
const session = loggedIn
  ? {
      user: {
        email: "john@gmail.com",
        name: "John Doe",
      },
    }
  : null;

export default function BookingPage() {
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(
    null
  );
  const [seatingLoaded, setSeatingLoaded] = useState<boolean>(false);
  const [seatingDetails, setSeatingDetails] = useState<Array<number>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const timer = useRef<number | undefined>(undefined);

  const params = useParams();
  const { push } = useRouter();

  let ticketQuantity: number;
  bookingDetails
    ? (ticketQuantity = getTicketsQuantity(bookingDetails.tickets))
    : (ticketQuantity = 0);

  // Fetch & register booking details from server API
  useEffect(() => {
    const loadBookingDetails = async () => {
      try {
        const res = await fetch("/api/booking/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ screeningId: params.screeningId }),
        });
        const payload = await res.json();
        if (payload.error) {
          handleError(payload.error);
          return;
        }
        setBookingDetails(payload);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadBookingDetails();
    loadSeating(params.screeningId);
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
          body: JSON.stringify(bookingDetails),
        });
        const payload = await res.json();
        if (payload.error) {
          handleError(payload.error);
          return;
        }
        setBookingDetails(payload);

        if (getTicketsQuantity(payload.tickets) !== ticketQuantity) {
          loadSeating(params.screeningId);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
        setError("");
      }
    }, 1000);
  };

  const handleSubmit = async (bookingDetails: BookingDetails) => {
    try {
      const res = await fetch("/api/booking/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingDetails),
      });
      const payload = await res.json();
      if (payload.error) {
        handleError(payload.error);
        return;
      }
      push(`/booking${params.screeningId}/payment`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleError = (error: { message: string; code?: number }): void => {
    if (error.code === 401) {
      alert(error.message);
      push("/"); // If unauthorized, return back to home page
      return;
    }

    setError(error.message);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const loadSeating = async (screeningId: string) => {
    try {
      const res = await fetch(
        `/api/seating?screeningId=${params.screeningId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const payload = await res.json();
      setSeatingDetails(payload);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <BackButton />

      {bookingDetails && (
        <>
          <BookingSummary bookingDetails={bookingDetails} />
          <main className="flex flex-col gap-y-4 md:w-2/3 lg:w-1/2 p-4 lg:mx-auto">
            {error && <ErrorMessage error={error} setError={setError} />}

            <form
              onSubmit={(ev) => {
                ev.preventDefault();
                handleSubmit(bookingDetails);
              }}>
              <section id="tickets">
                <NumericHeader number="1" title="Välj biljettyper" />
                <TicketMenu
                  bookingDetails={bookingDetails}
                  onUpdate={handleUpdate}
                />
              </section>
              <section id="seating">
                <NumericHeader number="2" title="Välj sittplatser" />
                <SeatingChart
                  bookingDetails={bookingDetails}
                  seatingDetails={seatingDetails}
                  onUpdate={handleUpdate}
                />
                <SeatingLegend />
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

              <section id="payment">
                <NumericHeader number="4" title="Betalning" />
                <PaymentSection />
              </section>

              <button
                type="submit"
                className="block w-full my-8 py-2 rounded-full bg-btn-primary-color hover:brightness-110 text-center font-semibold">
                Fortsätt
              </button>
            </form>
          </main>
        </>
      )}
    </div>
  );
}
