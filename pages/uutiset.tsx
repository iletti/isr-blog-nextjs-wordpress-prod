import { getAllNewsPostsForHome } from "../lib/api";
import Head from "next/head";
import NewsList from "../components/news-list";
import Header from "../components/header";
import HeroSection from "../components/uutisetcomponents/HeroSection";
import Menu from "../components/menu";

export default function Uutiset({ allNewsPosts }) {
  const pageTitle = "Uutiset | Hakukoneseppä Ilari Schmidt";
  const pageDescription =
    "Lue viimeisimmät uutiset ja vinkit hakukoneoptimoinnista, SEM:stä ja sosiaalisen median markkinoinnista. Pysy ajan tasalla digitaalisen markkinoinnin uusimmista trendeistä.";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="hakukoneoptimointi, SEO, SEM, sosiaalinen media, digitaalinen markkinointi, uutiset, vinkit" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ilarischmidt.com/uutiset" />
        <meta property="og:image" content="/path/to/your/image.jpg" /> {/* Update with your image */}
        <meta property="og:locale" content="fi_FI" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="/path/to/your/image.jpg" /> {/* Update with your image */}
      </Head>
      <Header />
      <Menu />
      <HeroSection />
      <section id="latest-news" className="container py-8 mx-auto">
        <NewsList newsPosts={allNewsPosts} />
      </section>
    </>
  );
};

export async function getStaticProps({ preview = false }) {
  const allNewsPosts = (await getAllNewsPostsForHome(preview)) || []; // Fetch news posts
  return {
    props: { allNewsPosts }, // Pass news posts as props
    revalidate: 60 * 60 * 2, // Regenerate the page every 2 hours
  };
}
