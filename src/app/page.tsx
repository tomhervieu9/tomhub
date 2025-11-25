"use client";

import { ThoughtBubble } from "@/components/ThoughtBubble";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showThought] = useState(true);

  return (
    <div className="relative flex min-h-screen items-end justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="min-h-screen w-full max-w-3xl bg-white dark:bg-black flex-shrink-0">
        Welcome to my website.
      </main>
      <div className="absolute bottom-0 right-0 flex items-start justify-end w-[30vw]">
        <div className="relative w-full h-full">
          <div className="absolute -top-20 left-0 z-10">
            <ThoughtBubble
              text="Welcome! Feel free to explore my work."
              isVisible={showThought}
            />
          </div>
          <Image
            src="/images/portfolio-shot.png"
            alt="Profile Picture"
            width={500}
            height={350}
            priority
          />
        </div>
      </div>
    </div>
  );
}
