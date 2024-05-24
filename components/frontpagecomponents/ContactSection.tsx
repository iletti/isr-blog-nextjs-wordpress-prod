import React from "react";
import ContactForm from "../../components/ContactForm"

const ContactSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-white dark:bg-gray-900">
      <div className="w-full max-w-6xl px-5 text-center md:flex md:text-left md:justify-between">
        <div className="w-full md:w-1/2">
          <h2 className="mb-6 text-4xl font-bold text-black dark:text-white">Ota Yhteyttä</h2>
          <p className="mb-4 text-gray-800 dark:text-gray-200">Tavoitat minut alla olevilla tiedoilla tai täyttämällä yhteydenottolomakkeen.</p>
          <div className="text-gray-800 dark:text-gray-200">
            <p>Osoite: Hiekkakuja 4, 29100 Luvia</p>
            <p>Puhelin: +358 45 600 2505</p>
            <p>Sähköposti: ilari@ilarischmidt.com</p>
          </div>
        </div>
        <div className="w-full mt-10 md:mt-0 md:w-1/2">
        <ContactForm/>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
