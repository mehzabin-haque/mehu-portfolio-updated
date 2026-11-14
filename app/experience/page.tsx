import { PageShell, Reveal, SectionHeading } from '@/components/PageBits';
import { experiences, skills } from '@/lib/data';

const sections = [
  { title: 'Research Experience', items: experiences.filter((e) => e.position.includes('Researcher') || e.position.includes('Research Assistant') || e.position.includes('Research Intern')) },
  { title: 'Teaching Experience', items: experiences.filter((e) => e.position.includes('Lecturer')) },
  { title: 'Professional Experience', items: experiences.filter((e) => e.position.includes('Software Engineer')) },
];

export default function ExperiencePage() {
  return (
    <PageShell>
      <SectionHeading title="Experience" />
      {sections.map((section, idx) => (
        <section key={section.title} className={idx ? 'mt-14' : ''}>
          <h3 className="mb-6 font-mono text-[11px] uppercase tracking-widest text-[#8A8578]">{section.title}</h3>
          <div className="space-y-9 border-t border-[#D9D4C7] pt-6">
            {section.items.map((exp) => (
              <Reveal key={exp.position}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h4 className="font-serif text-lg font-semibold text-[#1E2430]">{exp.position}</h4>
                  <span className="shrink-0 font-mono text-[11px] text-[#8A8578]">{exp.duration}</span>
                </div>
                <p className="text-sm italic text-[#7A2E2E]">{exp.organization}</p>
                <ul className="mt-3 space-y-1.5">{exp.description.map((item) => <li key={item} className="flex gap-2 text-sm leading-relaxed text-[#3C3F45]"><span className="text-[#8A8578]">–</span><span>{item}</span></li>)}</ul>
              </Reveal>
            ))}
          </div>
        </section>
      ))}
      <div className="mt-16">
        <SectionHeading title="Technical Skills" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skills.map((group) => (
            <Reveal key={group.category}>
              <p className="font-mono text-[11px] uppercase tracking-widest text-[#8A8578]">{group.category}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#3C3F45]">{group.items.join(' · ')}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
