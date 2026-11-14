import { PageShell, Reveal, SectionHeading } from '@/components/PageBits';
import { projects } from '@/lib/data';

const sections = [
  { title: 'Ongoing Research & Academic Projects', items: projects.filter((p) => p.category === 'Empirical Research' || p.category === 'Academic Project') },
  { title: 'Research Tools', items: projects.filter((p) => p.category === 'Research Tool') },
  { title: 'Selected Software Projects', items: projects.filter((p) => p.category === 'Software Project') },
];

export default function ProjectsPage() {
  return (
    <PageShell>
      <SectionHeading title="Projects" />
      <p className="mb-12 text-sm leading-relaxed text-[#565A63]"></p>
      {sections.map((section, idx) => (
        <section key={section.title} className={idx ? 'mt-16' : ''}>
          <h3 className="mb-6 font-mono text-[11px] uppercase tracking-widest text-[#8A8578]">{section.title}</h3>
          <div className="space-y-8 border-t border-[#D9D4C7] pt-6">
            {section.items.map((project) => (
              <Reveal key={project.title}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h4 className="font-serif text-base font-semibold text-[#1E2430]">{project.title}</h4>
                  <span className="shrink-0 font-mono text-[11px] text-[#8A8578]">{project.year}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#3C3F45]">{project.description}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-[#8A8578]">{project.technologies.join(' · ')}</p>
              </Reveal>
            ))}
          </div>
        </section>
      ))}
    </PageShell>
  );
}
