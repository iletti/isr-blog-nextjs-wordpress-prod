import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Reference from "../components/reference";
import OtaYhteytta from "../components/OtaYhteytta";

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(0);

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Ilari Schmidt Blogi`}</title>
      </Head>
      <Container>
      <div className=" bg-green-500 grid grid-cols-12 gap-2">
      <div className="bg-blue-500"><p>as</p></div>
      <div className="bg-blue-500"><p>as</p></div>
      <div className="bg-blue-500"><p>as</p></div>
      <div className="bg-blue-500"><p>as</p></div>
      <div className="bg-blue-500"><p>as</p></div>
      <div className="bg-blue-500"><p>as</p></div>
      <div className="bg-blue-500"><p>as</p></div>
      <div className="bg-blue-500"><p>as</p></div>
      <div className="bg-blue-500"><p>as</p></div>
      <div className="bg-blue-500"><p>as</p></div>
      <div className="bg-blue-500"><p>as</p></div>
      <div className="bg-blue-500"><p>as</p></div>      
      </div>

      <div className=" bg-green-500 grid grid-cols-12 gap-2">
      <div className="bg-blue-500"><p>as</p></div>
      <div className="bg-blue-500"><p>as</p></div>
      <div className="bg-blue-500"><p>as</p></div>
      <div className="col-start-4 col-span-6 bg-green-500"><p>as</p></div>
      <div className="bg-blue-500"><p>as</p></div>
      <div className="bg-blue-500"><p>as</p></div>
      <div className="bg-blue-500"><p>as</p></div>
   
      </div>

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