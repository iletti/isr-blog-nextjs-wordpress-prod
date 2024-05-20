import Head from "next/head";
import Layout from "../../components/layout";
import OtaYhteytta from "../../components/OtaYhteytta";
import Container from "../../components/container";

const HakukoneoptimointiPalvelu = ({ preview }) => {
  const pageTitle = "Hakukoneoptimointipalvelut (SEO) yrityksellesi | Ilari Schmidt";
  const pageDescription =
    "Paranna näkyvyyttäsi hakukoneissa Ilari Schmidtin hakukoneoptimointipalvelun avulla. Kasvata orgaanista liikennettä ja saavuta parempia tuloksia.";

  return (
    <Layout preview={preview} pageTitle={pageTitle} pageDescription={pageDescription}>
      <Head>
        <meta name="keywords" content="hakukoneoptimointi, SEO, hakukonenäkyvyys, Google, orgaaninen liikenne" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
      </Head>

      <Container>
        <div className="py-8 prose lg:prose-xl"> {/* Added prose class for better readability */}
        <div className="py-12 bg-white lg:py-24">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="mb-12 text-center lg:mb-20">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
      Hakukoneoptimointipalvelut (SEO) yrityksellesi
      </h1>
      <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
      Hakukoneoptimointi, tuttavallisemmin SEO, on kuin digitaalinen käyntikorttisi. Se on avain siihen, että potentiaaliset asiakkaasi löytävät yrityksesi verkosta silloin, kun he etsivät tarjoamiasi palveluita tai tuotteita. Ilman tehokasta SEO:ta yrityksesi jää helposti kilpailijoiden jalkoihin hakukoneiden tuloksissa.
      </p>
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
      <p className="pt-4">Intohimoni on auttaa suomalaisia yrityksiä kasvamaan ja menestymään digitaalisessa maailmassa. Tarjoan kokonaisvaltaisia hakukoneoptimointipalveluita, jotka on räätälöity juuri sinun yrityksesi tarpeisiin. Olipa tavoitteenasi lisätä verkkosivustosi liikennettä, parantaa brändisi tunnettuutta tai kasvattaa myyntiäsi, minulla on osaaminen ja kokemus auttaa sinua saavuttamaan tavoitteesi.</p>
    </div>

    <div className="grid gap-10 lg:grid-cols-3">
      {/* Why Choose Us Section */}
     
      <div className="p-8 rounded-lg shadow-md bg-gray-50">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">
        Orgaaninen liikenne:
        </h2>
        <p className="text-gray-600">
        SEO auttaa houkuttelemaan sivustollesi kävijöitä, jotka ovat aidosti kiinnostuneita siitä, mitä tarjoat. Tämä tarkoittaa parempaa sitoutumista ja korkeampaa konversioastetta.
        </p>
      </div>
      <div className="p-8 rounded-lg shadow-md bg-gray-50">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">
        Kilpailuetu:
        </h2>
        <p className="text-gray-600">
        Hakukonenäkyvyyden parantaminen auttaa sinua erottumaan kilpailijoista ja vahvistamaan asemaasi markkinoilla.
        </p>
      </div>
      <div className="p-8 rounded-lg shadow-md bg-gray-50">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">
        Kustannustehokkuus:
        </h2>
        <p className="text-gray-600">
        SEO on pitkällä tähtäimellä kustannustehokkaampi tapa hankkia liikennettä kuin esimerkiksi maksettu mainonta.
        </p>
      </div> <div className="p-8 rounded-lg shadow-md bg-gray-50">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">
        Brändin rakentaminen:
        </h2>
        <p className="text-gray-600">
        Hyvä hakukonesijoitus lisää yrityksesi uskottavuutta ja luotettavuutta potentiaalisten asiakkaiden silmissä.
        </p>
      </div> <div className="p-8 rounded-lg shadow-md bg-gray-50">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">
        Parempi käyttökokemus:
        </h2>
        <p className="text-gray-600">
        SEO-optimointi sisältää myös sivuston teknisen toimivuuden ja käyttäjäystävällisyyden parantamisen, mikä johtaa parempaan käyttökokemukseen ja tyytyväisempiin asiakkaisiin.
        </p>
      </div>
      <div className="p-8 rounded-lg shadow-md bg-gray-50">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">
        SEO tuo vakautta:
        </h2>
        <p className="text-gray-600">
        Korkea SEO sijoittuminen tarkoittaa vakaata liikennettä sivustollesi, eikä sinun ei tarvitse ylläpitää sitä rahalla, kuten mainonnassa.
        </p>
      </div>
      {/* Add more benefit boxes as needed */}
    </div>

    {/* Services Section */}
    <div className="mt-12 lg:mt-20">
      <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">SEO Palvelut</h2>
      <p className="mb-6 text-gray-600">
      Tarjoan kattavan valikoiman hakukoneoptimointipalveluita, jotka auttavat yritystäsi menestymään verkossa:
      </p>
      <ul className="pl-4 mb-8 text-gray-600 list-disc list-inside">
        <li>
          <strong>Avainsana-analyysi:</strong>
          Tunnistan tarkasti ne avainsanat, joilla kohderyhmäsi etsii tietoa ja palveluja. Näin varmistan, että sivustosi näkyy juuri oikeille ihmisille.
        </li>
        <li>
          <strong>Sivuston tekninen optimointi:</strong>
          Huolehdin siitä, että sivustosi on hakukoneiden helposti löydettävissä ja indeksoitavissa. Optimoin sivuston nopeuden ja mobiiliystävällisyyden, mikä parantaa käyttäjäkokemusta ja hakukonesijoituksia.
        </li>
        <li>
          <strong>Sisällön optimointi:</strong>
          Luon ja optimoin korkealaatuista sisältöä, joka on sekä hakukoneystävällistä että kiinnostavaa lukijoille. Hyvä sisältö houkuttelee kävijöitä ja kannustaa heitä viettämään aikaa sivustollasi.</li>
        <li>
          <strong>Linkkien rakentaminen:</strong>
          Laadukkaat linkit muilta sivustoilta ovat tärkeä osa hakukoneoptimointia. Hankin yrityksellesi arvokkaita linkkejä luotettavilta sivustoilta, mikä vahvistaa sivustosi auktoriteettia hakukoneiden silmissä.
        </li>
        <li>
          <strong>Raportointi ja seuranta:</strong>
          Toimitan sinulle säännöllisiä raportteja, joista näet selkeästi, miten hakukoneoptimointityö vaikuttaa sivustosi näkyvyyteen ja liikenteeseen. Seuraan jatkuvasti tuloksia ja teen tarvittaessa muutoksia varmistaakseni, että saat parhaan mahdollisen hyödyn palveluista.</li>
      </ul>
    </div>

    {/* Why Choose Us Section */}
    <div className="mt-12 lg:mt-20">
      <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Miksi valita meidät?</h2>
      <ul className="pl-4 mb-8 text-gray-600 list-disc list-inside">
        <li>
          <strong>Kokemus:</strong>
          Minulla on vankka yli 5 vuoden kokemus SEO-alalta ja olen auttanut useita suomalaisia yrityksiä saavuttamaan näkyvyyttä hakukoneissa ja kasvattamaan liiketoimintaansa
        </li>
        <li>
          <strong>Asiantuntemus:</strong>
          Pidän itseni ajan tasalla alan uusimmista trendeistä ja tekniikoista. Olen sitoutunut jatkuvaan kouluttautumiseen, jotta voin tarjota asiakkailleni parasta mahdollista palvelua.
        </li>
        <li>
          <strong>Räätälöidyt ratkaisut:</strong>
          Ymmärrän, että jokainen yritys on erilainen. Siksi en tarjoa kaikille samaa pakettia, vaan räätälöin palveluni juuri sinun yrityksesi tarpeisiin ja tavoitteisiin.
        </li>
        <li>
          <strong>Läpinäkyvyys:</strong>
          Uskon avoimeen ja rehelliseen viestintään. Raportoin säännöllisesti tuloksista ja pidän sinut ajan tasalla siitä, miten sivustosi menestyy hakukoneissa. Voit luottaa siihen, että tiedät aina, mitä teen ja miksi.
        </li>
        <li>
          <strong>Asiakastyytyväisyys:</strong>
          Tyytyväiset asiakkaat ovat paras suositukseni. Olen iloinen siitä, että olen voinut auttaa useampia yrityksiä saavuttamaan menestystä verkossa, ja haluan auttaa myös sinua.
        </li>
      </ul>
    </div>

  </div>
</div>
</div>
      </Container>
    </Layout>
  );
};

export default HakukoneoptimointiPalvelu;
