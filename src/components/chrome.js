import React from 'react';
import { Image } from 'spectacle';
import img from 'img';

export const Chrome = ({ src, url = 'http://localhost:8080' }) => (
  <div style={{ color: '#212121' }} className="relative">
    <div
      style={{
        left: '6.5rem',
        top: '1.1rem',
      }}
      className="absolute f5"
    >
      {url}
    </div>
    <Image src={img.chrome} className="w-100" margin="0" />
    <Image src={src} className="w-100" margin="-0.38rem 0 0 0" />
  </div>
);
