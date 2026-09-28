const clientPlaceholders = [
  "Client One",
  "Client Two",
  "Client Three",
  "Client Four",
  "Client Five",
];

export default function Clients() {
  return (
    <section className="border-y border-black/[.08] bg-white py-16 dark:border-white/[.1] dark:bg-black">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-sm font-medium text-zinc-500 dark:text-zinc-400">
          Trusted by organizations across Rwanda and beyond
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {clientPlaceholders.map((client) => (
            <div
              key={client}
              className="flex h-12 w-32 items-center justify-center rounded border border-dashed border-black/[.15] text-xs text-zinc-400 dark:border-white/[.15]"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}