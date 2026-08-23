import { PageShell, Reveal, SectionHeading } from '@/components/PageBits';
import { experiences, skills } from '@/lib/data';

export default function ExperiencePage() {
  return (
    <PageShell>
      <SectionHeading title="Experience" />
      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <Reveal key={index}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-serif text-lg font-semibold text-[#1E2430]">{exp.position}</h3>
              <span className="font-mono text-[11px] text-[#8A8578] whitespace-nowrap">{exp.duration}</span>
            </div>
            <p className="text-sm italic text-[#7A2E2E]">{exp.organization}</p>
            <ul className="mt-3 space-y-1.5">
              {exp.description.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed text-[#3C3F45]">
                  <span className="text-[#8A8578]">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <div className="mt-16">
        <SectionHeading title="Technical Skills" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skills.map((group, index) => (
            <Reveal key={index}>
              <p className="font-mono text-[11px] uppercase tracking-widest text-[#8A8578]">{group.category}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#3C3F45]">{group.items.join(' · ')}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
