import Player from './Player'

export default function ProfilePreview({ profile }) {
  const { name, followers, nowPlaying } = profile || {}
  return (
    <aside className="bg-gradient-to-br from-gray-900/50 to-black/30 rounded-2xl p-6 text-white">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-2xl font-bold">{name?.split(' ').map(s=>s[0]).slice(0,2).join('')}</div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-bold text-lg">{name}</h4>
              <div className="text-sm text-gray-400">Alt Nightcore • {followers} followers</div>
            </div>
            <button className="px-3 py-2 rounded-md bg-purple-600 font-semibold">Follow</button>
          </div>

          <div className="mt-4 text-sm text-gray-300">"Top tracks: Stardust, Moonlight Run, Afterglow"</div>
        </div>
      </div>

      <div className="mt-6 border-t border-white/10 pt-4">
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-400 uppercase">Now Playing</div>
          <div className="text-xs text-gray-400">{nowPlaying?.duration || '0:00'}</div>
        </div>

        <div className="mt-3">
          {nowPlaying ? (
            <div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-md bg-gradient-to-br from-indigo-600 to-blue-400" />
                <div className="flex-1">
                  <div className="font-semibold">{nowPlaying.title}</div>
                  <div className="text-xs text-gray-400">{name}</div>
                </div>
              </div>
              <Player src={nowPlaying.url} title={nowPlaying.title} artist={name} />
            </div>
          ) : (
            <div className="text-gray-500 text-sm">Not playing</div>
          )}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
          <div className="text-center py-2 rounded-md border border-white/6">Top 5</div>
          <div className="text-center py-2 rounded-md border border-white/6">Playlist</div>
          <div className="text-center py-2 rounded-md border border-white/6">Message</div>
        </div>
      </div>
    </aside>
  )
}
