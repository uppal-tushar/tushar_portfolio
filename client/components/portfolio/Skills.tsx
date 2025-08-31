import { Badge } from "@/components/ui/badge";
import SectionHeading from "./SectionHeading";
import { resume } from "@/data/resume";

export default function Skills() {
  return (
    <section className="container py-12" id="skills">
      <SectionHeading
        title="Skills"
        subtitle="Core technical and professional strengths"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(resume.skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-lg border bg-card p-6 shadow-sm"
          >
            <h3 className="text-base font-semibold mb-3">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
