import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(0);

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Ilari Schmidt Blogi`}</title>
      </Head>
      <Container>


      <div className="hero min-h-screen bg-base-200"   style={{
    backgroundImage: `url('https://mleuki3qgkxz.i.optimole.com/co-ZpyQ-z6lrsJ8S/w:5824/h:3264/rt:auto/g:ce/id:ecc0d1ef019c30480a80e1f39bd4ed73/directUpload/vihreakuula_Create_a_wide_high-resolution_image_that_encapsulat_96446d6e-b7c8-4a49-ae34-cc8bdec4c970.png')`,
  }}>
      <div className="hero-content flex flex-col lg:flex-row items-center gap-8 glass">
        {/* Headline container */}
        <div className="flex-1 text-center lg:text-left p-4 flex flex-col justify-center">
          <h1 className="text-5xl font-bold">Hakukoneseppä Ilari Schmidt</h1>
          <p className="mt-4">Autan yrityksiä saamaan näkyvyyttä ja tuloksia Google Ads mainoskampanjoilla.</p>
        </div>
        
        {/* Video container */}
        <div className="flex-1 flex justify-center items-center">
          <div className="flex-1 aspect-w-16 aspect-h-9 w-full max-w-full lg:max-w-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // Replace with your video ID
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>


        <div className="flex justify-center my-10">
          <div className="carousel carousel-center rounded-box">
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                alt="Pizza"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                alt="Pizza"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                alt="Pizza"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                alt="Pizza"
              />
            </div>
          </div>
        </div>

        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
