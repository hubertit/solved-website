import HeroCTAButtons from "@/components/HeroCTAButtons";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Text content */}
        <div className="text-center lg:text-left">
          <h1 className="mx-auto max-w-xl text-4xl font-semibold tracking-tight sm:text-6xl lg:mx-0">
            Technology That Solves Real Business Problems.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-600 dark:text-zinc-400 lg:mx-0">
            SOLVED helps businesses and organizations transform complex
            challenges into scalable digital solutions through software,
            automation, data and modern technology.
          </p>
          <HeroCTAButtons />
        </div>

        {/* Abstract tech visual */}
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <svg
            viewBox="0 0 400 400"
            className="h-full w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="80" y1="120" x2="200" y2="60" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" />
            <line x1="200" y1="60" x2="320" y2="140" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" />
            <line x1="80" y1="120" x2="100" y2="260" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" />
            <line x1="320" y1="140" x2="300" y2="280" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" />
            <line x1="100" y1="260" x2="300" y2="280" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" />

            <rect x="40" y="180" width="140" height="100" rx="12" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.15" />
            <rect x="56" y="198" width="60" height="8" rx="4" fill="currentColor" fillOpacity="0.2" />
            <rect x="56" y="216" width="108" height="6" rx="3" fill="currentColor" fillOpacity="0.12" />
            <rect x="56" y="230" width="80" height="6" rx="3" fill="currentColor" fillOpacity="0.12" />
            <rect x="56" y="250" width="40" height="18" rx="4" fill="currentColor" fillOpacity="0.15" />

            <rect x="220" y="160" width="130" height="120" rx="12" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.15" />
            <rect x="238" y="240" width="14" height="24" rx="2" fill="currentColor" fillOpacity="0.25" />
            <rect x="258" y="220" width="14" height="44" rx="2" fill="currentColor" fillOpacity="0.35" />
            <rect x="278" y="200" width="14" height="64" rx="2" fill="currentColor" fillOpacity="0.5" />
            <rect x="298" y="230" width="14" height="34" rx="2" fill="currentColor" fillOpacity="0.3" />

            <circle cx="80" cy="120" r="10" fill="currentColor" fillOpacity="0.9" />
            <circle cx="200" cy="60" r="8" fill="currentColor" fillOpacity="0.6" />
            <circle cx="320" cy="140" r="10" fill="currentColor" fillOpacity="0.9" />
          </svg>
        </div>
      </div>
    </section>
  );
}