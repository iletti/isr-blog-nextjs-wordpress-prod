import Head from "next/head";
import Layout from "../../components/layout";
import OtaYhteytta from "../../components/OtaYhteytta";
import Container from "../../components/container";

const webkehitys = ({ preview }) => {
  const pageTitle = "Web-kehityspalvelut yrityksellesi | Ilari Schmidt";
  const pageDescription =
    "Suunnittelen ja toteutan modernit, käyttäjäystävälliset ja tulokselliset verkkosivustot, jotka auttavat sinua saavuttamaan liiketoimintasi tavoitteet.";

  return (
    <Layout preview={preview} pageTitle={pageTitle} pageDescription={pageDescription}>
      <Head>
        <meta name="keywords" content="web-kehitys, verkkosivut, verkkosivujen suunnittelu, verkkosivujen toteutus, responsiiviset sivut, verkkokauppa" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
      </Head>

      <Container>
        <div className="py-8 prose lg:prose-xl">
          <div className="py-12 bg-white lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="mb-12 text-center lg:mb-20">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  Web-kehityspalvelut yrityksellesi
                </h1>
                <p className="max-w-md mx-auto mt-3 mb-5 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Tarvitsetko modernit, käyttäjäystävälliset ja hakukoneystävälliset verkkosivut? Autan sinua luomaan verkkosivuston, joka erottuu joukosta ja tuottaa tuloksia.
                </p>
                {/* You can add a relevant video here if you have one */}
              </div>

              <div className="grid gap-10 mb-5 lg:grid-cols-3">
                {/* Why Choose Web Development Services Section */}
                <div className="p-8 rounded-lg shadow-md bg-gray-50">
                  <h2 className="mb-4 text-xl font-semibold text-gray-900">
                    Käyttäjäkeskeinen suunnittelu:
                  </h2>
                  <p className="text-gray-600">
                    Suunnittelen verkkosivustosi käyttäjien tarpeet ja odotukset huomioiden. Tavoitteenani on luoda sivusto, joka on helppokäyttöinen, intuitiivinen ja visuaalisesti houkutteleva.
                  </p>
                </div>
                <div className="p-8 rounded-lg shadow-md bg-gray-50">
                  <h2 className="mb-4 text-xl font-semibold text-gray-900">
                    Responsiiviset sivut:
                  </h2>
                  <p className="text-gray-600">
                    Varmistan, että verkkosivustosi toimii moitteettomasti kaikilla laitteilla, oli kyse sitten tietokoneesta, tabletista tai älypuhelimesta.
                  </p>
                </div>
                <div className="p-8 rounded-lg shadow-md bg-gray-50">
                  <h2 className="mb-4 text-xl font-semibold text-gray-900">
                    Hakukoneystävällisyys (SEO):
                  </h2>
                  <p className="text-gray-600">
                    Optimoin verkkosivustosi hakukoneille, jotta potentiaaliset asiakkaasi löytävät sinut helpommin Googlessa ja muissa hakukoneissa.
                  </p>
                </div>
              </div>

              {/* Services Section */}
              <section id="campaign-planning" className="py-20 bg-gradient-to-br from-blue-50 to-white">
  <div className="container px-4 mx-auto max-w-7xl">
    <div className="mb-12 text-center">
      <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        Web-kehityspalvelut räätälöidysti yrityksesi tarpeisiin
      </h2>
      <p className="max-w-3xl mx-auto text-lg font-medium text-gray-700">
        Suunnittelen ja toteutan verkkosivustoja, jotka tukevat liiketoimintasi kasvua.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      <div className="p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
        <h3 className="mb-4 text-2xl font-semibold text-blue-600">Verkkosivujen suunnittelu ja toteutus</h3>
        <p className="text-gray-700">
          Luomme yhdessä näyttävän ja toimivan verkkosivuston, joka vastaa yrityksesi brändiä ja tavoitteita. Käytämme moderneja teknologioita ja suunnitteluperiaatteita varmistaaksemme, että sivustosi on sekä esteettinen että tehokas.
        </p>
      </div>

      <div className="p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
        <h3 className="mb-4 text-2xl font-semibold text-blue-600">Verkkokaupan kehitys</h3>
        <p className="text-gray-700">
          Haluatko myydä tuotteitasi verkossa? Autamme sinua rakentamaan menestyvän verkkokaupan, joka on helppokäyttöinen asiakkaille ja tehokas sinulle. Integroimme tarvittavat maksutavat ja toimitusvaihtoehdot.
        </p>
      </div>

      <div className="p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
        <h3 className="mb-4 text-2xl font-semibold text-blue-600">Sisällönhallintajärjestelmät (CMS)</h3>
        <p className="text-gray-700">
          Asennamme ja konfiguroimme helppokäyttöisen sisällönhallintajärjestelmän, kuten WordPressin, jotta voit päivittää verkkosivustosi sisältöä itse ilman teknistä osaamista.
        </p>
      </div>

      <div className="p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
        <h3 className="mb-4 text-2xl font-semibold text-blue-600">Ylläpito ja tuki</h3>
        <p className="text-gray-700">
          Tarjoamme jatkuvaa ylläpitoa ja tukea verkkosivustollesi, jotta se pysyy ajan tasalla ja toimii moitteettomasti. Voit keskittyä liiketoimintaasi, kun me huolehdimme teknisistä yksityiskohdista.
        </p>
      </div>
    </div>
  </div>
</section>



<section id="keyword-research" className="py-20 bg-white">
  <div className="container px-4 mx-auto max-w-7xl">
    <div className="mb-12 text-center">
      <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        Tekninen osaaminen ja viimeisimmät teknologiat
      </h2>
      <p className="max-w-3xl mx-auto text-lg font-medium text-gray-700">
        Varmistan, että verkkosivustosi on rakennettu parhaiden käytäntöjen mukaisesti ja hyödyntää uusimpia teknologioita.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      <div className="p-8 transition-shadow duration-300 bg-gray-100 rounded-lg shadow-md hover:shadow-lg">
        <h3 className="mb-4 text-2xl font-semibold text-green-600">Mainos seuranta koodin asentaminen</h3>
        <p className="text-gray-700">
          Asennan verkkosivustollesi tarvittavat seurantakoodit, jotta voimme mitata tarkasti mainostesi tehokkuutta ja tehdä dataan perustuvia päätöksiä optimoinnin suhteen.
        </p>
      </div>
      <div className="p-8 transition-shadow duration-300 bg-gray-100 rounded-lg shadow-md hover:shadow-lg">
        <h3 className="mb-4 text-2xl font-semibold text-green-600">Koodiupotukset</h3>
        <p className="text-gray-700">
          Integroin verkkosivustollesi tarvittavat koodit, kuten Google Analyticsin ja Google Tag Managerin, jotta voimme seurata kävijöiden käyttäytymistä ja kerätä arvokasta tietoa mainonnan optimointiin.
        </p>
      </div>

      <div className="p-8 transition-shadow duration-300 bg-gray-100 rounded-lg shadow-md hover:shadow-lg">
        <h3 className="mb-4 text-2xl font-semibold text-green-600">Nettisivujen optimointi</h3>
        <p className="text-gray-700">
          Varmistan, että verkkosivustosi on optimoitu Google Mainontaa varten. Tämä sisältää muun muassa laskeutumissivujen optimoinnin, nopeuden parantamisen ja mobiiliystävällisyyden varmistamisen.
        </p>
      </div>
      <div className="p-8 transition-shadow duration-300 bg-gray-100 rounded-lg shadow-md hover:shadow-lg">
        <h3 className="mb-4 text-2xl font-semibold text-green-600">Domain hosting ja DNS-asetusten hallinta</h3>
        <p className="text-gray-700">
          Autan sinua domainin hankinnassa ja DNS-asetusten määrittämisessä, jotta verkkosivustosi on oikein yhdistetty Google Mainontaan ja muihin tarvittaviin palveluihin.
        </p>
      </div>
    </div>
  </div>
</section>

{/* References Section (same as before) */}
<section id="references" className="py-20 bg-gray-50">
  <div className="container px-4 mx-auto max-w-7xl">
    <h2 className="mb-10 text-4xl font-extrabold tracking-tight text-center text-gray-900 sm:text-5xl md:text-6xl">
      Menestystarinoita Google Mainonnan avulla
    </h2>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Reference Cards */}
      {[
        {
          companyName: "Tiemerkintä Oy",
          imageSrc: "https://mleuki3qgkxz.i.optimole.com/co-ZpyQ--Izsw3uZ/w:auto/h:auto/q:auto/id:d8b51307aa693232ac1acf978f6beeb4/directUpload/1.jpg",
          description: "Nostimme tiemerkinnän hakusanat kärkeen heille kriittisimmissä avainsanoissa. Näin varmistimme, että kohderyhmä löytää Tiemerkinnän ensimmäisenä etsiessään ratkaisua.",
        },
        {
          companyName: "Viella Parturi",
          imageSrc: "https://mleuki3qgkxz.i.optimole.com/co-ZpyQ-SUfxJvtO/w:auto/h:auto/q:auto/id:d056659772151e7cb48f9c1ac2ee48c9/directUpload/3.jpg",
          description: "Nostimme paikallisen parturin hakutuloksia Googlessa. Keskityimme edullisiin mainoshuutoihin, joka mahdollisti kattavan näkyvyyden edullisesti.",
        },
         {
          companyName: "Kasvu Open Oy",
          imageSrc: "https://mleuki3qgkxz.i.optimole.com/3Jpmpuk-51owUpz3/w:auto/h:auto/q:auto/id:07fa94cc620acbaa87fa602ec9923700/https://172-234-99-242.ip.linodeusercontent.com/2.jpg",
          description: "Rakensimme YouTube mainosvideokampanjan kaikille Kasvupolku palvelusta kiinnostuneille yrityksille edistämään osallistujien päätösprosessia.",
        },
        {
          companyName: "Vilu Works Oy",
          imageSrc: "https://mleuki3qgkxz.i.optimole.com/3Jpmpuk-gg8u77vA/w:auto/h:auto/q:auto/id:b5fd13403c2396f5efc123609223804a/https://172-234-99-242.ip.linodeusercontent.com/4.jpg",
          description: "Nostimme ViluWorksin palveluita esille suorissa Google hauissa Uudenmaan alueella. Lvi laitteiden huoltoon ja hankintaan liittyvissä hauissa.",
        },
        {
          companyName: "Helposti pariterapiaan",
          imageSrc: "https://mleuki3qgkxz.i.optimole.com/3Jpmpuk-IliYXSEP/w:auto/h:auto/q:auto/id:74ec47bcda9dff1c47fcd8373d68fc31/https://172-234-99-242.ip.linodeusercontent.com/5.jpg",
          description: "Lanseerasimme uuden verkkopalvelun Google hakukampanjan avulla. Loimme relevantit mainokset tärkeimpien avainsanojen ympärille. Nyt Google mainonta tuottaa tasaiseen tahtiin varauksia.",
        },
        {
          companyName: "Idair Oy",
          imageSrc: "https://mleuki3qgkxz.i.optimole.com/3Jpmpuk-R9lrMLbw/w:auto/h:auto/q:auto/id:abdf680654fb1811d168bc24bdef45ad/https://172-234-99-242.ip.linodeusercontent.com/6.jpg",
          description: "Tuotin usean vuoden ajan liidejä IV-alan yritykselle Google hakusanakampanjan sekä laskeutumissivun avulla. Laskeutumissivulla oli hintalaskuri ilmanvaihdon puhdistukselle.",
        },
      ].map((reference, index) => (
        <div key={index} className="relative overflow-hidden bg-white rounded-lg shadow-lg">
          <img 
            src={reference.imageSrc}
            alt={reference.companyName}
            className="object-cover w-full h-48"
          />

          <div className="p-8">
            <h3 className="mb-1 text-xl font-bold text-gray-900">{reference.companyName}</h3>
            <p className="mb-3 text-gray-600">{reference.description}</p>
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-white via-white to-transparent">
              <div className="flex items-center pl-3 rating">
                {/* You can replace these with actual star rating components */}
                {Array.from({ length: 5 }, (_, i) => (
                  <input
                    key={i}
                    type="radio"
                    name={`rating-${
                        index}`}
                        className="bg-yellow-400 mask mask-star-2"
                        defaultChecked={i === 4} // 5-star rating by default
                        />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        </div>
          </div>
        </div>
      </Container> 
    </Layout>
  ); 
};

export default webkehitys