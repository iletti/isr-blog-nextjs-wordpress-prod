// kartoitus.tsx
import Head from 'next/head';
import Layout from '../components/layout';
import Container from '../components/container';
import HubspotForm from '../components/HubspotForm'
import React, { useEffect } from 'react'; 

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

      <Container>
        <div className="min-h-screen hero"
        
        style={{
          backgroundImage: `url('https://mleuki3qgkxz.i.optimole.com/co-ZpyQ-KWpi1i3o/w:auto/h:auto/q:auto/id:93e11c017b6bb1589a36877c92a60c9c/directUpload/vihreakuula_Design_a_detailed_professional_image_showing_a_vari_59bdd763-13d7-4b6e-b383-b17191587c7e.png')`,
        }}
        
        >
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
            <div className='mt-8'> <HubspotForm formId={formId} /></div>
          </div>
          
        </div>
       
      </Container>
    </Layout>
  );
};

export default AuditLandingPage;
