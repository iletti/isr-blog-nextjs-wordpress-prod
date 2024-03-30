// kartoitus.tsx
import Head from 'next/head';
import Layout from '../components/layout';

const AuditLandingPage = () => {
    const previewValue = false;

  return (
    <Layout preview={previewValue}>
      <Head>
        <title>Tilaa ilmainen verkkonäkyvyyden kartoitus yrityksellesi</title>
        <meta name="description" content="Tilaa ilmainen näkyvyyden kartoitus ja saa ideoita yrityksesisi näkyvyyden parantamiseksi" />
      </Head>

      <div className="hero min-h-screen"
      
      style={{
        backgroundImage: `url('https://mleuki3qgkxz.i.optimole.com/co-ZpyQ-J2UQX3md/w:auto/h:auto/q:auto/id:22efc58e07bf2f0bf5e0693608e8ed7c/directUpload/vihreak212uula_representation_of_an_dynamic_mapping_and_compiling__d5bc760d-58e8-4e96-acf7-89e0c8ef096d.png')`,
      }}
      
      >
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left max-w-screen-sm">
            <h1 className="text-5xl font-bold text-left">Tilaa ilmainen verkkonäkyvyyden kartoitus yrityksellesi</h1>
            <p className="py-6 text-left">
              Selvitä yrityksesi verkkonäkyvyyden tila hakukoneiden hakutuloksissa. Tilaa maksuton verkkonäkyvyyden kartoitus ja saa tietooosi miten voit kehittää yrityksesi näkyvyyttä verkossa.
            </p>
            <h3 className='text-left'>Saat:</h3>

            <ul className="text-left">
              <li>✔Teknisen raportin verkkosivustosi tilasta</li>
              <li>✔Raportin hakukonenäkyvyyden tämän hetkisestä tilasta </li>
              <li>✔Checklistan toimenpiteistä näkyvyyden parantamiseksi</li>
            </ul>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
            <form className="card-body bg-base-300">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sähköposti</span>
                </label>
                <input type="email" placeholder="esimerkki@domain.fi" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Puhelinnumero</span>
                </label>
                <input type="tel" placeholder="0456002505" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nettisivujen osoite tai yrityksesi nimi</span>
                </label>
                <input type="text" placeholder="yritys.com" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent">Tilaa kartoitus</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AuditLandingPage;
