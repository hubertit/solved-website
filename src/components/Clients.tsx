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
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-5">
          {clientPlaceholders.map((client) => (
            <div
              key={client}
              className="flex h-16 items-center justify-center rounded-lg bg-zinc-50 text-sm font-semibold tracking-tight text-zinc-400 dark:bg-zinc-900 dark:text-zinc-600"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}