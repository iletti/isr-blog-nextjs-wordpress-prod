import React from "react";

const CallToActionSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-indigo-600">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Haluatko parantaa hakukonenäkyvyyttäsi?
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Ota yhteyttä ja pyydä ilmainen SEO-konsultaatio!
          </p>
          <a
            href="https://www.ilarischmidt.com/yhteystiedot" // Link to your contact form (if you have one)
            className="inline-flex items-center px-6 py-3 mt-8 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md shadow-sm hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Ota yhteyttä
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
