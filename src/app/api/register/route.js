import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// POST - Add new registration
export async function POST(request) {
  try {
    const data = await request.json()
    
    const filePath = path.join(process.cwd(), 'src', 'data', 'registrations.json')
    
    let registrations = []
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8')
      registrations = JSON.parse(fileContent)
    } catch (error) {
      registrations = []
    }
    
    registrations.push(data)
    
    fs.writeFileSync(filePath, JSON.stringify(registrations, null, 2))
    
    return NextResponse.json({ success: true, uniqueId: data.uniqueId })
  } catch (error) {
    console.error('Error saving registration:', error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

// GET - Fetch all registrations
export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'registrations.json')
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const registrations = JSON.parse(fileContent)
    
    return NextResponse.json({ registrations })
  } catch (error) {
    return NextResponse.json({ registrations: [] })
  }
}

// DELETE - Remove a registration
export async function DELETE(request) {
  try {
    const { uniqueId } = await request.json()
    
    const filePath = path.join(process.cwd(), 'src', 'data', 'registrations.json')
    
    let registrations = []
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8')
      registrations = JSON.parse(fileContent)
    } catch (error) {
      return NextResponse.json({ success: false, error: 'File not found' }, { status: 404 })
    }
    
    // Filter out the registration with the matching uniqueId
    const updatedRegistrations = registrations.filter(reg => reg.uniqueId !== uniqueId)
    
    if (updatedRegistrations.length === registrations.length) {
      return NextResponse.json({ success: false, error: 'Guest not found' }, { status: 404 })
    }
    
    fs.writeFileSync(filePath, JSON.stringify(updatedRegistrations, null, 2))
    
    return NextResponse.json({ success: true, message: 'Guest removed successfully' })
  } catch (error) {
    console.error('Error removing registration:', error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
