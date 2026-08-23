import { PageShell, Reveal, SectionHeading } from '@/components/PageBits';
import { education, awards } from '@/lib/data';

export default function EducationPage() {
  return (
    <PageShell>
      <SectionHeading title="Education" />
      <div className="space-y-6">
        {education.map((edu, index) => (
          <Reveal key={index} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 className="font-serif text-base font-semibold text-[#1E2430]">{edu.degree}</h3>
              <p className="text-sm text-[#565A63]">{edu.institution}</p>
            </div>
            <div className="sm:text-right">
              <p className="font-mono text-[11px] text-[#8A8578]">{edu.duration}</p>
              <p className="text-xs text-[#565A63]">{edu.details}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16">
        <SectionHeading title="Awards & Recognition" />
        <div className="space-y-3">
          {awards.map((award, index) => (
            <Reveal key={index} className="flex items-baseline justify-between gap-4 text-sm">
              <span className="text-[#3C3F45]">{award.title}</span>
              <span className="shrink-0 font-mono text-[11px] text-[#8A8578]">{award.date}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
