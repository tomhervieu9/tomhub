import Image from "next/image";
import { ThoughtBubble } from "./ThoughtBubble";

export const Host = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute -top-20 left-0 z-10">
        <ThoughtBubble />
      </div>
      <Image
        src="/images/portfolio-shot.png"
        alt="Profile Picture"
        width={500}
        height={350}
        priority
      />
    </div>
  );
};
