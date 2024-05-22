import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";

const Yhteystiedot = ({ preview }) => {
  const pageTitle = "Ota Yhteyttä | Ilari Schmidt";
  const pageDescription = "Ota yhteyttä minuun - Ilari Schmidt";

  return (
    <Layout preview={preview} pageTitle={pageTitle} pageDescription={pageDescription}>
      <Head>
        <title>Yhteystiedot</title>
      </Head>
      <Container>
















        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">Ota Yhteyttä</h1>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Olen täällä auttamassa sinua saavuttamaan yrityksesi digitaaliset tavoitteet.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Contact Information Cards */}
              <div className="p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
                <h2 className="text-xl font-semibold text-gray-900">Puhelin</h2>
                <a href="tel:+358456002505" className="text-blue-600 hover:underline">045 600 2505</a>
              </div>

              <div className="p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
                <h2 className="text-xl font-semibold text-gray-900">Sähköposti</h2>
                <a href="mailto:ilari@ilarischmidt.com" className="text-blue-600 hover:underline">ilari@ilarischmidt.com</a>
              </div>

              <div className="p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
                <h2 className="text-xl font-semibold text-gray-900">Sosiaalinen Media & Verkostot</h2>
                <div className="mt-4 space-y-2">
                  <a href="https://wa.me/358456002505?text=Moi%20Ilari%2C%20ymm%C3%A4rsin%2C%20ett%C3%A4%20voisit%20auttaa%20minua%20saavuttamaan%20online%20n%C3%A4kyvyytt%C3%A4%20yritykselleni.%20%3A%29" className="flex items-center text-blue-600 hover:underline">
                    <i className="mr-2 fab fa-whatsapp"></i> WhatsApp
                  </a>
                  <a href="https://www.linkedin.com/in/ilarischmidt/" className="flex items-center text-blue-600 hover:underline">
                    <i className="mr-2 fab fa-linkedin"></i> LinkedIn
                  </a>
                  <a href="https://x.com/ilarischmidt?lang=en" className="flex items-center text-blue-600 hover:underline">
                    <i className="mr-2 fab fa-twitter"></i> X (Twitter)
                  </a>
                  <a href="https://www.instagram.com/ottoile/?hl=en" className="flex items-center text-blue-600 hover:underline">
                    <i className="mr-2 fab fa-instagram"></i> Instagram
                  </a>
                  <a href="https://www.itewiki.fi/ilari-schmidt" className="flex items-center text-blue-600 hover:underline">
                    <i className="mr-2 fas fa-link"></i> IteWiki
                  </a>
                  <a href="https://www.youtube.com/channel/UCy7wH1PhlOlNrbJFS7KUG3w" className="flex items-center text-blue-600 hover:underline">
                    <i className="mr-2 fab fa-youtube"></i> YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* Optional: Add a contact form or additional message here */}
          </div>
        </section>
      </Container>
    </Layout>
  );
};

export default Yhteystiedot;

