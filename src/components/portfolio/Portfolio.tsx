import { cn } from "@/lib/utils/css/classNames";

export const Portfolio = (props: { className: string }) => {
  return (
    <main className={cn("flex-7", props.className)}>
      Welcome to my website.
    </main>
  );
};
