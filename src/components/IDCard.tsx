import React from 'react';

interface IDCardProps {
  image: string;
  name: string;
  stack: string;
  builderId: string;
  fontVibe?: string;
  photoZoom?: number;
  tag?: string;
}

export const IDCard = React.forwardRef<HTMLDivElement, IDCardProps>(
  ({ image, name, stack, builderId, fontVibe = 'Caveat', photoZoom = 100, tag = 'GOA HACKER' }, ref) => {
    const nameFont = fontVibe === 'Caveat' ? "'Caveat', cursive" : "'Space Mono', monospace";

    return (
      <div
        ref={ref}
        style={{
          width: '360px',
          height: '620px',
          borderRadius: '28px',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxSizing: 'border-box',
          /* deep forest green — matches image's sky */
          background: 'linear-gradient(165deg, #0E8446 0%, #0B6839 45%, #063C21 100%)',
          boxShadow: '0 0 0 1.5px rgba(254, 225, 1,0.2), 0 36px 80px rgba(0,0,0,0.55)',
        }}
      >
        {/* ── top accent bar: yellow → magenta ──── */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
          background: 'linear-gradient(90deg, transparent 0%, #FEE101 30%, #FF0080 70%, transparent 100%)',
        }} />

        {/* ── ambient glows ───────────────────── */}
        <div style={{
          position: 'absolute', top: '-50px', left: '50%',
          transform: 'translateX(-50%)',
          width: '280px', height: '280px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(254, 225, 1,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '40px', right: '-20px',
          width: '160px', height: '160px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 0, 128,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* ── dot pattern ─────────────────────── */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(rgba(254, 225, 1,0.07) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
          maskImage: 'radial-gradient(ellipse 85% 85% at 50% 40%, black 10%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at 50% 40%, black 10%, transparent 80%)',
        }} />

        {/* ── HEADER ROW ──────────────────────── */}
        <div style={{
          width: '100%', display: 'flex',
          justifyContent: 'space-between', alignItems: 'flex-start',
          padding: '22px 26px 0',
          position: 'relative', zIndex: 2,
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '8px',
              letterSpacing: '2.5px', color: 'rgba(254, 225, 1,0.55)',
              textTransform: 'uppercase', marginBottom: '2px',
            }}>
              2:47PM STUDIO
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '7px',
              letterSpacing: '1.5px', color: 'rgba(247, 244, 234,0.25)',
              textTransform: 'uppercase',
            }}>
              GOA, INDIA
            </div>
          </div>
          {/* OCT 2026 badge — matches image's "GOA BEACH" magenta sign */}
          <div style={{
            background: 'rgba(255, 0, 128,0.15)',
            border: '1px solid rgba(255, 0, 128,0.35)',
            borderRadius: '100px',
            padding: '5px 14px',
            fontFamily: 'var(--font-mono)',
            fontSize: '8px', letterSpacing: '1.5px',
            color: '#FF0080', textTransform: 'uppercase',
          }}>
            OCT 2026
          </div>
        </div>

        {/* ── TITLE: HACKER HOUSE + गोवा ───────── */}
        <div style={{
          position: 'relative', marginTop: '16px',
          textAlign: 'center', zIndex: 2,
        }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400, fontSize: '40px',
            letterSpacing: '-1px', color: '#FEE101',
            textTransform: 'uppercase', lineHeight: 0.88,
            textShadow: '0 0 40px rgba(254, 225, 1,0.3)',
          }}>
            HACKER<br />HOUSE
          </h2>
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%) rotate(-6deg)',
            fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '24px',
            color: '#FF0080',
            textShadow: '0 0 20px rgba(255, 0, 128,0.65)',
            letterSpacing: '2px', pointerEvents: 'none', whiteSpace: 'nowrap',
          }}>
            गोवा
          </div>
        </div>

        {/* ── PHOTO ───────────────────────────── */}
        <div style={{ position: 'relative', marginTop: '26px', zIndex: 2, flexShrink: 0 }}>
          {/* gradient ring */}
          <svg width="176" height="176"
            style={{ position: 'absolute', top: '-8px', left: '-8px', pointerEvents: 'none' }}>
            <defs>
              <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#FEE101" />
                <stop offset="50%"  stopColor="#FF0080" />
                <stop offset="100%" stopColor="#FEE101" />
              </linearGradient>
            </defs>
            <circle cx="88" cy="88" r="84"
              fill="none" stroke="url(#ringGrad)"
              strokeWidth="2.5" strokeDasharray="390 528"
              strokeLinecap="round" opacity="0.9"
            />
          </svg>

          {/* photo circle */}
          <div style={{
            width: '160px', height: '160px',
            borderRadius: '50%', overflow: 'hidden',
            background: 'linear-gradient(135deg, #0E8446, #0E8446)',
            border: '3px solid rgba(6, 60, 33,0.9)',
          }}>
            {image ? (
              <img src={image} alt={name || 'Builder'}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transform: `scale(${photoZoom / 100})` }}
              />
            ) : (
              <div style={{
                width: '100%', height: '100%',
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', flexDirection: 'column', gap: '6px',
              }}>
                {/* sun placeholder matching illustration */}
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                  <circle cx="26" cy="30" r="14" fill="rgba(254, 225, 1,0.25)" />
                  {[0,30,60,90,120,150,180,210,240,270,300,330].map((a, i) => (
                    <line key={i}
                      x1="26" y1="8"
                      x2="26" y2="13"
                      stroke="rgba(254, 225, 1,0.3)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      transform={`rotate(${a} 26 26)`}
                    />
                  ))}
                </svg>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '7px',
                  letterSpacing: '1.5px', color: 'rgba(254, 225, 1,0.3)',
                  textTransform: 'uppercase',
                }}>
                  Your Photo
                </span>
              </div>
            )}
          </div>
        </div>

        {/* ── NAME + ROLE ─────────────────────── */}
        <div style={{
          position: 'relative', zIndex: 2,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center',
          marginTop: '22px', width: '100%', padding: '0 26px',
        }}>
          {/* name pill */}
          <div style={{
            background: 'rgba(255,255,255,0.07)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(254, 225, 1,0.18)',
            borderRadius: '100px',
            padding: '10px 30px',
            marginBottom: '13px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(254, 225, 1,0.1)',
            maxWidth: '100%',
          }}>
            <span style={{
              fontFamily: nameFont,
              fontSize: '30px',
              color: '#F7F4EA',
              lineHeight: 1.2,
              whiteSpace: 'nowrap',
              display: 'block',
              textAlign: 'center',
            }}>
              {name || 'Hacker Name'}
            </span>
          </div>

          {/* role with magenta dashes */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
            <div style={{ width: '18px', height: '1.5px', background: 'rgba(255, 0, 128,0.6)', borderRadius: '2px' }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px',
              letterSpacing: '2px', color: 'rgba(247, 244, 234,0.6)',
              textTransform: 'uppercase',
            }}>
              {stack || 'Full Stack Developer'}
            </span>
            <div style={{ width: '18px', height: '1.5px', background: 'rgba(255, 0, 128,0.6)', borderRadius: '2px' }} />
          </div>
        </div>

        {/* ── DIVIDER ─────────────────────────── */}
        <div style={{
          width: 'calc(100% - 52px)',
          height: '1px',
          margin: '20px 0 0',
          background: 'linear-gradient(90deg, transparent, rgba(254, 225, 1,0.2) 50%, transparent)',
          zIndex: 2, flexShrink: 0,
        }} />

        {/* ── FOOTER ──────────────────────────── */}
        <div style={{
          width: '100%',
          padding: '14px 26px 22px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          zIndex: 2, marginTop: 'auto',
        }}>
          {/* builder ID */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '7px',
              letterSpacing: '2px', color: 'rgba(254, 225, 1,0.4)',
              textTransform: 'uppercase', marginBottom: '6px',
            }}>
              Builder ID
            </div>
            <div style={{
              background: 'rgba(254, 225, 1,0.1)',
              border: '1px solid rgba(254, 225, 1,0.28)',
              borderRadius: '100px',
              padding: '5px 14px',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px', fontWeight: 700,
              color: '#FEE101', letterSpacing: '1.5px',
            }}>
              {builderId}
            </div>
          </div>

          {/* GOA HACKER badge — magenta like the sign in the illustration */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(255, 0, 128,0.28), rgba(255, 0, 128,0.14))',
            border: '1px solid rgba(255, 0, 128,0.45)',
            borderRadius: '100px',
            padding: '8px 18px',
            backdropFilter: 'blur(8px)',
          }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px', fontWeight: 700,
              letterSpacing: '1.5px', color: '#FF0080',
              textTransform: 'uppercase',
            }}>
              {tag}
            </span>
          </div>
        </div>

        {/* bottom fade */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '70px',
          background: 'linear-gradient(to top, rgba(6, 60, 33,0.6), transparent)',
          pointerEvents: 'none', borderRadius: '0 0 28px 28px',
        }} />
      </div>
    );
  }
);

IDCard.displayName = 'IDCard';
