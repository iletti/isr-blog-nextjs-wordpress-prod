import PostPreview from "./post-preview";

export default function MoreStories({ posts }) {
  return (
    <section className="">
      <div className="px-4">
        <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter text-center md:text-7xl">
         Artikkelit.
        </h2>
        <div className="grid grid-cols-1 mb-32 md:grid-cols-2 md:gap-x-16 gap-y-20 md:gap-y-32">
          {posts.map(({ node }) => (
            <PostPreview
              key={node.slug}
              title={node.title}
              coverImage={node.featuredImage}
              date={node.date}
              author={node.author}
              slug={node.slug}
              excerpt={node.excerpt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
