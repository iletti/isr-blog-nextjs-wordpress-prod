import React from "react";

const WhyChooseMeSection: React.FC = () => {
  const reasons = [
    {
      title: "Kokemus",
      description:
        "Minulla on vankka kokemus SEO-alalta, ja olen auttanut lukuisia yrityksiä saavuttamaan näkyvyyttä hakukoneissa ja kasvattamaan liiketoimintaansa.",
      icon: "fa-briefcase",
    },
    {
      title: "Asiantuntemus",
      description:
        "Pidän itseni jatkuvasti ajan tasalla SEO-maailman uusimmista trendeistä ja tekniikoista. Kouluttaudun säännöllisesti ja seuraan alan kehitystä, jotta voin tarjota asiakkailleni parasta mahdollista palvelua.",
      icon: "fa-graduation-cap",
    },
    {
      title: "Räätälöidyt ratkaisut",
      description:
        "Ymmärrän, että jokainen yritys on ainutlaatuinen. Siksi en tarjoa valmiita paketteja, vaan räätälöin SEO-ratkaisuni täysin yrityksesi tarpeisiin ja tavoitteisiin sopivaksi.",
      icon: "fa-puzzle-piece",
    },
    {
      title: "Läpinäkyvyys",
      description:
        "Uskon avoimeen ja rehelliseen viestintään. Saat säännölliset ja selkeät raportit SEO-työstäsi, jotta tiedät tarkalleen, mitä teemme ja miten toimenpiteemme vaikuttavat tuloksiin. ",
      icon: "fa-file-alt",
    },
    {
      title: "Asiakaskeskeisyys",
      description:
        "Asetan asiakkaani etusijalle. Tavoitteeni on auttaa sinua saavuttamaan liiketoimintasi tavoitteet hakukoneoptimoinnin avulla. Menestyksesi on minulle tärkeää.",
      icon: "fa-heart",
    },
  ];

  return (
    <section id="why-choose-me" className="py-20 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Kokenut SEO-asiantuntija palveluksessasi
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col space-y-8">
            {reasons.slice(0, 3).map((reason, index) => (
              <div key={index} className="flex items-start">{/* Changed items-center to items-start */}
                <i className={`fas ${reason.icon} text-3xl text-indigo-600 mr-4`} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{reason.title}</h3>
                  <p className="mt-2 text-gray-600">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col space-y-8">
            {reasons.slice(3).map((reason, index) => (
              <div key={index + 3} className="flex items-start">{/* Changed items-center to items-start */}
                <i className={`fas ${reason.icon} text-3xl text-indigo-600 mr-4`} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{reason.title}</h3>
                  <p className="mt-2 text-gray-600">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMeSection;
