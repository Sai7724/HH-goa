

interface LandingProps {
  onStart: () => void;
}

export function Landing({ onStart }: LandingProps) {
  return (
    <div className="landing-root scanlines landing-layout">
      {/* ── CIRCUIT BACKGROUND ──────────────────────── */}
      <div className="landing-circuit-bg" />

      {/* TOP HEADER */}
      <header className="landing-header">
        {/* Top Left */}
        <div style={{ display: 'flex', flexDirection: 'column', color: 'var(--cyan)', fontFamily: 'var(--font-mono)' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '4px' }}>2:47PM</div>
          <div style={{ fontSize: '11px', fontWeight: 'bold', letterSpacing: '2px', marginTop: '4px' }}>STUDIO</div>
        </div>

        {/* Top Right Event Info */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          color: 'var(--cyan)',
          fontFamily: 'var(--font-mono)',
          textAlign: 'right'
        }}>
          <div style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px' }}>A 4-DAY BUILDER RETREAT</div>
          <div style={{ fontSize: '10px', opacity: 0.8, letterSpacing: '1px', marginTop: '6px' }}>FOR CREATORS & INNOVATORS</div>
        </div>
      </header>

      {/* CENTER HERO */}
      <main className="landing-hero">
        <div className="landing-hero-container">
          <h1 className="landing-title left">
            HACKER
          </h1>
          <div className="hindi-overlay landing-hindi-center">
            गोवा
          </div>
          <h1 className="landing-title right">
            HOUSE
          </h1>
        </div>
        
        {/* CTA Button */}
        <button
          onClick={onStart}
          onMouseOver={e => {
            e.currentTarget.style.transform = 'translate(2px, 2px)';
            e.currentTarget.style.boxShadow = '2px 2px 0px 0px #000';
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = 'translate(0px, 0px)';
            e.currentTarget.style.boxShadow = '6px 6px 0px 0px #000';
          }}
          className="landing-btn"
        >
          CREATE YOURS
        </button>
      </main>
      

      {/* FOOTER */}
      <footer className="landing-footer-layout">
        {/* Middle Footer */}
        <div className="landing-footer-mid">
          <div>GOA, INDIA &nbsp;•&nbsp; 28 - 31 OCT 2026</div>
          <div>2:47 PM STUDIO</div>
        </div>
        
        {/* Bottom Center */}
        <div className="landing-footer-bot">
          <div style={{ fontSize: '13px', fontWeight: 'bold', letterSpacing: '1px' }}>
            #FrameInGoa &nbsp;•&nbsp; HH GOA 2026 &nbsp;•&nbsp; Goa, India
          </div>
          <div style={{ fontSize: '12px', opacity: 0.7, letterSpacing: '1px' }}>
            Built for HH Goa 2026 builders & attendees.
          </div>
        </div>
      </footer>
    </div>
  );
}
