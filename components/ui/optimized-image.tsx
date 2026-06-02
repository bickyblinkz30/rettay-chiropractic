import Image from "next/image";
import { cn } from "@/lib/utils";

type OptimizedImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  containerClassName?: string;
};

function isUnoptimized(src: string): boolean {
  return src.endsWith(".svg");
}

export function OptimizedImage({
  src,
  alt,
  width = 800,
  height = 600,
  className,
  priority = false,
  fill = false,
  sizes,
  containerClassName,
}: OptimizedImageProps) {
  if (fill) {
    return (
      <div className={cn("relative overflow-hidden", containerClassName)}>
        <Image
          src={src}
          alt={alt}
          fill
          className={cn("object-cover", className)}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          sizes={sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
          unoptimized={isUnoptimized(src)}
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("object-cover", className)}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      sizes={sizes || undefined}
      unoptimized={isUnoptimized(src)}
    />
  );
}
