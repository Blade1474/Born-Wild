let profiles = [
  {
    id: '1',
    name: 'Luna Drift',
    bio: 'Alt nightcore producer mixing dreamy synths with hard beats.',
    followers: 12300,
    meta: 'New single — Stardust',
    nowPlaying: { title: 'Stardust', url: '/sample.mp3', duration: '3:12' },
    tracks: [ { title: 'Stardust', url: '/sample.mp3', duration: '3:12' } ]
  },
  {
    id: '2', name: 'Echo Riot', bio: 'Remix king.', followers: 4200, meta: 'Remix Pack', nowPlaying: null, tracks: []
  },
  { id: '3', name: 'Rift Runner', bio: 'Live sets and collabs', followers: 980, meta: 'Live soon', nowPlaying: null, tracks: [] }
]

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query
    if (id) {
      const p = profiles.find(x => x.id === String(id))
      return res.status(200).json(p || null)
    }
    return res.status(200).json(profiles)
  }

  if (req.method === 'POST') {
    const body = req.body
    const id = String(profiles.length + 1)
    const newP = { id, ...body }
    profiles.push(newP)
    return res.status(201).json(newP)
  }

  return res.status(405).end()
}
