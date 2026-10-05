import type { TeamMember } from "@/content/team";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="rounded-2xl border border-black/[.08] p-6 text-center transition-colors hover:border-[var(--brand-blue)]/40 dark:border-white/[.1]">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[var(--brand-navy)] text-lg font-semibold text-white">
        {getInitials(member.name)}
      </div>
      <h3 className="mt-4 font-semibold">{member.name}</h3>
      <p className="mt-1 text-sm text-[var(--brand-blue)]">{member.role}</p>
      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{member.bio}</p>
    </div>
  );
}