import Link from 'next/link'

export default function Header() {
  return (
    <header className="max-w-6xl mx-auto p-6 flex items-center justify-between text-white">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-bw-purple to-pink-500 flex items-center justify-center text-xl font-bold">BW</div>
        <h1 className="text-2xl font-extrabold tracking-tight">Born Wild</h1>
      </div>
      <nav className="flex items-center gap-4">
        <Link href="/"><a className="px-4 py-2 rounded-md bg-white text-black font-medium">Explore</a></Link>
        <button className="px-4 py-2 rounded-md border border-white/20">Create</button>
      </nav>
    </header>
  )
}
