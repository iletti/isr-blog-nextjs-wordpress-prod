// OtaYhteytta.js or OtaYhteytta.tsx if you're using TypeScript
import React from "react";

const OtaYhteytta = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0">
        <button className="btn btn-secondary flex items-center space-x-2 w-full sm:w-auto">
          <span>📞</span>
          <span>Soita</span>
        </button>
        <button className="btn btn-secondary flex items-center space-x-2 w-full sm:w-auto">
          <span>✉️</span>
          <span>Sähköposti</span>
        </button>
        <button className="btn btn-secondary flex items-center space-x-2 w-full sm:w-auto">
          <span></span>
          <span>Linked-In</span>
        </button>

        <button className="btn btn-secondary flex items-center space-x-2 w-full sm:w-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 2.248a1.5 1.5 0 00-2.255.042L16.5 5.29a1.5 1.5 0 01-2.121 0l-1.06-1.06a1.5 1.5 0 00-2.121 0l-7.5 7.5a1.5 1.5 0 000 2.121l3 3a1.5 1.5 0 002.121 0l1.06-1.06a1.5 1.5 0 012.121 0l3.998 3.998a1.5 1.5 0 002.122 0l3.997-3.997a1.5 1.5 0 00.042-2.255l-3.998-3.998a1.5 1.5 0 010-2.122l3-3a1.5 1.5 0 00-.042-2.255z"
            />
          </svg>
          <span>Whatsapp</span>
        </button>
      </div>


        <form className="mt-8 flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 md:space-x-2 w-full sm:w-auto">
        <div className="input-group sm:flex">
          <input
            type="text"
            placeholder="Sähköpostisi tai puhelinnumerosi"
            className="input input-bordered w-full max-w-xs"
          />
          <button type="submit" className="btn btn-square btn-accent w-full sm:w-auto p-3">
            Lähetä
          </button>
        </div>

      </form>
    </div>
  );
};

export default OtaYhteytta;
