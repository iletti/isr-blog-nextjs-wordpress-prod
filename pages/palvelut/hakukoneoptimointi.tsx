import Head from "next/head";
import Layout from "../../components/layout";
import OtaYhteytta from "../../components/OtaYhteytta";
import Container from "../../components/container";
import SEOBenefitsSection from "../../components/SEOBenefitsSection";
import SEOServicesSection from "../../components/SEOServicesSection";
import WhyChooseMeSection from "../../components/WhyChooseMeSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import CallToActionSection from "../../components/CallToActionSection";
import FAQSection from "../../components/FAQSection";

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


      <section className="py-24 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Hakukoneoptimointi (SEO) – Näkyvyyttä ja kasvua yrityksellesi
          </h1>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
            Nosta yrityksesi hakukonenäkyvyyttä, kasvata orgaanista liikennettä ja saavuta kestävää kasvua räätälöidyillä SEO-palveluillani.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
            <div className="rounded-md shadow">
              <a
                href="https://share-eu1.hsforms.com/1w2FZ4z8kTLKMBG8PpwoQgg2e324k" // Link to your contact section
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Kysy ilmainen SEO-analyysi sivustollesi
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  <SEOBenefitsSection/>
  <SEOServicesSection/>
  <WhyChooseMeSection/>
  <TestimonialsSection/>
  <CallToActionSection/>
  <FAQSection/>
      </Container>
    </Layout>
  );
};

export default HakukoneoptimointiPalvelu;
