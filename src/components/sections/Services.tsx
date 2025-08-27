import { OrbitingCircles } from "@/components/magicui/orbiting-circle";

export default function Services() {
  const services = [
    { name: "Groceries", icon: "/logo-sm.jpg" },
    { name: "Electronics", icon: "/logo-sm.jpg" },
    { name: "Fashion", icon: "/logo-sm.jpg" },
    { name: "Home Goods", icon: "/logo-sm.jpg" },
    { name: "Pharmacy", icon: "/logo-sm.jpg" },
    { name: "Books", icon: "/logo-sm.jpg" },
    { name: "Toys", icon: "/logo-sm.jpg" },
    { name: "Furniture", icon: "/logo-sm.jpg" },
  ];

  return (
    <section id="services" className="w-full py-24 md:py-32">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-semibold">Our Services</h2>

        {/* Centered single-ring orbiting circle */}
        <div className="relative size-[480px] mt-10 md:mt-12">
          <OrbitingCircles radius={200} iconSize={80} duration={30}>
            {services.map((service, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={service.icon}
                  alt={`${service.name} icon`}
                  className="size-12 rounded-full object-cover shadow-md"
                />
                <p className="mt-1.5 text-xs font-medium">{service.name}</p>
              </div>
            ))}
          </OrbitingCircles>
        </div>
      </div>
    </section>
  );
}
