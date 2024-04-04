import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Reference from "../components/reference";
import OtaYhteytta from "../components/OtaYhteytta";

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(0);

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Ilari Schmidt Blogi`}</title>
      </Head>
      <Container>

<div className="container size-full mx-auto  mt-20 mb-30 ">
  
  
  
  
  <div className=" mx-auto px-4 flex justify-center mx-auto ">
    <div className="lg:w-5/6 max:smflex-col md:flex">
      <div className="basis-1/2 m-auto p-10 ">
            <h1 className="text-6xl font-bold">Hakukoneseppä Ilari Schmidt</h1>
            <p>Autan yrityksiä saamaan näkyvyyttä ja tuloksia Google Ads mainoskampanjoilla.</p>
          <ul className="text-left list-disc pl-5 space-y-2 my-4">
            <li>Google Ads hakusanamainoskampanjat</li>
            <li>SEO Hakukokoneoptimointi</li>
            <li>Analytiikan asennus</li>
            <li>Google Ads optimointi</li>
          </ul>
          <a href="/kartoitus">
                  <button className="m-4 btn btn-primary">
                  Kartoita yrityksesi hakukonenäkyvyys
                  </button>
                </a></div>
      <div className=" basis-1/2 m-auto aspect-video  ">      <iframe
              className="w-full h-full grow size-full rounded card shadow-xl card-compact ring-offset-0 ring-4 ring-blue-400	"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // Replace with your video ID
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe></div>
    </div>
  </div>
</div>






 {/* Services and Pricing Section */}
 <div className="container lg:w-5/6  mx-auto px-4 py-10 mt-20 mb-30 ">
          <div className=" mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-bold" id="palvelut">
                Palvelut ja Hinnoittelu
              </h2>
              <p className="mx-auto  mt-4  text-base md:text-xl">
                Oletko valmis kasvattamaan yrityksesi näkyvyyttä Googlessa ja
                saamaan enemmän laadukkaita liidejä? Freelancer Ilari Schmidt
                tarjoaa kattavat Google Ads -palvelut, jotka on suunniteltu
                vastaamaan juuri sinun liiketoimintasi tarpeita. Kampanjahinnat
                alkaen vain 200€ + valitsemasi budjetti.
              </p>
            </div>
            <div className="mt-6">
        
            <div className="flex justify-around ">
              <div className="carousel carousel-center max-w-full p-4 space-x-4 m-4 rounded-box ">
                <div className="carousel-item relative hover:drop-shadow-md">
                  <img
                    src="https://mleuki3qgkxz.i.optimole.com/co-ZpyQ-JgWZtQES/w:200/h:384/id:1ba0464bb220ecdff95880a61dd9d42a/directUpload/1.png"
                    className="rounded-box w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold px-4 text-center">
                      Hakukonemainonta
                    </h3>
                  </div>
                </div>
                <div className="carousel-item relative hover:drop-shadow-md">
                  <img
                    src="https://mleuki3qgkxz.i.optimole.com/co-ZpyQ-x0C_StAY/w:200/id:c8878edba58e8c3085ad46126bf27eee/directUpload/3.png"
                    className="rounded-box w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold px-4 text-center">
                      SEO
                    </h3>
                  </div>
                </div>
                <div className="carousel-item relative hover:drop-shadow-md">
                  <img
                    src="https://mleuki3qgkxz.i.optimole.com/co-ZpyQ-6Oi6E8xf/w:200/id:b6c3e6d12eb8cc25abc47eb384b02c12/directUpload/2.png"
                    className="rounded-box w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold px-4 text-center">
                      Analytiikka
                    </h3>
                  </div>
                </div>
                <div className="carousel-item relative hover:drop-shadow-md">
                  <img
                    src="https://mleuki3qgkxz.i.optimole.com/co-ZpyQ-cxDiR6_d/w:200/id:65c5bb8759447cc69ce475a282228b9e/directUpload/4.png"
                    className="rounded-box w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold px-4 text-center">
                      Optimointi
                    </h3>
                  </div>
                </div>
              </div>
            </div>
        
        </div>

            {/* Video Section
            <div className="w-full overflow-hidden px-4">
              <iframe
                className="aspect-video w-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div> */}
  
            <div className="container lg:w-5/6 mx-auto py-10 lg:px-16">
              <div className="mx-auto">
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
                      Google Ads hakukonemainonta{" "}
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
                      Analytiikka{" "}
                      <span className="text-secondary">alkaen 150€</span>
                    </div>
                    <div className="collapse-content peer-checked:bg-primary peer-checked:text-white peer-checked:bg-opacity-90">
                      <p>
                        Määritetään verkkosivun konversiot ja asennetaan seuranta
                        integraatiot edistyksellisen seurannan mahdollistamiseksi.{" "}
                      </p>
                    </div>
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
  
              
              </div>
            </div>
  
            <Reference/>


  
  
  
       </div>
        </div>
  
        <div className="container lg:w-5/6  mx-auto px-4  mt-20 mb-30 ">
          <div className="container lg:w-5/6  mx-auto px-4 py-8 mt-45">

<h2 className="text-center text-3xl font-bold mb-10">Asiakastarinat</h2>

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


{/* Call to Action Section */}
<div className="container mx-auto  mt-20 mb-30 ">
  <div className="text-center">
    <h3 className="text-3xl font-bold mb-4">
      Oletko valmis kasvattamaan yritystäsi?
    </h3>
    <p className="text-xl mb-6">
      Otahan yhteyttä, niin jutellaan liiketoimintatarpeistasi ja
      katsotaan voinko auttaa yrityksesi näkyvyyden kanssa.
    </p>
  
  </div>
  
              <OtaYhteytta />
</div>


        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};