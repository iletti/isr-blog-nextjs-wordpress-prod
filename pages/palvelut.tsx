// palvelut.tsx
import Head from "next/head";
import Layout from "../components/layout";
import OtaYhteytta from "../components/OtaYhteytta";

const Services = ({ preview }) => {
  return (
    <Layout preview={preview}>
      <Head>
        <title>Google Ads Palvelut - Freelancer</title>
        <meta
          name="description"
          content="Professional Google Ads management and optimization services by a certified freelancer. Increase your ROI with targeted ad campaigns."
        />
      </Head>

      {/* Hero Section */}
      <div
        className="hero min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://mleuki3qgkxz.i.optimole.com/co-ZpyQ-_nizr8Bj/w:auto/h:auto/q:auto/id:f1a3b00c9de99ec58715f4a3d02f64ad/directUpload/vihreakuula_Design_an_image_symbolizing_opportunity_and_growth__69ccb930-f614-4987-8153-1199672e2e5c.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold">
              Google Ads palvelut
            </h1>
            <p className="mt-4 text-base md:text-lg">
              Maksimoi yrityksesi näkyvyys Googlessa Ilari Schmidtin avulla.
            </p>
          </div>
        </div>
      </div>

      {/* Services and Pricing Section */}
      <div className="py-10">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold">
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
          <div className="w-full overflow-hidden px-4">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="py-10">
            <div className="container mx-auto px-4">
              {/* Accordion Section for Services */}
              <div className="w-full mb-8">
                {/* Accordion Item 1 */}
                <div className="collapse collapse-arrow border border-base-300 rounded-box">
                  <input
                    type="radio"
                    name="my-accordion"
                    className="peer"
                    id="accordion1"
                    defaultChecked
                  />
                  <div className="collapse-title text-xl font-medium peer-checked:bg-primary peer-checked:text-white">
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
                <div className="collapse collapse-arrow border border-base-300  rounded-box">
                  <input
                    type="radio"
                    name="my-accordion"
                    className="peer"
                    id="accordion1"
                    defaultChecked
                  />
                  <div className="collapse-title text-xl font-medium peer-checked:bg-primary peer-checked:text-white">
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

                <div className="collapse collapse-arrow border border-base-300  rounded-box">
                  <input
                    type="radio"
                    name="my-accordion"
                    className="peer"
                    id="accordion1"
                    defaultChecked
                  />
                  <div className="collapse-title text-xl font-medium peer-checked:bg-primary peer-checked:text-white">
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

                <div className="collapse collapse-arrow border border-base-300  rounded-box">
                  <input
                    type="radio"
                    name="my-accordion"
                    className="peer"
                    id="accordion1"
                    defaultChecked
                  />
                  <div className="collapse-title text-xl font-medium peer-checked:bg-primary peer-checked:text-white">
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
                <h3 className="text-3xl font-bold mb-4">
                  Oletko valmis kasvattamaan yritystäsi?
                </h3>
                <p className="text-xl mb-6">
                  Otahan yhteyttä, niin jutellaan liiketoimintatarpeistasi ja
                  katsotaan voinko auttaa yrityksesi näkyvyyden kanssa.
                </p>
                <button className="btn btn-primary btn-lg">Ota yhteyttä</button>
              </div>
            </div>
          </div>

          <OtaYhteytta />



     </div>
      </div>

      <div>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* First card */}
            <div className="card w-full glass">
              <figure>
                <img
                  src="http://172-234-99-242.ip.linodeusercontent.com/wp-content/uploads/2024/03/1.jpg"
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
                <div className="card-actions justify-end">
                  <div>
                    {" "}
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second card */}
            <div className="card w-full glass">
              <figure>
                <img
                  src="http://172-234-99-242.ip.linodeusercontent.com/wp-content/uploads/2024/03/3.jpg"
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
                <div className="card-actions justify-end">
                  <div>
                    {" "}
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third card */}
            <div className="card w-full glass">
              <figure>
                <img
                  src="http://172-234-99-242.ip.linodeusercontent.com/wp-content/uploads/2024/03/2.jpg"
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
                <div className="card-actions justify-end">
                  <div>
                    {" "}
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fourth card */}
            <div className="card w-full glass">
              <figure>
                <img
                  src="http://172-234-99-242.ip.linodeusercontent.com/wp-content/uploads/2024/03/4.jpg"
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
                <div className="card-actions justify-end">
                  <div>
                    {" "}
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fifth card */}
            <div className="card w-full glass">
              <figure>
                <img
                  src="http://172-234-99-242.ip.linodeusercontent.com/wp-content/uploads/2024/03/5.jpg"
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
                <div className="card-actions justify-end">
                  <div>
                    {" "}
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sixth card */}
            <div className="card w-full glass">
              <figure>
                <img
                  src="http://172-234-99-242.ip.linodeusercontent.com/wp-content/uploads/2024/03/6.jpg"
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
                <div className="card-actions justify-end">
                  <div>
                    {" "}
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
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
    </Layout>
  );
};

export default Services;
