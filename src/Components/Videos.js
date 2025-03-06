import React from 'react';

export default function Videos({ videos, className }) {
  return (
    <div className={`w-full h-0 relative ${className}`}>
      <iframe
        src={videos}
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
    </div>
  );
}