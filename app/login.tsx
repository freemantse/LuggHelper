import {
  ClerkProvider,
  SignIn,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
            <div className="min-h-[80vh] flex flex-col items-center justify-center">
              <div className="max-w-md w-full px-4">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    Welcome Back
                  </h1>
                  <p className="text-gray-600">
                    Sign in to manage your lost and found items
                  </p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-6 border border-gray-200">
                  <SignIn
                    appearance={{
                      elements: {
                        formButtonPrimary: 
                          "bg-blue-600 hover:bg-blue-700 text-white transition-colors",
                        card: "bg-transparent shadow-none",
                        headerTitle: "text-2xl font-bold text-gray-900",
                        headerSubtitle: "text-gray-600",
                        socialButtonsBlockButton: 
                          "border border-gray-300 hover:border-gray-400 transition-colors",
                        formFieldInput: 
                          "rounded-lg border-gray-300 focus:ring-blue-600 focus:border-blue-600",
                      },
                    }}
                  />
                </div>
                
                <div className="mt-8 text-center text-sm text-gray-500">
                  <p>
                    By signing in, you agree to our{" "}
                    <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}