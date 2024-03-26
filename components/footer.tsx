import Container from "./container";
import { useEffect, useRef } from 'react';

export default function Footer() {
  // Refs for the contact links
  const contactLinkRef = useRef(null);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /android|webos|iphone|ipod|blackberry|iemobile|opera mini/.test(userAgent);
    
    // Define the WhatsApp link and mailto link
    const whatsappLink = 'https://wa.me/35845600250?text=Moi%20Ilari%2C%20ymm%C3%A4rsin%2C%20ett%C3%A4%20voisit%20auttaa%20minua%20saavuttamaan%20online%20n%C3%A4kyvyytt%C3%A4%20yritykselleni.%20%3A%29';
    const mailtoLink = 'mailto:ilari@digilari.fi?subject=Yhteydenotto&body=Moi%20Ilari%2C%20ymm%C3%A4rsin%2C%20ett%C3%A4%20voisit%20auttaa%20minua%20saavuttamaan%20online%20n%C3%A4kyvyytt%C3%A4%20yritykselleni.%20%3A%29';

    // Set the href based on device
    if (contactLinkRef.current) {
      contactLinkRef.current.href = isMobile ? whatsappLink : mailtoLink;
    }
  }, []);

  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Kaipaatko jeesiä näkyvyydessä? Autan mielelläni.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              ref={contactLinkRef}
              href="#"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
              >
                Ota yhteyttä
              </a>
              <a
                href={`https://ilarischmidt.com/palvelut`}
                className="mx-3 font-bold hover:underline"
              >
                Tutustu palveluihin
              </a>
            </div>
          </div>
        </Container>
      </footer>
    );
  }
  
