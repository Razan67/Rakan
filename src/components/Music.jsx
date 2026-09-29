import { useEffect, useRef, useState } from "react";
import { songs } from "../config.js";

// Music via YouTube's official embedded player. Never autoplays —
// it starts only when he taps a song. Site works fine if it's blocked.
export default function Music() {
  const player = useRef(null);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const pending = useRef(null);

  const load = () =>
    new Promise((res) => {
      if (window.YT?.Player) return res();
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => { prev?.(); res(); };
      if (!document.getElementById("yt-api")) {
        const s = document.createElement("script");
        s.id = "yt-api";
        s.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(s);
      }
    });

  const ensurePlayer = async (videoId) => {
    await load();
    if (player.current) return player.current.loadVideoById(videoId);
    player.current = new window.YT.Player("yt-holder", {
      height: "1", width: "1", videoId,
      playerVars: { playsinline: 1, controls: 0 },
      events: {
        onReady: (e) => e.target.playVideo(),
        onStateChange: (e) => setPlaying(e.data === 1),
        onError: () => setFailed(true),
      },
    });
  };

  const choose = async (i) => {
    setFailed(false);
    if (i === current && player.current) {
      const st = player.current.getPlayerState();
      return st === 1 ? player.current.pauseVideo() : player.current.playVideo();
    }
    setCurrent(i);
    pending.current = i;
    await ensurePlayer(songs[i].id);
  };

  useEffect(() => () => player.current?.destroy?.(), []);

  return (
    <div className={`music ${open ? "open" : ""}`}>
      <div id="yt-holder-wrap" aria-hidden="true"><div id="yt-holder" /></div>
      {open && (
        <div className="music-panel" role="group" aria-label="Songs">
          {songs.map((s, i) => (
            <button key={s.id} className={i === current ? "on" : ""} onClick={() => choose(i)}>
              <span>{i === current && playing ? "❚❚" : "▶"}</span> {s.title}
            </button>
          ))}
          {failed && current >= 0 && (
            <a href={songs[current].link} target="_blank" rel="noreferrer">
              Couldn't play here — open on YouTube
            </a>
          )}
        </div>
      )}
      <button
        className={`music-btn ${playing ? "playing" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label="Play our song"
      >
        <span className="note">🎵</span> {playing ? "Playing…" : "Play our song"}
      </button>
    </div>
  );
}
