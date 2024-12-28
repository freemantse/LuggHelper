'use client'

import { useState } from 'react'
import { SignInButton, useUser } from '@clerk/nextjs'

export default function FindLuggage() {
  const { isLoaded, isSignedIn } = useUser()
  const [contactName, setContactName] = useState('')
  const [place, setPlace] = useState('')
  const [time, setTime] = useState('')
  const [destination, setDestination] = useState('')
  const [day, setDay] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isSignedIn) {
      // If not signed in, show sign in modal
      document.getElementById('findSignInButton')?.click()
      return
    }
    // TODO: Implement search logic here
    console.log('Search submitted')
  }

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Find Lost Luggage</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">Contact Name</label>
          <input 
            type="text" 
            id="contactName" 
            value={contactName} 
            onChange={(e) => setContactName(e.target.value)} 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" 
            placeholder="Enter your name"
            required 
          />
        </div>

        <div>
          <label htmlFor="place" className="block text-sm font-medium text-gray-700">Place</label>
          <input 
            type="text" 
            id="place" 
            value={place} 
            onChange={(e) => setPlace(e.target.value)} 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" 
            placeholder="Enter the place where you found the luggage"
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" 
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" 
            placeholder="Enter the destination"
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" 
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" 
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500" 
            placeholder="Describe the luggage you found"
            rows={4}
            required 
          />
        </div>

        <div className="hidden">
          <SignInButton mode="modal">
            <button id="findSignInButton">Sign In</button>
          </SignInButton>
        </div>

        <button 
          type="submit" 
          className={`w-full font-bold py-3 px-4 rounded-lg transition-colors ${
            isSignedIn 
              ? 'bg-green-600 hover:bg-green-700 text-white' 
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {isSignedIn ? 'Search' : 'Sign In to Search'}
        </button>
      </form>
    </div>
  )
}
