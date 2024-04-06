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

              <div className='container mx-auto mb-30 mt-20 lg:w-5/6 text-center'>
                <h1 className="mb-5 text-5xl font-bold">Tietoa minusta</h1>
              </div>
        
        <div className="container mx-auto mb-30 mt-20 lg:w-5/6 ">
          <div className="">
            <div className="mb-10">
              <h2 className="text-center text-4xl font-bold mb-6">⚒️ Hakukoneseppä Ilari Schmidt</h2>
              <div className="flex flex-wrap justify-center items-center">
                <img src="https://mleuki3qgkxz.i.optimole.com/co-ZpyQ-fmwW6snM/w:auto/h:auto/q:auto/id:22e0e7b17a8f9d88025be28769af03a6/directUpload/Brown-and-Light-Brown-Circle-Framed-Instagram-Profile-Picture.png" alt="Professional portrait" className="rounded-full w-48 h-48 shadow-xl mb-6 lg:mb-0 lg:mr-8" />
                <p className="text-xl max-w-2xl">
        Yli kymmenen vuoden kokemuksella digitaalisessa markkinoinnissa erikoisosaamiseni keskittyy luomaan ja hallinnoimaan tuloksellisia Google Ads -kampanjoita. Sertifioituna Google Ads -asiantuntijana olen auttanut useita yrityksiä saavuttamaan täyden potentiaalinsa verkossa. Olipa kyseessä sitten bränditietoisuuden lisääminen tai myynnin kasvattaminen, strateginen lähestymistapani on räätälöidä toteutus vastaamaan yrityksesi yksilöllisiä tavoitteita.</p>
              </div>
            </div>
            <div className="container mx-auto mb-30 mt-20 lg:w-5/6 ">
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

            <h2 className="container mx-auto mb-30 mt-20 lg:w-5/6  text-center font-bold text-2xl">Historiaa</h2>
<div className='container mx-auto mb-30 mt-20 lg:w-5/6 '>
  <ul className=" timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
    <li>
      <div className="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
      </div>
      <div className="timeline-start md:text-end mb-10">
        <time className="font-mono italic">2014</time>
        <div className="text-lg font-black">Yrittäjyys ja digimarkkinointi</div>
        The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.
      </div>
      <hr/>
    </li>
    <li>
      <hr />
      <div className="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
      </div>
      <div className="timeline-end mb-10">
        <time className="font-mono italic">2017</time>
        <div className="text-lg font-black">Mainostoimisto perustetaan</div>
        iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has been the primary part of Apple's consumer desktop offerings since its debut in August 1998, and has evolved through seven distinct forms
      </div>
      <hr />
    </li>
    <li>
      <hr />
      <div className="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
      </div>
      <div className="timeline-start md:text-end mb-10">
        <time className="font-mono italic">2022</time>
        <div className="text-lg font-black">Inhouse Digimarkkinointi</div>
        The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first version was released on October 23, 2001, about 8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At over 20 years, the iPod brand is the oldest to be discontinued by Apple
      </div>
      <hr />
    </li>
    <li>
      <hr />
      <div className="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
      </div>
      <div className="timeline-end mb-10">
        <time className="font-mono italic">2022</time>
        <div className="text-lg font-black">Google Ads Freelance toiminta alkaa</div>
        iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share
      </div>
      <hr />
    </li>
    <li>
      <hr />
      <div className="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
      </div>
      <div className="timeline-start md:text-end mb-10">
        <time className="font-mono italic">2024</time>
        <div className="text-lg font-black">Google Ads Hakukoneseppä Ilari Schmidt</div>
        The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services
      </div>
    </li>
  </ul>
</div>

            <div className="container mx-auto mb-30 mt-20 lg:w-5/6 text-center">
              <h3 className="text-3xl font-bold mb-6">Jutellaanko?</h3>
              <p className="text-xl mb-6">Haluatko tietää lisää siitä, miten voimme tehdä yhteistyötä? Ota yhteyttä, niin keskustellaan yrityksesi tavoitteista ja siitä, miten voin tukea kasvuasi Google Ads -palvelun avulla.</p>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default About;
