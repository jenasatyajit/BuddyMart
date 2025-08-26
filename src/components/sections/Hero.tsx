import { GridBeams } from "@/components/magicui/grid-beams";

export default function Hero() {
  return (
    <section id="hero" className="w-full">
      <GridBeams
        className="w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center px-6 py-24"
        /* Hide grid lines */
        gridColor="transparent"
        backgroundColor="oklch(34.70% 0.089 251.09)"
      >
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-secondary">
            <span className="block">One Stop Solution</span>
            <span className="block">Local marketing needs</span>
          </h1>
        </div>
      </GridBeams>
    </section>
  );
}
