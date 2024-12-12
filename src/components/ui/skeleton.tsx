import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-entertain-fourth/40",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
