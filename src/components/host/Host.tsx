import { cn } from "@/lib/utils/css/classNames";
import Image from "next/image";
import { ThoughtBubble } from "./ThoughtBubble";

export const Host = (props: { className: string }) => {
  return (
    <div className={cn("flex-2 min-w-0 min-h-0", props.className)}>
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
