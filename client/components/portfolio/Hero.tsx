import { Button } from "@/components/ui/button";
import { resume } from "@/data/resume";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-indigo-300/10 to-cyan-300/10" />
      <div className="container py-16 sm:py-20">
        <div className="grid items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <span>Available for full-time roles</span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight">
              {resume.name}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              {resume.headline}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="mailto:tusharuppal909@gmail.com">
                <Button size="lg">Get in touch</Button>
              </a>
              <a href="tel:+13127746121">
                <Button size="lg" variant="outline">
                  Call {resume.phone}
                </Button>
              </a>
            </div>
            <div className="mt-6 text-sm text-muted-foreground">
              <p>
                Email: <a className="hover:underline" href={`mailto:${resume.email}`}>{resume.email}</a>
              </p>
              {resume.secondaryEmail ? (
                <p>
                  Alt Email: <a className="hover:underline" href={`mailto:${resume.secondaryEmail}`}>{resume.secondaryEmail}</a>
                </p>
              ) : null}
              <p>
                Phone: <a className="hover:underline" href="tel:+13127746121">{resume.phone}</a>
              </p>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative mx-auto aspect-square w-40 sm:w-56 md:w-64">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-indigo-400 opacity-20 blur-2xl" />
              <div className="relative size-full overflow-hidden rounded-2xl border bg-card shadow-sm">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F33f441e383b24b5f998d70b29cc99b5e%2F097039beac32445e97fff101bbf57877?format=webp&width=800"
                  alt="Portrait of Tushar Uppal"
                  className="h-full w-full object-cover"
                  loading="eager"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
