import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  coverImage?: {
    node?: {
      sourceUrl?: string;
    };
  };
  slug?: string;
}

export default function CoverImage({ title, coverImage, slug }: Props) {
  const imageUrl = coverImage?.node?.sourceUrl || '/placeholder-cover-image.png'; // Fallback image URL

  const image = (
    <Image
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      src={imageUrl}
      className={cn("shadow-small image-glow", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
      priority // Add priority for LCP images
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Provide sizes for responsive loading
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
