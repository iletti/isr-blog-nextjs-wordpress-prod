import React from "react";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      companyName: "Tiemerkintä Oy",
      logoSrc: "https://mleuki3qgkxz.i.optimole.com/co-ZpyQ--Izsw3uZ/w:auto/h:auto/q:auto/id:d8b51307aa693232ac1acf978f6beeb4/directUpload/1.jpg", // Replace with actual logo URL
      description: "Nostimme Tiemerkintä Oy:n hakukonenäkyvyyttä merkittävästi, mikä johti huomattavaan kasvuun orgaanisessa liikenteessä ja uusien asiakkaiden hankinnassa.",
      quote: "Ilari Schmidtin SEO-osaaminen on huippuluokkaa. Hän auttoi meitä saavuttamaan tavoitteemme ja ylittämään ne.",
    },
    {
      companyName: "Viella Parturi",
      logoSrc: "https://mleuki3qgkxz.i.optimole.com/co-ZpyQ-SUfxJvtO/w:auto/h:auto/q:auto/id:d056659772151e7cb48f9c1ac2ee48c9/directUpload/3.jpg", // Replace with actual logo URL
      description: "Viella Parturin verkkosivusto nousi Googlen hakutulosten kärkeen Ilari Schmidtin SEO-optimoinnin ansiosta. Uudet asiakkaat löytävät meidät nyt entistä helpommin.",
      quote: "Olemme erittäin tyytyväisiä Ilari Schmidtin SEO-palveluihin. Hän on ammattitaitoinen ja luotettava kumppani.",
    },
    // Add more testimonials here as needed
    {
      companyName: "Kasvu Open Oy",
      logoSrc: "https://mleuki3qgkxz.i.optimole.com/3Jpmpuk-51owUpz3/w:auto/h:auto/q:auto/id:07fa94cc620acbaa87fa602ec9923700/https://172-234-99-242.ip.linodeusercontent.com/2.jpg",
      description:
        "Rakensimme YouTube mainosvideokampanjan kaikille Kasvupolku palvelusta kiinnostuneille yrityksille edistämään osallistujien päätösprosessia.",
      quote: "",
    },
    {
      companyName: "Vilu Works Oy",
      logoSrc: "https://mleuki3qgkxz.i.optimole.com/3Jpmpuk-gg8u77vA/w:auto/h:auto/q:auto/id:b5fd13403c2396f5efc123609223804a/https://172-234-99-242.ip.linodeusercontent.com/4.jpg",
      description:
        "Nostimme ViluWorksin palveluita esille suorissa Google hauissa Uudenmaan alueella. Lvi laitteiden huoltoon ja hankintaan liittyvissä hauissa.",
      quote: "",
    },
    {
      companyName: "Helposti pariterapiaan",
      logoSrc: "https://mleuki3qgkxz.i.optimole.com/3Jpmpuk-IliYXSEP/w:auto/h:auto/q:auto/id:74ec47bcda9dff1c47fcd8373d68fc31/https://172-234-99-242.ip.linodeusercontent.com/5.jpg",
      description:
        "Lanseerasimme uuden verkkopalvelun Google hakukampanjan avulla. Loimme relevantit mainokset tärkeimpien avainsanojen ympärille. Nyt Google mainonta tuottaa tasaiseen tahtiin varauksia.",
      quote: "",
    },
    {
      companyName: "Idair Oy",
      logoSrc: "https://mleuki3qgkxz.i.optimole.com/3Jpmpuk-R9lrMLbw/w:auto/h:auto/q:auto/id:abdf680654fb1811d168bc24bdef45ad/https://172-234-99-242.ip.linodeusercontent.com/6.jpg",
      description:
        "Tuotin usean vuoden ajan liidejä IV-alan yritykselle Google hakusanakampanjan sekä laskeutumissivun avulla. Laskeutumissivulla oli hintalaskuri ilmanvaihdon puhdistukselle.",
      quote: "",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Asiakkaideni menestystarinoita
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 transition-shadow duration-300 bg-gray-100 rounded-lg shadow-md hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.logoSrc}
                  alt={`${testimonial.companyName} logo`}
                  className="w-12 h-12 mr-4 rounded-full"
                />
                <h3 className="text-xl font-semibold text-gray-900">{testimonial.companyName}</h3>
              </div>
              <p className="mb-4 text-gray-600">{testimonial.description}</p>
              {testimonial.quote && (
                <blockquote className="italic text-gray-800">
                  "{testimonial.quote}"
                </blockquote>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
