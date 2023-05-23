import { FC } from "react";

type NumericHeaderProps = {
  number: string;
  title: string;
};

const NumericHeader: FC<NumericHeaderProps> = ({ number, title }) => {
  return (
    <div className="flex gap-4 items-center my-4">
      <div className="w-10 h-10 rounded-full flex justify-center items-center text-center bg-btn-primary-color text-xl">
        {number}
      </div>
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
  );
};

export default NumericHeader;
