import Head from 'next/head'
import Header from '../components/Header'
import ProfilePreview from '../components/ProfilePreview'
import { useEffect, useState } from 'react'

export default function Home() {
  const [featured, setFeatured] = useState(null)
  const [all, setAll] = useState([])

  useEffect(() => {
    fetch('/api/profiles')
      .then(r => r.json())
      .then(data => {
        setAll(data)
        if (data.length) setFeatured(data[0])
      })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white font-sans">
      <Head>
        <title>Born Wild — Beta</title>
      </Head>
      <Header />

      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <section className="md:col-span-2 bg-gradient-to-br from-gray-900/60 to-black/40 rounded-2xl p-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <h2 className="text-4xl font-extrabold mb-3">Unleash. Create. Connect.</h2>
              <p className="text-gray-300 mb-6">Born Wild is a music-first social space for artists, fans, and scenes. Build your page, share your sound, and join communities that actually care about music — not algorithms.</p>

              <div className="flex gap-4">
                <a href="/profile/1" className="px-5 py-3 rounded-md bg-purple-600 font-semibold shadow-lg">View Featured</a>
                <button className="px-5 py-3 rounded-md border border-white/20">Learn More</button>
              </div>
            </div>

            <div className="w-full lg:w-80 bg-black/60 rounded-xl p-4">
              <h3 className="font-bold mb-3">Featured Artists</h3>
              <div className="space-y-3">
                {all.slice(0,3).map(p=> (
                  <div key={p.id} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-md bg-gradient-to-br from-blue-600 to-indigo-700" />
                    <div>
                      <div className="font-semibold">{p.name}</div>
                      <div className="text-sm text-gray-400">{p.meta || 'New single'}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ProfilePreview profile={featured} />
      </main>

      <footer className="max-w-6xl mx-auto p-6 text-center text-gray-500 text-sm">© Born Wild — Beta</footer>
    </div>
  )
}
