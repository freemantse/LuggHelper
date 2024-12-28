import './globals.css'
import Link from 'next/link'
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

export const metadata = {
  title: 'Luggage Matching Service',
  description: 'Find or post lost luggage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <ClerkProvider>
          <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 fixed w-full z-10">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:from-blue-500 hover:to-indigo-500 transition-all">
                LuggageMatch
              </Link>
              <div className="flex items-center space-x-6">
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                  About Us
                </Link>
                <Link href="/post" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                  Post Luggage
                </Link>
                <Link href="/find" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                  Find Luggage
                </Link>
                <div className="pl-6 border-l border-gray-200">
                  <SignedOut>
                    <SignInButton mode="modal">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium">
                        Sign In
                      </button>
                    </SignInButton>
                  </SignedOut>
                  <SignedIn>
                    <UserButton 
                      appearance={{
                        elements: {
                          avatarBox: "w-10 h-10 rounded-full border-2 border-blue-600",
                        }
                      }}
                    />
                  </SignedIn>
                </div>
              </div>
            </nav>
          </header>
          <main className="container mx-auto px-4 pt-24 pb-12">
            {children}
          </main>
          <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200">
            <div className="container mx-auto px-4 py-6 text-center text-gray-600">
              <p>&copy; {new Date().getFullYear()} LuggageMatch. All rights reserved.</p>
            </div>
          </footer>
        </ClerkProvider>
      </body>
    </html>
  )
}
