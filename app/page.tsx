import { PageShell, Reveal, SectionHeading } from '@/components/PageBits';
import { profile, highlights } from '@/lib/data';

export default function AboutPage() {
  const [firstWord, ...rest] = profile.about.split(' ');

  return (
    <PageShell>
      <SectionHeading title="About" />

      <Reveal className="max-w-xl text-[15px] leading-[1.9] text-[#3C3F45]">
        <p>
          <span className="float-left mr-2 mt-1 font-serif text-5xl font-semibold leading-[0.8] text-[#7A2E2E]">
            {firstWord[0]}
          </span>
          {firstWord.slice(1)} {rest.join(' ')}
        </p>
      </Reveal>

      <Reveal className="mt-16">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-[#8A8578]">Curriculum Notes</p>
        <div className="border-t border-double border-t-4 border-[#D9D4C7]" />
        <ul className="mt-6 divide-y divide-[#D9D4C7]">
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
