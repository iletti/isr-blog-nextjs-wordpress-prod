import PostPreview from "./post-preview";

export default function MoreStories({ posts }) {
  return (
    <section className=" ">
      <div className="container lg:w-5/6 mt-20 mb-30 mx-auto">
        <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
         Kaikki artikkelit
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
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
