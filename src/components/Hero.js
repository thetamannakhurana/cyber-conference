export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 px-4">
      <div className="max-w-7xl mx-auto w-full text-center relative z-10">
        <div className="animate-fadeInUp">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-4 md:mb-6 tracking-tight glitch px-4" data-text="Securing the Digital Future">
            Securing the <span className="gradient-text">Digital Future</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-3 md:mb-4 font-medium tracking-wide px-4">
            Roadmap for Cybersecurity Education and Talent Development
          </p>
          
          {/* Date */}
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 md:mb-8 font-mono px-4">
            <span className="text-cyan-400">{">"}</span> One Day Conference | December 2nd, 2025
          </p>
          
          {/* Info Cards - Clickable */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-6 md:mb-8 px-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=AICTE+Auditorium+Vasant+Kunj+New+Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect px-4 md:px-6 py-2 md:py-3 rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 group w-full sm:w-auto cursor-pointer"
            >
              <p className="text-gray-200 font-semibold flex items-center justify-center gap-2 text-sm md:text-base">
                <span className="text-xl md:text-2xl group-hover:scale-110 transition-transform">📍</span>
                <span className="text-center">AICTE Auditorium, New Delhi</span>
              </p>
            </a>
            <div className="glass-effect px-4 md:px-6 py-2 md:py-3 rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 group w-full sm:w-auto">
              <p className="text-gray-200 font-semibold flex items-center justify-center gap-2 text-sm md:text-base">
                <span className="text-xl md:text-2xl group-hover:scale-110 transition-transform">🕘</span>
                9:00 AM onwards
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="#register"
            className="inline-block relative group w-full sm:w-auto px-4"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-bold hover:from-cyan-400 hover:to-blue-400 transform hover:scale-105 transition duration-300 shadow-2xl">
              Confirm Now →
            </div>
          </a>
        </div>

        {/* Feature Cards */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 px-4">
          {[
            { icon: '🎓', label: 'World-Class Speakers' },
            { icon: '💡', label: 'Industry Insights' },
            { icon: '🤝', label: 'Networking' },
            { icon: '📜', label: 'Certificate' }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="glass-effect p-4 md:p-6 rounded-xl hover:scale-105 transition-all duration-300 animate-fadeInUp border border-cyan-500/20 hover:border-cyan-400 group cursor-pointer" 
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl mb-2 group-hover:scale-110 transition-transform">{item.icon}</div>
              <p className="text-gray-300 font-medium group-hover:text-white transition-colors text-sm md:text-base">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
