export default function About() {
  return (
    <section id="about" className="py-12 md:py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 gradient-text">
          About the Conference
        </h2>

        {/* Conference Overview - Full Width */}
        <div className="mb-12 md:mb-16 animate-fadeInUp">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Conference Overview</h3>
          <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base">
            <p>
              In an increasingly digital world, cybersecurity has emerged as a critical domain for safeguarding national security, economic stability, and individual privacy. As India accelerates its digital transformation, the need for a skilled and talented workforce in cybersecurity has never been more urgent. However, the country faces significant challenges in bridging the talent gap and building a robust cybersecurity education ecosystem.
            </p>
            <p>
              The "Securing the Digital Future: Roadmap for Cybersecurity Education and Talent Development" conference is a one-day event designed to address these challenges and chart a clear path forward. This conference brings together thought leaders, educators, industry experts, policymakers, and young professionals to collaboratively shape the future of cybersecurity education in India.
            </p>
            <p>
              Cybersecurity education is the cornerstone of industrial growth and societal progress in the digital age. It protects critical infrastructure, enables innovation, and builds trust in technology. The standardized cybersecurity education will empower industries to thrive in a secure digital ecosystem, create a safer, more inclusive society where individuals can harness the benefits of technology without fear, and position nations as global leaders in the fight against cyber threats.
            </p>
            <p>
              Through expert deliberation and panel discussions, participants will gain insights into global best practices, collaborate on actionable solutions, and contribute to a comprehensive roadmap for cybersecurity education. The conference will also highlight the importance of public-private partnerships, mentorship programs, and innovative outreach initiatives to inspire the next generation of cybersecurity professionals.
            </p>
            <p className="text-cyan-400 font-medium">
              This transformative event works towards building a secure digital future for India by empowering its people with the knowledge, skills, and opportunities to thrive in the cybersecurity domain. Together, we can build a resilient ecosystem that not only addresses current challenges but also anticipates and mitigates future threats.
            </p>
          </div>
        </div>

        {/* Space between sections */}
        <div className="h-8 md:h-12"></div>

        {/* About NFSU - Full Width */}
        <div className="mb-12 md:mb-16 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">About NFSU</h3>
          <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base">
            <p>
              The National Forensic Sciences University (NFSU), a brainchild of the Government of Gujarat, was established in 2009 by the Hon'ble Prime Minister of India, Shri Narendra Modi, then Chief Minister of Gujarat, with the vision of creating professionally trained experts in forensic sciences.
            </p>
            <p>
              Recognized as an <span className="text-cyan-400 font-semibold">Institution of National Importance</span> and a Central University under the Ministry of Home Affairs, Government of India, NFSU is the world's first university dedicated exclusively to forensic science education, research, and training.
            </p>
            <p>
              NFSU offers undergraduate, postgraduate, and doctoral programs in forensic science, cybersecurity, law, homeland security, and allied disciplines. The university fosters academic excellence, interdisciplinary research, and innovation, with strong collaborations with law enforcement agencies and international institutions.
            </p>
            <p>
              With state-of-the-art laboratories, global outreach, and centres of excellence such as the <span className="text-cyan-400 font-semibold">Cyber Defence Centre</span> and <span className="text-cyan-400 font-semibold">International Centre for Humanitarian Forensics</span>, NFSU continues to lead in advancing forensic science and cybersecurity education worldwide.
            </p>
          </div>
        </div>

        {/* Three Column Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {[
            {
              title: 'Objectives',
              items: [
                'Develop Future-Ready Cybersecurity Curriculum',
                'Explore Implementation Strategies',
                'Attract and Retain Talent in Cybersecurity'
              ]
            },
            {
              title: 'Focus Areas',
              items: [
                'Bridge Academia-Industry Gap',
                'Leverage Technology for Learning',
                'Inspire Young Talent',
                'Strengthen Stakeholder Collaboration'
              ]
            },
            {
              title: 'Who Should Attend',
              items: [
                'Educators & Researchers',
                'Industry Professionals',
                'Policymakers',
                'Students & Young Professionals'
              ]
            }
          ].map((section, idx) => (
            <div key={idx} className="bg-slate-800/20 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition duration-300 transform hover:-translate-y-2 border border-cyan-500/20 hover:border-cyan-400/40">
              <h4 className="text-lg md:text-xl font-bold text-cyan-400 mb-3 md:mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start text-gray-300 text-sm md:text-base">
                    <span className="text-cyan-400 mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Conference Details */}
        <div className="bg-slate-800/20 backdrop-blur-md border border-cyan-500/30 text-white p-6 md:p-8 rounded-2xl text-center hover:border-cyan-400/50 transition-all duration-300">
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 gradient-text">Conference Details</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="p-4 bg-slate-900/20 backdrop-blur-sm rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
              <p className="text-3xl md:text-4xl font-bold mb-2">📅</p>
              <p className="font-semibold text-sm md:text-base text-cyan-400">Date</p>
              <p className="text-sm md:text-base text-gray-300">January 20th, 2026</p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=AICTE+Auditorium+Vasant+Kunj+New+Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-900/20 backdrop-blur-sm rounded-xl border border-cyan-500/20 hover:border-cyan-400 hover:bg-slate-900/30 transition-all duration-300 cursor-pointer group"
            >
              <p className="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">📍</p>
              <p className="font-semibold text-sm md:text-base text-cyan-400">Venue (Click for Map)</p>
              <p className="text-sm md:text-base text-gray-300 underline decoration-dotted">AICTE Auditorium, Vasant Kunj, New Delhi</p>
            </a>
            <div className="p-4 bg-slate-900/20 backdrop-blur-sm rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <p className="text-3xl md:text-4xl font-bold mb-2">📧</p>
              <p className="font-semibold text-sm md:text-base text-cyan-400 mb-2">Contact</p>
              <a 
                href="mailto:cyberconference2025@gmail.com" 
                className="text-sm md:text-base text-gray-300 block hover:text-cyan-400 transition-colors break-all mb-1"
              >
                cyberconference2025@gmail.com
              </a>
              
            </div>
          </div>
        </div>

        {/* Enhanced Venue Section - Full Width Cards (NO IMAGE) */}
        <div className="mt-12 md:mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center gradient-text">
            Conference Venue
          </h3>
          
          {/* Three Full-Width Cards */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="bg-slate-800/20 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
              <div className="flex items-start gap-4">
                <span className="text-4xl flex-shrink-0">📍</span>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-cyan-400 mb-2">Location</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    AICTE Auditorium<br />
                    Vasant Kunj, New Delhi<br />
                    India
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/20 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
              <div className="flex items-start gap-4">
                <span className="text-4xl flex-shrink-0">🕘</span>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-cyan-400 mb-2">Event Timing</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    January 20th, 2026<br />
                    9:00 AM - 6:00 PM<br />
                    Registration starts at 8:30 AM
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/20 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
              <div className="flex items-start gap-4">
                <span className="text-4xl flex-shrink-0">🚇</span>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-cyan-400 mb-2">How to Reach</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    Metro: Vasant Vihar Station<br />
                    Parking: Available on premises
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=AICTE+Auditorium+Vasant+Kunj+New+Delhi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    View on Map →
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Partner Organization Links */}
          <div className="mt-8 text-center">
            <h4 className="text-lg font-bold text-white mb-4">In Collaboration With</h4>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://nfsu.ac.in/delhi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-effect px-6 py-3 rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 text-cyan-400 hover:text-white font-semibold transform hover:scale-105"
              >
                NFSU Delhi
              </a>
              <a 
                href="https://cybercrime.gov.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-effect px-6 py-3 rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 text-cyan-400 hover:text-white font-semibold transform hover:scale-105"
              >
                I4C
              </a>
              <a 
                href="https://www.aicte-india.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-effect px-6 py-3 rounded-lg border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 text-cyan-400 hover:text-white font-semibold transform hover:scale-105"
              >
                AICTE
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
