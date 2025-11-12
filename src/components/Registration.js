'use client'
import { useState } from 'react'
import { jsPDF } from 'jspdf'

export default function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    category: 'student'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [registrationComplete, setRegistrationComplete] = useState(false)
  const [uniqueId, setUniqueId] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const generateUniqueId = () => {
    const prefix = formData.category === 'student' ? 'STU' : formData.category === 'faculty' ? 'FAC' : 'PRO'
    const randomNum = Math.floor(100000 + Math.random() * 900000)
    return `NFSU2025-${prefix}-${randomNum}`
  }

  const generatePDF = (id) => {
    const doc = new jsPDF()
    
    // Header with NFSU colors
    doc.setFillColor(6, 182, 212)
    doc.rect(0, 0, 210, 40, 'F')
    
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(24)
    doc.text('NFSU Conference 2025', 105, 20, { align: 'center' })
    doc.setFontSize(12)
    doc.text('Securing the Digital Future', 105, 30, { align: 'center' })
    
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(18)
    doc.text('ATTENDANCE CONFIRMATION', 105, 60, { align: 'center' })
    
    // Unique ID Box
    doc.setFillColor(6, 182, 212)
    doc.roundedRect(40, 70, 130, 20, 3, 3, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(20)
    doc.text(`ID: ${id}`, 105, 83, { align: 'center' })
    
    // Participant Details
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(12)
    let yPos = 110
    
    doc.text(`Name: ${formData.name}`, 30, yPos)
    yPos += 10
    doc.text(`Email: ${formData.email}`, 30, yPos)
    yPos += 10
    doc.text(`Phone: ${formData.phone}`, 30, yPos)
    yPos += 10
    doc.text(`Institution: ${formData.institution}`, 30, yPos)
    yPos += 10
    doc.text(`Category: ${formData.category.toUpperCase()}`, 30, yPos)
    
    // Event Details
    yPos += 20
    doc.setFontSize(14)
    doc.text('Event Details:', 30, yPos)
    yPos += 10
    doc.setFontSize(11)
    doc.text('Date: December 2nd, 2025', 30, yPos)
    yPos += 7
    doc.text('Time: 9:00 AM onwards', 30, yPos)
    yPos += 7
    doc.text('Venue: AICTE Auditorium, Vasant Kunj, New Delhi', 30, yPos)
    
    // Instructions
    yPos += 15
    doc.setFillColor(240, 240, 240)
    doc.rect(20, yPos, 170, 40, 'F')
    yPos += 10
    doc.setFontSize(10)
    doc.setTextColor(100, 100, 100)
    doc.text('IMPORTANT INSTRUCTIONS:', 30, yPos)
    yPos += 7
    doc.text('1. Bring this confirmation along with a valid ID proof', 30, yPos)
    yPos += 5
    doc.text('2. Report to the registration desk with your Unique ID', 30, yPos)
    yPos += 5
    doc.text('3. Faculty will verify your ID and provide physical ID card and kit', 30, yPos)
    yPos += 5
    doc.text('4. Contact: cyberconference2025@gmail.com | +91 7988565046', 30, yPos)
    
    // Footer
    doc.setFillColor(6, 182, 212)
    doc.rect(0, 270, 210, 27, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(10)
    doc.text('National Forensic Sciences University', 105, 283, { align: 'center' })
    doc.text('www.nfsu.ac.in', 105, 290, { align: 'center' })
    
    doc.save(`NFSU-Conference-${id}.pdf`)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const id = generateUniqueId()
    setUniqueId(id)

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          uniqueId: id,
          registeredAt: new Date().toISOString()
        }),
      })

      if (response.ok) {
        setRegistrationComplete(true)
        generatePDF(id)
      } else {
        alert('Confirmation failed. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (registrationComplete) {
    return (
      <section id="register" className="py-12 md:py-20 px-4 relative">
        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-900/20 backdrop-blur-lg border border-cyan-500/30 rounded-2xl shadow-2xl p-6 md:p-8 lg:p-12">
            <div className="text-center">
              <div className="text-5xl md:text-6xl mb-4 md:mb-6">✓</div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                Confirmation Successful!
              </h2>
              <div className="bg-slate-800/30 backdrop-blur-sm border-2 border-cyan-400 rounded-xl p-4 md:p-6 mb-4 md:mb-6">
                <p className="text-xs md:text-sm text-gray-400 mb-2">Your Unique ID</p>
                <p className="text-2xl md:text-3xl font-bold text-cyan-400 font-mono break-all">{uniqueId}</p>
              </div>
              <p className="text-gray-400 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                Your confirmation has been downloaded automatically. Please save it and bring it to the venue on December 2nd, 2025.
              </p>
              <div className="bg-slate-800/20 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-4 md:p-6 text-left">
                <h3 className="font-bold text-white mb-3 flex items-center gap-2 text-sm md:text-base">
                  <span className="text-cyan-400">→</span> Next Steps
                </h3>
                <ul className="space-y-2 text-xs md:text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1 flex-shrink-0">✓</span>
                    <span>Check your email for confirmation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1 flex-shrink-0">✓</span>
                    <span>Save your PDF confirmation form</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1 flex-shrink-0">✓</span>
                    <span>Note your Unique ID: <strong className="text-cyan-400 break-all">{uniqueId}</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1 flex-shrink-0">✓</span>
                    <span>Arrive at AICTE Auditorium on Dec 2nd by 9:00 AM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1 flex-shrink-0">✓</span>
                    <span>Show your ID at registration desk</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setRegistrationComplete(false)
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    institution: '',
                    category: 'student'
                  })
                }}
                className="mt-4 md:mt-6 w-full sm:w-auto bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-500 hover:to-blue-500 transition duration-300 text-sm md:text-base"
              >
                Confirm Another Participant
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="register" className="py-12 md:py-20 px-4 relative">
      <div className="max-w-2xl mx-auto">
        <div className="bg-slate-900/20 backdrop-blur-lg border border-cyan-500/30 rounded-2xl shadow-2xl p-6 md:p-8 lg:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4 gradient-text">
            Confirm Now
          </h2>
          <p className="text-center text-gray-400 mb-6 md:mb-8 text-sm md:text-base">
            Confirm your attendance. You'll receive a unique ID and downloadable confirmation.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-800/20 backdrop-blur-sm border border-cyan-500/30 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-gray-500 transition-all duration-300 text-sm md:text-base"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-800/20 backdrop-blur-sm border border-cyan-500/30 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-gray-500 transition-all duration-300 text-sm md:text-base"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-800/20 backdrop-blur-sm border border-cyan-500/30 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-gray-500 transition-all duration-300 text-sm md:text-base"
                placeholder="+91 XXXXXXXXXX"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Institution/Organization *
              </label>
              <input
                type="text"
                name="institution"
                required
                value={formData.institution}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-800/20 backdrop-blur-sm border border-cyan-500/30 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-gray-500 transition-all duration-300 text-sm md:text-base"
                placeholder="Your institution name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-800/20 backdrop-blur-sm border border-cyan-500/30 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white transition-all duration-300 text-sm md:text-base"
              >
                <option value="student">Student</option>
                <option value="faculty">Faculty</option>
                <option value="professional">Professional</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:from-cyan-500 hover:to-blue-500 transform hover:scale-[1.02] transition duration-300 shadow-lg shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Confirming...' : 'Confirm Attendance'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
