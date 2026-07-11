'use client';

import Script from 'next/script';

export function GhostSignupForm() {
  return (
    <div 
      className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl my-16 border border-white/10" 
      style={{ height: '40vmin', minHeight: '360px' }}
    >
      <Script 
        src="https://cdn.jsdelivr.net/ghost/signup-form@~0.3/umd/signup-form.min.js"
        data-background-color="#08090c"
        data-text-color="#FFFFFF"
        data-button-color="#FF1A75"
        data-button-text-color="#FFFFFF"
        data-title="Veloura Beauty On Demand"
        data-description="Thoughts, stories and ideas."
        data-site="https://blog.velourabeautyondemand.com/"
        data-locale="en"
        strategy="lazyOnload"
      />
    </div>
  );
}
