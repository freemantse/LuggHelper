'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { SignInButton, useUser } from '@clerk/nextjs'

export default function PostLuggage() {
  const { isLoaded, isSignedIn } = useUser()
  const [photo, setPhoto] = useState<File | null>(null)
  const [description, setDescription] = useState('')
  const [email, setEmail] = useState('')
  const [time, setTime] = useState('')
  const [destination, setDestination] = useState('')
  const [day, setDay] = useState('')
  const [contact, setContact] = useState('')
  const [aiAnalysis, setAiAnalysis] = useState('')
  const router = useRouter()

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0])
      // TODO: Implement AI analysis here
      setAiAnalysis('AI analysis result will be shown here')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isSignedIn) {
      // If not signed in, show sign in modal
      document.getElementById('signInButton')?.click()
      return
    }
    // TODO: Implement form submission logic here
    console.log('Form submitted')
    router.push('/')
  }

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Post Lost Luggage</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Details</label>
          <input 
            type="text" 
            id="contact" 
            value={contact} 
            onChange={(e) => setContact(e.target.value)} 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" 
            placeholder="Enter your contact information"
            required 
          />
        </div>

        <div>
          <label htmlFor="day" className="block text-sm font-medium text-gray-700">Day</label>
          <input 
            type="date" 
            id="day" 
            value={day} 
            onChange={(e) => setDay(e.target.value)} 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" 
            required 
          />
        </div>

        <div>
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Destination</label>
          <input 
            type="text" 
            id="destination" 
            value={destination} 
            onChange={(e) => setDestination(e.target.value)} 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" 
            placeholder="Enter the destination"
            required 
          />
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
          <input 
            type="time" 
            id="time" 
            value={time} 
            onChange={(e) => setTime(e.target.value)} 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" 
            required 
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" 
            placeholder="Enter your email address"
            required 
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea 
            id="description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" 
            placeholder="Describe your luggage in detail"
            rows={4}
            required 
          />
        </div>

        <div>
          <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Upload Photo</label>
          <input 
            type="file" 
            id="photo" 
            onChange={handlePhotoChange} 
            accept="image/*" 
            className="mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
            required 
          />
        </div>

        {aiAnalysis && (
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h2 className="font-bold text-blue-700 mb-2">AI Analysis</h2>
            <p className="text-blue-600">{aiAnalysis}</p>
          </div>
        )}

        <div className="hidden">
          <SignInButton mode="modal">
            <button id="signInButton">Sign In</button>
          </SignInButton>
        </div>

        <button 
          type="submit" 
          className={`w-full font-bold py-3 px-4 rounded-lg transition-colors ${
            isSignedIn 
              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {isSignedIn ? 'Submit' : 'Sign In to Submit'}
        </button>
      </form>
    </div>
  )
}
