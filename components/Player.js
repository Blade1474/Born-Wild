import { useRef, useState, useEffect } from 'react'

export default function Player({ src, title = 'Track', artist = '' }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    const onTime = () => setProgress((a.currentTime / a.duration || 0) * 100)
    a.addEventListener('timeupdate', onTime)
    return () => a.removeEventListener('timeupdate', onTime)
  }, [])

  function toggle() {
    const a = audioRef.current
    if (!a) return
    if (playing) { a.pause(); setPlaying(false) }
    else { a.play(); setPlaying(true) }
  }

  return (
    <div className="mt-3">
      <audio ref={audioRef} src={src} preload="metadata" />
      <div className="flex items-center gap-4">
        <button onClick={toggle} className="px-3 py-2 rounded-md bg-purple-600">{playing ? 'Pause' : 'Play'}</button>
        <div className="flex-1">
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-gray-300">{artist}</div>
          <div className="mt-2 h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-white/60 rounded-full" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </div>
  )
}
