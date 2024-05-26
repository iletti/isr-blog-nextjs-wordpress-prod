import React from 'react';
import IframeComponent from '../IframeComponent';

export default function Component() {
  return (
    <section className="w-full pt-12 pb-6 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16 bg-gradient-to-br from-[#6c5ce7] to-[#00b894] dark:from-[#2d3436] dark:to-[#0a3d62] flex justify-center items-center">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mx-auto space-y-6 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Maksuton avainsanatutkimus
            </h2>
            <p className="text-gray-200 dark:text-gray-400 md:text-xl/relaxed">
              Hanki ilmainen avainsanatutkimus täyttämällä alla oleva lomake. Tämä auttaa sinua löytämään parhaat avainsanat liiketoiminnallesi.
            </p>
          </div>
          <div className="flex justify-center w-full p-6 ">
            <IframeComponent />
          </div>
        </div>
      </div>
    </section>
  );
}
