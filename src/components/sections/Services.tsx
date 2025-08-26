import { OrbitingCircles } from "@/components/magicui/orbiting-circle";

export default function Services() {
  const icons = Array.from({ length: 8 }).map((_, i) => (
    <img
      key={i}
      src="/logo-sm.jpg"
      alt="Service icon"
      className="size-10 rounded-full object-cover shadow-sm"
    />
  ));

  return (
    <section id="services" className="w-full py-24 md:py-32">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-semibold">Our Services</h2>

        {/* Centered single-ring orbiting circle */}
        <div className="relative size-[420px] mt-10 md:mt-12">
          <OrbitingCircles radius={160} iconSize={48} duration={24}>
            {icons}
          </OrbitingCircles>
        </div>
      </div>
    </section>
  );
}
