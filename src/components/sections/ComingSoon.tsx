export default function ComingSoon() {
  return (
    <section
      id="coming-soon"
      className="w-full h-screen bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden flex items-center"
    >
      {/* subtle overlay to reduce gradient banding (no visible lines) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(60rem_60rem_at_20%_30%,white_0%,transparent_40%),radial-gradient(50rem_50rem_at_80%_70%,white_0%,transparent_35%)]"
      />
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-6 relative z-10">
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Launching soon
          </h2>
          <p className="mt-6 text-lg text-white/80 max-w-md mx-auto md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/launching-2.png"
            alt="Launching Soon Illustration"
            className="max-w-xs md:max-w-sm select-none pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}
