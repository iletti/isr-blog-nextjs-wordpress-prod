import React from "react";

const SEOServicesSection: React.FC = () => {
  const services = [
    {
      title: "Avainsana-analyysi",
      description:
        "Avainsanat ovat SEO:n perusta. Teen perusteellisen avainsanatutkimuksen, jossa selvitän, mitä hakusanoja potentiaaliset asiakkaasi käyttävät. Tunnistan myös kilpailijoidesi käyttämät avainsanat, jotta voimme löytää mahdollisuuksia erottua. Tämän perusteella valitsemme ja priorisoimme ne avainsanat, joilla saavutamme parhaat tulokset.",
      icon: "fa-search", // Font Awesome icon
    },
    {
      title: "Tekninen SEO",
      description:
        "Sivustosi tekninen kunto on tärkeä hakukonenäkyvyydelle. Optimoin sivustosi rakenteen, koodin, nopeuden ja mobiiliystävällisyyden. Varmistan, että hakukoneet löytävät ja indeksoivat sivustosi tehokkaasti, mikä parantaa näkyvyyttäsi hakutuloksissa.",
      icon: "fa-cogs",
    },
    {
      title: "Sisällön optimointi (On-Page SEO)",
      description:
        "Laadukas ja hakukoneystävällinen sisältö on SEO:n ytimessä. Optimoin sivustosi otsikot, metakuvaukset ja sisällön vastaamaan kohderyhmäsi hakuja. Luomme yhdessä sisältöstrategian, joka houkuttelee kävijöitä ja pitää heidät sivustollasi.",
      icon: "fa-pencil-alt",
    },
    {
      title: "Linkkien rakentaminen (Off-Page SEO)",
      description:
        "Laadukkaat backlinkit muilta sivustoilta ovat tärkeä signaali hakukoneille sivustosi arvosta ja luotettavuudesta. Hankin yrityksellesi arvokkaita linkkejä ja parannan linkkiprofiiliasi, mikä vahvistaa sivustosi auktoriteettia.",
      icon: "fa-link",
    },
    {
      title: "Paikallinen SEO",
      description:
        "Jos yrityksesi palvelee paikallisia asiakkaita, paikallinen SEO on ratkaisevan tärkeää. Optimoin Google My Business -profiilisi ja parannan näkyvyyttäsi paikallisissa hauissa. Autamme myös hallitsemaan ja vastaamaan asiakasarvosteluihin.",
      icon: "fa-map-marker-alt",
    },
    {
      title: "Raportointi ja seuranta",
      description:
        "Saat säännölliset raportit SEO-työn tuloksista. Seuraan jatkuvasti sivustosi kehitystä, analysoin dataa ja teen tarvittaessa muutoksia varmistaakseni, että saavutamme tavoitteesi. Pidän sinut ajan tasalla kaikista toimenpiteistä ja tuloksista.",
      icon: "fa-chart-bar",
    },
  ];

  return (
    <section id="seo-services" className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Kokonaisvaltaiset SEO-palvelut yrityksesi menestykseen
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 transition-shadow duration-300 rounded-lg shadow-md bg-gray-50 hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <i className={`fas ${service.icon} text-3xl text-blue-600 mr-4`} />
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEOServicesSection;
