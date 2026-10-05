import { testimonials } from "@/content/testimonials";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          What Our Clients Say
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name + testimonial.company}
            className="rounded-2xl border border-black/[.08] p-6 dark:border-white/[.1]"
          >
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-xs font-semibold text-white dark:bg-white dark:text-black">
                {getInitials(testimonial.name)}
              </div>
              <div>
                <p className="text-sm font-semibold">{testimonial.name}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {testimonial.position}, {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}