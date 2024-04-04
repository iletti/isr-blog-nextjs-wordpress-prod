import Head from "next/head";

const Meta = ({
  title = "Default Title",
  description = "A statically generated blog example using Next.js.",
  imageUrl = "/default-og-image.png",
  contentType = "website",
  url = "",
  canonicalUrl = "",
}) => {
  const siteName = "Your Site Name";
  const fullImageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${imageUrl}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content={contentType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_URL}${url}`} />
      <meta property="og:site_name" content={siteName} />
      <link rel="canonical" href={`${process.env.NEXT_PUBLIC_SITE_URL}${canonicalUrl || url}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      {/* Additional Meta Tags */}
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000" />
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "WebSite",
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${url}`,
          name: title,
          description: description,
        })}
      </script>
      {/* Other Dynamic Meta Tags as Needed */}
    </Head>
  );
};

export default Meta;
