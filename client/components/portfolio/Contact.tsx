import SectionHeading from "./SectionHeading";
import { resume } from "@/data/resume";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="container py-12" id="contact">
      <SectionHeading title="Get In Touch" subtitle="Let’s connect about roles in robotics, systems support, and integration." />
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <a className="block text-base font-semibold hover:underline" href={`mailto:${resume.email}`}>{resume.email}</a>
            {resume.secondaryEmail ? (
              <a className="mt-1 block text-base font-semibold hover:underline" href={`mailto:${resume.secondaryEmail}`}>{resume.secondaryEmail}</a>
            ) : null}
            <p className="mt-3 text-sm text-muted-foreground">Phone</p>
            <a className="block text-base font-semibold hover:underline" href={`tel:${resume.phone.replace(/[^+\d]/g, "")}`}>{resume.phone}</a>
          </div>
          <div className="flex gap-3">
            <a href={`mailto:${resume.email}`}>
              <Button size="lg">Email me</Button>
            </a>
            <a href={`tel:${resume.phone.replace(/[^+\d]/g, "")}`}>
              <Button size="lg" variant="outline">Call</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
