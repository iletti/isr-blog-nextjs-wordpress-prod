// OtaYhteytta.js or OtaYhteytta.tsx if you're using TypeScript
import React from "react";

const OtaYhteytta = () => {
  return (
    <div className="w-full p-4 mx-auto ">
      <div className="flex flex-col gap-4"> {/* Add flex-col and gap classes here */}
        <a href="tel:+358456002505" className="w-full"> {/* Make anchor full-width */}
          <button className="w-full btn btn-secondary drop-shadow "> {/* Make button full-width */}
            <span>📞</span>
            <span>Soita</span>
          </button>
        </a>
        <a href="mailto:ilari@digilari.fi?subject=Yhteydenotto&body=Moi%20Ilari%2C%20ymm%C3%A4rsin%2C%20ett%C3%A4%20voisit%20auttaa%20minua%20saavuttamaan%20online%20n%C3%A4kyvyytt%C3%A4%20yritykselleni.%20%3A%29" className="w-full">
          <button className="w-full btn btn-secondary drop-shadow ">
            <span>✉️</span>
            <span>Sähköposti</span>
          </button>
        </a>
        <a href="https://www.linkedin.com/in/ilarischmidt/" className="w-full">
          <button className="w-full btn btn-secondary drop-shadow ">
            <span></span>
            <span>Linked-In</span>
          </button>
        </a>

        <a href="https://wa.me/358456002505?text=Moi%20Ilari%2C%20ymm%C3%A4rsin%2C%20ett%C3%A4%20voisit%20auttaa%20minua%20saavuttamaan%20online%20n%C3%A4kyvyytt%C3%A4%20yritykselleni.%20%3A%29" className="w-full">
          <button className="w-full btn btn-secondary drop-shadow ">
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
        </a>
      </div>
    </div>
  );
};

export default OtaYhteytta;
