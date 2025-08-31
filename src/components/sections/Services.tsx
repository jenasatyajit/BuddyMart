import { OrbitingCircles } from "@/components/magicui/orbiting-circle";

export default function Services() {
  const services = [
    { name: "Admin Panel", icon: "🏢" },
    { name: "Vendor Panel", icon: "🏪" },
    { name: "Customer App", icon: "📱" },
    { name: "Delivery App", icon: "🚚" },
    { name: "React Website", icon: "🌐" },
    { name: "Food Module", icon: "🍕" },
    { name: "Grocery", icon: "🛒" },
    { name: "Pharmacy", icon: "💊" },
  ];

  return (
    <section id="services" className="w-full pt-38 md:pt-42 pb-12 md:pb-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Lorem ipsum dolor sit amet <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">consectetur adipiscing</span> Consectetur adipiscing elit quisque faucibus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae
          </p>
        </div>

        {/* Main Content Area */}
        <div className="relative flex items-center justify-center min-h-[440px] md:min-h-[520px]">
          
          {/* Left Side Floating Elements - Smooth responsive scaling */}
          <div className="hidden lg:block absolute left-0 lg:-left-4 xl:-left-8 2xl:-left-16 3xl:-left-24 top-1/2 transform -translate-y-1/2 space-y-8 lg:space-y-10 xl:space-y-12 2xl:space-y-16">
            {/* Multi-Vendor Ready - Top Left (Smaller) */}
            <div className="bg-gradient-to-br from-white to-green-50 rounded-lg lg:rounded-xl xl:rounded-2xl p-2 lg:p-3 xl:p-4 shadow-lg lg:shadow-xl border border-green-100 animate-float-fast max-w-[160px] lg:max-w-[180px] xl:max-w-[220px] 2xl:max-w-[260px]">
              <div className="relative">
                <div className="absolute -top-0.5 lg:-top-1 -left-0.5 lg:-left-1 w-1.5 lg:w-2 xl:w-3 h-1.5 lg:h-2 xl:h-3 bg-green-500 rounded-full opacity-60"></div>
                <div className="absolute -top-0.5 lg:-top-1 -right-1 lg:-right-2 w-1 lg:w-1.5 xl:w-2 h-1 lg:h-1.5 xl:h-2 bg-blue-500 rounded-full opacity-40"></div>
                <h3 className="text-sm lg:text-base xl:text-lg font-bold text-gray-900 mb-1 lg:mb-2 leading-tight">
                  Multi-Vendor Ready
                </h3>
                <p className="text-gray-600 text-xs lg:text-xs xl:text-sm leading-relaxed">
                  Scale with unlimited vendors
                </p>
                <div className="mt-1 lg:mt-2 xl:mt-3 flex space-x-0.5 lg:space-x-1">
                  <div className="w-0.5 lg:w-1 xl:w-1.5 h-0.5 lg:h-1 xl:h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="w-0.5 lg:w-1 xl:w-1.5 h-0.5 lg:h-1 xl:h-1.5 bg-blue-500 rounded-full animate-pulse delay-100"></div>
                  <div className="w-0.5 lg:w-1 xl:w-1.5 h-0.5 lg:h-1 xl:h-1.5 bg-secondary rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            </div>

            {/* Everything You Need - Bottom Left (Larger) */}
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl lg:rounded-2xl xl:rounded-3xl p-3 lg:p-4 xl:p-6 shadow-xl lg:shadow-2xl border border-blue-100 animate-float-slow max-w-[200px] lg:max-w-[240px] xl:max-w-[300px] 2xl:max-w-[340px] ml-8 lg:ml-12 xl:ml-16 2xl:ml-24">
              <div className="relative">
                <div className="absolute -top-1 lg:-top-1.5 xl:-top-2 -left-1 lg:-left-1.5 xl:-left-2 w-2 lg:w-3 xl:w-4 h-2 lg:h-3 xl:h-4 bg-blue-500 rounded-full opacity-60"></div>
                <div className="absolute -top-0.5 lg:-top-1 xl:-top-1 -right-1 lg:-right-2 xl:-right-3 w-1.5 lg:w-2 xl:w-3 h-1.5 lg:h-2 xl:h-3 bg-purple-500 rounded-full opacity-40"></div>
                <h3 className="text-base lg:text-lg xl:text-xl font-bold text-gray-900 mb-1 lg:mb-2 xl:mb-3 leading-tight">
                  Everything You Need
                </h3>
                <p className="text-gray-600 text-xs lg:text-sm xl:text-base leading-relaxed">
                  Complete ecosystem with admin panels, mobile apps, and vendor management tools.
                </p>
                <div className="mt-2 lg:mt-3 xl:mt-4 flex space-x-1 lg:space-x-1.5 xl:space-x-2">
                  <div className="w-1 lg:w-1.5 xl:w-2 h-1 lg:h-1.5 xl:h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="w-1 lg:w-1.5 xl:w-2 h-1 lg:h-1.5 xl:h-2 bg-purple-500 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 lg:w-1.5 xl:w-2 h-1 lg:h-1.5 xl:h-2 bg-secondary rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Floating Elements - Smooth responsive scaling */}
          <div className="hidden lg:block absolute right-0 lg:-right-4 xl:-right-8 2xl:-right-16 3xl:-right-24 top-1/2 transform -translate-y-1/2 space-y-8 lg:space-y-10 xl:space-y-12 2xl:space-y-16">
            {/* Enterprise Grade - Top Right (Smaller) - moved from bottom */}
            <div className="bg-gradient-to-br from-white to-orange-50 rounded-lg lg:rounded-xl xl:rounded-2xl p-2 lg:p-3 xl:p-4 shadow-lg lg:shadow-xl border border-orange-100 animate-float-fast [animation-delay:1.5s] max-w-[160px] lg:max-w-[180px] xl:max-w-[220px] 2xl:max-w-[260px] mr-0 lg:mr-0 xl:mr-0 2xl:mr-0 transform lg:translate-x-24 xl:translate-x-40 2xl:translate-x-56">
              <div className="relative">
                <div className="absolute -top-0.5 lg:-top-1 -right-0.5 lg:-right-1 w-1.5 lg:w-2 xl:w-3 h-1.5 lg:h-2 xl:h-3 bg-orange-500 rounded-full opacity-60"></div>
                <div className="absolute -top-0.5 lg:-top-1 -left-1 lg:-left-2 w-1 lg:w-1.5 xl:w-2 h-1 lg:h-1.5 xl:h-2 bg-red-500 rounded-full opacity-40"></div>
                <h3 className="text-sm lg:text-base xl:text-lg font-bold text-gray-900 mb-1 lg:mb-2 leading-tight">
                  Enterprise Grade
                </h3>
                <p className="text-gray-600 text-xs lg:text-xs xl:text-sm leading-relaxed">
                  Built for best and high performance
                </p>
                <div className="mt-1 lg:mt-2 xl:mt-3 flex justify-end space-x-0.5 lg:space-x-1">
                  <div className="w-0.5 lg:w-1 xl:w-1.5 h-0.5 lg:h-1 xl:h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
                  <div className="w-0.5 lg:w-1 xl:w-1.5 h-0.5 lg:h-1 xl:h-1.5 bg-red-500 rounded-full animate-pulse delay-100"></div>
                  <div className="w-0.5 lg:w-1 xl:w-1.5 h-0.5 lg:h-1 xl:h-1.5 bg-secondary rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            </div>

            {/* In One Package - Bottom Right (Larger) - moved from top */}
            <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl lg:rounded-2xl xl:rounded-3xl p-3 lg:p-4 xl:p-6 shadow-xl lg:shadow-2xl border border-purple-100 animate-float-slow [animation-delay:3s] max-w-[200px] lg:max-w-[240px] xl:max-w-[300px] 2xl:max-w-[340px] mr-8 lg:mr-12 xl:mr-16 2xl:mr-24">
              <div className="relative">
                <div className="absolute -top-1 lg:-top-1.5 xl:-top-2 -right-1 lg:-right-1.5 xl:-right-2 w-2 lg:w-3 xl:w-4 h-2 lg:h-3 xl:h-4 bg-purple-500 rounded-full opacity-60"></div>
                <div className="absolute -top-0.5 lg:-top-1 xl:-top-1 -left-1 lg:-left-2 xl:-left-3 w-1.5 lg:w-2 xl:w-3 h-1.5 lg:h-2 xl:h-3 bg-green-500 rounded-full opacity-40"></div>
                <h3 className="text-base lg:text-lg xl:text-xl font-bold text-gray-900 mb-1 lg:mb-2 xl:mb-3 leading-tight">
                  In One Package
                </h3>
                <p className="text-gray-600 text-xs lg:text-sm xl:text-base leading-relaxed">
                  From customer experience to delivery management - all integrated seamlessly.
                </p>
                <div className="mt-2 lg:mt-3 xl:mt-4 flex justify-end space-x-1 lg:space-x-1.5 xl:space-x-2">
                  <div className="w-1 lg:w-1.5 xl:w-2 h-1 lg:h-1.5 xl:h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <div className="w-1 lg:w-1.5 xl:w-2 h-1 lg:h-1.5 xl:h-2 bg-green-500 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 lg:w-1.5 xl:w-2 h-1 lg:h-1.5 xl:h-2 bg-secondary rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Tablet View Floating Elements - Enhanced visual appeal */}
          <div className="hidden md:block lg:hidden absolute inset-0 pointer-events-none">
            {/* Top left corner */}
            <div className="absolute top-6 left-6 bg-gradient-to-br from-white via-green-50 to-green-100 rounded-xl p-4 shadow-xl border border-green-200 animate-float-fast max-w-[180px] backdrop-blur-sm">
              <div className="relative">
                <div className="absolute -top-1 -left-1 w-3 h-3 bg-green-500 rounded-full opacity-70 animate-pulse"></div>
                <div className="absolute -top-0.5 -right-1 w-2 h-2 bg-emerald-400 rounded-full opacity-50"></div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🏪</span>
                  <h4 className="font-bold text-gray-900 text-sm">Multi-Vendor Ready</h4>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">Scale with unlimited vendors and manage everything seamlessly</p>
                <div className="mt-2 flex space-x-1">
                  <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 h-1 bg-secondary rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
            
            {/* Top right corner - swapped with previous bottom-right content */}
            <div className="absolute top-6 right-0 bg-gradient-to-br from-white via-orange-50 to-orange-100 rounded-xl p-4 shadow-xl border border-orange-200 animate-float-fast [animation-delay:1.5s] max-w-[180px] backdrop-blur-sm">
              <div className="relative">
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full opacity-70 animate-pulse"></div>
                <div className="absolute -top-0.5 -left-1 w-2 h-2 bg-amber-400 rounded-full opacity-50"></div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">⚡</span>
                  <h4 className="font-bold text-gray-900 text-sm">Enterprise Grade</h4>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">Built for high performance and scalable operations</p>
                <div className="mt-2 flex justify-end space-x-1">
                  <div className="w-1 h-1 bg-orange-500 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-amber-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 h-1 bg-secondary rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            </div>

            {/* Bottom left corner */}
            <div className="absolute bottom-6 left-6 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-xl p-4 shadow-xl border border-blue-200 animate-float-slow max-w-[180px] backdrop-blur-sm">
              <div className="relative">
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-500 rounded-full opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-0.5 -right-1 w-2 h-2 bg-sky-400 rounded-full opacity-50"></div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🎯</span>
                  <h4 className="font-bold text-gray-900 text-sm">Everything You Need</h4>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">Complete ecosystem with all essential tools and features</p>
                <div className="mt-2 flex space-x-1">
                  <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-sky-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 h-1 bg-secondary rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            </div>

            {/* Bottom right corner */}
            <div className="absolute bottom-6 right-6 bg-gradient-to-br from-white via-orange-50 to-orange-100 rounded-xl p-4 shadow-xl border border-orange-200 animate-float-delayed [animation-delay:2.5s] max-w-[180px] backdrop-blur-sm">
              <div className="relative">
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-orange-500 rounded-full opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-0.5 -left-1 w-2 h-2 bg-amber-400 rounded-full opacity-50"></div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">⚡</span>
                  <h4 className="font-bold text-gray-900 text-sm">Enterprise Grade</h4>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">Built for high performance and scalable operations</p>
                <div className="mt-2 flex justify-end space-x-1">
                  <div className="w-1 h-1 bg-orange-500 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-amber-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 h-1 bg-secondary rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Floating Elements - Enhanced with better visual appeal */}
          <div className="md:hidden absolute inset-0 pointer-events-none">
            {/* Top elements - positioned above the orbit with enhanced styling */}
            <div className="absolute top-4 left-2 bg-gradient-to-br from-white via-green-50 to-green-100 rounded-lg p-3 shadow-lg border border-green-200 animate-float-fast max-w-[150px] backdrop-blur-sm">
              <div className="relative">
                <div className="absolute -top-0.5 -left-0.5 w-2 h-2 bg-green-500 rounded-full opacity-70 animate-pulse"></div>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-sm">🏪</span>
                  <h4 className="font-bold text-gray-900 text-xs">Multi-Vendor</h4>
                </div>
                <p className="text-gray-600 text-xs">Scale unlimited vendors</p>
                <div className="mt-1 flex space-x-0.5">
                  <div className="w-0.5 h-0.5 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="w-0.5 h-0.5 bg-emerald-400 rounded-full animate-pulse delay-100"></div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-4 right-0 bg-gradient-to-br from-white via-orange-50 to-orange-100 rounded-lg p-3 shadow-lg border border-orange-200 animate-float-fast [animation-delay:1.5s] max-w-[150px] backdrop-blur-sm">
              <div className="relative">
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-orange-500 rounded-full opacity-70 animate-pulse"></div>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-sm">⚡</span>
                  <h4 className="font-bold text-gray-900 text-xs">Enterprise</h4>
                </div>
                <p className="text-gray-600 text-xs">High performance</p>
                <div className="mt-1 flex justify-end space-x-0.5">
                  <div className="w-0.5 h-0.5 bg-orange-500 rounded-full animate-pulse"></div>
                  <div className="w-0.5 h-0.5 bg-amber-400 rounded-full animate-pulse delay-100"></div>
                </div>
              </div>
            </div>

            {/* Bottom elements - positioned with better spacing and enhanced styling */}
            <div className="absolute -bottom-4 left-2 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-lg p-3 shadow-lg border border-blue-200 animate-float-slow max-w-[150px] backdrop-blur-sm">
              <div className="relative">
                <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 bg-blue-500 rounded-full opacity-70 animate-pulse"></div>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-sm">🎯</span>
                  <h4 className="font-bold text-gray-900 text-xs">Everything</h4>
                </div>
                <p className="text-gray-600 text-xs">Complete ecosystem</p>
                <div className="mt-1 flex space-x-0.5">
                  <div className="w-0.5 h-0.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="w-0.5 h-0.5 bg-sky-400 rounded-full animate-pulse delay-100"></div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 right-2 bg-gradient-to-br from-white via-purple-50 to-purple-100 rounded-lg p-3 shadow-lg border border-purple-200 animate-float-slow [animation-delay:3s] max-w-[150px] backdrop-blur-sm">
              <div className="relative">
                <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-purple-500 rounded-full opacity-70 animate-pulse"></div>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-sm">📦</span>
                  <h4 className="font-bold text-gray-900 text-xs">One Package</h4>
                </div>
                <p className="text-gray-600 text-xs">Seamlessly integrated</p>
                <div className="mt-1 flex justify-end space-x-0.5">
                  <div className="w-0.5 h-0.5 bg-purple-500 rounded-full animate-pulse"></div>
                  <div className="w-0.5 h-0.5 bg-violet-400 rounded-full animate-pulse delay-100"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Central Orbiting Circle */}
          <div className="relative z-10">
            {/* Mobile view */}
            <div className="md:hidden">
              <div className="relative flex flex-col items-center justify-center">
                <div className="relative flex items-center justify-center size-[320px]">
                  {/* Center Logo - Adjusted for text label visual weight */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 transform translate-y-2">
                    <div className="bg-white rounded-full p-6 shadow-2xl border-4 border-secondary/20 hover:shadow-3xl transition-shadow duration-300">
                      <img 
                        src="/logo-sm.jpg" 
                        alt="BuddyMart Logo" 
                        className="size-12 rounded-full"
                      />
                    </div>
                  </div>
                  
                  <OrbitingCircles
                    radius={110}
                    iconSize={64}
                    duration={40}
                    path={false}
                  >
                    {services.slice(0, 6).map((item, i) => (
                      <div
                        key={i}
                        className="relative group"
                      >
                        {/* Smaller Circular Icon */}
                        <div className="bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                          <span className="text-lg group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                        </div>
                        {/* Plain Text Outside Circle */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center">
                          <p className="text-xs font-semibold text-gray-800 whitespace-nowrap">
                            {item.name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </OrbitingCircles>
                </div>
              </div>
            </div>

            {/* Desktop view - Optimized smaller size */}
            <div className="hidden md:block">
              <div className="relative flex flex-col items-center justify-center">
                <div className="relative flex items-center justify-center size-[400px] md:size-[450px] lg:size-[500px] xl:size-[550px] 2xl:size-[600px]">
                  {/* Center Logo - Adjusted for text label visual weight */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 transform md:translate-y-1 lg:translate-y-2 xl:translate-y-3 2xl:translate-y-4">
                    <div className="bg-white rounded-full p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-7 shadow-xl md:shadow-2xl border-2 md:border-4 border-secondary/20 hover:shadow-3xl transition-shadow duration-300">
                      <img 
                        src="/logo-sm.jpg" 
                        alt="BuddyMart Logo" 
                        className="size-8 md:size-10 lg:size-12 xl:size-14 2xl:size-16 rounded-full"
                      />
                    </div>
                  </div>
                  
                  {/* Medium screens */}
                  <div className="md:block lg:hidden">
                    <OrbitingCircles
                      radius={130}
                      iconSize={72}
                      duration={40}
                      path={false}
                    >
                      {services.map((item, i) => (
                        <div
                          key={i}
                          className="relative group"
                        >
                          <div className="bg-white rounded-full p-2.5 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                            <span className="text-xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                          </div>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 text-center">
                            <p className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                              {item.name}
                            </p>
                          </div>
                        </div>
                      ))}
                    </OrbitingCircles>
                  </div>

                  {/* Large screens */}
                  <div className="hidden lg:block xl:hidden">
                    <OrbitingCircles
                      radius={145}
                      iconSize={76}
                      duration={40}
                      path={false}
                    >
                      {services.map((item, i) => (
                        <div
                          key={i}
                          className="relative group"
                        >
                          <div className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                            <span className="text-xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                          </div>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 text-center">
                            <p className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                              {item.name}
                            </p>
                          </div>
                        </div>
                      ))}
                    </OrbitingCircles>
                  </div>

                  {/* Extra large screens */}
                  <div className="hidden xl:block 2xl:hidden">
                    <OrbitingCircles
                      radius={160}
                      iconSize={82}
                      duration={40}
                      path={false}
                    >
                      {services.map((item, i) => (
                        <div
                          key={i}
                          className="relative group"
                        >
                          <div className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                          </div>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 text-center">
                            <p className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                              {item.name}
                            </p>
                          </div>
                        </div>
                      ))}
                    </OrbitingCircles>
                  </div>

                  {/* 2XL screens - Balanced size */}
                  <div className="hidden 2xl:block">
                    <OrbitingCircles
                      radius={175}
                      iconSize={88}
                      duration={40}
                      path={false}
                    >
                      {services.map((item, i) => (
                        <div
                          key={i}
                          className="relative group"
                        >
                          <div className="bg-white rounded-full p-3.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                          </div>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 text-center">
                            <p className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                              {item.name}
                            </p>
                          </div>
                        </div>
                      ))}
                    </OrbitingCircles>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-green-500/5 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>
    </section>
  );
}
