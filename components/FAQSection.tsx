import React from "react";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Mitä hakukoneoptimointi (SEO) tarkoittaa?",
      answer:
        "Hakukoneoptimointi (SEO) on prosessi, jolla parannetaan verkkosivustosi näkyvyyttä hakukoneiden, kuten Googlen, orgaanisissa (ei-maksullisissa) hakutuloksissa. Tavoitteena on saada sivustosi näkymään korkeammalla hakutuloksissa, kun potentiaaliset asiakkaasi etsivät tietoa tai palveluita, joita tarjoat.",
    },
    {
      question: "Kuinka kauan SEO:n tulosten näkyminen kestää?",
      answer:
        "SEO ei ole pikaratkaisu, vaan pitkäjänteinen prosessi. Tuloksia voidaan nähdä muutamassa kuukaudessa, mutta merkittävien parannusten saavuttaminen voi viedä 6-12 kuukautta tai jopa kauemmin, riippuen kilpailusta, sivustosi nykytilasta ja muista tekijöistä.",
    },
    {
      question: "Miksi tarvitsen SEO:ta, jos käytän jo Google Mainontaa?",
      answer:
        "Google Mainonta (Google Ads) ja hakukoneoptimointi (SEO) täydentävät toisiaan. Mainonta tuo nopeaa näkyvyyttä, kun taas SEO rakentaa kestävää orgaanista liikennettä, joka tuo pitkäaikaisia tuloksia ilman jatkuvia mainoskuluja.",
    },
    {
      question: "Voinko tehdä SEO:ta itse?",
      answer:
        "Voit tehdä itse joitakin perusasioita, mutta SEO on laaja ja monimutkainen ala, joka vaatii asiantuntemusta ja kokemusta. Ammattilaisen palkkaaminen varmistaa, että SEO tehdään oikein ja saat parhaan mahdollisen hyödyn investoinnistasi.",
    },
    {
      question: "Kuinka paljon SEO maksaa?",
      answer:
        "SEO:n hinta vaihtelee riippuen monista tekijöistä, kuten sivustosi koosta, kilpailusta toimialallasi ja tarvittavista toimenpiteistä. Tarjoan räätälöityjä SEO-paketteja, jotka vastaavat juuri sinun yrityksesi tarpeisiin ja budjettiin.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Usein kysyttyä hakukoneoptimoinnista
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
