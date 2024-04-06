// about-me.tsx
import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";
import Reference from "../components/reference";

const About = ({ preview }) => {
  return (
    <Layout preview={preview}>
      <Head>
        <title>
          Tietoa minusta - Google Ads spesialisti kaikkiin tarpeisiisi
        </title>
        <meta
          name="description"
          content="Tutustu osaamiseni ja siihen, kuinka voin auttaa yritystäsi näkymään paremmin ostaville asiakkaillesi"
        />
      </Head>

      <Container>
        <div className="mx-auto my-32 text-center ">
          <div >
            <h1 className="mb-5 text-5xl font-bold">Tietoa minusta</h1>
          </div>
        </div>

        <div className="mx-auto my-32">
          <h2 className="mb-6 text-4xl font-bold text-center">
             Google Ads Hakukoneseppä ⚒️ Ilari Schmidt
          </h2>
          <div className="flex flex-wrap items-center justify-center">
            <img
              src="https://mleuki3qgkxz.i.optimole.com/co-ZpyQ-fmwW6snM/w:auto/h:auto/q:auto/id:22e0e7b17a8f9d88025be28769af03a6/directUpload/Brown-and-Light-Brown-Circle-Framed-Instagram-Profile-Picture.png"
              alt="Professional portrait"
              className="w-48 h-48 mb-6 rounded-full shadow-xl lg:mb-0 lg:mr-8"
            />
            <p className="max-w-2xl text-xl">
              Yli kymmenen vuoden kokemuksella digitaalisessa markkinoinnissa
              osaamiseni keskittyy luomaan ja hallinnoimaan tuloksellisia
              Google Ads -kampanjoita. Google Ads osaajana tavoitteenani on auttaa yrityksiä saavuttamaan täyden potentiaalinsa
              verkossa. Google kampanjoiden tukena toteutan hakukonoptimointia, analytiikan rakentamista ja ylläpitopalveluita.
              <br />
              <br />
              Olipa tarpeesi bränditietoisuuden lisääminen tai
              myynnin kasvattaminen, lähestymistapani on räätälöidä
              toteutus vastaamaan yrityksesi yksilöllisiä tavoitteita.
            </p>
          </div>
        </div>


<div className="mx-auto my-32 ">
 <h2 className="mb-6 text-4xl font-bold text-center">Osaaminen ja suosituksia</h2>
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-12 sm:col-span-5">
                  <ul className="pl-5 space-y-2 text-xl list-disc">
                    <li>Sertifioitu Google Ads asiantuntija</li>
                    <li>Osaaminen kampanjastrategiassa ja optimoinnissa</li>
                    <li>Todistetusti onnistunut kasvattamaan asiakkaiden sijoitetun pääoman tuottoa (ROI)</li>
                    <li>Vahvat analyyttiset taidot monimutkaisten tietojen tulkitsemiseen</li>
                    <li>Ajan tasalla viimeisimmistä digitaalisen markkinoinnin trendeistä</li>
                    <li>Työkokemusta löytyy yhteensä 3 vuottaa inhouse työntekijänä digimarkkinoijana ja 7 vuotta yrittäjänä.</li>
                  </ul>
                </div>
                
                <div className="col-span-12 sm:col-span-8 sm:col-start-7 ">
                    <Reference />
                </div>
              </div>

</div>



<div className="mx-auto my-32">
<h2 className="mb-10 text-4xl font-bold text-center">Taustatietoa</h2>
<ul className=" timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
    <li>
      <div className="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
      </div>
      <div className="mb-10 timeline-start md:text-end">
        <time className="font-mono italic">2014</time>
        <div className="text-lg font-black">Yrittäjyys ja digimarkkinointi</div>
        Vuonna 2014 perustin opintojen ohella ensimmäisen yritykseni ja matkani digimarkkinoinnin parissa alkoi. Näinä vuosina tuli toteutettua useita projekteja erilaisten yritysten kanssa aina b2b palveluista kuluttajapuolelle. 
      </div>
      <hr/>
    </li>
    <li>
      <hr />
      <div className="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
      </div>
      <div className="mb-10 timeline-end">
        <time className="font-mono italic">2017</time>
        <div className="text-lg font-black">Mainostoimisto perustetaan</div>
        Valmistuttuani tradenomiksi Tiimiakatemialta liityin osakkaaksi Populentiaan ja aloimme tuottaa digimarkkinointipalveluja yrityksille. Vastasin tuotantotiimin vetämisestä ja palvelukehityksestä. Arki meni erilaisten digimarkkinointikampanjoiden toteuttamisessa asiakasrajapinnassa.
      </div>
      <hr />
    </li>
    <li>
      <hr />
      <div className="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
      </div>
      <div className="mb-10 timeline-start md:text-end">
        <time className="font-mono italic">2022</time>
        <div className="text-lg font-black">Inhouse Digimarkkinointi</div>
        Päätimme muuttaa Populentian palveluntarjontaa luontaisen kasvun myötä SaaS-nettisivupalvelulle ja samalla siirryin operatiivisesta arjesta työntekijäksi. Alotin Kasvu Openilla digimarkkinointivastaavana, eli oma polku jatkui vahvasti digimarkkinoinnin parissa. 
      </div>
      <hr />
    </li>
    <li>
      <hr />
      <div className="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
      </div>
      <div className="mb-10 timeline-end">
        <time className="font-mono italic">2022</time>
        <div className="text-lg font-black">Google Ads Freelance toiminta alkaa</div>
        Yrittäjätausta ja sen myötä rakentuneet verkostot ohjasivat minua toteuttamaan sivutoimisena digimarkkinointiprojekteja työn ohella. Toteutin erilaisia Google hakusanamainonta projekteja vanhoille asiakkaille ja Populentian nettisivuasiakkaille.
      </div>
      <hr />
    </li>
    <li>
      <hr />
      <div className="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
      </div>
      <div className="mb-10 timeline-start md:text-end">
        <time className="font-mono italic">2024</time>
        <div className="text-lg font-black">Google Ads Hakukoneseppä Ilari Schmidt</div>
       Freelancer toiminta on nyt kehittynyt sille asteelle, että halusin ns. virallistaa toiminnan ja siitä syntyi yllä oleva nimi. Toimintaani ohjaa intohimo etenkin Google markkinointiin ja ilo auttaa kasvua hakevia yrityksiä suhteellisen inhimillisin hinnoin.  
      </div>
    </li>
  </ul>

</div>


      </Container>
    </Layout>
  );
};

export default About;
