import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'VÉLOURA Beauty On Demand';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#fef2f4', // Light Pinkish White from brand
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          border: '12px solid #fb5185', // Brand Primary Pink
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', marginBottom: '30px' }}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/studio-8096841563-8bcb9.firebasestorage.app/o/Veloura%20NEw%20Logo.png?alt=media&token=e5b06483-4af8-4051-a21d-704398c3966c"
            alt="VÉLOURA Logo"
            width="220"
            height="220"
          />
        </div>
        <div
          style={{
            fontSize: 70,
            fontWeight: 'bold',
            color: '#734c26', // Brand Brown
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            marginBottom: '15px',
          }}
        >
          Beauty On Demand
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#8c6b4f', // Muted Brown
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: 1.4,
          }}
        >
          Book licensed beauty professionals at your home, hotel, office or event.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
