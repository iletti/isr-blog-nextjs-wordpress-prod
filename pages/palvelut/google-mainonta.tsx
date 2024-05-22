import Head from "next/head";
import Layout from "../../components/layout";
import OtaYhteytta from "../../components/OtaYhteytta";
import Container from "../../components/container";

const GoogleMainontaPalvelu = ({ preview }) => {
  const pageTitle = "Google Mainonta (Google Ads) palvelut yrityksellesi | Ilari Schmidt";
  const pageDescription =
    "Kasvata liiketoimintaasi kohdennetulla mainonnalla Google Haussa ja Display-verkostossa. Ilari Schmidtin Google Ads -palvelut auttavat sinua saavuttamaan tuloksia.";

  return (
    <Layout preview={preview} pageTitle={pageTitle} pageDescription={pageDescription}>
      <Head>
        <meta name="keywords" content="Google Mainonta, Google Ads, PPC-mainonta, hakukonemainonta, display-mainonta, remarketing" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
      </Head>

      <Container>
        <div className="py-8 prose lg:prose-xl">
        <div className="py-12 bg-white lg:py-24">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="mb-12 text-center lg:mb-20">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        Google Mainonta (Google Ads) palvelut yrityksellesi
      </h1>
      <p className="max-w-md mx-auto mt-3 mb-5 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Haluatko näkyä Googlen hakutulosten kärjessä juuri silloin, kun potentiaaliset asiakkaasi etsivät tarjoamiasi palveluita? Google Mainonta on tehokas tapa tavoittaa kohderyhmäsi ja kasvattaa liiketoimintaasi nopeasti.
      </p>
      <div className="w-full px-4 overflow-hidden ">
                  <iframe
                    className="w-full rounded-lg aspect-video drop-shadow-lg "
                    src="https://www.youtube.com/embed/3Cx881v90wM" 
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
      <p className="pt-4">Olen erikoistunut Google Mainontaan ja autan sinua luomaan tuloksellisia mainoskampanjoita, jotka tuovat lisää kävijöitä verkkosivuillesi, liidejä ja myyntiä.</p>
    </div>

    <div className="grid gap-10 mb-5 lg:grid-cols-3">
      {/* Why Choose Google Ads Section */}
      <div className="p-8 rounded-lg shadow-md bg-gray-50">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">
          Tavoita oikea kohderyhmä:
        </h2>
        <p className="text-gray-600">
          Google Mainonta mahdollistaa mainostesi kohdentamisen tarkasti kiinnostuksen kohteiden, hakusanojen ja demografisten tietojen perusteella.
        </p>
      </div>
      <div className="p-8 rounded-lg shadow-md bg-gray-50">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">
          Nopeaa näkyvyyttä:
        </h2>
        <p className="text-gray-600">
          Toisin kuin SEO, Google Mainonta tarjoaa välitöntä näkyvyyttä Googlessa. Mainoksesi voivat näkyä hakutulosten kärjessä jo muutamassa tunnissa.
        </p>
      </div>
      <div className="p-8 rounded-lg shadow-md bg-gray-50">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">
          Mitattavat tulokset:
        </h2>
        <p className="text-gray-600">
          Google Ads tarjoaa kattavat raportit mainostesi tehokkuudesta. Näet tarkasti, mitkä mainokset toimivat parhaiten ja voit optimoida kampanjoitasi jatkuvasti.
        </p>
      </div>
    </div>

    {/* Services Section */}
    <section id="campaign-planning" className="py-20 bg-gradient-to-br from-blue-50 to-white">
  <div className="container px-4 mx-auto max-w-7xl">
    <div className="mb-12 text-center">
      <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        Mainoskampanjat räätälöidysti yrityksesi tavoitteisiin
      </h2>
      <p className="max-w-3xl mx-auto text-lg font-medium text-gray-700">
        Luomme yhdessä vahvan pohjan menestyksellesi ennen mainosten julkaisua.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      <div className="p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
        <h3 className="mb-4 text-2xl font-semibold text-blue-600">Tavoitteiden kartoitus</h3>
        <p className="text-gray-700">
          Selvitämme yhdessä, mitä haluat saavuttaa Google Mainonnalla. Onko tavoitteenasi lisätä verkkosivustosi liikennettä, hankkia lisää liidejä tai kasvattaa myyntiä?
        </p>
      </div>

      <div className="p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
        <h3 className="mb-4 text-2xl font-semibold text-blue-600">Kohderyhmien määrittely</h3>
        <p className="text-gray-700">
          Tunnistamme tarkasti ne ihmiset, joille haluat mainostaa. Käytämme demografisia tietoja, kiinnostuksen kohteita ja muita tekijöitä varmistaaksemme, että mainoksesi tavoittavat oikean yleisön.
        </p>
      </div>

      <div className="p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
        <h3 className="mb-4 text-2xl font-semibold text-blue-600">Kampanjasuunnitelma</h3>
        <p className="text-gray-700">
          Laadimme yksityiskohtaisen suunnitelman, joka sisältää budjetin, aikataulun ja mainosmuodot (hakuverkosto, Display-verkosto, YouTube jne.). Varmistamme, että kampanjat ovat linjassa yrityksesi brändin ja tavoitteiden kanssa.
        </p>
      </div>

      <div className="p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
        <h3 className="mb-4 text-2xl font-semibold text-blue-600">Huolellinen toteutus</h3>
        <p className="text-gray-700">
          Toteutamme kampanjat ammattitaidolla ja huolellisuudella. Seuraamme tuloksia jatkuvasti ja teemme tarvittaessa muutoksia varmistaaksemme, että saat parhaan mahdollisen hyödyn investoinnistasi.
        </p>
      </div>
    </div>
  </div>
</section>



<section id="keyword-research" className="py-20 bg-white">
  <div className="container px-4 mx-auto max-w-7xl">
    <div className="mb-12 text-center">
      <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        Kohdenna oikein – avainsanojen voimalla
      </h2>
      <p className="max-w-3xl mx-auto text-lg font-medium text-gray-700">
        Avainsanat ovat Google Mainonnan perusta. Ne määrittelevät, milloin ja kenelle mainoksesi näytetään.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      <div className="p-8 transition-shadow duration-300 bg-gray-100 rounded-lg shadow-md hover:shadow-lg">
        <h3 className="mb-4 text-2xl font-semibold text-blue-600">Perusteellinen avainsanatutkimus</h3>
        <p className="text-gray-700">
          Teen perusteellisen avainsanatutkimuksen, jossa hyödynnän alan parhaita työkaluja ja omaa kokemustani hakukoneoptimoinnista (SEO) ja Google Mainonnasta.
        </p>
      </div>

      <div className="p-8 transition-shadow duration-300 bg-gray-100 rounded-lg shadow-md hover:shadow-lg">
        <h3 className="mb-4 text-2xl font-semibold text-blue-600">Kohderyhmän tunnistaminen</h3>
        <p className="text-gray-700">
          Tunnistan ne hakusanat ja -termit, joita potentiaaliset asiakkaasi käyttävät etsiessään tarjoamiasi tuotteita tai palveluita.
        </p>
      </div>

      <div className="p-8 transition-shadow duration-300 bg-gray-100 rounded-lg shadow-md hover:shadow-lg">
        <h3 className="mb-4 text-2xl font-semibold text-blue-600">Oikeiden hakujen tavoittaminen</h3>
        <p className="text-gray-700">
          Varmistan, että mainoksesi näkyvät juuri oikeissa hauissa, jolloin tavoitat ihmiset, jotka ovat aidosti kiinnostuneita siitä, mitä tarjoat.
        </p>
      </div>

      <div className="p-8 transition-shadow duration-300 bg-gray-100 rounded-lg shadow-md hover:shadow-lg">
        <h3 className="mb-4 text-2xl font-semibold text-blue-600">Valmiiden ostajien houkuttelu</h3>
        <p className="text-gray-700">
          Optimoimalla avainsanat oikein, houkuttelemme mainoksilla niitä, jotka ovat jo valmiita tekemään ostopäätöksen.
        </p>
      </div>
    </div>
  </div>
</section>




<section id="ad-copywriting" className="py-20 bg-gradient-to-br from-purple-50 to-white">
  <div className="container px-4 mx-auto max-w-7xl">
    <div className="mb-12 text-center">
      <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        Houkuttelevat mainostekstit, jotka saavat klikkauksia
      </h2>
      <p className="max-w-3xl mx-auto text-lg font-medium text-gray-700">
        Mainosteksti on mainoksesi käyntikortti. Varmistan, että se tekee lähtemättömän vaikutuksen.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      <div className="p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
        <h3 className="mb-4 text-2xl font-semibold text-purple-600">Selkeää ja ytimekästä tekstiä</h3>
        <p className="text-gray-700">
          Laadin mainostekstit, jotka ovat selkeitä, ytimekkäitä ja helposti ymmärrettäviä. Vältän turhaa jargon-kieltä ja keskityn olennaiseen.
        </p>
      </div>

      <div className="p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
        <h3 className="mb-4 text-2xl font-semibold text-purple-600">Kohderyhmän huomioiminen</h3>
        <p className="text-gray-700">
          Huomioin kohderyhmäsi kiinnostuksen kohteet, tarpeet ja ongelmat. Käytän kieltä, joka resonoi heidän kanssaan ja saa heidät tuntemaan, että mainokseni on tarkoitettu juuri heille.
        </p>
      </div>

      <div className="p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
        <h3 className="mb-4 text-2xl font-semibold text-purple-600">Erottuvat mainokset</h3>
        <p className="text-gray-700">
          Luon mainostekstejä, jotka erottuvat kilpailijoiden mainoksista. Käytän luovia otsikoita, vakuuttavia argumentteja ja houkuttelevia tarjouksia.
        </p>
      </div>

      <div className="p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
        <h3 className="mb-4 text-2xl font-semibold text-purple-600">Tehokkaat toimintakehotukset</h3>
        <p className="text-gray-700">
          Käytän tehokkaita toimintakehotuksia (CTA), jotka ohjaavat käyttäjät toimimaan haluamallasi tavalla. Olipa tavoitteesi saada heidät klikkaamaan mainosta, täyttämään lomakkeen tai tekemään ostoksen, CTA on avainasemassa.
        </p>
      </div>
    </div>
  </div>
</section>




<section id="campaign-optimization" className="py-20 bg-white">
  <div className="container px-4 mx-auto max-w-7xl">
    <div className="mb-12 text-center">
      <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        Jatkuva optimointi – parhaan tuoton takaamiseksi
      </h2>
      <p className="max-w-3xl mx-auto text-lg font-medium text-gray-700">
        Google Mainonta vaatii jatkuvaa huomiota ja hienosäätöä parhaan mahdollisen tuloksen saavuttamiseksi.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      <div className="p-8 transition-shadow duration-300 bg-gray-100 rounded-lg shadow-md hover:shadow-lg">
        <h3 className="mb-4 text-2xl font-semibold text-green-600">Päivittäinen seuranta</h3>
        <p className="text-gray-700">
          Seuraan mainoskampanjoidesi tehokkuutta päivittäin käyttäen Googlen tarjoamia analytiikkatyökaluja. Tunnistan nopeasti mahdolliset ongelmakohdat ja mahdollisuudet parantaa tuloksia.
        </p>
      </div>

      <div className="p-8 transition-shadow duration-300 bg-gray-100 rounded-lg shadow-md hover:shadow-lg">
        <h3 className="mb-4 text-2xl font-semibold text-green-600">Dataan perustuvat päätökset</h3>
        <p className="text-gray-700">
          Teen kaikki päätökset mainosten optimoinnista kerätyn datan perusteella. Tämä varmistaa, että jokainen muutos perustuu faktoihin ja parantaa kampanjoidesi tehokkuutta.
        </p>
      </div>

      <div className="p-8 transition-shadow duration-300 bg-gray-100 rounded-lg shadow-md hover:shadow-lg">
        <h3 className="mb-4 text-2xl font-semibold text-green-600">Kokonaisvaltainen optimointi</h3>
        <p className="text-gray-700">
          Optimoin mainoksiasi monipuolisesti, mukaan lukien mainostekstit, avainsanat, hintatarjoukset, kohdentaminen ja laskeutumissivut. Tavoitteenani on löytää paras mahdollinen yhdistelmä, joka tuottaa parhaan tuoton investoinnillesi (ROI).
        </p>
      </div>

      <div className="p-8 transition-shadow duration-300 bg-gray-100 rounded-lg shadow-md hover:shadow-lg">
        <h3 className="mb-4 text-2xl font-semibold text-green-600">Säännöllinen raportointi</h3>
        <p className="text-gray-700">
          Toimitan sinulle säännöllisiä raportteja, joissa esittelen kampanjoidesi tulokset selkeästi ja ymmärrettävästi. Näin tiedät aina, miten mainontasi sujuu ja mitä toimenpiteitä olemme tehneet tulosten parantamiseksi.
        </p>
      </div>
    </div>
  </div>
</section>




<section id="remarketing" className="py-20 bg-gradient-to-br from-red-50 to-white">
  <div className="container px-4 mx-auto max-w-7xl">
    <div className="mb-12 text-center">
      <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        Tavoita uudelleen – Remarketingin avulla
      </h2>
      <p className="max-w-3xl mx-auto text-lg font-medium text-gray-700">
        Remarketing on tehokas tapa muistuttaa potentiaalisia asiakkaita yrityksestäsi ja tuotteistasi sen jälkeen, kun he ovat poistuneet verkkosivustoltasi.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      <div className="p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
        <h3 className="mb-4 text-2xl font-semibold text-red-600">Mitä remarketing tarkoittaa?</h3>
        <p className="text-gray-700">
          Remarketing tarkoittaa mainosten näyttämistä ihmisille, jotka ovat aiemmin vierailleet verkkosivustollasi. Näin voit pitää yrityksesi heidän mielessä ja houkutella heidät takaisin tekemään ostopäätöksen.
        </p>
      </div>

      <div className="p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
        <h3 className="mb-4 text-2xl font-semibold text-red-600">Miten remarketing toimii?</h3>
        <p className="text-gray-700">
          Asennan verkkosivustollesi remarketing-koodin, joka lisää kävijät remarketing-yleisöön. Kun nämä kävijät vierailevat muilla verkkosivuilla tai sovelluksissa, jotka näyttävät Google-mainoksia, heille voidaan näyttää sinun mainoksiasi.
        </p>
      </div>

      <div className="p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
        <h3 className="mb-4 text-2xl font-semibold text-red-600">Remarketingin hyödyt</h3>
        <ul className="text-gray-700 list-disc list-inside">
          <li>Lisää bränditietoisuutta</li>
          <li>Parantaa konversioastetta</li>
          <li>Tavoittaa lämpimän yleisön</li>
          <li>Kustannustehokas tapa mainostaa</li>
        </ul>
      </div>

      <div className="p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
        <h3 className="mb-4 text-2xl font-semibold text-red-600">Remarketing-strategiat</h3>
        <p className="text-gray-700">
          Suunnittelen ja toteutan remarketing-kampanjoita, jotka on räätälöity yrityksesi tavoitteisiin ja kohderyhmiin. Voimme esimerkiksi kohdentaa mainoksia ihmisille, jotka ovat hylänneet ostoskorinsa, katsoneet tiettyjä tuotteita tai palveluita, tai vierailleet tietyillä sivuilla.
        </p>
      </div>
    </div>
  </div>
</section>





<section id="references" className="py-20">
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
        // ... add more reference objects here
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
                    name={`rating-${index}`}
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

export default GoogleMainontaPalvelu;
