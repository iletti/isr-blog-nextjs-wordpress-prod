import React from "react";

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-gray-100 dark:bg-gray-800">
      <div className="w-full max-w-4xl px-5 text-center">
        <h2 className="text-4xl font-bold text-black dark:text-white">
          Tietoa Minusta
        </h2>
        <p className="mt-6 text-xl text-gray-800 dark:text-gray-200">
          Olen Ilari Schmidt, hakukoneseppä ja digitaalisen markkinoinnin asiantuntija. 
          Minulla on yli kymmenen vuoden kokemus Google Ads -kampanjoiden suunnittelusta ja toteutuksesta.
          Autan yrityksiä saavuttamaan parempaa näkyvyyttä ja tuloksia hakukoneissa.
          <br />
          <br />
          Erikoisosaamiseeni kuuluu hakukoneoptimointi (SEO), Google Ads -kampanjoiden optimointi, ja analytiikan asennus ja seuranta. 
          Uskon, että jokainen yritys voi saavuttaa merkittäviä tuloksia oikein kohdennetuilla ja optimoiduilla markkinointikampanjoilla.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
