import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Content from "./content";

export const metadata = {
  title: "Boka Biljetter",
};

export default function BookingPage() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}
