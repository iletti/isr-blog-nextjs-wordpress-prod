import React from "react";

const SEOBenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: "fa-chart-line",
      title: "Orgaaninen liikenne",
      description: "Kohdennettua liikennettä ilman jatkuvia mainoskuluja.",
    },
    {
      icon: "fa-trophy",
      title: "Kilpailuetu",
      description: "Erottaudu kilpailijoista ja vahvista asemaasi markkinoilla.",
    },
    {
      icon: "fa-coins",
      title: "Kustannustehokkuus",
      description: "Pitkällä tähtäimellä edullisempi kuin maksettu mainonta.",
    },
    {
      icon: "fa-handshake",
      title: "Brändin rakentaminen",
      description: "Lisää luotettavuutta ja auktoriteettia yrityksellesi.",
    },
    {
      icon: "fa-smile",
      title: "Parempi käyttökokemus",
      description: "Tyytyväisempiä asiakkaita ja parempi konversioaste.",
    },
    {
      icon: "fa-anchor",
      title: "Vakautta liiketoimintaan",
      description: "Orgaaninen liikenne on kestävämpää kuin maksettu liikenne.",
    },
  ];

  return (
    <section id="seo-benefits" className="py-20 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            SEO – Investointi tulevaisuuteen
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <i className={`fas ${benefit.icon} text-3xl text-blue-600 mr-4`} />
                <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
              </div>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEOBenefitsSection;
