import React from "react";
import Link from "next/link";
import Image from "next/image";

const NewsSection = ({ news }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-gray-100 dark:bg-gray-800">
      <div className="w-full max-w-6xl px-5 text-center">
        <h2 className="mb-10 text-4xl font-bold text-black dark:text-white">Uusimmat Uutiset</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {news.map((post) => (
            <div key={post.node.slug} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md dark:bg-gray-700">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={post.node.featuredImage.node.sourceUrl}
                  alt={post.node.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">{post.node.title}</h3>
              <div className="mb-4 text-gray-800 dark:text-gray-200" dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
              <Link href={`/news/${post.node.slug}`} legacyBehavior>
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

export default NewsSection;
