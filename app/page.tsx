import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to LuggageMatch</h1>
      <p className="text-xl mb-8">Find or post lost luggage with ease</p>
      <div className="space-x-4">
        <Link href="/post" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Post Luggage
        </Link>
        <Link href="/find" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Find Luggage
        </Link>
      </div>
    </div>
  )
}

