'use client'
import { useState } from 'react'

export default function Panels() {
  const [activePanel, setActivePanel] = useState(null)

  const panels = [
    {
      title: 'Panel 1: Current State of Cybersecurity Education',
      time: '10:00 AM - 11:30 AM',
      moderator: { 
        name: 'Dr. Deepak Raj Rao', 
        role: 'Moderator', 
        bio: 'Dean and Professor (NFSU)', 
        image: '/speakers/deepak-raj-rao.jpg' 
      },
      members: [
        { name: 'Sh. Rajesh Kumar, IPS', role: 'Panelist', bio: 'CEO (I4C)', image: '/speakers/rajesh-kumar.jpg' },
        { name: 'Dr. Huzur Saran', role: 'Panelist', bio: 'Professor (IIT-Delhi)', image: '/speakers/huzur-saran.jpg' },
        { name: 'Dr. Sambuddho Chakravarty', role: 'Panelist', bio: 'Associate Professor (IIIT-Delhi)', image: '/speakers/sambuddho-chakravarty.jpg' },
        { name: 'Dr. Priyanka Jain', role: 'Panelist', bio: 'Associate Director (CDAC-Delhi)', image: '/speakers/priyanka-jain.jpg' },
        { name: 'Dr. Pilli Emmanuel Shubhakar', role: 'Panelist', bio: 'Professor (MNIT-Jaipur)', image: '/speakers/pilli-emmanuel.jpg' },
        { name: 'Mr. Tapendra Dev', role: 'Panelist', bio: 'Founder and CEO (Secure Blink)', image: '/speakers/tapendra-dev.jpg' }
      ]
    },
    {
      title: 'Panel 2: Designing a Future-Ready Cybersecurity Curriculum',
      time: '12:00 PM - 1:30 PM',
      moderator: { 
        name: 'Col. Nidhish Bhatnagar', 
        role: 'Moderator', 
        bio: 'NFSU', 
        image: '/speakers/nidhish-bhatnagar.jpg' 
      },
      members: [
        { name: 'Col. Tarun Uppal', role: 'Panelist', bio: 'Director (Cyber Security) (I4C)', image: '/speakers/tarun-uppal.jpg' },
        { name: 'Dr. Manju Khari', role: 'Panelist', bio: 'Dean and Professor (JNU-Delhi)', image: '/speakers/manju-khari.jpg' },
        { name: 'Md. Azam Nizami', role: 'Panelist', bio: 'Integration Architect (Deloitte)', image: '/speakers/azam-nizami.jpg' },
        { name: 'Dr. Ashutosh Kumar Singh', role: 'Panelist', bio: 'Director (IIIT-Bhopal)', image: '/speakers/ashutosh-singh.jpg' },
        { name: 'Dr. Amit Sharma', role: 'Panelist', bio: 'Additional Director General (Cyber) (Ministry of Defence)', image: '/speakers/amit-sharma.jpg' },
        { name: 'Mr. Sanjeev Relia', role: 'Panelist', bio: 'Cyber Expert (Centre for Humanitarian Dialogue)', image: '/speakers/sanjeev-relia.jpg' }
      ]
    },
    {
      title: 'Panel 3: Attracting Talent to Cybersecurity: Challenges and Opportunities',
      time: '2:30 PM - 4:00 PM',
      moderator: { 
        name: 'Dr. Pankaj Sharma', 
        role: 'Moderator', 
        bio: 'NFSU', 
        image: '/speakers/pankaj-sharma.jpg' 
      },
      members: [
        { name: 'Sh. Rajeev Thaman', role: 'Panelist', bio: 'Indian Cybercrime Coordination Centre', image: '/speakers/rajeev-thaman.jpg' },
        { name: 'Dr. Gaurav Gupta', role: 'Panelist', bio: 'Scientist "F" (MEITY)', image: '/speakers/gaurav-gupta.jpg' },
        { name: 'Lt. Gen. (Dr.) Rajesh Pant', role: 'Panelist', bio: 'Ex-National Cyber Security Coordinator, Govt of India', image: '/speakers/rajesh-pant.jpg' },
        { name: 'Dr. Nonita Sharma', role: 'Panelist', bio: 'Associate Professor (IGDTUW Delhi)', image: '/speakers/nonita-sharma.jpg' },
        { name: 'Dr. Divya Bansal', role: 'Panelist', bio: 'H.O.D & Professor (Punjab Engineering College)', image: '/speakers/divya-bansal.jpg' },
        { name: 'Mr. Nishant Singh', role: 'Panelist', bio: 'Chief Technical Officer (Gramax, GMR Group)', image: '/speakers/nishant-singh.jpg' }
      ]
    },
    {
      title: 'Panel 4: Bridging Academia and Industry in Cybersecurity Education',
      time: '4:30 PM - 6:00 PM',
      moderator: { 
        name: 'Dr. Archana Patel', 
        role: 'Moderator', 
        bio: 'NFSU', 
        image: '/speakers/archana-patel.jpg' 
      },
      members: [
        { name: 'Sh. Sunny Vaghela', role: 'Panelist', bio: 'Director (NCFL & NCEMU) I4C', image: '/speakers/sunny-vaghela.jpg' },
        { name: 'Dr. Sandeep Shukla', role: 'Panelist', bio: 'Director (IIIT-Hyderabad)', image: '/speakers/sandeep-shukla.jpg' },
        { name: 'Dr. Milan Patnaik', role: 'Panelist', bio: 'CTO (Whizhack)', image: '/speakers/milan-patnaik.jpg' },
        { name: 'Sh. Nishant Kumar', role: 'Panelist', bio: 'Founder & CEO (TechD Cybersecurity Limited)', image: '/speakers/nishant-kumar.jpg' },
        { name: 'Lt Col (Dr) Santosh Khadsare', role: 'Panelist', bio: 'Cyber Security & DFIR Professional (CTO Sys Tools)', image: '/speakers/santosh-khadsare.jpg' }
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

                {/* Expanded Content - Shows when panel is opened */}
                <div className={`transition-all duration-300 ${activePanel === panelIdx ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                  {/* Moderator Card - Full Width */}
                  <div className="mt-4 md:mt-6 mb-4">
                    <h4 className="text-lg font-bold text-cyan-400 mb-3">Moderator</h4>
                    <div className="bg-slate-800/30 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-4 hover:border-cyan-400 transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <img 
                          src={panel.moderator.image} 
                          alt={panel.moderator.name}
                          className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-cyan-500"
                        />
                        <div>
                          <h5 className="text-base md:text-lg font-bold text-white mb-1">{panel.moderator.name}</h5>
                          <p className="text-xs md:text-sm text-gray-400">{panel.moderator.bio}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Panelists Grid */}
                  <div>
                    <h4 className="text-lg font-bold text-cyan-400 mb-3">Panelists</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {panel.members.map((member, memberIdx) => (
                        <div
                          key={memberIdx}
                          className="bg-slate-800/20 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2"
                        >
                          <div className="text-center">
                            <img 
                              src={member.image} 
                              alt={member.name}
                              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mx-auto mb-3 border-2 border-cyan-500/50"
                            />
                            <h5 className="text-sm md:text-base font-bold text-white mb-1 leading-tight">{member.name}</h5>
                            <p className="text-xs text-cyan-400 font-medium mb-2 px-2 py-1 bg-cyan-500/10 rounded-full inline-block">
                              {member.role}
                            </p>
                            <p className="text-xs text-gray-400 mt-2 leading-relaxed">{member.bio}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Preview when collapsed */}
                {activePanel !== panelIdx && (
                  <div className="mt-3 md:mt-4">
                    <p className="text-cyan-400 text-xs md:text-sm">Tap to view speakers →</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
