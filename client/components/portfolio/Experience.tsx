import SectionHeading from "./SectionHeading";
import { resume } from "@/data/resume";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Experience() {
  return (
    <section className="container py-12" id="experience">
      <SectionHeading title="Professional Experience" />
      <div className="grid gap-6">
        {resume.experience.map((exp) => (
          <Card key={`${exp.company}-${exp.role}`}>
            <CardHeader className="pb-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <CardTitle className="text-xl">
                  {exp.role} •{" "}
                  <span className="font-normal text-muted-foreground">
                    {exp.company}
                  </span>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {exp.location} • {exp.start} – {exp.end}
                </p>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="list-disc space-y-2 pl-6 text-sm leading-relaxed text-muted-foreground">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
