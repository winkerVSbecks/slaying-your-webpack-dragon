import React from 'react';
import { Image } from 'spectacle';
import img from 'img';

export const Chrome = ({ src }) => (
  <div>
    <Image src={img.chrome} className="w-100" margin="0" />
    <Image src={src} className="w-100" margin="-0.38rem 0 0 0" />
  </div>
);
