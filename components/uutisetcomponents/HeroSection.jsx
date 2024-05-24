import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen text-white bg-gray-900">
      <Image 
        src="/high-quality-image.png" // Ensure this path is correct and image is in the public directory
        fill
        quality={100}
        alt="Hero Image"
        className="absolute inset-0 z-0 object-cover w-full h-full"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
        <h2 className="mb-4 text-6xl font-bold">Viimeisimmät uutiset ja vinkit</h2>
        <p className="mb-8 text-2xl">Pysy ajan tasalla hakukoneoptimoinnin, SEM:n ja sosiaalisen median markkinoinnin uusimmista trendeistä</p>
        <Link href="#latest-news" className="px-6 py-3 font-bold text-white bg-blue-600 rounded hover:bg-blue-700">
          Lue lisää
        </Link>
      </div>
    </section>
  );
}
