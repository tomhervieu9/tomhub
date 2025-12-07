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
        <div className="flex-1 flex items-end justify-center">
          <div id="image-container" className="relative w-fit h-fit">
            <Image
              src="/images/portfolio-shot.png"
              alt="Profile Picture"
              priority
              width={0}
              height={0}
              sizes="100%"
              className="w-fit h-fit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
