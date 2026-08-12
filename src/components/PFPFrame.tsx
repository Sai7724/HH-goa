import React from 'react';

interface PFPFrameProps {
  image: string;
}

export const PFPFrame = React.forwardRef<HTMLDivElement, PFPFrameProps>(({ image }, ref) => {
  return (
    <div 
      ref={ref}
      style={{
        width: '400px',
        height: '400px',
        position: 'relative',
        backgroundColor: 'var(--bg-black)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Background Image */}
      <img 
        src={image} 
        alt="User" 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1
        }}
      />
      
      {/* Brutalist Frame Overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: '12px solid var(--accent-lime)',
          zIndex: 2,
          pointerEvents: 'none',
          boxSizing: 'border-box'
        }}
      />

      {/* Top Banner */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          backgroundColor: 'var(--accent-lime)',
          padding: '8px',
          zIndex: 3,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <span style={{ color: 'var(--bg-black)', fontFamily: 'var(--font-heavy)', fontSize: '20px', lineHeight: 1 }}>HH GOA 2026</span>
        <span style={{ color: 'var(--bg-black)', fontFamily: 'var(--font-display)', fontSize: '12px', fontWeight: 'bold' }}>LESS NOISE. MORE SIGNAL.</span>
      </div>

      {/* Bottom Corner Accent */}
      <div
        style={{
          position: 'absolute',
          bottom: 12,
          right: 12,
          backgroundColor: 'var(--bg-black)',
          padding: '4px 8px',
          zIndex: 3,
          border: '2px solid var(--accent-lime)'
        }}
      >
        <span style={{ color: 'var(--accent-lime)', fontFamily: 'var(--font-heavy)', fontSize: '24px', lineHeight: 1 }}>#FRAMEINGOA</span>
      </div>
      
      {/* Left Corner Accent */}
      <div
        style={{
          position: 'absolute',
          bottom: 12,
          left: 12,
          backgroundColor: 'var(--accent-red)',
          padding: '4px 8px',
          zIndex: 3,
        }}
      >
        <span style={{ color: 'var(--text-white)', fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1 }}>BUILDER</span>
      </div>
    </div>
  );
});

PFPFrame.displayName = 'PFPFrame';
