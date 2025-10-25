import { useRouter } from 'next/router'
import Header from '../../components/Header'
import ProfilePreview from '../../components/ProfilePreview'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function ProfilePage() {
  const router = useRouter()
  const { id } = router.query
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    if (!id) return
    fetch(`/api/profiles?id=${id}`).then(r=>r.json()).then(data => setProfile(data))
  }, [id])

  if (!profile) return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="max-w-6xl mx-auto p-6">Loading...</main>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white font-sans">
      <Head><title>{profile.name} — Born Wild</title></Head>
      <Header />
      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <section className="md:col-span-2 bg-gradient-to-br from-gray-900/60 to-black/40 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4">{profile.name}</h2>
          <p className="text-gray-300 mb-6">{profile.bio || 'No bio yet.'}</p>

          <div className="rounded-md bg-black/40 p-4">
            <h3 className="font-semibold mb-2">Tracks</h3>
            {profile.tracks?.length ? (
              profile.tracks.map((t, i) => (
                <div key={i} className="mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{t.title}</div>
                      <div className="text-sm text-gray-400">{t.duration || '—'}</div>
                    </div>
                    <a href={t.url} className="px-3 py-2 rounded-md bg-purple-600">Open</a>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-gray-500">No tracks uploaded yet.</div>
            )}
          </div>
        </section>

        <ProfilePreview profile={profile} />
      </main>

      <footer className="max-w-6xl mx-auto p-6 text-center text-gray-500 text-sm">© Born Wild — Beta</footer>
    </div>
  )
}
