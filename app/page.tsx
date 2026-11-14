import Link from 'next/link';
import { PageShell, Reveal, SectionHeading } from '@/components/PageBits';
import { profile, highlights, researchInterests, ongoingProjects } from '@/lib/data';

export default function AboutPage() {
  const [firstWord, ...rest] = profile.about.split(' ');
  return (
    <PageShell>
      <SectionHeading title="About" />
      <Reveal className="max-w-xl text-[15px] leading-[1.9] text-[#3C3F45]">
        <p><span className="float-left mr-2 mt-1 font-serif text-5xl font-semibold leading-[0.8] text-[#7A2E2E]">{firstWord[0]}</span>{firstWord.slice(1)} {rest.join(' ')}</p>
      </Reveal>

      <Reveal className="mt-14">
        <h3 className="mb-4 font-mono text-[11px] uppercase tracking-widest text-[#8A8578]">Research Interests</h3>
        <div className="flex flex-wrap gap-2">
          {researchInterests.map((interest) => <span key={interest} className="border border-[#D9D4C7] px-3 py-2 text-xs text-[#3C3F45]">{interest}</span>)}
        </div>
      </Reveal>

      <div className="mt-16">
        <SectionHeading title="Ongoing Research & Academic Projects" />
        <div className="space-y-7">
          {ongoingProjects.map((project) => (
            <Reveal key={project.title}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-serif text-base font-semibold text-[#1E2430]">{project.title}</h3>
                <span className="shrink-0 font-mono text-[11px] text-[#8A8578]">{project.period}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#3C3F45]">{project.description}</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-[#8A8578]">{project.category} · {project.topics.join(' · ')}</p>
            </Reveal>
          ))}
          <Link href="/projects" className="inline-block text-sm text-[#7A2E2E] underline underline-offset-4">Explore all projects →</Link>
        </div>
      </div>

      <Reveal className="mt-16">
        <SectionHeading title="Research & Academic Journey" />
        <ul className="divide-y divide-[#D9D4C7]">
          {highlights.map((h, i) => (
            <li key={i} className="flex gap-6 py-3 text-sm">
              <span className="w-14 shrink-0 font-mono text-[#8A8578]">{h.when}</span>
              <span className="text-[#3C3F45]">{h.text}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </PageShell>
  );
}
