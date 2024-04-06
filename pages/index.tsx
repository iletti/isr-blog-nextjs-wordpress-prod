import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Reference from "../components/reference";
import OtaYhteytta from "../components/OtaYhteytta";
import Image from "next/image";

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(0);

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Ilari Schmidt Blogi`}</title>
      </Head>
      <Container>
        <div className="grid grid-cols-12 mt-20"> <h1 className="col-span-10 col-start-2 mb-8 text-6xl font-bold leading-tight tracking-tighter text-center md:text-7xl max-sm:text-2xl">
                Google Ads Hakukoneseppä Ilari Schmidt
              </h1></div>
        <div>
          <div className="grid grid-cols-12 gap-2 pb-32">
            <div className="col-span-12 text-center lg:text-left lg:col-start-1 lg:col-span-6 ">
             
              <p className="font-bold">
                Autan yrityksiä saamaan näkyvyyttä ja tuloksia Google Ads
                mainoskampanjoilla.
              </p>
              <div className="flex justify-center lg:justify-start">
                <ul className="pl-5 my-4 space-y-2 text-left list-disc">
                  <li>Google Ads hakusanamainoskampanjat</li>
                  <li>SEO Hakukokoneoptimointi</li>
                  <li>Analytiikan asennus</li>
                  <li>Google Ads optimointi</li>
                </ul>
              </div>
              <a href="/kartoitus">
                <button className="m-4 btn btn-primary">
                  Kartoita yrityksesi hakukonenäkyvyys
                </button>
              </a>
            </div>
            <div className="flex items-center justify-center col-span-12 lg:col-start-7 lg:col-span-6">
              <div className="w-full px-4 overflow-hidden ">
                <iframe
                  className="w-full rounded-lg aspect-video drop-shadow-lg "
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2 my-20">
          <div className="col-span-12 md:col-span-7">
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
                  Google Ads hakukonemainonta{" "}
                  <span className="text-secondary">200€ + mainosbudjetti</span>
                </div>
                <div className="collapse-content peer-checked:bg-primary peer-checked:text-white peer-checked:bg-opacity-90">
                  <p>
                    Määritetään tärkeimmät hakusanat, joissa yrityksesi tulee
                    näkyä ja rakennetaan niiden ympärille relevantit mainokset.
                    Näin saadaan ohjattua potentiaalisia asiakkaita palvelujesi
                    äärelle. Kampanjan hinta on kertamaksu. Voit itse määrittää
                    kuukausitasolla käytettävän mainosbudjetin. Mainonnan
                    optimoinnista, joka on ainakin pari ekaa kuukautta järkevää
                    toteuttaa, sovitaan erikseen.
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
                    näkyä ja rakennetaan niiden ympärille relevantit mainokset.
                    Näin saadaan ohjattua potentiaalisia asiakkaita palvelujesi
                    äärelle. Kampanjan hinta on kertamaksu. Voit itse määrittää
                    kuukausitasolla käytettävän mainosbudjetin. Mainonnan
                    optimoinnista, joka on ainakin pari ekaa kuukautta järkevää
                    toteuttaa, sovitaan erikseen.
                  </p>
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
          </div>
          <div className="flex items-center justify-center col-span-12 md:col-span-3 md:col-start-9 max-sm:order-first">
            <h2 id="palvelut" className="mb-8 ml-6 text-6xl font-bold leading-tight tracking-tighter text-center drop-shadow md:text-7xl">
              Palvelut.
            </h2>
          </div>
        </div>




        <div className="grid grid-cols-12 gap-2 mt-20 mb-20">

          <div className="flex items-center justify-center col-span-12 md:col-span-3"><h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter text-center md:ml-6 drop-shadow md:text-7xl">
              Palaute.
            </h2></div>
          <div className="col-span-12 md:col-span-7 md:col-start-6"> <Reference/> </div>

        </div>



        <div className="grid grid-cols-12 gap-2 my-20">
          <div className="flex justify-center col-span-12 md:col-span-7">
          <div className="pb-10 carousel rounded-box">
  <div className="w-full md:py-4 md:pl-10 carousel-item">
  <div className="w-full shadow-xl card md:w-96">
  <figure><img src="http://172-234-99-242.ip.linodeusercontent.com/wp-content/uploads/2024/03/1.jpg" alt="Shoes" /></figure>
  <div className=" card-body">
    <h2 className="card-title">
      Tiemerkintä Oy
      <div className="badge badge-secondary">Hakusanamainonta</div>
    </h2>
    <p> Nostimme tiemerkinnän hakusanat kärkeen heille kriittisimmissä
                    avainsanoissa. Näin varmistimme, että kohderyhmä löytää
                    Tiemerkinnän ensimmäisenä etsiessään ratkaisua.</p>
    <div className="justify-end card-actions">
      <div className="badge badge-outline">Google Ads</div> 
      <div className="badge badge-outline">Analytiikka</div>
    </div>
  </div>
</div>
  </div> 
  <div className="w-full py-4 carousel-item">
  <div className="w-full shadow-xl card md:w-96 bg-base-100">
  <figure><img src="http://172-234-99-242.ip.linodeusercontent.com/wp-content/uploads/2024/03/3.jpg" alt="Parturi Mainonta" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Viella parturi
      <div className="badge badge-secondary">Hakusanamainonta</div>
    </h2>
    <p>Nostimme paikallisen parturin hakutuloksia Googlessa.
                    Keskityimme edullisiin mainoshuutoihin, joka mahdollisti
                    kattavan näkyvyyden edullisesti.</p>
    <div className="justify-end card-actions">
      <div className="badge badge-outline">Paikallinen kohdennus</div> 
      <div className="badge badge-outline">Google Ads</div>
    </div>
  </div>
</div>
  </div> 
  <div className="w-full py-4 carousel-item">
  <div className="w-full shadow-xl card md:w-96 bg-base-100">
  <figure><img src="http://172-234-99-242.ip.linodeusercontent.com/wp-content/uploads/2024/03/2.jpg" alt="Yritys google ads remarketing" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Kasvu Open Oy
      <div className="badge badge-secondary">Youtubemainonta</div>
    </h2>
    <p>Rakensimme YouTube mainosvideokampanjan kaikille Kasvupolku
                    palvelusta kiinnostuneille yrityksille edistämään
                    osallistujien päätösprosessia.</p>
    <div className="justify-end card-actions">
      <div className="badge badge-outline">Youtube</div> 
      <div className="badge badge-outline">Google Ads</div>
    </div>
  </div>
</div>
  </div> 
  <div className="w-full py-4 carousel-item">
  <div className="w-full shadow-xl card md:w-96 bg-base-100">
  <figure><img src="http://172-234-99-242.ip.linodeusercontent.com/wp-content/uploads/2024/03/4.jpg" alt="LVI-yrityksen google mainonta" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      ViluWorks Oy
      <div className="badge badge-secondary">Hakusanamainonta</div>
    </h2>
    <p>Nostimme ViluWorksin palveluita esille suorissa Google hauissa
                    Uudenmaan alueella. Lvi laitteiden huoltoon ja hankintaan
                    liittyvissä hauissa.</p>
    <div className="justify-end card-actions">
      <div className="badge badge-outline">SEM</div> 
      <div className="badge badge-outline">Google Ads</div>
    </div>
  </div>
</div>
  </div> 
  <div className="w-full py-4 carousel-item">
  <div className="w-full shadow-xl card md:w-96 bg-base-100">
  <figure><img src="http://172-234-99-242.ip.linodeusercontent.com/wp-content/uploads/2024/03/6.jpg" alt="IV yrityksyn google mainonta" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    Idair Oy      <div className="badge badge-secondary">Hakukampanja</div>
    </h2>
    <p>Tuotin usean vuoden ajan liidejä IV-alan yritykselle Google
                    hakukampanjan sekä laskeutumissivun avulla.
                    Laskeutumissivulla oli hintalaskuri ilmanvaihdon
                    puhdistukselle.</p>
    <div className="justify-end card-actions">
      <div className="badge badge-outline">SEM</div> 
      <div className="badge badge-outline">Optimointi</div>
    </div>
  </div>
</div>
  </div> 
  <div className="w-full py-4 carousel-item">
  <div className="w-full shadow-xl card md:w-96 bg-base-100">
  <figure><img src="https://mleuki3qgkxz.i.optimole.com/co-ZpyQ-wvdgl_YE/w:auto/h:auto/q:auto/id:6e8686d9f452ee9a3b343a43cb992be0/directUpload/Untitled-design-1.png
" alt="Verkkokauppa merchant storeen" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Finnero verkkokauppa
      <div className="badge badge-secondary">GoogleMerchantStore</div>
    </h2>
    <p>Yhdistin Google Merchant Storen MyCashFlow verkkokauppaan.</p>
    <div className="justify-end card-actions">
      <div className="badge badge-outline">Verkkokauppa mainonta</div> 
      <div className="badge badge-outline">Google Merchant Store</div>
    </div>
  </div>
</div>
  </div> 
  <div className="w-full py-4 carousel-item">
  <div className="w-full shadow-xl card md:w-96 bg-base-100">
  <figure><img src="http://172-234-99-242.ip.linodeusercontent.com/wp-content/uploads/2024/03/5.jpg" alt="Google Ads mainonta ajanvarauspalvelulle" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    Helposti pariterapiaan
      <div className="badge badge-secondary">Hakukampanja</div>
    </h2>
    <p> Lanseerasimme uuden verkkopalvelun Google hakukampanjan
                    avulla. Loimme relevantit mainokset tärkeimpien avainsanojen
                    ympärille. Nyt Google mainonta tuottaa tasaiseen tahtiin
                    varauksia.</p>
    <div className="justify-end card-actions">
      <div className="badge badge-outline">Hakukampanja</div> 
      <div className="badge badge-outline">Analytiikka</div>
      <div className="badge badge-outline">Optimointi</div>
    </div>
  </div>
</div>
  </div>
</div>
          </div>
          <div className="flex items-center justify-center col-span-12 md:col-span-3 md:col-start-9 max-sm:order-first">
            <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter text-center drop-shadow md:text-7xl">
              Töitä.
            </h2>
          </div>
        </div>


        <div className="grid grid-cols-12 gap-2 mt-20 mb-20">

<div className="flex items-center justify-center col-span-12 md:col-span-3 "><h2 className="mb-8 ml-6 text-6xl font-bold leading-tight tracking-tighter text-center drop-shadow md:text-7xl">
    Yhteys.
  </h2></div>
<div className="flex justify-center col-span-12 md:col-span-6 md:col-start-6 "> <OtaYhteytta/> </div>

</div>


        <div className="grid grid-cols-3 gap-2 mb-10">
          <div className="col-span-12">
            {" "}
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 2,
  };
};
