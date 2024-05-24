import Image from "next/image";

export default function Avatar({ author }) {
  const isAuthorHaveFullName = author?.node?.firstName && author?.node?.lastName;
  const name = isAuthorHaveFullName
    ? `${author.node.firstName} ${author.node.lastName}`
    : author?.node?.name || "Anonymous";

  const avatarUrl = author?.node?.avatar?.url || "/placeholder-avatar.png"; // Update to a valid placeholder image path

  return (
    <div className="flex items-center">
      <div className="relative w-12 h-12 mr-4">
        <Image
          src={avatarUrl}
          fill // Use fill for responsive images
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Provide sizes for responsive loading
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
