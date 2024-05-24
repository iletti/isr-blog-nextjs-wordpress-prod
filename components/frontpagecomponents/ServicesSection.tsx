import React from "react";
import Link from "next/link";
import { FaSearch, FaGoogle, FaCodeBranch } from "react-icons/fa";

const services = [
  {
    title: "SEO",
    description: "Hakukoneoptimoinnilla parannamme verkkosivustosi näkyvyyttä hakukoneissa.",
    icon: <FaSearch />,
    link: "https://www.ilarischmidt.com/palvelut/hakukoneoptimointi",
  },
  {
    title: "Google Ads",
    description: "Google Ads -mainonnalla saat kohdennettua liikennettä verkkosivustollesi.",
    icon: <FaGoogle />,
    link: "https://www.ilarischmidt.com/palvelut/google-mainonta",
  },
  {
    title: "Tekninen digimarkkinointi",
    description: "Menestykekkäässä digimarkkinoinnissa pitää tehdä paljon asioita konepellin alla.",
    icon: <FaCodeBranch />,
    link: "https://www.ilarischmidt.com/palvelut/web-kehitys",
  },
];

const ServicesSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-gray-100 dark:bg-gray-800">
      <div className="w-full max-w-6xl px-5 text-center">
        <h2 className="mb-10 text-4xl font-bold text-black dark:text-white">Palvelut</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md dark:bg-gray-700">
              <div className="mb-4 text-5xl text-blue-600">{service.icon}</div>
              <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">{service.title}</h3>
              <p className="mb-4 text-gray-800 dark:text-gray-200">{service.description}</p>
              <Link href={service.link} legacyBehavior>
                <a className="px-6 py-2 mt-auto text-lg font-semibold text-white bg-blue-600 rounded hover:bg-blue-700">
                  Lue lisää
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
