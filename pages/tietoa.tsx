// about-me.tsx
import Head from 'next/head';
import Layout from '../components/layout';

const About = ({ preview }) => {
  return (
    <Layout preview={preview}>
      <Head>
        <title>About Me - Professional Google Ads Specialist</title>
        <meta name="description" content="Learn more about my professional journey as a Google Ads Specialist and how I can help you grow your business." />
      </Head>

      <div className="hero  bg-[url('https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg')]" style={{backgroundPosition: 'center'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About Me</h1>
            <p className="mb-5">Delivering successful Google Ads campaigns with precision and passion.</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-center text-4xl font-bold text-gray-800 mb-6">Professional Biography</h2>
            <div className="flex flex-wrap justify-center items-center">
              <img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Professional portrait" className="rounded-full w-48 h-48 shadow-xl mb-6 lg:mb-0 lg:mr-8" />
              <p className="text-xl text-gray-600 max-w-2xl">With over a decade of experience in digital marketing, I specialize in creating and managing Google Ads campaigns that convert. As a certified Google Ads specialist, I've helped numerous businesses reach their full online potential. Whether it's increasing brand awareness or driving sales, my strategic approach is tailored to meet your unique business goals.</p>
            </div>
          </div>

          <div className="my-16">
            <h2 className="text-center text-4xl font-bold text-gray-800 mb-6">Skills & Experience</h2>
            <ul className="list-disc pl-5 text-xl text-gray-600 space-y-2">
              <li>Certified Google Ads Professional</li>
              <li>Expertise in campaign strategy and optimization</li>
              <li>Proven track record of increasing ROI for clients</li>
              <li>Strong analytical skills to interpret complex data</li>
              <li>Up-to-date with the latest digital marketing trends</li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Let's Connect</h3>
            <p className="text-xl text-gray-600 mb-6">Interested in learning more about how we can collaborate? Get in touch and let's talk about your business objectives and how I can support your growth with Google Ads.</p>
            <button className="btn btn-primary btn-lg">Contact Me</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
