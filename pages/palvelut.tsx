// palvelut.tsx
import Head from 'next/head';

const Services = () => {
  return (
    <>
      <Head>
        <title>Google Ads Services - Freelancer</title>
        <meta name="description" content="Professional Google Ads management and optimization services by a certified freelancer. Increase your ROI with targeted ad campaigns." />
      </Head>
      
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Google palvelut</h1>
      <p className="mb-5">Maksimoi näkyvyytesi Googlessa</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Google Ads Services</h1>
            <p className="text-xl text-gray-600">Maximize your reach and ROI with professional Google Ads management by a certified expert.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">Campaign Setup</h2>
                <p>Strategic campaign setup to target the right audience and achieve your marketing goals.</p>
                <div className="card-actions mt-4">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>

            <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">Optimization</h2>
                <p>Continuous optimization for your campaigns to ensure the best performance and ROI.</p>
                <div className="card-actions mt-4">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>

            <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">Reporting & Analysis</h2>
                <p>Detailed monthly reporting and analysis to understand your campaign's impact.</p>
                <div className="card-actions mt-4">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
            
            {/* Additional services can be listed here if you offer more than the above */}
          </div>
          
          <div className="text-center mt-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Ready to grow your business?</h3>
            <p className="text-xl text-gray-600 mb-6">Get in touch to discuss your Google Ads strategy and how I can help you achieve your business objectives.</p>
            <button className="btn btn-primary btn-lg">Contact Me</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
