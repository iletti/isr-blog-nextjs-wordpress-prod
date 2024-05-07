// kartoitus.tsx
import Head from 'next/head';
import Layout from '../components/layout';
import Container from '../components/container';
import HubspotForm from '../components/HubspotForm'
import React, { useEffect } from 'react'; 
import ContactForm from '../components/ContactForm';

const AuditLandingPage = () => {
  const formId = 'c36159e3-3f24-4cb2-8c04-6f0fa70a1082';
  
  
  const previewValue = false;

    const pageTitle = "Kartoita Google näkyvyytesi tila";
    const pageDescription =
      "Pyydä sivustosi tämän hetkisen näkyvyyden maksuton kartoitus ja saa edellytykset näkyvyyden parantamiseksi.";
 


  return (
    <Layout preview={previewValue}   pageTitle={pageTitle} pageDescription={pageDescription}>
      <Head>
        <title>Tilaa ilmainen Google-näkyvyys kartoitus yrityksellesi</title>
        <meta name="description" content="Tilaa ilmainen näkyvyyden kartoitus ja saa ideoita yrityksesisi näkyvyyden parantamiseksi" />
      </Head>

      <div className="min-h-screen dark:bg-black hero bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 ">
        <Container>
          <div >
            <div className="flex-col hero-content lg:flex-row glass">
              <div className="max-w-screen-sm text-center lg:text-left">
                <h1 className="text-5xl font-bold text-left dark:text-black">Tilaa ilmainen verkkonäkyvyyden kartoitus yrityksellesi</h1>
                <p className="text-left dark:text-black">
                  Selvitä yrityksesi verkkonäkyvyyden tila hakukoneiden hakutuloksissa. Tilaa maksuton verkkonäkyvyyden kartoitus ja saa tietooosi miten voit kehittää yrityksesi näkyvyyttä verkossa.
                </p>
                <h3 className='text-left dark:text-black'>Saat:</h3>
                <ul className="text-left dark:text-black">
                  <li>✔Teknisen raportin verkkosivustosi tilasta</li>
                  <li>✔Raportin hakukonenäkyvyyden tämän hetkisestä tilasta </li>
                  <li>✔Checklistan toimenpiteistä näkyvyyden parantamiseksi</li>
                </ul>
              </div>
              <div className='mt-8'> <ContactForm/></div>
            </div>
        
          </div>
        
        </Container>
      </div>
    </Layout>
  );
};

export default AuditLandingPage;
