import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Panels from '../components/Panels'
import Registration from '../components/Registration'
import AnimatedBackground from '../components/AnimatedBackground'

export default function Home() {
  return (
    <main className="relative min-h-screen cyber-grid">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Panels />
        <Registration />
        
        {/* Minimal Footer */}
        <footer className="bg-slate-950/80 backdrop-blur-lg text-gray-300 py-12 border-t border-cyan-500/20 relative">
          <div className="max-w-7xl mx-auto px-4">
             {/* Contact Box */}
            <div className="text-center mb-8">
              <div className="inline-block bg-slate-800/30 backdrop-blur-sm border border-cyan-500/30 rounded-xl px-6 py-4 max-w-xl">
                <p className="text-sm text-gray-400 mb-2">For any queries, reach to</p>
                <a 
                  href="mailto:cyberconference2025@gmail.com" 
                  className="text-lg font-semibold text-cyan-400 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <span>📧</span> cyberconference2025@gmail.com
                </a>
              </div>
            </div>
             
            <div className="text-center mb-2">
              <p className="text-white text-lg">© 2025 National Forensic Sciences University</p>
            </div>
            
            {/* Prepared and Managed by */}
            <div className="text-center mb-6">
              <p className="text-sm text-gray-400">Prepared and managed by: <span className="text-cyan-400">Tamanna Khurana</span></p>
            </div>

            {/* Social Media Links */}
            <div className="border-t border-gray-700 pt-6">
              <p className="text-center text-white font-semibold mb-4">Follow Us</p>
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-6">
                <div className="text-center bg-slate-800/20 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 hover:border-cyan-400 transition-all duration-300">
                  <p className="text-sm font-semibold mb-3 text-cyan-400">NFSU Delhi Campus</p>
                  <div className="flex justify-center gap-4">
                    <a href="https://www.linkedin.com/school/national-forensic-sciences-university" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">
                      🔗 LinkedIn
                    </a>
                    <a href="https://twitter.com/nfsu_official" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">
                      🐦 Twitter
                    </a>
                  </div>
                </div>
                
                <div className="text-center bg-slate-800/20 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 hover:border-cyan-400 transition-all duration-300">
                  <p className="text-sm font-semibold mb-3 text-cyan-400">I4C</p>
                  <div className="flex justify-center gap-4">
                    <a href="https://www.linkedin.com/company/indian-cyber-crime-coordination-centre" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">
                      🔗 LinkedIn
                    </a>
                    <a href="https://twitter.com/Cyberdost" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">
                      🐦 Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner Links */}
            <div className="mt-6 text-center text-sm border-t border-gray-700 pt-6">
              <a href="https://nfsu.ac.in/delhi" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 mx-3 transition-colors font-medium">
                NFSU Delhi
              </a>
              <span className="text-gray-600">|</span>
              <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 mx-3 transition-colors font-medium">
                I4C
              </a>
              <span className="text-gray-600">|</span>
              <a href="https://www.aicte-india.org" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 mx-3 transition-colors font-medium">
                AICTE
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
