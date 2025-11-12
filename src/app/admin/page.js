'use client'
import { useState, useEffect } from 'react'

export default function AdminPanel() {
  const [registrations, setRegistrations] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)
  const [newGuest, setNewGuest] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    category: 'student'
  })

  const ADMIN_PASSWORD = 'Tamanna@nfsu25' // Change this!

  useEffect(() => {
    if (isAuthenticated) {
      fetchRegistrations()
    }
  }, [isAuthenticated])

  const fetchRegistrations = async () => {
    try {
      const response = await fetch('/api/register')
      const data = await response.json()
      setRegistrations(data.registrations || [])
    } catch (error) {
      console.error('Error fetching registrations:', error)
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
    } else {
      alert('Incorrect password!')
    }
  }

  // Generate Unique ID
  const generateUniqueId = (category) => {
    const prefix = category === 'student' ? 'STU' : category === 'faculty' ? 'FAC' : 'PRO'
    const randomNum = Math.floor(100000 + Math.random() * 900000)
    return `NFSU2025-${prefix}-${randomNum}`
  }

  // Add Guest Function
  const handleAddGuest = async (e) => {
    e.preventDefault()
    
    const uniqueId = generateUniqueId(newGuest.category)
    const guestData = {
      ...newGuest,
      uniqueId,
      registeredAt: new Date().toISOString()
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(guestData),
      })

      if (response.ok) {
        alert(`Guest added successfully!\nUnique ID: ${uniqueId}`)
        setShowAddForm(false)
        setNewGuest({
          name: '',
          email: '',
          phone: '',
          institution: '',
          category: 'student'
        })
        fetchRegistrations() // Refresh the list
      } else {
        alert('Failed to add guest. Please try again.')
      }
    } catch (error) {
      console.error('Error adding guest:', error)
      alert('An error occurred. Please try again.')
    }
  }

  // Remove Guest Function
  const handleRemoveGuest = async (uniqueId) => {
    if (!confirm(`Are you sure you want to remove guest with ID: ${uniqueId}?`)) {
      return
    }

    try {
      const response = await fetch('/api/register', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ uniqueId }),
      })

      if (response.ok) {
        alert('Guest removed successfully!')
        fetchRegistrations() // Refresh the list
      } else {
        alert('Failed to remove guest. Please try again.')
      }
    } catch (error) {
      console.error('Error removing guest:', error)
      alert('An error occurred. Please try again.')
    }
  }

  // Download Excel Function
  const downloadExcel = () => {
    // Create CSV content
    const headers = ['Unique ID', 'Name', 'Email', 'Phone', 'Institution', 'Category', 'Registered At']
    const csvContent = [
      headers.join(','),
      ...registrations.map(reg => [
        reg.uniqueId || '',
        `"${reg.name || ''}"`,
        reg.email || '',
        reg.phone || '',
        `"${reg.institution || ''}"`,
        reg.category || '',
        reg.registeredAt || ''
      ].join(','))
    ].join('\n')

    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', `NFSU_Conference_Registrations_${new Date().toISOString().split('T')[0]}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const filteredRegistrations = registrations.filter(reg =>
    reg.uniqueId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reg.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reg.email?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Admin Login
          </h1>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-purple-500 focus:outline-none text-gray-800"
            />
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Default password: changed
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <h1 className="text-3xl font-bold text-gray-800">
              Admin Panel - Registrations
            </h1>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={downloadExcel}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center gap-2"
              >
                <span>📊</span> Download Excel
              </button>
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300 flex items-center gap-2"
              >
                <span>➕</span> Add Guest
              </button>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Add Guest Form */}
          {showAddForm && (
            <div className="mb-6 bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Guest</h2>
              <form onSubmit={handleAddGuest} className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={newGuest.name}
                    onChange={(e) => setNewGuest({...newGuest, name: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-gray-800"
                    placeholder="Enter full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={newGuest.email}
                    onChange={(e) => setNewGuest({...newGuest, email: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-gray-800"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={newGuest.phone}
                    onChange={(e) => setNewGuest({...newGuest, phone: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-gray-800"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Institution *</label>
                  <input
                    type="text"
                    required
                    value={newGuest.institution}
                    onChange={(e) => setNewGuest({...newGuest, institution: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-gray-800"
                    placeholder="Institution name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                  <select
                    value={newGuest.category}
                    onChange={(e) => setNewGuest({...newGuest, category: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-gray-800"
                  >
                    <option value="student">Student</option>
                    <option value="faculty">Faculty</option>
                    <option value="professional">Professional</option>
                  </select>
                </div>

                <div className="md:col-span-2 flex gap-2">
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
                  >
                    ✓ Add Guest
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="mb-6">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by Unique ID, Name, or Email..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none text-gray-800"
            />
          </div>

          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <p className="text-lg font-semibold text-gray-800">
              Total Registrations: <span className="text-purple-600">{registrations.length}</span>
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Unique ID</th>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Email</th>
                  <th className="px-4 py-3 text-left">Phone</th>
                  <th className="px-4 py-3 text-left">Institution</th>
                  <th className="px-4 py-3 text-left">Category</th>
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRegistrations.map((reg, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-mono text-sm font-bold text-purple-600">
                      {reg.uniqueId}
                    </td>
                    <td className="px-4 py-3 text-gray-800">{reg.name}</td>
                    <td className="px-4 py-3 text-gray-800">{reg.email}</td>
                    <td className="px-4 py-3 text-gray-800">{reg.phone}</td>
                    <td className="px-4 py-3 text-gray-800">{reg.institution}</td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        {reg.category}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleRemoveGuest(reg.uniqueId)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300 text-sm"
                      >
                        🗑️ Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredRegistrations.length === 0 && (
            <p className="text-center text-gray-500 py-8">No registrations found.</p>
          )}
        </div>
      </div>
    </div>
  )
}
