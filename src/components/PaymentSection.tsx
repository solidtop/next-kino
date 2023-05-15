import { FC, useState } from "react";
import Image from "next/image";
import KlarnaIcon from "../../public/icons/KlarnaIcon.png";
import MasterCardIcon from "../../public/icons/MasterCardIcon.png";
import SwishIcon from "../../public/icons/SwishIcon.png";
import VisaIcon from "../../public/icons/VisaIcon.png";

const PaymentSection: FC<any> = ({}) => {
  const [radioValue, setRadioValue] = useState<string>("cardPayment");

  const isRadioSelected = (value: string): boolean => radioValue === value;
  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setRadioValue(e.currentTarget.value);

  return (
    <>
      <div className="p-4 bg-container-color rounded">
        <div className="flex items-center h-12 my-3 bg-white bg-opacity-10 border-2 border-btn-primary-color border-opacity-60 rounded accent-btn-primary-color">
          <input
            className="my-3 ml-4 w-5 h-5 hover:cursor-pointer order-first"
            type="radio"
            id="card-payment"
            value="cardPayment"
            name="card-payment"
            checked={isRadioSelected("cardPayment")}
            onChange={handleRadioClick}
          />
          <label className="ml-4 font-semibold text-lg">Kortbetalning</label>
          <Image
            src={VisaIcon}
            alt="Icon for Visa"
            width={40}
            height={40}
            className="object-contain ml-auto mr-2 w-auto"
          />
          <Image
            src={MasterCardIcon}
            alt="Icon for Mastercard"
            width={40}
            height={40}
            className="object-contain justify-self-end mr-2 w-auto"
          />
        </div>

        <div className="flex h-12 my-3 bg-white bg-opacity-10 border-2 border-btn-primary-color border-opacity-60 rounded accent-btn-primary-color">
          <input
            className="my-3 ml-4 w-5 h-5 hover:cursor-pointer"
            type="radio"
            id="swish-payment"
            value="swishPayment"
            name="swish-payment"
            checked={isRadioSelected("swishPayment")}
            onChange={handleRadioClick}
            disabled={true}
          />
          <label className="ml-4 mt-2 font-semibold text-lg">Swish</label>
          <Image
            src={SwishIcon}
            alt="Icon for Swish"
            width={25}
            height={25}
            className="object-contain ml-auto mr-4 w-6"
          />
        </div>

        <div className="flex h-12 my-3 bg-white bg-opacity-10 border-2 border-btn-primary-color border-opacity-60 rounded accent-btn-primary-color">
          <input
            className="my-3 ml-4 w-5 h-5 hover:cursor-pointer"
            type="radio"
            id="klarna-payment"
            value="klarnaPayment"
            name="klarna-payment"
            checked={isRadioSelected("klarnaPayment")}
            onChange={handleRadioClick}
            disabled={true}
          />
          <label className="ml-4 mt-2 font-semibold text-lg">Klarna</label>
          <Image
            src={KlarnaIcon}
            alt="Icon for Klarna"
            width={80}
            height={30}
            className="object-contain ml-auto mr-4 w-16"
          />
        </div>
      </div>

      <div className="mt-3 ml-5">
        <input
          id="save-payment"
          type="checkbox"
          value="savePayment"
          className="w-4 h-4 bg accent-btn-primary-color hover:cursor-pointer"
          required
        />
        <label htmlFor="save-payment" className="ml-3">
          Jag godkänner Sundsvallspegelns köpvillkor
        </label>
      </div>
    </>
  );
};

export default PaymentSection;
