let tracks = [
  { id: 't1', title: 'Stardust', url: '/sample.mp3', duration: '3:12', ownerId: '1' }
]

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(tracks)
  }

  if (req.method === 'POST') {
    const { ownerId, title, url, duration } = req.body
    const id = 't' + (tracks.length + 1)
    const t = { id, ownerId, title, url, duration }
    tracks.push(t)
    return res.status(201).json(t)
  }

  return res.status(405).end()
}
