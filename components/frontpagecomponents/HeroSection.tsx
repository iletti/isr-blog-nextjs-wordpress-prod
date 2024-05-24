import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-20 bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl px-5 text-center md:flex-row md:text-left">
        <div className="flex flex-col items-center justify-center w-full space-y-6 md:w-1/2">
          <div className="text-5xl font-bold text-black dark:text-white">
            <h1>Hakukoneseppä Ilari Schmidt</h1>
          </div>
          <div className="text-xl text-gray-800 dark:text-gray-200">
  Tarjoan kattavat palvelut hakukoneoptimoinnista (SEO) Google Ads -mainontaan ja sosiaalisen median markkinointiin. Autan yrityksiä saamaan näkyvyyttä ja tuloksia digitaalisessa maailmassa.
  <br />
  <br /> Asiakkaani ovat saavuttaneet erinomaisia tuloksia yhteistyön myötä. Ota yhteyttä ja katsotaan, miten voin auttaa sinua kasvattamaan liiketoimintaasi.
</div>

          <Link href="https://share-eu1.hsforms.com/1-l-acyEwRI-720iCh1lWLg2e324k" legacyBehavior>
            <a className="px-8 py-4 mt-4 text-lg font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 dark:text-white">
              Jötä soittopyyntö
            </a>
          </Link>
        </div>
        <div className="relative w-full mt-10 md:mt-0 md:w-1/2">
          <Image
            src="https://mleuki3qgkxz.i.optimole.com/co-ZpyQ-fmwW6snM/w:auto/h:auto/q:auto/id:22e0e7b17a8f9d88025be28769af03a6/directUpload/Brown-and-Light-Brown-Circle-Framed-Instagram-Profile-Picture.png"
            alt="Main"
            className="rounded-full shadow-lg"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
