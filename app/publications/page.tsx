import { PageShell, Reveal, SectionHeading } from '@/components/PageBits';
import { publicationsByYear, profile } from '@/lib/data';

export default function PublicationsPage() {
  return (
    <PageShell>
      <SectionHeading title="Publications" />

      <Reveal className="mb-10 text-sm text-[#565A63]">
        Full list, citation counts, and metrics on{' '}
        <a
          href={profile.scholar}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#7A2E2E] underline decoration-[#7A2E2E]/30 underline-offset-4 hover:decoration-[#7A2E2E]"
        >
          Google Scholar
        </a>
        .
      </Reveal>

      <div className="space-y-12">
        {publicationsByYear.map((group) => (
          <div key={group.year}>
            <p className="mb-4 font-mono text-sm text-[#8A8578]">{group.year}</p>
            <div className="border-t border-double border-t-4 border-[#D9D4C7]" />
            <div className="mt-6 space-y-6">
              {group.items.map((pub, i) => (
                <Reveal key={i}>
                  {pub.link ? (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif text-base font-semibold text-[#1E2430] underline decoration-transparent underline-offset-4 hover:decoration-[#1E2430]"
                    >
                      {pub.title}
                    </a>
                  ) : (
                    <p className="font-serif text-base font-semibold text-[#1E2430]">{pub.title}</p>
                  )}
                  <p className="mt-1 text-sm text-[#565A63]">{pub.authors}</p>
                  <p className="mt-1 text-sm italic text-[#8A8578]">{pub.venue}</p>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
