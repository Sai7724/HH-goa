import { useState, useRef } from 'react';
import { Landing } from './components/Landing';
import { Uploader } from './components/Uploader';
import { IDCard } from './components/IDCard';
import { ActionButtons } from './components/ActionButtons';

const TAGS = [
  'GOA HACKER',
  'GOA BUILDER',
  'WEB3 DEGEN',
  'AI MAXIMALIST',
  '10X ENGINEER',
  'BASED DEV',
  'NIGHT OWL',
  'CHAD DEV',
  'BUG HUNTER',
  'SHIPPER'
];

function App() {
  const [isLanding, setIsLanding] = useState(true);
  const [image, setImage] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [stack, setStack] = useState('');
  const [builderId] = useState(`HH${Math.floor(1000 + Math.random() * 9000)}`);
  const [randomTag, setRandomTag] = useState(TAGS[0]);
  const [fontVibe, setFontVibe] = useState('Caveat');
  const [photoZoom, setPhotoZoom] = useState(100);
  const targetRef = useRef<HTMLDivElement>(null);

  if (isLanding) return <Landing onStart={() => setIsLanding(false)} />;

  return (
    <div className="studio-root scanlines">
      <div className="landing-circuit-bg" />

      {/* ── NAV ──────────────────────────────── */}
      <header className="studio-nav">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', color: 'var(--cyan)', fontFamily: 'var(--font-mono)' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '4px' }}>2:47PM</div>
            <div style={{ fontSize: '11px', fontWeight: 'bold', letterSpacing: '2px', marginTop: '4px' }}>STUDIO</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <button className="studio-home-btn" onClick={() => setIsLanding(true)}>
            ← Home
          </button>
        </div>
      </header>

      {/* ── BODY ─────────────────────────────── */}
      <main className="studio-body">

        {/* LEFT: CONTROLS */}
        <aside className="studio-controls">
          <div style={{ marginBottom: '28px' }}>
            <h2 style={{
              fontFamily: 'var(--font-serif)', fontWeight: 400,
              fontSize: '24px', color: 'var(--text-primary)',
              letterSpacing: '-0.5px', textTransform: 'uppercase',
            }}>
              Build Your Card
            </h2>
          </div>

          <FormStep number="01" label="Profile Picture">
            <Uploader onImageSelect={setImage} currentImage={image} />
          </FormStep>

          <Divider />

          <FormStep number="02" label="Builder Name">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <input
                type="text" className="input-field"
                placeholder="Nevan Alvares"
                value={name} onChange={e => setName(e.target.value)} maxLength={20}
              />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label className="field-label">Font Vibe</label>
                  <select
                    className="input-field" value={fontVibe}
                    onChange={e => setFontVibe(e.target.value)}
                    style={{ appearance: 'none', cursor: 'pointer' }}
                  >
                    <option value="Caveat">Caveat — Handwritten</option>
                    <option value="Space Mono">Space Mono — Pixel</option>
                  </select>
                </div>
                <div>
                  <label className="field-label">Photo Zoom — {photoZoom}%</label>
                  <div style={{ paddingTop: '8px' }}>
                    <input
                      type="range" min="100" max="200" value={photoZoom}
                      onChange={e => setPhotoZoom(Number(e.target.value))}
                      style={{ width: '100%', accentColor: '#FF0080' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </FormStep>

          <Divider />

          <FormStep number="03" label="Developer Role">
            <input
              type="text" className="input-field"
              placeholder="Full Stack Developer"
              value={stack} onChange={e => setStack(e.target.value)} maxLength={30}
            />
          </FormStep>

          <Divider />

          <FormStep number="04" label="Builder Badge">
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                flex: 1,
                padding: '12px 16px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(254, 225, 1,0.2)',
                borderRadius: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: '#FEE101',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {randomTag}
              </div>
              <button
                onClick={() => {
                  let newTag;
                  do {
                    newTag = TAGS[Math.floor(Math.random() * TAGS.length)];
                  } while (newTag === randomTag && TAGS.length > 1);
                  setRandomTag(newTag);
                }}
                style={{
                  padding: '12px 20px',
                  background: 'rgba(255, 0, 128, 0.15)',
                  border: '1px solid rgba(255, 0, 128, 0.4)',
                  borderRadius: '8px',
                  color: '#FF0080',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={e => e.currentTarget.style.background = 'rgba(255, 0, 128, 0.25)'}
                onMouseOut={e => e.currentTarget.style.background = 'rgba(255, 0, 128, 0.15)'}
              >
                Randomize
              </button>
            </div>
          </FormStep>

          <div style={{ flex: 1, minHeight: '20px' }} />

          <div className="studio-export-box">
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '9px',
              letterSpacing: '2px', color: 'var(--text-muted)',
              textTransform: 'uppercase', marginBottom: '14px',
            }}>
              Export your card
            </p>
            <ActionButtons targetRef={targetRef} format="B" />
          </div>

          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '9px',
            letterSpacing: '1.5px', color: 'rgba(247, 244, 234,0.2)',
            marginTop: '20px', textAlign: 'center',
          }}>
            #FrameInGoa · HH GOA 2026 · Goa, India
          </p>
        </aside>

        {/* RIGHT: PREVIEW */}
        <section className="studio-preview">
          {/* stage glow */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(254, 225, 1,0.06) 0%, transparent 70%)',
          }} />

          {/* preview label */}
          <div className="studio-preview-label">
            <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'rgba(255, 0, 128,0.8)', boxShadow: '0 0 10px rgba(255, 0, 128,0.6)' }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '9px',
              letterSpacing: '3px', color: 'rgba(255, 0, 128,0.65)',
              textTransform: 'uppercase',
            }}>
              02 · Live Preview
            </span>
          </div>

          {/* card */}
          <div
            className="studio-card-wrap"
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform =
                'perspective(1400px) rotateY(0deg) rotateX(0deg) scale(1.015)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform =
                'perspective(1400px) rotateY(-3deg) rotateX(2deg)';
            }}
          >
            <IDCard
              ref={targetRef}
              image={image || ''} name={name} stack={stack}
              builderId={builderId} fontVibe={fontVibe} photoZoom={photoZoom}
              tag={randomTag}
            />
          </div>

          {/* hint */}
          <div style={{ marginTop: '28px', zIndex: 5, display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '28px', height: '1px', background: 'rgba(254, 225, 1,0.18)' }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '9px',
              letterSpacing: '3px', color: 'rgba(247, 244, 234,0.22)',
              textTransform: 'uppercase',
            }}>
              Hover to inspect
            </span>
            <div style={{ width: '28px', height: '1px', background: 'rgba(254, 225, 1,0.18)' }} />
          </div>
        </section>
      </main>
    </div>
  );
}

function FormStep({ number, label, children }: { number: string; label: string; children: React.ReactNode }) {
  return (
    <div style={{ padding: '20px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '1px', color: 'rgba(254, 225, 1,0.35)' }}>
          {number}
        </span>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '10px',
          letterSpacing: '2.5px', color: 'rgba(254, 225, 1,0.75)',
          textTransform: 'uppercase',
        }}>
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}

function Divider() {
  return (
    <div style={{
      height: '1px',
      background: 'linear-gradient(90deg, transparent, rgba(254, 225, 1,0.12) 50%, transparent)',
    }} />
  );
}

export default App;
