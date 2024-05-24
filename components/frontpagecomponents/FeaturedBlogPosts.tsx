import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Utility function to strip HTML tags and truncate text to a specified character count
const stripHtmlAndTruncate = (html, charLimit) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  const text = tempDiv.textContent || tempDiv.innerText || "";
  return text.length > charLimit ? text.slice(0, charLimit) + '...' : text;
};

const decodeHtmlEntities = (html) => {
  if (typeof window === 'undefined') return html; // Return original HTML on server side
  const textArea = document.createElement('textarea');
  textArea.innerHTML = html;
  return textArea.value;
};

const FeaturedBlogPosts = ({ posts }) => {
  const [decodedPosts, setDecodedPosts] = useState([]);

  useEffect(() => {
    // Decode HTML entities on client side
    const decoded = posts.map(post => ({
      ...post,
      node: {
        ...post.node,
        excerpt: decodeHtmlEntities(post.node.excerpt)
      }
    }));
    setDecodedPosts(decoded);
  }, [posts]);

  // Only show the latest three posts
  const latestPosts = decodedPosts.slice(0, 6);

  return (
    <div className="flex flex-col items-center justify-center py-20 mt-5 bg-white dark:bg-gray-900">
      <div className="w-full max-w-6xl px-5 text-center">
        <h2 className="mb-10 text-4xl font-bold text-black dark:text-white">Uusimmat Blogikirjoitukset</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {latestPosts.map((post) => (
            <div key={post.node.slug} className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md dark:bg-gray-700">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={post.node.featuredImage.node.sourceUrl}
                  alt={post.node.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-black dark:text-white line-clamp-2">
                {post.node.title}
              </h3>
              <div className="mb-4 text-gray-800 dark:text-gray-200">
                {stripHtmlAndTruncate(post.node.excerpt, 120)}
              </div>
              <Link href={`/posts/${post.node.slug}`} legacyBehavior>
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

export default FeaturedBlogPosts;
