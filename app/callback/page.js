'use client';

import { Suspense, useEffect } from 'react';

function OAuthHandler() {
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');

    if (code) {
      console.log('OAuth2 code:', code);
      setTimeout(() => {
        window.location.href = 'https://discord.gg/wQmKyRm5rx';
      }, 3000);
    }
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Authorization Complete</h1>
      <p>Redirecting to our Discord server...</p>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OAuthHandler />
    </Suspense>
  );
}