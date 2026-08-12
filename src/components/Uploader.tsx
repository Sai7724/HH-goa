import { useCallback, useRef, useState } from 'react';

interface UploaderProps {
  onImageSelect: (imageUrl: string) => void;
  currentImage: string | null;
}

export function Uploader({ onImageSelect, currentImage }: UploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onImageSelect(URL.createObjectURL(file));
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => setIsDragging(false), []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file?.type.startsWith('image/')) onImageSelect(URL.createObjectURL(file));
  }, [onImageSelect]);

  return (
    <div
      onClick={() => fileInputRef.current?.click()}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
        borderRadius: '14px',
        border: `1.5px ${isDragging ? 'solid' : 'dashed'} ${
          isDragging ? 'rgba(254, 225, 1,0.6)' : 'rgba(254, 225, 1,0.18)'
        }`,
        padding: currentImage ? '14px 16px' : '26px 20px',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
        background: isDragging ? 'rgba(254, 225, 1,0.05)' : 'rgba(0,0,0,0.2)',
        boxShadow: isDragging ? '0 0 0 3px rgba(254, 225, 1,0.08)' : 'none',
      }}
    >
      <input
        type="file" ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*,.heic"
        style={{ display: 'none' }}
      />

      {currentImage ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '48px', height: '48px', borderRadius: '50%',
            overflow: 'hidden', flexShrink: 0,
            border: '2px solid rgba(255, 0, 128,0.45)',
            boxShadow: '0 0 14px rgba(255, 0, 128,0.18)',
          }}>
            <img src={currentImage} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '2px' }}>
              Photo ready
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '1.5px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Click to change
            </p>
          </div>
          <div style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: '#4ade80', boxShadow: '0 0 8px rgba(74,222,128,0.7)',
          }} />
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', textAlign: 'center' }}>
          <div style={{
            width: '48px', height: '48px', borderRadius: '14px',
            background: 'rgba(255, 0, 128,0.09)',
            border: '1px solid rgba(255, 0, 128,0.22)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke="rgba(255, 0, 128,0.7)" strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="4" ry="4" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
          <div>
            <p style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '4px' }}>
              Upload Profile Photo
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '1.5px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              JPG · PNG · HEIC · drag or click
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
