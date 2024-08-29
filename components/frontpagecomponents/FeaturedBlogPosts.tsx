import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";

// Utility function to strip HTML tags, normalize text, and truncate to a specified character count
const stripHtmlAndTruncate = (html: string, charLimit: number): string => {
  const stripHtml = (html: string) => html.replace(/<[^>]*>/g, '');
  const decodedHtml = decodeHtmlEntities(html);
  const normalizedText = normalizeText(stripHtml(decodedHtml));
  return normalizedText.length > charLimit ? normalizedText.slice(0, charLimit) + '...' : normalizedText;
};

// Utility function to decode HTML entities
const decodeHtmlEntities = (html: string): string => {
  return html.replace(/&nbsp;/g, ' ')
             .replace(/&amp;/g, '&')
             .replace(/&lt;/g, '<')
             .replace(/&gt;/g, '>')
             .replace(/&quot;/g, '"')
             .replace(/&#039;/g, "'");
};

// Utility function to normalize text (remove extra spaces and trim)
const normalizeText = (text: string): string => {
  return text.replace(/\s+/g, ' ').trim();
};

interface Post {
  node: {
    id: string;
    title: string;
    excerpt: string;
    slug: string;
    featuredImage?: {
      node?: {
        sourceUrl?: string;
      };
    };
  };
}

interface FeaturedBlogPostsProps {
  posts: Post[];
}

const FeaturedBlogPosts: React.FC<FeaturedBlogPostsProps> = ({ posts }) => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={`${post.node.id}-${post.node.slug}`} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="relative w-full h-48 mb-4">
                {post.node.featuredImage?.node?.sourceUrl ? (
                  <Image
                    src={post.node.featuredImage.node.sourceUrl}
                    alt={post.node.title || 'Featured image'}
                    layout="fill"
                    objectFit="cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">No image available</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{decodeHtmlEntities(post.node.title)}</h3>
                <p className="text-gray-600 mb-4">
                  {stripHtmlAndTruncate(post.node.excerpt, 150)}
                </p>
                <Link href={`/blog/${post.node.slug}`} className="text-blue-500 hover:underline">
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogPosts;
