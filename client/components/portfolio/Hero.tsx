import { Button } from "@/components/ui/button";
import { resume } from "@/data/resume";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="absolute inset-0 -z-20">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F33f441e383b24b5f998d70b29cc99b5e%2F2781fb737fed450b983ac2a0926cec7c?format=webp&width=1600"
          alt="Autonomous warehouse robots moving shelving units in a fulfillment center"
          className="h-full w-full object-cover"
          loading="lazy"
          width={1600}
          height={800}
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-black/70" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-indigo-300/20 to-cyan-300/20" />
      <div className="container py-16 sm:py-20">
        <div className="grid items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="max-w-3xl text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90">
                <span>Available for full-time roles</span>
              </div>
              <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                {resume.name}
              </h1>
              <p className="mt-3 text-lg text-white/90">{resume.headline}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {resume.linkedin ? (
                  <a href={resume.linkedin} target="_blank" rel="noreferrer">
                    <Button
                      size="lg"
                      className="bg-white text-slate-900 hover:bg-white/90"
                    >
                      LinkedIn
                    </Button>
                  </a>
                ) : null}
                <a href="mailto:tusharuppal909@gmail.com">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Get in touch
                  </Button>
                </a>
                <a href="tel:+13127746121">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/60 text-black hover:bg-white/10"
                  >
                    Call {resume.phone}
                  </Button>
                </a>
              </div>
              <div className="mt-6 grid gap-1 text-sm text-white/85">
                {resume.linkedin ? (
                  <p>
                    LinkedIn:{" "}
                    <a
                      className="underline"
                      target="_blank"
                      rel="noreferrer"
                      href={resume.linkedin}
                    >
                      {resume.linkedin}
                    </a>
                  </p>
                ) : null}
                <p>
                  Email:{" "}
                  <a className="underline" href={`mailto:${resume.email}`}>
                    {resume.email}
                  </a>
                </p>
                {resume.secondaryEmail ? (
                  <p>
                    Alt Email:{" "}
                    <a
                      className="underline"
                      href={`mailto:${resume.secondaryEmail}`}
                    >
                      {resume.secondaryEmail}
                    </a>
                  </p>
                ) : null}
                <p>
                  Phone:{" "}
                  <a className="underline" href="tel:+13127746121">
                    {resume.phone}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-5" />
        </div>
      </div>
    </section>
  );
}
