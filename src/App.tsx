// App root with Tailwind v4
import Hero from "./components/sections/Hero"
import ComingSoon from "./components/sections/ComingSoon"
import Services from "./components/sections/Services"
import About from "./components/sections/About"
import Footer from "./components/sections/Footer"

function App() {
  return (
    <main className="min-h-screen w-full bg-secondary/5 text-gray-900">
      <Hero />
      <Services />
      <About />
      <ComingSoon />
      <Footer />
    </main>
  )
}

export default App
