import { cn } from "@/lib/utils/css/classNames";

export const UserPanel = (props: { className: string }) => {
  return <div className={cn("flex-1", props.className)}>User Panel</div>;
};
