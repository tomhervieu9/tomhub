import { cn } from "@/lib/utils/css/classNames";

export const UserPanel = (props: { className: string }) => {
  return (
    <div className={cn("flex-1 min-w-0 min-h-0", props.className)}>
      User Panel
    </div>
  );
};
