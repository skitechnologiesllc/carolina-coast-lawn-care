"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const IMAGE_DURATION_MS = 20_000;
const PRELOAD_AHEAD_MS = 2_000;
const KEN_BURNS_VARIANTS = 4;

type HeroBackgroundProps = {
  images?: string[];
  videoSrc?: string;
  alts?: string[];
};

export function HeroBackground({
  images = [],
  videoSrc,
  alts = [],
}: HeroBackgroundProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mountedIndices, setMountedIndices] = useState(() => new Set([0]));

  useEffect(() => {
    if (videoSrc || images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % images.length;
        setMountedIndices((mounted) => {
          const updated = new Set(mounted);
          updated.add(next);
          return updated;
        });
        return next;
      });
    }, IMAGE_DURATION_MS);

    return () => clearInterval(interval);
  }, [images.length, videoSrc]);

  // Preload the next slide shortly before the cross-fade so LCP stays focused on slide 0
  useEffect(() => {
    if (videoSrc || images.length <= 1) return;

    const next = (activeIndex + 1) % images.length;
    const timeout = setTimeout(() => {
      setMountedIndices((mounted) => {
        if (mounted.has(next)) return mounted;
        const updated = new Set(mounted);
        updated.add(next);
        return updated;
      });
    }, IMAGE_DURATION_MS - PRELOAD_AHEAD_MS);

    return () => clearTimeout(timeout);
  }, [activeIndex, images.length, videoSrc]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {videoSrc ? (
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        images.map((src, index) => {
          if (!mountedIndices.has(index)) return null;

          const isActive = index === activeIndex;
          const kenBurnsClass = `hero-kenburns-${(index % KEN_BURNS_VARIANTS) + 1}`;

          return (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className={`absolute inset-0 will-change-transform ${
                  isActive ? kenBurnsClass : ""
                }`}
              >
                <Image
                  src={src}
                  alt={alts[index] ?? ""}
                  fill
                  priority={index === 0}
                  quality={85}
                  sizes="100vw"
                  className="object-cover object-[center_40%] sm:object-center"
                />
              </div>
            </div>
          );
        })
      )}

      {/* Dark overlay keeps white headline readable over any photo */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(165deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.6) 100%)",
        }}
      />
    </div>
  );
}
