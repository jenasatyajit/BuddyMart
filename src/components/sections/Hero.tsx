import { GridBeams } from "@/components/magicui/grid-beams";

export default function Hero() {
  return (
    <section id="hero" className="w-full relative">
      {/* Top-left: Logo + Brand, placed lower and towards the side */}
      <div className="absolute z-20 top-6 sm:top-8 md:top-12 lg:top-16 left-4 sm:left-6 md:left-8 lg:left-12 xl:left-20 flex items-center gap-2 sm:gap-3">
        <img
          src="/logo-sm.jpg"
          alt="BuddyMart Logo"
          className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-full object-cover"
        />
        <span className="text-white font-extrabold text-lg sm:text-xl md:text-xl lg:text-2xl">Buddymart</span>
      </div>

      <GridBeams
        className="w-full h-[70vh] sm:h-[75vh] md:h-[85vh] lg:h-screen"
        /* Hide grid lines */
        gridColor="transparent"
        backgroundColor="var(--color-primary)"
      />

      {/* Text positioned just above where the image starts */}
      <div className="absolute top-1/2 left-1/2 z-40 max-w-4xl text-center px-4 sm:px-6" style={{ transform: 'translateX(-50%) translateY(calc(-50% - 5rem))' }}>
        <div className="inline-block rounded-full bg-primary/20 px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium text-white mb-3 sm:mb-4">
          Launching Soon 🚀
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold tracking-tight leading-tight text-white">
          <span className="block">One Stop Solution For</span>
          <span className="block text-secondary">Local marketing needs</span>
        </h1>
        <p className="mt-3 sm:mt-4 md:mt-5 lg:mt-7 text-white/90 text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl leading-relaxed max-w-xl sm:max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae
          justo nec velit tristique luctus, sed cursus massa purus eget sem.
        </p>
      </div>

      {/* Hero Image - Positioned to overlap into services section (5/7 in hero, 2/7 in services) */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2/7 z-30">
        <img
          src="/src/assets/herosec.webp"
          alt="BuddyMart Hero"
          className="w-full h-auto scale-150 md:scale-200 lg:scale-150 xl:scale-130 object-contain"
          style={{ background: 'transparent' }}
        />
      </div>
    </section>
  );
}