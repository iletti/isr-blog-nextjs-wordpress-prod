// palvelut.tsx
import Head from 'next/head';
import Layout from '../components/layout';

const Services = ({ preview }) => {
  return (
    <Layout preview={preview}>

      <Head>
        <title>Google Ads Palvelut - Freelancer</title>
        <meta name="description" content="Professional Google Ads management and optimization services by a certified freelancer. Increase your ROI with targeted ad campaigns." />
      </Head>

      <div className="hero" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Google palvelut</h1>
      <p className="mb-5">Maksimoi yrityksesi näkyvyys Googlessa</p>
    </div>
  </div>
</div>
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Google Ads Palvelut ja Hinnoittelu</h2>
            <p className="text-xl text-gray-600">Maksimoi yrityksesi näkyvyys ja liiketoimintahyöty. Saat minulta erinomaista palvelua vahvalla ammattitaidolla.</p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
          <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">Hakukonemainonta</h2>
    <p>Määritetään tärkeimmät hakusanat, joissa yrityksesi tulee näkyä ja rakennetaan niiden ympärille relevantit mainokset. Näin saadaan ohjattua potentiaalisia asiakkaita palvelujesi äärelle.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>

<div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">Display mainonta</h2>
    <p>Pitäisikö sinun saada boostattua yrityksesi näkyvyyttä maksimaalisesti? Display mainonnalla saadaan yrityksesi mainokset laajalle kohderyhmällä, niin Googlessa, kuin muillakin sivustoilla.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>

<div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">Youtube Mainonta</h2>
    <p>Löytyykö sinulta hyvää videosisältöä, jota haluaisit saattaa potentiaalisten asiakkaiden eteen? Youtube mainonta on tehokas keino saada asiakkaat sitoutettua sinun ratkaisuihin.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
            
            {/* Additional services can be listed here if you offer more than the above */}
          </div>
          
          <div className="text-center mt-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Oletko valmis kasvattamaan yritystäsi?</h3>
            <p className="text-xl text-gray-600 mb-6">Otahan yhteyttä, niin jutellaan liiketoimintatarpeistasi ja katsotaan voinko auttaa yrityksesi näkyvyyden kanssa.</p>
            <button className="btn btn-primary btn-lg">Ota yhteyttä</button>
          </div>
        </div>
      </div>



<div>

<div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    
    {/* First card */}
    <div className="card w-full glass">
      <figure><img src="http://172-234-99-242.ip.linodeusercontent.com/wp-content/uploads/2024/03/1.jpg" alt="Car"/></figure>
      <div className="card-body">
        <h2 className="card-title">Tiemerkintä Oy</h2>
        <p>Nostimme tiemerkinnän hakusanat kärkeen heille kriittisimmissä avainsanoissa. Näin varmistimme, että kohderyhmä löytää Tiemerkinnän ensimmäisenä etsiessään ratkaisua.</p>
        <div className="card-actions justify-end">
        <div> <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
</div></div>
        </div>
      </div>
    </div>

    {/* Second card */}
    <div className="card w-full glass">
      <figure><img src="http://172-234-99-242.ip.linodeusercontent.com/wp-content/uploads/2024/03/3.jpg" alt="Car"/></figure>
      <div className="card-body">
        <h2 className="card-title">Viella Parturi</h2>
        <p>Nostimme paikallisen parturin hakutuloksia Googlessa. Keskityimme edullisiin mainoshuutoihin, joka mahdollisti kattavan näkyvyyden edullisesti.</p>
        <div className="card-actions justify-end">
        <div> <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
</div></div>
        </div>
      </div>
    </div>

    {/* Third card */}
    <div className="card w-full glass">
      <figure><img src="http://172-234-99-242.ip.linodeusercontent.com/wp-content/uploads/2024/03/2.jpg" alt="Car"/></figure>
      <div className="card-body">
        <h2 className="card-title">Kasvu Open Oy</h2>
        <p>Rakensimme YouTube mainosvideokampanjan kaikille Kasvupolku palvelusta kiinnostuneille yrityksille edistämään osallistujien päätösprosessia.</p>
        <div className="card-actions justify-end">
        <div> <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
</div></div>
        </div>
      </div>
    </div>

    {/* Fourth card */}
    <div className="card w-full glass">
      <figure><img src="http://172-234-99-242.ip.linodeusercontent.com/wp-content/uploads/2024/03/4.jpg" alt="Car"/></figure>
      <div className="card-body">
        <h2 className="card-title">ViluWorks Oy</h2>
        <p>Nostimme ViluWorksin palveluita esille suorissa Google hauissa Uudenmaan alueella. Lvi laitteiden huoltoon ja hankintaan liittyvissä hauissa.</p>
        <div className="card-actions justify-end">
        <div> <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
</div></div>
        </div>
      </div>
    </div>

    {/* Fifth card */}
    <div className="card w-full glass">
      <figure><img src="http://172-234-99-242.ip.linodeusercontent.com/wp-content/uploads/2024/03/5.jpg" alt="Car"/></figure>
      <div className="card-body">
        <h2 className="card-title">Helposti pariterapiaan</h2>
        <p>Lanseerasimme uuden verkkopalvelun Google hakukampanjan avulla. Loimme relevantit mainokset tärkeimpien avainsanojen ympärille. Nyt Google mainonta tuottaa tasaiseen tahtiin varauksia.</p>
        <div className="card-actions justify-end">
        <div> <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
</div></div>
        </div>
      </div>
    </div>

    {/* Sixth card */}
    <div className="card w-full glass">
      <figure><img src="http://172-234-99-242.ip.linodeusercontent.com/wp-content/uploads/2024/03/6.jpg" alt="Car"/></figure>
      <div className="card-body">
        <h2 className="card-title">Idair Oy</h2>
        <p>Tuotin usean vuoden ajan liidejä IV-alan yritykselle Google hakusanakampanjan sekä laskeutumissivun avulla. Laskeutumissivulla oli hintalaskuri ilmanvaihdon puhdistukselle.</p>
        <div className="card-actions justify-end">
          <div> <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
</div></div>
        </div>
      </div>
    </div>
    
  </div>
</div>


</div>


      </Layout>
  );
};

export default Services;