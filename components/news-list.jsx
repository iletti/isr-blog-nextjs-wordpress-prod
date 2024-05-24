import PostPreview from './post-preview'; // Import the existing PostPreview component

const mostLikedLinks = [
  {
    url: "https://www.ilarischmidt.com/posts/polli-tasta-yksinkertainen-markkinointisuunnitelma",
    title: "Tästä yksinkertainen markkinointisuunnitelma"
  },
  {
    url: "https://www.ilarischmidt.com/posts/yrityksen-nakyvyys-googlessa-avain-menestykseen",
    title: "Yrityksen näkyvyys Googlessa: avain menestykseen"
  },
  {
    url: "https://www.ilarischmidt.com/palvelut/hakukoneoptimointi",
    title: "Hakukoneoptimointi"
  },
  {
    url: "https://www.ilarischmidt.com/palvelut/google-mainonta",
    title: "Google-mainonta"
  }
];

export default function NewsList({ newsPosts }) {
  const hasNewsPosts = newsPosts && newsPosts.edges && newsPosts.edges.length > 0;

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-4xl font-bold text-center text-gray-800">Uutiset</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {hasNewsPosts ? (
              newsPosts.edges.map(({ node }) => (
                <PostPreview
                  key={node.slug}
                  title={node.title}
                  coverImage={node.featuredImage} // Pass the entire featuredImage object
                  date={node.date}
                  author={node.author?.node}
                  slug={node.slug}
                  excerpt={node.excerpt}
                />
              ))
            ) : (
              <p className="text-center">Ei uutisia saatavilla.</p>
            )}
          </div>
          <aside className="hidden lg:block lg:sticky lg:top-8">
            <h3 className="mb-4 text-2xl font-bold text-gray-800">Suosituimmat oppaat ja palvelut</h3>
            <div className="space-y-4">
              {mostLikedLinks.map((link, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                  <h4 className="mb-2 text-lg font-semibold">
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{link.title}</a>
                  </h4>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
