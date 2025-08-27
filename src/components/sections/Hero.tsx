import { GridBeams } from "@/components/magicui/grid-beams";

export default function Hero() {
  return (
    <section id="hero" className="w-full">
      <GridBeams
        className="w-full min-h-screen flex items-center justify-center px-6 py-24"
        /* Hide grid lines */
        gridColor="transparent"
        backgroundColor="oklch(34.70% 0.089 251.09)"
      >
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="inline-block rounded-full bg-secondary/20 px-4 py-1 text-sm font-medium text-secondary mb-4">
            Launching Soon 🚀
          </div>
                    <h1 className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
            <span className="block">One Stop Solution For</span>
            <span className="block text-secondary">Local marketing needs</span>
          </h1>
          <p className="mt-5 md:mt-7 text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae
            justo nec velit tristique luctus, sed cursus massa purus eget sem.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-xs sm:max-w-3xl mx-auto">
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 md:px-6 md:py-4">
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-xl md:text-2xl font-bold text-secondary">100+</span>
                <span className="text-white/90 text-xs md:text-sm font-medium mt-1">Vendors</span>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 md:px-6 md:py-4">
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-xl md:text-2xl font-bold text-secondary">5000+</span>
                <span className="text-white/90 text-xs md:text-sm font-medium mt-1">Products</span>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 md:px-6 md:py-4">
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-xl md:text-2xl font-bold text-secondary">24/7</span>
                <span className="text-white/90 text-xs md:text-sm font-medium mt-1">Support</span>
              </div>
            </div>
          </div>
        </div>
      </GridBeams>
    </section>
  );
}
