import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import sLogo from "../../public/icons/sundsvall-logo.png";
import abfLogo from "../../public/icons/abf-logo.png";
import ecLogo from "../../public/icons/europacinemas-logo.png";

const Footer: FC = () => {
  return (
    <footer className="container mx-auto mt-16 mb-8 max-w-6xl py-8 px-4 md:flex gap-4 justify-between border-t-2 border-white border-opacity-10">
      <section>
        <h3 className="font-semibold text-lg my-2 md:my-0">BIOGRAF SPEGELN</h3>
        <p>Stortorget 30</p>
        <p>211 34 Sundsvall</p>
      </section>
      <section className="my-8 md:my-0">
        <h3 className="font-semibold text-lg my-2 md:my-0">KONTAKTA OSS</h3>
        <address>
          <p className="font-bold not-italic my-2">
            E-post:
            <Link href={"#"} className="font-normal block">
              info@sundsvallsspegeln.se
            </Link>
          </p>
          <p className="font-bold not-italic my-2">
            Följ oss på:
            <Link href={"#"} className="font-normal block">
              Facebook
            </Link>
            <Link href={"#"} className="font-normal block">
              Instagram
            </Link>
          </p>
          <p className="font-bold not-italic my-2">
            Telefon alla dagar 14-21:
            <Link href={"#"} className="font-normal block">
              073-026 94 06
            </Link>
          </p>
        </address>
      </section>
      <section>
        <h3 className="font-semibold text-lg my-4 md:my-0">I SAMARBETE MED</h3>
        <ul className="md:flex gap-4">
          <li>
            <Image
              src={sLogo}
              alt="sundsvalls logo"
              width={150}
              className="rounded-full my-4 w-20 h-auto"
            />
          </li>
          <li>
            <Image
              src={abfLogo}
              alt="ABF logo"
              width={150}
              className="my-4 w-24"
            />
          </li>
          <li>
            <Image
              src={ecLogo}
              alt="europa cinemas logo"
              width={150}
              className="w-36"
            />
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
