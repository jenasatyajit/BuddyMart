import { GridBeams } from "@/components/magicui/grid-beams";

export default function Hero() {
  return (
    <section id="hero" className="w-full">
      <GridBeams
        className="w-full min-h-screen flex items-center justify-center px-6 py-12 md:py-24"
        gridColor="transparent"
        backgroundColor="oklch(34.70% 0.089 251.09)"
      >
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-block rounded-full bg-secondary/20 px-4 py-2 text-sm font-medium text-secondary mb-6">
                Multi Vendor eCommerce Solution 🚀
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white mb-6">
                <span className="block">Multi Vendor eCommerce</span>
                <span className="block text-secondary">Solution with Multiple</span>
                <span className="block text-secondary">Business Modules</span>
              </h1>
              
              <p className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
                Experience the best multi vendor eCommerce marketplace solution that allows you to operate and control various businesses in one place with BuddyMart.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Coming Soon
                </button>
                <button className="border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Explore Demo
                </button>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-secondary/20 to-transparent rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <img 
                  src="/hero.svg" 
                  alt="BuddyMart Multi Vendor eCommerce Solution" 
                  className="w-full h-auto max-w-md mx-auto"
                />
                
                {/* Floating Stats */}
                <div className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">100+</div>
                    <div className="text-white/90 text-sm">Vendors</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">24/7</div>
                    <div className="text-white/90 text-sm">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GridBeams>
    </section>
  );
}

