import { PageShell, Reveal, SectionHeading } from '@/components/PageBits';
import { projects } from '@/lib/data';

export default function ProjectsPage() {
  return (
    <PageShell>
      <SectionHeading title="Projects" />
      <div className="space-y-7">
        {projects.map((project, index) => (
          <Reveal key={index}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-serif text-base font-semibold text-[#1E2430]">{project.title}</h3>
              <span className="font-mono text-[11px] text-[#8A8578]">{project.year}</span>
            </div>
            <p className="mt-1 text-sm leading-relaxed text-[#3C3F45]">{project.description}</p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-[#8A8578]">
              {project.category} · {project.technologies.join(', ')}
            </p>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
