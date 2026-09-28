import { testimonials } from "@/content/testimonials";

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
            <div className="mt-6">
              <p className="text-sm font-semibold">{testimonial.name}</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {testimonial.position}, {testimonial.company}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}