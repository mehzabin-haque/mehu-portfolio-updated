// import { PageShell, Reveal, SectionHeading } from '@/components/PageBits';
// import { profile, references } from '@/lib/data';

// export default function ContactPage() {
//   return (
//     <PageShell>
//       <SectionHeading title="Contact" />
//       <Reveal className="grid grid-cols-1 gap-10 sm:grid-cols-2">
//         <div>
//           <p className="text-sm leading-relaxed text-[#3C3F45]">
//             Open to collaborations, research opportunities, and academic positions — feel free to reach out.
//           </p>
//           <div className="mt-5 space-y-2 text-sm">
//             <p>
//               <span className="text-[#8A8578]">Email — </span>
//               <a href={`mailto:${profile.email}`} className="text-[#7A2E2E] hover:underline">
//                 {profile.email}
//               </a>
//             </p>
//             <p>
//               <span className="text-[#8A8578]">Phone — </span>
//               <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="text-[#7A2E2E] hover:underline">
//                 {profile.phone}
//               </a>
//             </p>
//             <p>
//               <span className="text-[#8A8578]">Location — </span>
//               {profile.location}
//             </p>
//           </div>
//         </div>

//         <div>
//           <p className="font-mono text-[11px] uppercase tracking-widest text-[#8A8578]">References</p>
//           <div className="mt-3 space-y-4 text-sm">
//             {references.map((ref) => (
//               <div key={ref.email}>
//                 <p className="font-medium text-[#1E2430]">{ref.name}</p>
//                 <p className="text-[#565A63]">{ref.role}</p>
//                 <a href={`mailto:${ref.email}`} className="text-[#7A2E2E] hover:underline">
//                   {ref.email}
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </Reveal>
//     </PageShell>
//   );
// }
