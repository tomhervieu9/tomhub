import Image from "next/image";
import { ThoughtBubble } from "./ThoughtBubble";

export const Host = () => {
  return (
    <div className="flex-2">
      <div className="flex md:flex-col flex-row w-full h-full">
        <div className="relative flex-1">
          <ThoughtBubble />
        </div>
        <div className="relative flex-1">
          <Image
            src="/images/portfolio-shot.png"
            alt="Profile Picture"
            priority
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};
