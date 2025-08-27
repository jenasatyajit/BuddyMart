// App root with Tailwind v4
import Hero from "./components/sections/Hero"
import Services from "./components/sections/Services"
import About from "./components/sections/About"
import ComingSoon from "./components/sections/ComingSoon"

function App() {
  return (
    <main className="min-h-screen w-full bg-secondary/5 text-gray-900">
      <Hero />
      <Services />
      <ComingSoon />
      <About />
    </main>
  )
}

export default App
