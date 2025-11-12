import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Panels from '../components/Panels'
import Registration from '../components/Registration'
import AnimatedBackground from '../components/AnimatedBackground'

export default function Home() {
  return (
    <main className="relative min-h-screen cyber-grid">
      {/* Global Animated Background */}
      <AnimatedBackground />
      
      {/* All sections with relative positioning */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Panels />
        <Registration />
        
        <footer className="bg-slate-950/80 backdrop-blur-lg text-gray-300 py-8 border-t border-cyan-500/20 relative">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <p className="mb-2 text-white">© 2025 National Forensic Sciences University</p>
    <p className="text-sm text-gray-400">
      Securing the Digital Future: Cybersecurity Education Conference
    </p>
    <p className="text-sm text-gray-400 mt-2 flex flex-wrap justify-center gap-4">
      <a 
        href="mailto:cyberconference2025@gmail.com" 
        className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
      >
        <span>📧</span> cyberconference2025@gmail.com
      </a>
      <a 
        href="tel:+917988565046" 
        className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
      >
        <span>📞</span> +91 7988565046
      </a>
    </p>
  </div>
</footer>
      </div>
    </main>
  )
}
