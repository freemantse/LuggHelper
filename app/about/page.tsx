export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8">
        About LuggageMatch
      </h1>
      
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          At LuggageMatch, we understand the stress and frustration of losing your luggage during travel. 
          Our mission is to reunite travelers with their lost belongings through an innovative and efficient 
          matching service. Using advanced technology and a user-friendly platform, we bridge the gap between 
          lost and found luggage worldwide.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Do</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          We provide a comprehensive platform where travelers can:
        </p>
        <ul className="list-disc list-inside text-gray-600 leading-relaxed mb-6 space-y-2">
          <li>Report lost luggage quickly and efficiently</li>
          <li>Post found luggage to help locate its owner</li>
          <li>Access a global database of lost and found items</li>
          <li>Receive real-time notifications when potential matches are found</li>
          <li>Connect with airlines and airports worldwide</li>
        </ul>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Us</h2>
        
        <div className="space-y-4">
          <div className="flex items-center text-gray-600">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>
              <p className="font-medium">Email</p>
              <a href="mailto:lugghelper@outlook.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                lugghelper@outlook.com
              </a>
            </div>
          </div>

          <div className="flex items-center text-gray-600">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div>
              <p className="font-medium">Phone</p>
              <a href="tel:+85212345678" className="text-blue-600 hover:text-blue-700 transition-colors">
                +852 1234 5678
              </a>
            </div>
          </div>

          <div className="flex items-center text-gray-600">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-medium">Business Hours</p>
              <p>Monday - Friday: 9:00 AM - 6:00 PM (HKT)</p>
              <p>Saturday: 9:00 AM - 1:00 PM (HKT)</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
