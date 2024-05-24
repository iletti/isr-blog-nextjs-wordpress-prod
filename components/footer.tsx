import Container from "./container";
import { useEffect, useRef } from "react";
import OtaYhteytta from "./OtaYhteytta";

export default function Footer() {
  // Refs for the contact links
  const contactLinkRef = useRef(null);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile =
      /android|webos|iphone|ipod|blackberry|iemobile|opera mini/.test(
        userAgent
      );

    // Define the WhatsApp link and mailto link
    const whatsappLink =
      "https://wa.me/358456002505?text=Moi%20Ilari%2C%20ymm%C3%A4rsin%2C%20ett%C3%A4%20voisit%20auttaa%20minua%20saavuttamaan%20online%20n%C3%A4kyvyytt%C3%A4%20yritykselleni.%20%3A%29";
    const mailtoLink =
      "mailto:ilari@digilari.fi?subject=Yhteydenotto&body=Moi%20Ilari%2C%20ymm%C3%A4rsin%2C%20ett%C3%A4%20voisit%20auttaa%20minua%20saavuttamaan%20online%20n%C3%A4kyvyytt%C3%A4%20yritykselleni.%20%3A%29";

    // Set the href based on device
    if (contactLinkRef.current) {
      contactLinkRef.current.href = isMobile ? whatsappLink : mailtoLink;
    }
  }, []);

  return (
    <footer className="border-t bg-accent-1 border-accent-2">
      <Container>
        <div className="container flex flex-col items-center mx-auto mt-20 mb-30 lg:w-5/6 py-28 lg:flex-row">
          <h3 className="mb-10 text-4xl font-bold leading-tight tracking-tighter text-center lg:text-5xl lg:text-left lg:mb-0 lg:pr-4 lg:w-1/2">
            Kaipaatko jeesiä näkyvyydessä? Autan mielelläni.
          </h3>
          <div className="flex flex-col items-center justify-center lg:flex-row lg:pl-4 lg:w-1/2">
          <OtaYhteytta/>

          </div>
        </div>


      


        <div className="p-10 rounded footer footer-center text-base-content">
          <nav className="grid grid-flow-col gap-4">
            <a href="/" className="link link-hover">
              Etusivu
            </a>
            <a href="/#palvelut" className="link link-hover">
              Palvelut
            </a>
            <a href="/blogi" className="link link-hover">
              Blogi
            </a>
            <a href="/tietoa" className="link link-hover">
              Tietoa
            </a>
          </nav>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
          <aside>
            <p>Copyright © 2024 - Ilari Schmidt</p>
          </aside>
        </div>
      </Container>
    </footer>
  );
}
