import { FC, SetStateAction } from "react";

type ErrorMessageProps = {
  error: string;
  setError: (value: SetStateAction<string>) => void;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ error, setError }) => {
  return (
    <div className="flex items-center py-2 rounded bg-red-600 bg-opacity-50 transition-opacity animate-menu-reveal">
      <div slot="avatar">
        <svg
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-alert-octagon w-5 h-5 mx-2"
        >
          <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      </div>
      <div className="text-lg font-normal  max-w-full flex-initial">
        {error}
      </div>
      <div className="flex flex-auto flex-row-reverse">
        <button onClick={() => setError("")}>
          <svg
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="rounded-full w-5 h-5 mx-2"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;
