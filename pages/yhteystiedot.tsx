import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";
import ContactForm from "../components/ContactForm";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaLinkedin, FaTwitter, FaInstagram, FaLink, FaYoutube } from "react-icons/fa";

const Yhteystiedot = ({ preview }) => {
  const pageTitle = "Ota Yhteyttä | Ilari Schmidt";
  const pageDescription = "Ota yhteyttä minuun - Ilari Schmidt";

  return (
    <Layout preview={preview} pageTitle={pageTitle} pageDescription={pageDescription}>
      <Head>
        <title>Yhteystiedot</title>
      </Head>
      <Container>
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="container px-4 mx-auto max-w-7xl">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                Ota Yhteyttä
              </h1>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Olen täällä auttamassa sinua saavuttamaan yrityksesi digitaaliset tavoitteet.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Contact Information Cards */}
              <div className="flex flex-col items-center p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md dark:bg-gray-700 hover:shadow-lg">
                <FaPhoneAlt className="mb-4 text-3xl text-blue-600" />
                <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Puhelin</h2>
                <a href="tel:+358456002505" className="text-lg text-blue-600 hover:underline">045 600 2505</a>
              </div>
              <div className="flex flex-col items-center p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md dark:bg-gray-700 hover:shadow-lg">
                <FaEnvelope className="mb-4 text-3xl text-blue-600" />
                <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Sähköposti</h2>
                <a href="mailto:ilari@ilarischmidt.com" className="text-lg text-blue-600 hover:underline">ilari@ilarischmidt.com</a>
              </div>
              <div className="flex flex-col items-center p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md dark:bg-gray-700 hover:shadow-lg">
                <FaWhatsapp className="mb-4 text-3xl text-blue-600" />
                <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">WhatsApp</h2>
                <a href="https://wa.me/358456002505?text=Moi%20Ilari%2C%20ymm%C3%A4rsin%2C%20ett%C3%A4%20voisit%20auttaa%20minua%20saavuttamaan%20online%20n%C3%A4kyvyytt%C3%A4%20yritykselleni.%20%3A%29" className="text-lg text-blue-600 hover:underline">Lähetä viesti</a>
              </div>
              <div className="flex flex-col items-center p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md dark:bg-gray-700 hover:shadow-lg">
                <FaLinkedin className="mb-4 text-3xl text-blue-600" />
                <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">LinkedIn</h2>
                <a href="https://www.linkedin.com/in/ilarischmidt/" className="text-lg text-blue-600 hover:underline">Katso profiili</a>
              </div>
              <div className="flex flex-col items-center p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md dark:bg-gray-700 hover:shadow-lg">
                <FaTwitter className="mb-4 text-3xl text-blue-600" />
                <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Twitter</h2>
                <a href="https://x.com/ilarischmidt?lang=en" className="text-lg text-blue-600 hover:underline">Seuraa</a>
              </div>
              <div className="flex flex-col items-center p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md dark:bg-gray-700 hover:shadow-lg">
                <FaInstagram className="mb-4 text-3xl text-blue-600" />
                <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Instagram</h2>
                <a href="https://www.instagram.com/ottoile/?hl=en" className="text-lg text-blue-600 hover:underline">Seuraa</a>
              </div>
              <div className="flex flex-col items-center p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md dark:bg-gray-700 hover:shadow-lg">
                <FaLink className="mb-4 text-3xl text-blue-600" />
                <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">IteWiki</h2>
                <a href="https://www.itewiki.fi/ilari-schmidt" className="text-lg text-blue-600 hover:underline">Katso profiili</a>
              </div>
              <div className="flex flex-col items-center p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md dark:bg-gray-700 hover:shadow-lg">
                <FaYoutube className="mb-4 text-3xl text-blue-600" />
                <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">YouTube</h2>
                <a href="https://www.youtube.com/channel/UCy7wH1PhlOlNrbJFS7KUG3w" className="text-lg text-blue-600 hover:underline">Katso kanava</a>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <div className="w-full p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md dark:bg-gray-700 hover:shadow-lg">
                <h3 className="pb-3 text-xl">Jätä yhteydenottopyyntö</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  );
};

export default Yhteystiedot;
