import React from 'react';

export default function DiagonalTicker() {
  const items = [
    'Web Development',
    'Brand Design',
    'Video Editing',
    'Web Development',
    'Graphics Design',
    'Video Editing',
  ];

  const renderItems = (className = '') => (
    <div className={`diagonal-track ${className}`} aria-hidden>
      {items.map((t, i) => (
        <span key={`${t}-${i}`} className="diagonal-item text-2xl md:text-3xl text-white">
          {t}
        </span>
      ))}
    </div>
  );

  return (
    <div className="diagonal-ticker py-8">
      <div className="relative">
        {/* blurred, slower line */}
        <div className="absolute inset-0 flex items-start justify-start pointer-events-none">
          {renderItems('diagonal-blur')}
        </div>

        {/* clear, faster line on top */}
        <div className="relative flex items-start justify-start">
          {renderItems('diagonal-track--fast')}
        </div>
      </div>
    </div>
  );
}
