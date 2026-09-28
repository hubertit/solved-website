import type { TeamMember } from "@/content/team";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="rounded-2xl border border-dashed border-black/[.15] p-6 text-center dark:border-white/[.15]">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-zinc-100 text-xs text-zinc-400 dark:bg-zinc-900">
        Photo
      </div>
      <h3 className="mt-4 font-semibold">{member.name}</h3>
      <p className="mt-1 text-sm text-zinc-500">{member.role}</p>
      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
        {member.bio}
      </p>
    </div>
  );
}