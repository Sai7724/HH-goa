import React from 'react';
import { Download, Share2 } from 'lucide-react';
import html2canvas from 'html2canvas';

interface ActionButtonsProps {
  targetRef: React.RefObject<HTMLDivElement>;
  format: 'A' | 'B';
}

export function ActionButtons({ targetRef, format }: ActionButtonsProps) {
  const handleDownload = async () => {
    if (!targetRef.current) return;
    
    try {
      const canvas = await html2canvas(targetRef.current, {
        useCORS: true,
        scale: 2, // Higher quality
        backgroundColor: '#000000',
      });
      
      const image = canvas.toDataURL('image/png', 1.0);
      const link = document.createElement('a');
      link.download = `hh-goa-2026-${format === 'A' ? 'frame' : 'id'}.png`;
      link.href = image;
      link.click();
    } catch (error) {
      console.error('Error generating image:', error);
      alert('Failed to generate image. Please try again.');
    }
  };

  const handleShare = async () => {
    // We trigger download first because web intent doesn't support direct image attachment
    await handleDownload();
    
    const text = encodeURIComponent("I'm ready for HH Goa 2026. Less Noise. More Signal. \n\nGet yours here: https://hhgoa-id.vercel.app/ \n\n#FrameInGoa @247pmstudio");
    const intentUrl = `https://twitter.com/intent/tweet?text=${text}`;
    
    // Slight delay to ensure download starts before opening new tab
    setTimeout(() => {
      window.open(intentUrl, '_blank');
      alert("Your image has been downloaded! Don't forget to attach it to your tweet.");
    }, 500);
  };

  return (
    <div style={{ display: 'flex', gap: '16px', marginTop: '24px', flexWrap: 'wrap' }}>
      <button className="brutalist-button" onClick={handleDownload} style={{ flex: 1 }}>
        <Download size={20} />
        DOWNLOAD
      </button>
      <button className="brutalist-button secondary" onClick={handleShare} style={{ flex: 1 }}>
        <Share2 size={20} />
        SHARE TO X
      </button>
    </div>
  );
}
