"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type ProjectImageSliderProps = {
  images: string[];
  alt: string;
  className?: string;
};

export function ProjectImageSlider({
  images,
  alt,
  className,
}: ProjectImageSliderProps) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const multi = count > 1;

  const go = useCallback(
    (next: number) => {
      if (count === 0) return;
      setIndex(((next % count) + count) % count);
    },
    [count]
  );

  useEffect(() => {
    setIndex(0);
  }, [images]);

  if (count === 0) return null;

  const current = images[index];
  const isRaster = /\.(png|jpe?g|webp|gif)$/i.test(current);

  return (
    <div
      className={cn(
        "group relative mb-4 aspect-[16/9] overflow-hidden rounded border border-border bg-[#1a1a1a]",
        className
      )}
    >
      <Image
        src={current}
        alt={`${alt} — ${index + 1}/${count}`}
        fill
        unoptimized={current.endsWith(".svg")}
        className={isRaster ? "object-contain object-top" : "object-cover"}
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={index === 0}
      />

      {multi && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => go(index - 1)}
            className="absolute top-1/2 left-2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded border border-border bg-background/80 text-foreground opacity-100 transition-colors hover:border-neon/50 hover:text-neon md:opacity-0 md:group-hover:opacity-100"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => go(index + 1)}
            className="absolute top-1/2 right-2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded border border-border bg-background/80 text-foreground opacity-100 transition-colors hover:border-neon/50 hover:text-neon md:opacity-0 md:group-hover:opacity-100"
          >
            <ChevronRight className="size-4" />
          </button>

          <div className="absolute right-2 bottom-2 rounded border border-border bg-background/85 px-2 py-0.5 text-[10px] text-muted-foreground">
            {index + 1} / {count}
          </div>

          <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={`${alt}-dot-${i}`}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "size-1.5 rounded-full transition-colors",
                  i === index ? "bg-neon" : "bg-foreground/30 hover:bg-foreground/50"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
