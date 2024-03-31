// about-me.tsx
import Head from 'next/head';
import Layout from '../components/layout';
import Container from '../components/container';
import Reference from '../components/reference';

const About = ({ preview }) => {
  return (
    <Layout preview={preview}>
      <Head>
        <title>Tietoa minusta - Google Ads spesialisti kaikkiin tarpeisiisi</title>
        <meta name="description" content="Tutustu osaamiseni ja siihen, kuinka voin auttaa yritystäsi näkymään paremmin ostaville asiakkaillesi" />
      </Head>

      <Container>
        <div className="hero min-h-screen  bg-[url('https://mleuki3qgkxz.i.optimole.com/co-ZpyQ-mBeyOIfS/w:auto/h:auto/q:auto/id:c4d7f9e549c6bb5836a199029a0d5ce7/directUpload/vihreakuula_Illustrate_a_strategic_planning_session_for_Google__fc019ed4-eaa4-43f7-b8fc-c7544d245d13.png')]" style={{backgroundPosition: 'center'}}>
          <div className=" bg-opacity-60"></div>
          <div className="hero-content text-center glass">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Tietoa minusta</h1>
              <p className="mb-5 font-bold">  ⚒️ Hakukoneseppä Ilari Schmidt.</p>
            </div>
          </div>
        </div>
        <div className="py-10">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <h2 className="text-center text-4xl font-bold mb-6">Ammatillista taustatietoa</h2>
              <div className="flex flex-wrap justify-center items-center">
                <img src="https://mleuki3qgkxz.i.optimole.com/co-ZpyQ-fmwW6snM/w:auto/h:auto/q:auto/id:22e0e7b17a8f9d88025be28769af03a6/directUpload/Brown-and-Light-Brown-Circle-Framed-Instagram-Profile-Picture.png" alt="Professional portrait" className="rounded-full w-48 h-48 shadow-xl mb-6 lg:mb-0 lg:mr-8" />
                <p className="text-xl max-w-2xl">
        Yli kymmenen vuoden kokemuksella digitaalisessa markkinoinnissa erikoisosaamiseni keskittyy luomaan ja hallinnoimaan tuloksellisia Google Ads -kampanjoita. Sertifioituna Google Ads -asiantuntijana olen auttanut useita yrityksiä saavuttamaan täyden potentiaalinsa verkossa. Olipa kyseessä sitten bränditietoisuuden lisääminen tai myynnin kasvattaminen, strateginen lähestymistapani on räätälöidä toteutus vastaamaan yrityksesi yksilöllisiä tavoitteita.</p>
              </div>
            </div>
            <div className="my-16">
              <h2 className="text-center text-4xl font-bold mb-6">Osaaminen</h2>
              <ul className="list-disc pl-5 text-xl space-y-2">
                <li>Sertifioitu Google Ads asiantuntija</li>
                <li>Osaaminen kampanjastrategiassa ja optimoinnissa</li>
                <li>Todistetusti onnistunut kasvattamaan asiakkaiden sijoitetun pääoman tuottoa (ROI)</li>
                <li>Vahvat analyyttiset taidot monimutkaisten tietojen tulkitsemiseen</li>
                <li>Ajan tasalla viimeisimmistä digitaalisen markkinoinnin trendeistä</li>
                <li>Työkokemusta löytyy yhteensä 3 vuottaa inhouse työntekijänä digimarkkinoijana ja 7 vuotta yrittäjänä.</li>
              </ul>
            </div>

            <Reference />

            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6">Jutellaanko?</h3>
              <p className="text-xl mb-6">Haluatko tietää lisää siitä, miten voimme tehdä yhteistyötä? Ota yhteyttä, niin keskustellaan yrityksesi tavoitteista ja siitä, miten voin tukea kasvuasi Google Ads -palvelun avulla.</p>
              <button className="btn btn-primary btn-lg">Ota yhteyttä</button>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default About;
