import SectionHeading from "./SectionHeading";

const bullets: string[] = [
  "Ability to read and develop technical documentation and process instructions.",
  "Ability to handle multiple competing priorities in a fast-paced environment.",
  "Willingness to work primarily in a construction or warehouse environment in a field-based role.",
  "Proficiency with standard office software tools and processes.",
  "Strong foundational knowledge in robotics or complex electro-mechanical and networked engineering.",
  "Bias for taking independent initiative and communicating progress to leadership.",
  "Excellent verbal and written communication skills; clearly explain technical concepts to customers and stakeholders.",
  "Ability to work with cross-functional teams.",
  "Capture lessons learned and drive technical continuous improvement projects.",
  "Ability to function independently and manage a team of 1–5 engineers during deployments.",
  "Coordinate with multiple internal and external stakeholders to resolve cross-functional deployment issues.",
  "Oversee and resolve escalations during deployments including quality hand-off, live order testing, site acceptance testing, and operational readiness.",
  "Own key KPIs around on-time delivery, cost, quality, safety, and sustainability.",
  "Understand data collection and reporting and make data-driven decisions.",
];

export default function CriticalSkills() {
  return (
    <section className="container py-12" id="critical-skills">
      <SectionHeading title="Critical Skills" subtitle="Professional strengths aligned to field deployment and robotics" />
      <ul className="grid gap-3 sm:grid-cols-2">
        {bullets.map((b, i) => (
          <li key={i} className="group rounded-lg border bg-card p-4 shadow-sm transition hover:shadow-md">
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-cyan-500 text-white text-[10px]">★</span>
              <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground">{b}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
