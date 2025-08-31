import SectionHeading from "./SectionHeading";
import { resume } from "@/data/resume";
import { Card, CardContent } from "@/components/ui/card";

export default function Education() {
  return (
    <section className="container py-12" id="education">
      <SectionHeading title="Education" />
      <div className="grid gap-6 md:grid-cols-2">
        {resume.education.map((ed) => (
          <Card key={`${ed.school}-${ed.degree}`}>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">{ed.school}</h3>
              <p className="text-sm text-muted-foreground">{ed.location}</p>
              <p className="mt-1 text-sm">{ed.degree}</p>
              <p className="text-sm text-muted-foreground">
                {ed.dates}
                {ed.gpa ? ` • ${ed.gpa}` : ""}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
