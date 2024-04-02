import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Reference from "../components/reference";

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(0);

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Ilari Schmidt Blogi`}</title>
      </Head>
      <Container>





<div className="flex justify-center mt-20 mb-20 ">
  <div className="w-5/6 max:smflex-col md:flex">
    <div className="basis-1/2 m-auto p-10 ">
          <h1 className="text-6xl font-bold">Hakukoneseppä Ilari Schmidt</h1>
          <p>Autan yrityksiä saamaan näkyvyyttä ja tuloksia Google Ads mainoskampanjoilla.</p>
        <ul className="text-left list-disc pl-5 space-y-2 my-4">
          <li>Google Ads hakusanamainoskampanjat</li>
          <li>SEO Hakukokoneoptimointi</li>
          <li>Analytiikan asennus</li>
          <li>Google Ads optimointi</li>
        </ul>
        <a href="/kartoitus">
                <button className="m-4 btn btn-primary">
                Kartoita yrityksesi hakukonenäkyvyys
                </button>
              </a></div>
    <div className=" basis-1/2 m-auto aspect-video  ">      <iframe
            className="w-full h-full grow size-full rounded card shadow-xl card-compact ring-offset-0 ring-4 ring-blue-400	"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // Replace with your video ID
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe></div>
  </div>
</div>








        <div className="mt-6">
          <h2 className="text-center font-bold text-2xl">Palvelut</h2>
          <a href="/palvelut">
            <div className="flex justify-center ">
              <div className="carousel carousel-center max-w-full p-4 space-x-4 m-4 rounded-box ">
                <div className="carousel-item relative hover:drop-shadow-md">
                  <img
                    src="https://mleuki3qgkxz.i.optimole.com/co-ZpyQ-JgWZtQES/w:200/h:384/id:1ba0464bb220ecdff95880a61dd9d42a/directUpload/1.png"
                    className="rounded-box w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold px-4 text-center">
                      Hakukonemainonta
                    </h3>
                  </div>
                </div>
                <div className="carousel-item relative hover:drop-shadow-md">
                  <img
                    src="https://mleuki3qgkxz.i.optimole.com/co-ZpyQ-x0C_StAY/w:200/id:c8878edba58e8c3085ad46126bf27eee/directUpload/3.png"
                    className="rounded-box w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold px-4 text-center">
                      SEO
                    </h3>
                  </div>
                </div>
                <div className="carousel-item relative hover:drop-shadow-md">
                  <img
                    src="https://mleuki3qgkxz.i.optimole.com/co-ZpyQ-6Oi6E8xf/w:200/id:b6c3e6d12eb8cc25abc47eb384b02c12/directUpload/2.png"
                    className="rounded-box w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold px-4 text-center">
                      Analytiikka
                    </h3>
                  </div>
                </div>
                <div className="carousel-item relative hover:drop-shadow-md">
                  <img
                    src="https://mleuki3qgkxz.i.optimole.com/co-ZpyQ-cxDiR6_d/w:200/id:65c5bb8759447cc69ce475a282228b9e/directUpload/4.png"
                    className="rounded-box w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold px-4 text-center">
                      Optimointi
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>


<Reference/>

<h2 className="mt-20 text-center font-bold text-2xl">Historiaa</h2>
<ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
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