import { useCallback, useEffect, useMemo, useState } from "react";
import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  {
    src:
      "https://cdn.builder.io/api/v1/image/assets%2F33f441e383b24b5f998d70b29cc99b5e%2F51a99ce8db294f0d851a952dff369992?format=webp&width=800",
    alt: "Graduation ceremony — Governors State University",
    caption: "Graduation — Governors State University",
  },
  {
    src:
      "https://cdn.builder.io/api/v1/image/assets%2F33f441e383b24b5f998d70b29cc99b5e%2F9b2d02cfbed34573b174f470e9660b7b?format=webp&width=800",
    alt: "At Dillard's facility",
    caption: "Deployment visit — Dillard's",
  },
  {
    src:
      "https://cdn.builder.io/api/v1/image/assets%2F33f441e383b24b5f998d70b29cc99b5e%2F11d389132c104e49abbeb3e9656eeb6d?format=webp&width=800",
    alt: "At Walmart fulfillment center",
    caption: "Fulfillment Center — Walmart",
  },
  {
    src:
      "https://cdn.builder.io/api/v1/image/assets%2F33f441e383b24b5f998d70b29cc99b5e%2F24a8e70e890347168727f133f5c7163f?format=webp&width=800",
    alt: "Waterfront portrait in suit",
    caption: "Professional portrait",
  },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const count = photos.length;
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, next, prev]);

  const active = useMemo(() => photos[index], [index]);

  return (
    <section className="container py-12" id="photos">
      <SectionHeading title="Photos" subtitle="A few moments from my journey" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {photos.map((p, i) => (
          <button
            key={p.src}
            className="group relative overflow-hidden rounded-xl border bg-card shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
              width={800}
              height={416}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
              <p className="text-xs font-medium text-white/95">{p.caption}</p>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl border-0 bg-transparent p-0 shadow-none">
          <div className="relative overflow-hidden rounded-2xl border bg-card">
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[70vh] w-full object-contain bg-black/5"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent p-3">
              <p className="text-sm font-medium text-white/95">{active.caption}</p>
              <div className="flex gap-2">
                <Button size="icon" variant="secondary" onClick={prev} aria-label="Previous">
                  <ChevronLeft />
                </Button>
                <Button size="icon" variant="secondary" onClick={next} aria-label="Next">
                  <ChevronRight />
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
