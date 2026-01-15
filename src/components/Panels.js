'use client'
import { useState } from 'react'

export default function Panels() {
  const [activePanel, setActivePanel] = useState(null)

  const panels = [
    {
      title: 'Panel 1: Current State of Cybersecurity Education',
      time: '10:00 AM - 11:30 AM',
      formLink: 'https://forms.gle/zxUzfFbxmHLX53Rx8',
      members: [
        { name: 'Dr. Amit Kumar', role: 'Moderator', bio: 'Professor of Cybersecurity, IIT Delhi', icon: '👨‍💼' },
        { name: 'Prof. Priya Sharma', role: 'Panelist', bio: 'Dean, NFSU Cyber Defence Centre', icon: '👩‍💼' },
        { name: 'Mr. Rajesh Patel', role: 'Panelist', bio: 'Chief Security Officer, TCS', icon: '👨‍🏫' },
        { name: 'Dr. Neha Singh', role: 'Panelist', bio: 'Cybercrime Investigation Expert', icon: '👩‍💻' }
      ]
    },
    {
      title: 'Panel 2: Future-Ready Cybersecurity Curriculum',
      time: '12:00 PM - 1:30 PM',
      formLink: 'https://forms.gle/eJ8sWioNgzz9knLY7',
      members: [
        { name: 'Dr. Vikram Rao', role: 'Moderator', bio: 'Curriculum Development Expert', icon: '👨‍💼' },
        { name: 'Prof. Anjali Desai', role: 'Panelist', bio: 'EdTech Innovation Leader', icon: '👩‍💼' },
        { name: 'Mr. Suresh Menon', role: 'Panelist', bio: 'Industry Training Head, Infosys', icon: '👨‍🏫' },
        { name: 'Dr. Kavita Reddy', role: 'Panelist', bio: 'University Dean, NLU', icon: '👩‍💻' }
      ]
    },
    {
      title: 'Panel 3: Attracting Talent to Cybersecurity',
      time: '2:30 PM - 4:00 PM',
      formLink: 'https://forms.gle/XCokfKTjmnpycBLm8',
      members: [
        { name: 'Ms. Pooja Verma', role: 'Moderator', bio: 'Talent Acquisition Director', icon: '👨‍💼' },
        { name: 'Mr. Arun Kapoor', role: 'Panelist', bio: 'HR Head, Wipro', icon: '👩‍💼' },
        { name: 'Dr. Meera Joshi', role: 'Panelist', bio: 'Career Counseling Expert', icon: '👨‍🏫' },
        { name: 'Ms. Riya Das', role: 'Panelist', bio: 'Student Representative, NFSU', icon: '👩‍💻' }
      ]
    },
    {
      title: 'Panel 4: Implementation Strategies',
      time: '4:30 PM - 6:00 PM',
      formLink: 'https://forms.gle/4TFj3S6u6bFPK9yn6',
      members: [
        { name: 'Dr. Sanjeev Gupta', role: 'Moderator', bio: 'Policy Implementation Strategist', icon: '👨‍💼' },
        { name: 'Ms. Deepa Nair', role: 'Panelist', bio: 'Joint Secretary, MHA', icon: '👩‍💼' },
        { name: 'Mr. Prakash Iyer', role: 'Panelist', bio: 'NGO Director, CyberPeace', icon: '👨‍🏫' },
        { name: 'Ms. Shreya Agarwal', role: 'Panelist', bio: 'Founder, SecureStart', icon: '👩‍💻' }
      ]
    }
  ]

  return (
    <section id="panels" className="py-12 md:py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4 gradient-text">
          Conference Panels
        </h2>
        <p className="text-center text-gray-400 mb-8 md:mb-12 text-sm md:text-base px-4">
          Engage with industry leaders and experts across four specialized panel discussions
        </p>

        <div className="space-y-4 md:space-y-8">
          {panels.map((panel, panelIdx) => (
            <div key={panelIdx} className="group">
              <div className="bg-slate-900/20 backdrop-blur-md border border-cyan-500/30 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-cyan-400 transition-all duration-300">
                <div 
                  className="cursor-pointer touch-manipulation"
                  onClick={() => setActivePanel(activePanel === panelIdx ? null : panelIdx)}
                >
                  <div className="flex justify-between items-start mb-3 md:mb-4 gap-2">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors leading-tight">
                        {panel.title}
                      </h3>
                      <div className="flex items-center gap-2 text-cyan-400">
                        <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-xs md:text-sm font-medium">{panel.time}</span>
                      </div>
                    </div>
                    <button className="text-cyan-400 text-xl md:text-2xl transform transition-transform duration-300 p-2 -m-2" style={{ transform: activePanel === panelIdx ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      ▼
                    </button>
                  </div>
                </div>

                {/* Member Cards - Shows when expanded */}
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-6 transition-all duration-300 ${activePanel === panelIdx ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                  {panel.members.map((member, memberIdx) => (
                    <div
                      key={memberIdx}
                      className="bg-slate-800/20 backdrop-blur-sm border border-cyan-500/20 rounded-lg md:rounded-xl p-3 md:p-4 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2"
                    >
                      <div className="text-center">
                        <div className="text-3xl md:text-5xl mb-2 md:mb-3">{member.icon}</div>
                        <h4 className="text-sm md:text-base lg:text-lg font-bold text-white mb-1 leading-tight">{member.name}</h4>
                        <p className="text-xs text-cyan-400 font-medium mb-1 md:mb-2 px-2 py-1 bg-cyan-500/10 rounded-full inline-block">
                          {member.role}
                        </p>
                        <p className="text-xs md:text-sm text-gray-400 mt-2 leading-relaxed">{member.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
