import { useEffect, useState } from "react";
import { NAME, memories, STORY, arabicMessage, englishMessage, timeline, surprise, finale } from "./config.js";
import Hearts, { burst } from "./components/Hearts.jsx";
import Reveal from "./components/Reveal.jsx";
import Music from "./components/Music.jsx";
import Lightbox from "./components/Lightbox.jsx";

const NAV = [
  ["story", "Our Story"],
  ["memories", "Memories"],
  ["birthday", "Birthday"],
  ["us", "Us"],
];

const tilt = (i) => [-4, 3, -2, 4, -3, 2, -5, 3][i % 8];

export default function App() {
  const [opened, setOpened] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [lb, setLb] = useState(-1);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
  }, [opened]);

  const open = (e) => {
    burst(e, undefined, 24);
    setLeaving(true);
    setTimeout(() => { setOpened(true); window.scrollTo(0, 0); }, 900);
  };

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const showSurprise = (e) => {
    burst(e, undefined, 30);
    setRevealed(true);
    setTimeout(() => burst(window.innerWidth / 2, window.innerHeight / 2, 26), 500);
  };

  return (
    <>
      {!opened && (
        <section className={`intro ${leaving ? "leaving" : ""}`}>
          <Hearts count={18} />
          <div className="intro-inner">
            <p className="intro-small">To the one who makes my world a little more beautiful...</p>
            <h1 className="script">Happy Birthday,<br />{NAME} <span className="beat">❤️</span></h1>
            <button className="btn" onClick={open}>Open your birthday surprise ❤️</button>
          </div>
        </section>
      )}

      {opened && (
        <main className="site">
          <nav className="nav" aria-label="Sections">
            {NAV.map(([id, label]) => (
              <button key={id} onClick={() => go(id)}><i>❤</i>{label}</button>
            ))}
          </nav>
          <Music />

          {/* SECTION 2 — THE BEGINNING */}
          <section id="story" className="sec story">
            <Hearts count={8} />
            <Reveal><span className="tag">{STORY.label}</span></Reveal>
            <Reveal delay={150}><h2 className="script big">{STORY.title}</h2></Reveal>
            <Reveal delay={250}>
              <div className="logo-orb">
                <div className="halo" />
                <img src={STORY.logo} alt="The Safwa Islamic Bank sign, where we first met" />
              </div>
            </Reveal>
            <Reveal delay={100}><p className="lead">{STORY.lines[0]}</p></Reveal>
            <Reveal delay={100}><p className="soft">{STORY.lines[1]}</p></Reveal>
            <Reveal delay={100}>
              <figure className="polaroid place" style={{ "--r": "-2deg" }}>
                <img src={STORY.place} alt="The place where we met" loading="lazy" />
                <figcaption>Where it all started ❤️</figcaption>
              </figure>
            </Reveal>
            <Reveal delay={100}><blockquote className="script quote">{STORY.quote}</blockquote></Reveal>
          </section>

          {/* SECTION 3 — MEMORIES */}
          <section id="memories" className="sec memories">
            <Reveal><h2 className="script big">Our Memories</h2></Reveal>
            <Reveal><p className="soft center">Tap a photo to see it closer.</p></Reveal>
            <div className="wall">
              {memories.map((m, i) => (
                <Reveal key={m.image + i} delay={(i % 2) * 120} className="wall-item">
                  <button className="polaroid" style={{ "--r": `${tilt(i)}deg` }} onClick={() => setLb(i)} aria-label={`Open photo: ${m.caption}`}>
                    <span className="pin">❤</span>
                    <img src={m.image} alt={m.alt || m.caption} loading="lazy" />
                    <span className="cap">{m.caption}</span>
                  </button>
                </Reveal>
              ))}
            </div>
          </section>

          {/* SECTION 4 — ARABIC MESSAGE */}
          <section id="birthday" className="sec arabic-sec">
            <Hearts count={12} />
            <Reveal><h2 className="script big">Happy Birthday</h2></Reveal>
            <Reveal delay={150}>
              <div className="card ar" dir="rtl" lang="ar">
                {arabicMessage.map((l, i) => <p key={i}>{l}</p>)}
              </div>
            </Reveal>
          </section>

          {/* SECTION 5 — ENGLISH MESSAGE */}
          <section className="sec english">
            <Reveal><h2 className="script big">For You</h2></Reveal>
            <div className="letter">
              {englishMessage.map((p, i) => (
                <Reveal key={i} delay={60}><p className={i === englishMessage.length - 1 ? "script sign" : ""}>{p}</p></Reveal>
              ))}
            </div>
          </section>

          {/* SECTION 6 — TIMELINE */}
          <section id="us" className="sec timeline">
            <Reveal><h2 className="script big">Our Little Story ❤️</h2></Reveal>
            <ol className="tl">
              {timeline.map((t, i) => (
                <Reveal as="li" key={i} delay={80} className="tl-item">
                  <span className="dot">❤</span>
                  <div>
                    {t.date && <small>{t.date}</small>}
                    <h3>{t.title}</h3>
                    <p>{t.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </section>

          {/* SECTION 7 — SURPRISE */}
          <section className="sec surprise">
            <Hearts count={8} />
            <Reveal><h2 className="script big">{surprise.title}</h2></Reveal>
            {!revealed ? (
              <Reveal delay={150}><button className="btn pulse" onClick={showSurprise}>{surprise.button}</button></Reveal>
            ) : (
              <div className="secret" aria-live="polite">
                {surprise.lines.map((l, i) => <p key={i} style={{ animationDelay: `${0.4 + i * 1.1}s` }}>{l}</p>)}
              </div>
            )}
          </section>

          {/* SECTION 8 — FINAL */}
          <section className="sec final">
            <Hearts count={22} />
            <Reveal><h2 className="script huge">{finale.title}</h2></Reveal>
            <Reveal delay={200}><p className="lead">{finale.text}</p></Reveal>
            <Reveal delay={300}><p className="script love">{finale.love}</p></Reveal>
            <p className="footer">{finale.footer}</p>
          </section>
        </main>
      )}

      {lb >= 0 && <Lightbox items={memories} index={lb} onClose={() => setLb(-1)} onChange={setLb} />}
    </>
  );
}
