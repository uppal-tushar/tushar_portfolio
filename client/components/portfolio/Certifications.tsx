import SectionHeading from "./SectionHeading";
import { resume } from "@/data/resume";
import { Badge } from "@/components/ui/badge";

export default function Certifications() {
  return (
    <section className="container py-12" id="certifications">
      <SectionHeading title="Certifications" />
      <div className="flex flex-wrap gap-2">
        {resume.certifications.map((c) => (
          <Badge key={c.name} className="px-3 py-1">{c.name}</Badge>
        ))}
      </div>
    </section>
  );
}
