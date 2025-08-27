import Android from "@/components/magicui/android";

export default function About() {
  return (
    <section id="about" className="w-full py-24 md:py-32">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        <div className="flex justify-center md:justify-start">
          <Android className="max-w-full h-auto" />
        </div>
        <div className="min-h-[200px]"></div>
      </div>
    </section>
  );
}
