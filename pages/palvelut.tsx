// palvelut.tsx
import Head from "next/head";
import Layout from "../components/layout";
import OtaYhteytta from "../components/OtaYhteytta";
import Container from "../components/container";

const Services = ({ preview }) => {


  const pageTitle = "Google Ads Palvelut";
  const pageDescription =
    "Palveluihini sisältyy: Hakusanamainonta, Display ja Youtube kampanjat, sekä SEO hakukoneoptimointi.";


  return (
    <Layout preview={preview}  pageTitle={pageTitle} pageDescription={pageDescription}>
      <Head>

      </Head>
      
<Container>
  
        {/* Hero Section */}
        <div
          className="min-h-screen bg-center bg-cover hero"
          style={{
            backgroundImage:
              "url(https://mleuki3qgkxz.i.optimole.com/co-ZpyQ-_nizr8Bj/w:auto/h:auto/q:auto/id:f1a3b00c9de99ec58715f4a3d02f64ad/directUpload/vihreakuula_Design_an_image_symbolizing_opportunity_and_growth__69ccb930-f614-4987-8153-1199672e2e5c.png)",
          }}
        >
          <div className=" bg-opacity-60"></div>
          <div className="text-center hero-content glass">
            <div>
              <h1 className="text-3xl font-bold md:text-5xl dark:text-black">
                Google Ads palvelut
              </h1>
              <p className="mt-4 text-base md:text-lg dark:text-black">
                Maksimoi yrityksesi näkyvyys Googlessa Ilari Schmidtin avulla.
              </p>
            </div>
          </div>
        </div>
  
        {/* Services and Pricing Section */}
        <div className="py-10">
          <div className="container px-4 mx-auto">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold md:text-4xl">
                Palvelut ja Hinnoittelu
              </h2>
              <p className="mt-4 text-base md:text-xl">
                Oletko valmis kasvattamaan yrityksesi näkyvyyttä Googlessa ja
                saamaan enemmän laadukkaita liidejä? Freelancer Ilari Schmidt
                tarjoaa kattavat Google Ads -palvelut, jotka on suunniteltu
                vastaamaan juuri sinun liiketoimintasi tarpeita. Kampanjahinnat
                alkaen vain 200€ + valitsemasi budjetti.
              </p>
            </div>
  
            {/* Video Section */}
            <div className="w-full px-4 overflow-hidden">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
  
            <div className="py-10">
              <div className="container px-4 mx-auto">
                {/* Accordion Section for Services */}
                <div className="w-full mb-8">
                  {/* Accordion Item 1 */}
                  <div className="border collapse collapse-arrow border-base-300 rounded-box">
                    <input
                      type="radio"
                      name="my-accordion"
                      className="peer"
                      id="accordion1"
                      defaultChecked
                    />
                    <div className="text-xl font-medium collapse-title peer-checked:bg-primary peer-checked:text-white">
                      Google hakusanakampanja{" "}
                      <span className="text-secondary">
                        200€ + mainosbudjetti
                      </span>
                    </div>
                    <div className="collapse-content peer-checked:bg-primary peer-checked:text-white peer-checked:bg-opacity-90">
                      <p>
                        Määritetään tärkeimmät hakusanat, joissa yrityksesi tulee
                        näkyä ja rakennetaan niiden ympärille relevantit
                        mainokset. Näin saadaan ohjattua potentiaalisia asiakkaita
                        palvelujesi äärelle. Kampanjan hinta on kertamaksu. Voit
                        itse määrittää kuukausitasolla käytettävän mainosbudjetin.
                        Mainonnan optimoinnista, joka on ainakin pari ekaa
                        kuukautta järkevää toteuttaa, sovitaan erikseen.
                      </p>
                    </div>
                  </div>
  
                  {/* Accordion Item 2 */}
                  <div className="border collapse collapse-arrow border-base-300 rounded-box">
                    <input
                      type="radio"
                      name="my-accordion"
                      className="peer"
                      id="accordion1"
                      defaultChecked
                    />
                    <div className="text-xl font-medium collapse-title peer-checked:bg-primary peer-checked:text-white">
                      Konversioseurannan asennus{" "}
                      <span className="text-secondary">alkaen 150€</span>
                    </div>
                    <div className="collapse-content peer-checked:bg-primary peer-checked:text-white peer-checked:bg-opacity-90">
                      <p>
                        Määritetään verkkosivun konversiot ja asennetaan seuranta
                        integraatiot edistyksellisen seurannan mahdollistamiseksi.{" "}
                      </p>
                    </div>
                  </div>
  
                  <div className="border collapse collapse-arrow border-base-300 rounded-box">
                    <input
                      type="radio"
                      name="my-accordion"
                      className="peer"
                      id="accordion1"
                      defaultChecked
                    />
                    <div className="text-xl font-medium collapse-title peer-checked:bg-primary peer-checked:text-white">
                      SEO Hakukoneoptimointi{" "}
                      <span className="text-secondary">50€ + auditointi</span>
                    </div>
                    <div className="collapse-content peer-checked:bg-primary peer-checked:text-white peer-checked:bg-opacity-90">
                      <p>
                        Määritetään tärkeimmät hakusanat, joissa yrityksesi tulee
                        näkyä ja rakennetaan niiden ympärille relevantit
                        mainokset. Näin saadaan ohjattua potentiaalisia asiakkaita
                        palvelujesi äärelle. Kampanjan hinta on kertamaksu. Voit
                        itse määrittää kuukausitasolla käytettävän mainosbudjetin.
                        Mainonnan optimoinnista, joka on ainakin pari ekaa
                        kuukautta järkevää toteuttaa, sovitaan erikseen.
                      </p>
                    </div>
                  </div>
  
                  <div className="border collapse collapse-arrow border-base-300 rounded-box">
                    <input
                      type="radio"
                      name="my-accordion"
                      className="peer"
                      id="accordion1"
                      defaultChecked
                    />
                    <div className="text-xl font-medium collapse-title peer-checked:bg-primary peer-checked:text-white">
                      Optimointi{" "}
                      <span className="text-secondary">alkaen 50€/kk</span>
                    </div>
                    <div className="collapse-content peer-checked:bg-primary peer-checked:text-white peer-checked:bg-opacity-90">
                      <p>
                      Kehittämispalvelu, jossa analysoidaan Google Adsin nykytilaa
                    ja tehdään parannuksia mainonnan tehokkuuden parantamiseksi.
                    Hinnoittelu määräytyy kampanjoiden määrän ja vaadittavien
                    toimenpiteiden mukaan.
                      </p>
                    </div>
                  </div>
  
  
                </div>
  
                {/* Call to Action Section */}
                <div className="text-center">
                  <h3 className="mb-4 text-3xl font-bold">
                    Oletko valmis kasvattamaan yritystäsi?
                  </h3>
                  <p className="mb-6 text-xl">
                    Otahan yhteyttä, niin jutellaan liiketoimintatarpeistasi ja
                    katsotaan voinko auttaa yrityksesi näkyvyyden kanssa.
                  </p>
              
                </div>
              </div>
            </div>
  
            <OtaYhteytta />
  
  
  
       </div>
        </div>
  
        <div>
          <div className="container px-4 py-8 mx-auto">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {/* First card */}
              <div className="w-full card glass">
                <figure>
                  <img
                    src="https://mleuki3qgkxz.i.optimole.com/co-ZpyQ--Izsw3uZ/w:auto/h:auto/q:auto/id:d8b51307aa693232ac1acf978f6beeb4/directUpload/1.jpg"
                    alt="Car"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Tiemerkintä Oy</h2>
                  <p>
                    Nostimme tiemerkinnän hakusanat kärkeen heille kriittisimmissä
                    avainsanoissa. Näin varmistimme, että kohderyhmä löytää
                    Tiemerkinnän ensimmäisenä etsiessään ratkaisua.
                  </p>
                  <div className="justify-end card-actions">
                    <div>
                      {" "}
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                          checked
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Second card */}
              <div className="w-full card glass">
                <figure>
                  <img
                    src="https://mleuki3qgkxz.i.optimole.com/co-ZpyQ-SUfxJvtO/w:auto/h:auto/q:auto/id:d056659772151e7cb48f9c1ac2ee48c9/directUpload/3.jpg"
                    alt="Car"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Viella Parturi</h2>
                  <p>
                    Nostimme paikallisen parturin hakutuloksia Googlessa.
                    Keskityimme edullisiin mainoshuutoihin, joka mahdollisti
                    kattavan näkyvyyden edullisesti.
                  </p>
                  <div className="justify-end card-actions">
                    <div>
                      {" "}
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                          checked
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Third card */}
              <div className="w-full card glass">
                <figure>
                  <img
                    src="https://mleuki3qgkxz.i.optimole.com/3Jpmpuk-51owUpz3/w:auto/h:auto/q:auto/id:07fa94cc620acbaa87fa602ec9923700/https://172-234-99-242.ip.linodeusercontent.com/2.jpg"
                    alt="Car"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Kasvu Open Oy</h2>
                  <p>
                    Rakensimme YouTube mainosvideokampanjan kaikille Kasvupolku
                    palvelusta kiinnostuneille yrityksille edistämään
                    osallistujien päätösprosessia.
                  </p>
                  <div className="justify-end card-actions">
                    <div>
                      {" "}
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                          checked
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Fourth card */}
              <div className="w-full card glass">
                <figure>
                  <img
                    src="https://mleuki3qgkxz.i.optimole.com/3Jpmpuk-gg8u77vA/w:auto/h:auto/q:auto/id:b5fd13403c2396f5efc123609223804a/https://172-234-99-242.ip.linodeusercontent.com/4.jpg"
                    alt="Car"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">ViluWorks Oy</h2>
                  <p>
                    Nostimme ViluWorksin palveluita esille suorissa Google hauissa
                    Uudenmaan alueella. Lvi laitteiden huoltoon ja hankintaan
                    liittyvissä hauissa.
                  </p>
                  <div className="justify-end card-actions">
                    <div>
                      {" "}
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                          checked
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Fifth card */}
              <div className="w-full card glass">
                <figure>
                  <img
                    src="https://mleuki3qgkxz.i.optimole.com/3Jpmpuk-IliYXSEP/w:auto/h:auto/q:auto/id:74ec47bcda9dff1c47fcd8373d68fc31/https://172-234-99-242.ip.linodeusercontent.com/5.jpg"
                    alt="Car"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Helposti pariterapiaan</h2>
                  <p>
                    Lanseerasimme uuden verkkopalvelun Google hakukampanjan
                    avulla. Loimme relevantit mainokset tärkeimpien avainsanojen
                    ympärille. Nyt Google mainonta tuottaa tasaiseen tahtiin
                    varauksia.
                  </p>
                  <div className="justify-end card-actions">
                    <div>
                      {" "}
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                          checked
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Sixth card */}
              <div className="w-full card glass">
                <figure>
                  <img
                    src="https://mleuki3qgkxz.i.optimole.com/3Jpmpuk-R9lrMLbw/w:auto/h:auto/q:auto/id:abdf680654fb1811d168bc24bdef45ad/https://172-234-99-242.ip.linodeusercontent.com/6.jpg"
                    alt="Car"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Idair Oy</h2>
                  <p>
                    Tuotin usean vuoden ajan liidejä IV-alan yritykselle Google
                    hakusanakampanjan sekä laskeutumissivun avulla.
                    Laskeutumissivulla oli hintalaskuri ilmanvaihdon
                    puhdistukselle.
                  </p>
                  <div className="justify-end card-actions">
                    <div>
                      {" "}
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="bg-orange-400 mask mask-star-2"
                          checked
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</Container>
    </Layout>
  );
};

export default Services;
