"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  sizes: string;
  featured?: boolean;
}

export default function NewsImage({ src, alt, sizes, featured = false }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <div
      className={
        featured
          ? "relative lg:w-[460px] h-52 lg:h-auto flex-shrink-0 overflow-hidden bg-slate-800"
          : "relative h-40 overflow-hidden flex-shrink-0 bg-slate-800"
      }
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={
          featured
            ? "object-cover group-hover:scale-[1.03] transition-transform duration-500"
            : "object-cover group-hover:scale-[1.04] transition-transform duration-500"
        }
        sizes={sizes}
        unoptimized
        onError={() => setFailed(true)}
      />
    </div>
  );
}
