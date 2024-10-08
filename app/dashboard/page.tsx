import Image from 'next/image';
import React from 'react';

export default function Page() {
  return (
    <div className="">
      <Image
        src="/image.jpeg"
        width={1000}   // Aspect ratio width
        height={300} 
       // Aspect ratio height
          // Automatically adjusts width and height based on container
        alt="Your image description"
      />
    </div>
  );
}
