import type { Metadata } from "next";
import { team } from "@/content/team";
import TeamCard from "@/components/TeamCard";

export const metadata: Metadata = {
  title: "About Us | SOLVED",
  description:
    "Learn about SOLVED's mission, vision and approach to building technology that solves real business problems.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      {/* Company */}
      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          Company
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          About SOLVED
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
          SOLVED combines technology, creativity and business understanding
          to build digital solutions that solve real-world problems. We work
          with businesses, organizations and institutions to turn complex
          challenges into practical, scalable technology.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold">Our Mission</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            To help businesses and organizations solve complex problems
            through software, automation, data and modern technology.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Our Vision</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            To be a leading technology partner for organizations building
            their digital future.
          </p>
        </div>
      </div>

      {/* Our Approach */}
      <div className="mt-16">
        <h2 className="text-lg font-semibold">Our Approach</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          We start by understanding the real business problem before
          designing any technology. Every solution we build is tailored to
          how our clients actually work, not forced into a generic template.
        </p>
      </div>

      {/* Team */}
      {/* Team */}
<div className="mt-16">
  <h2 className="text-lg font-semibold">Our Team</h2>
  <p className="mt-2 text-zinc-600 dark:text-zinc-400">
    SOLVED is made up of engineers, designers and consultants
    passionate about solving real business problems through
    technology.
  </p>
  <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
    {team.map((member) => (
      <TeamCard key={member.slug} member={member} />
    ))}
  </div>
</div>
    </div>
  );
}