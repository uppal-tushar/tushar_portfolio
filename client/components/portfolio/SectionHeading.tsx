import { cn } from "@/lib/utils";

export default function SectionHeading({
  title,
  subtitle,
  className,
  id,
}: {
  title: string;
  subtitle?: string;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} className={cn("mb-8 text-center sm:text-left", className)}>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
        <span className="bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle ? (
        <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  );
}
