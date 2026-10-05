import Image from "next/image";
import HeroCTAButtons from "@/components/HeroCTAButtons";

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 pt-6 sm:px-6">
      <div className="relative flex min-h-screen items-center overflow-hidden rounded-3xl">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/10" />

        <div className="relative w-full px-6 py-16 text-center sm:px-12 sm:py-24 lg:text-left">
          <h1 className="mx-auto max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-7xl lg:mx-0">
            Technology That Solves Real Business Problems.
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-xl text-zinc-200 lg:mx-0">
            SOLVED helps businesses and organizations transform complex
            challenges into scalable digital solutions through software,
            automation, data and modern technology.
          </p>
          <HeroCTAButtons />
        </div>
      </div>
    </section>
  );
}