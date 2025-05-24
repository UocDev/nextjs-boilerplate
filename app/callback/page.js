'use client';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function CallbackPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    if (code) {
      console.log('OAuth2 code:', code);

      // Example: send code to your API or backend here

      setTimeout(() => {
        window.location.href = 'https://discord.gg/wQmKyRm5rx';
      }, 3000);
    }
  }, [code]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Authorization Complete</h1>
      <p>Redirecting to our Discord server...</p>
    </div>
  );
    }
