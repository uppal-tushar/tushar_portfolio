import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section className="container py-12" id="about">
      <SectionHeading
        title="About Me"
        subtitle="Robotics coordination • Systems support • Field integration"
      />
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="text-base leading-relaxed text-muted-foreground">
            I’m a systems-focused robotics professional who thrives in live
            warehouse and green‑field environments. I coordinate hardware and
            software integrations, commission robotic systems end‑to‑end, and
            lead on‑site troubleshooting to keep operations within SLA. My
            approach is hands‑on, data‑driven, and documentation‑first—turning
            field observations into clear process instructions and continuous
            improvements.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            <li className="rounded-lg border bg-card p-4 text-sm text-foreground/90 shadow-sm">
              Reduced recurring downtime by 40% by analyzing crash trends and
              implementing targeted fixes across sensors and motion control.
            </li>
            <li className="rounded-lg border bg-card p-4 text-sm text-foreground/90 shadow-sm">
              Led testing cycles (quality hand‑off, live order, site acceptance,
              and operational readiness) to ensure stable go‑lives.
            </li>
            <li className="rounded-lg border bg-card p-4 text-sm text-foreground/90 shadow-sm">
              Tooling: Python, SQL, Linux, Jira, Shell scripting, Grafana, Power
              BI; Databases: Oracle, MySQL; Cloud: AWS/Azure (basic).
            </li>
          </ul>
        </div>
        <div className="md:col-span-5">
          <div className="rounded-2xl border bg-gradient-to-br from-primary/10 via-accent/10 to-cyan-300/10 p-6">
            <h3 className="text-sm font-semibold tracking-wide text-foreground/80">
              What I’m looking for
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Full‑time roles where I can own field deployments, improve system
              reliability, and bridge hardware, software, and operations.
            </p>
            <div className="mt-4 grid gap-2 text-sm">
              <p>• Field deployments and commissioning</p>
              <p>• On‑site/remote troubleshooting and RCA</p>
              <p>• Data‑backed reliability and process improvements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
