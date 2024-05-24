import React from "react";

const OtaYhteytta = () => {
  return (
    <div className="flex items-center justify-center w-full ">
      <div className="w-full max-w-md p-6 bg-white rounded-lg">
        
        <div className="flex flex-col gap-4 ">
          <a href="tel:+358456002505" className="w-full">
            <button className="flex items-center justify-center w-full gap-2 px-4 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700">
              <span>📞</span>
              <span>Soita</span>
            </button>
          </a>
          <a href="mailto:ilari@digilari.fi?subject=Yhteydenotto&body=Moi%20Ilari%2C%20ymm%C3%A4rsin%2C%20ett%C3%A4%20voisit%20auttaa%20minua%20saavuttamaan%20online%20n%C3%A4kyvyytt%C3%A4%20yritykselleni.%20%3A%29" className="w-full">
            <button className="flex items-center justify-center w-full gap-2 px-4 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700">
              <span>✉️</span>
              <span>Sähköposti</span>
            </button>
          </a>
          <a href="https://www.linkedin.com/in/ilarischmidt/" className="w-full">
            <button className="flex items-center justify-center w-full gap-2 px-4 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.5c-.83 0-1.5-.68-1.5-1.5s.68-1.5 1.5-1.5 1.5.68 1.5 1.5-.67 1.5-1.5 1.5zm13.5 12.5h-3v-5.5c0-3.03-3.5-2.8-3.5 0v5.5h-3v-11h3v1.5c1.39-2.58 6.5-2.77 6.5 2.47v7.03z" />
              </svg>
              <span>LinkedIn</span>
            </button>
          </a>
          <a href="https://wa.me/358456002505?text=Moi%20Ilari%2C%20ymm%C3%A4rsin%2C%20ett%C3%A4%20voisit%20auttaa%20minua%20saavuttamaan%20online%20n%C3%A4kyvyytt%C3%A4%20yritykselleni.%20%3A%29" className="w-full">
            <button className="flex items-center justify-center w-full gap-2 px-4 py-3 text-lg font-semibold text-white bg-green-500 rounded-lg shadow-lg hover:bg-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M21.752 2.248a1.5 1.5 0 00-2.255.042L16.5 5.29a1.5 1.5 0 01-2.121 0l-1.06-1.06a1.5 1.5 0 00-2.121 0l-7.5 7.5a1.5 1.5 0 000 2.121l3 3a1.5 1.5 0 002.121 0l1.06-1.06a1.5 1.5 0 012.121 0l3.998 3.998a1.5 1.5 0 002.122 0l3.997-3.997a1.5 1.5 0 00.042-2.255l-3.998-3.998a1.5 1.5 0 010-2.122l3-3a1.5 1.5 0 00-.042-2.255z" />
              </svg>
              <span>Whatsapp</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OtaYhteytta;
