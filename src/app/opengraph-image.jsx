/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const dynamic = 'force-static';
export const alt = 'NARA Studio — desain interior dan furniture custom';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

const heroImage = await readFile(
  join(process.cwd(), 'public/images/hero/hero_interior.jpg'),
  'base64'
);
const heroSrc = `data:image/jpeg;base64,${heroImage}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          background: '#1d211f',
          color: '#f7f4ee',
        }}
      >
        <img
          src={heroSrc}
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'flex',
            width: '58%',
            height: '100%',
            backgroundColor: 'rgba(20, 24, 22, 0.84)',
          }}
        />
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            padding: '64px 72px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '54px',
                height: '54px',
                border: '2px solid #f7f4ee',
                borderRadius: '14px',
                fontSize: '30px',
                fontWeight: 700,
              }}
            >
              N
            </div>
            <div style={{ display: 'flex', fontSize: '25px', fontWeight: 700, letterSpacing: '3px' }}>
              NARA <span style={{ marginLeft: '10px', fontWeight: 400, letterSpacing: '1px' }}>STUDIO</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '540px' }}>
            <div style={{ display: 'flex', marginBottom: '18px', color: '#d4a37e', fontSize: '20px', fontWeight: 700, letterSpacing: '2px' }}>
              INTERIOR DESIGN &amp; CUSTOM FURNITURE
            </div>
            <div style={{ display: 'flex', fontSize: '54px', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-2px' }}>
              Ruang yang dirancang untuk hidup lebih baik.
            </div>
          </div>

          <div style={{ display: 'flex', maxWidth: '500px', fontSize: '20px', color: '#ded9cf', lineHeight: 1.35, letterSpacing: '0.4px' }}>
            Dari konsultasi, desain, hingga instalasi dalam satu proses terpadu.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}