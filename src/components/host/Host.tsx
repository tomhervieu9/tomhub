import { cn } from "@/lib/utils/css/classNames";
import Image from "next/image";
import { ThoughtBubble } from "./ThoughtBubble";

export const Host = (props: { className: string }) => {
  // TODO: improve the sizing methodology for the next/image component.

  return (
    <div
      id="host-container"
      className={cn("flex-2 min-w-0 min-h-0", props.className)}
    >
      <div
        id="host-inner-container"
        className="flex md:flex-col flex-row w-full h-full "
      >
        <div
          id="thought-bubble-container"
          className="relative flex-10 flex items-end justify-center"
        >
          <ThoughtBubble />
        </div>
        <div id="host-gap" className="flex-1" />
        <div
          id="host-image-container"
          className="flex items-end justify-center"
        >
          <Image
            id="host-image"
            src="/images/portfolio-shot.png"
            alt="Profile Picture"
            priority
            width={0}
            height={0}
            sizes="100%"
            className="w-auto h-auto max-h-full"
          />
        </div>
      </div>
    </div>
  );
};
