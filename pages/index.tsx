import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import HeroSection from "../components/frontpagecomponents/HeroSection";
import AboutSection from "../components/frontpagecomponents/AboutSection";
import ServicesSection from "../components/frontpagecomponents/ServicesSection";
import FeaturedBlogPosts from "../components/frontpagecomponents/FeaturedBlogPosts";
import TestimonialsSection from "../components/frontpagecomponents/TestimonialsSection";
import ContactSection from "../components/frontpagecomponents/ContactSection";
import IframeComponent from '../components/IframeComponent';
import CallToAction from "../components/frontpagecomponents/CallToAction";


export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  const pageTitle = "Google Ads Hakukoneseppä Ilari Schmidt";
  const pageDescription =
    "Autan yrityksiä saamaan näkyvyyttä ja tuloksia Google Ads mainoskampanjoilla.";

  return (
    <Layout preview={preview} pageTitle={pageTitle} pageDescription={pageDescription}>
      <Head>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="Google Ads, SEO, Hakukoneoptimointi, Digitaalinen Markkinointi" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
      </Head>
      <HeroSection />
     <CallToAction />
      <main>
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
        <Container>
          <FeaturedBlogPosts posts={morePosts} />
        </Container>
      </main>
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
