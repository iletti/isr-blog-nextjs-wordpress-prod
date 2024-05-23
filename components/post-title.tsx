export default function PostTitle({ children }) {
  return (
    <h1
      className="mb-12 text-4xl font-bold leading-tight tracking-tighter text-center md:text-4xl lg:text-4xl md:leading-none md:text-left text-[6vw]"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
