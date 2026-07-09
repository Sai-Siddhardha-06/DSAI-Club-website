"use client";

import { useMemo } from "react";
import Image from "next/image";
import brainBg from "../../app/assets/blue-brain-1.png";

export default function BrainBackground() {

  return (
    <div className="absolute inset-0 z-0 bg-background pointer-events-none">
      <div className="absolute inset-0 opacity-60">
        <Image
          src={brainBg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      <div className="absolute inset-0 brain-glow opacity-40" />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/50 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}