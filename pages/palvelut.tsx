// palvelut.tsx
import Head from "next/head";
import Layout from "../components/layout";

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

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url('https://mleuki3qgkxz.i.optimole.com/co-ZpyQ-3_GPP-fY/w:auto/h:auto/q:auto/id:d515884a747a32e893cc0083b74b2568/directUpload/vihreakuula_Create_an_image_featuring_an_analytics_review_meeti_2f52fce7-2810-4e79-a0e8-ba9add42a515.png')`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content glass">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Google Ads palvelut</h1>
            <p className="mb-5">
              Maksimoi yrityksesi näkyvyys Googlessa Ilari Schmidtin avulla.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen bg-gray-100 py-10">
        <div className="w-8/12 mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Palvelut ja Hinnoittelu
            </h2>
            <p className="text-xl text-gray-600">
              Oletko valmis kasvattamaan yrityksesi näkyvyyttä Googlessa ja
              saamaan enemmän laadukkaita liidejä? Freelancer Ilari Schmidt
              tarjoaa kattavat Google Ads -palvelut, jotka on suunniteltu
              vastaamaan juuri sinun liiketoimintasi tarpeita. Kampanjahinnat
              alkaen vain 200€ + valitsemasi budjetti.
            </p>
          </div>

          <div>           <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // Replace with your video ID
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
</div>

          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                Google hakusanakampanja <span>200€ + mainosbudjetti</span>
              </div>
              <div className="collapse-content">
                <p>   Määritetään tärkeimmät hakusanat, joissa yrityksesi tulee
                  näkyä ja rakennetaan niiden ympärille relevantit mainokset.
                  Näin saadaan ohjattua potentiaalisia asiakkaita palvelujesi
                  äärelle. Kampanjan hinta on kertamaksu. Voit itse määrittää kuukausitasolla käytettävän mainosbudjetin. Mainonnan optimoinnista, joka on ainakin pari ekaa kuukautta järkevää toteuttaa, sovitaan erikseen.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Konversioseurannan asennus <span>Alkaen 150€</span>
              </div>
              <div className="collapse-content">
                <p>Määritetään verkkosivun konversiot ja asennetaan seuranta integraatiot edistyksellisen seurannan mahdollistamiseksi.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Optimointipalvelu <span>Alkaen 50€/kk</span>
              </div>
              <div className="collapse-content">
                <p>Kehittämispalvelu, jossa analysoidaan Google Adsin nykytilaa ja tehdään parannuksia mainonnan tehokkuuden parantamiseksi. Hinnoittelu määräytyy kampanjoiden määrän ja vaadittavien toimenpiteiden mukaan.</p>
              </div>
            </div>
          </div>

         

          <div className="text-center mt-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Oletko valmis kasvattamaan yritystäsi?
            </h3>
            <p className="text-xl text-gray-600 mb-6">
              Otahan yhteyttä, niin jutellaan liiketoimintatarpeistasi ja
              katsotaan voinko auttaa yrityksesi näkyvyyden kanssa.
            </p>
            <button className="btn btn-primary btn-lg">Ota yhteyttä</button>
          </div>
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
