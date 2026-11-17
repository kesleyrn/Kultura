import Image from "next/image";

// Optimised (AVIF/WebP, resized, lazy) image that fills its positioned parent.
export default function Img({ src, alt, sizes, priority, className, pos }: { src: string; alt: string; sizes: string; priority?: boolean; className?: string; pos?: string }) {
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={className} style={{ objectFit: "cover", objectPosition: pos ?? "center" }} />;
}
