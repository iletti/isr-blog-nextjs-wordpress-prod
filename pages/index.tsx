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

   const pageTitle = "Google Ads Hakukoneseppä Ilari Schmidt";
   const pageDescription =
     "Autan yrityksiä saamaan näkyvyyttä ja tuloksia Google Ads mainoskampanjoilla.";

  return (
    <Layout preview={preview}  pageTitle={pageTitle} pageDescription={pageDescription}>
      <Head>


      </Head>
  
      <div className="min-h-screen bg-opacity-25 hero bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400">
  <div className="flex-col hero-content lg:flex-row">
  <div className="w-full px-4 overflow-hidden ">
                  <iframe
                    className="w-full rounded-lg aspect-video drop-shadow-lg "
                    src="https://www.youtube.com/embed/bA8GCTzl1AY"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
    <div>
      <h1 className="text-5xl font-bold">Google Ads Hakukoneseppä Ilari Schmidt</h1>
      <p className="py-2"> Autan yrityksiä saamaan näkyvyyttä ja tuloksia Google Ads
                  mainoskampanjoilla.</p>
                  <ul className="text-left list-disc ">
                    <li>Google Ads kampanjat</li>
                    <li>SEO Hakukokoneoptimointi</li>
                    <li>Analytiikan asennus</li>
                    <li>Google Ads kampanjaoptimointi</li>
                  </ul>
                  <a href="https://ilarischmidt.com/kartoitus" className="mt-2 btn btn-primary">Kartoita hakunäkyvyytesi</a>


    </div>
  </div>
</div>


      <Container>


        

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
                  <span className="font-bold">200€ + mainosbudjetti</span>
                </div>
                <div className="collapse-content peer-checked:bg-primary peer-checked:text-white peer-checked:bg-opacity-90">
                  <p>
                    Määritetään tärkeimmät hakusanat, joissa yrityksesi tulee
                    näkyä ja rakennetaan niiden ympärille relevantit mainokset.
                    Näin saadaan ohjattua potentiaalisia asiakkaita palvelujesi
                    äärelle. Kampanjan hinta on kertamaksu. Voit itse määrittää
                    kuukausitasolla käytettävän mainosbudjetin. Mainonnan
                    optimoinnista, jota on ainakin muutama ensimmäinen kuukausi järkevää
                    toteuttaa, sovitaan erikseen.
                    <br /> <br />
                    Voin toteuttaa myös muita kampanjatyyppejä, kuten Display, Maksimitulokset, Shopping, Video ja Kysynnän kasvatus mainontaa. Em. Kampanjoissa tarvitaan kuitenkin myös mediasisältöjä, joten näiden toteutuksien laajuudesta ja hinnoittelusta sovitaan aina erikseen.
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
                  SEO Hakukoneoptimointi auditointi{" "}
                  <span className="font-bold">50€</span>
                </div>
                <div className="collapse-content peer-checked:bg-primary peer-checked:text-white peer-checked:bg-opacity-90">
                  <p>
                    Hakukoneoptimointi aloitetaan aina sivuston auditoinnilla, josta ilmenee sivuston tekninen suorituskyky SEO:n näkökulmasta. Lisäksi kartoitamme tämän hetkisen hakusananäkyvyyden ja vertaamme niitä määritettyihin tavoitteisiin. Lopputuloksena saat kehityslistan toimenpiteistä, joita toteuttamalla SEO näkyvyys paranee. Jatkotoimenpiteet sovitaan erikseen.
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
                    <span className="font-bold">alkaen 150€</span>
                  </div>
                  <div className="collapse-content peer-checked:bg-primary peer-checked:text-white peer-checked:bg-opacity-90">
                    <p>
                      Määritetään verkkosivun konversiot ja asennetaan seuranta-integraatiot edistyksellisen seurannan mahdollistamiseksi.{" "}
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
                  <span className="font-bold">alkaen 50€/kk</span>
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



        <div className="grid h-full grid-cols-12 gap-2 my-20">
          <div className="flex justify-center h-full col-span-12 md:col-span-6">
          <div className="pb-10 carousel carousel-vertical rounded-box h-[32rem]">
  <div className="w-full md:py-4 carousel-item">
  <div className="w-full shadow-xl card md:w-96">
  <figure><img src="https://mleuki3qgkxz.i.optimole.com/co-ZpyQ--Izsw3uZ/w:auto/h:auto/q:auto/id:d8b51307aa693232ac1acf978f6beeb4/directUpload/1.jpg" alt="Shoes" /></figure>
  <div className=" card-body">
    <h2 className="card-title">
      Tiemerkintä Oy
      <div className="badge badge-secondary">Hakusanamainonta</div>
    </h2>
    <p> Nostimme tiemerkinnän hakusanat kärkeen heille kriittisimmissä
                    avainsanoissa. Näin varmistimme, että kohderyhmä löytää
                    Tiemerkinnän ensimmäisenä etsiessään ratkaisua.</p>
                    <p className="text-secondary">Skrollaa seuraava -&gt;</p>
    <div className="justify-end card-actions">
      <div className="badge badge-outline">Google Ads</div> 
      <div className="badge badge-outline">Analytiikka</div>
    </div>
  </div>
</div>
  </div> 
  <div className="w-full py-4 carousel-item">
  <div className="w-full shadow-xl card md:w-96 bg-base-100">
  <figure><img src="https://mleuki3qgkxz.i.optimole.com/co-ZpyQ-SUfxJvtO/w:auto/h:auto/q:auto/id:d056659772151e7cb48f9c1ac2ee48c9/directUpload/3.jpg" alt="Parturi Mainonta" /></figure>
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
  <figure><img src="https://mleuki3qgkxz.i.optimole.com/3Jpmpuk-51owUpz3/w:auto/h:auto/q:auto/id:07fa94cc620acbaa87fa602ec9923700/https://172-234-99-242.ip.linodeusercontent.com/2.jpg" alt="Yritys google ads remarketing" /></figure>
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
  <figure><img src="https://mleuki3qgkxz.i.optimole.com/3Jpmpuk-gg8u77vA/w:auto/h:auto/q:auto/id:b5fd13403c2396f5efc123609223804a/https://172-234-99-242.ip.linodeusercontent.com/4.jpg" alt="LVI-yrityksen google mainonta" /></figure>
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
  <figure><img src="https://mleuki3qgkxz.i.optimole.com/3Jpmpuk-R9lrMLbw/w:auto/h:auto/q:auto/id:abdf680654fb1811d168bc24bdef45ad/https://172-234-99-242.ip.linodeusercontent.com/6.jpg" alt="IV yrityksyn google mainonta" /></figure>
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
  <figure><img src="https://mleuki3qgkxz.i.optimole.com/3Jpmpuk-IliYXSEP/w:auto/h:auto/q:auto/id:74ec47bcda9dff1c47fcd8373d68fc31/https://172-234-99-242.ip.linodeusercontent.com/5.jpg" alt="Google Ads mainonta ajanvarauspalvelulle" /></figure>
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
          <div className="flex flex-col items-center justify-center col-span-12 md:col-span-3 md:col-start-9 max-sm:order-first">
            <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter text-center drop-shadow md:text-7xl">
              Töitä.
            </h2>
            
          </div>
        </div>


        <div className="grid grid-cols-12 gap-2 mt-20 mb-20">

<div className="flex items-center justify-center col-span-12 md:col-span-3 "><h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter text-center drop-shadow md:text-7xl">
    Yhteys.
  </h2></div>
<div className="flex col-span-12 md:col-span-6 md:col-start-6 "> <OtaYhteytta/> </div>

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
