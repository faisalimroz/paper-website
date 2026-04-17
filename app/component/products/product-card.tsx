'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ComponentItem {
  image: string;
  title: string;
}

export default function ProductImageGallery({ 
  components, 
  productTitle,
  onHover // Added prop
}: { 
  components: ComponentItem[], 
  productTitle: string,
  onHover: (index: number) => void // Callback function
}) {
  const [activeImage, setActiveImage] = useState(components[0].image);

  const handleInteraction = (index: number, image: string) => {
    setActiveImage(image);
    onHover(index);
  };

  return (
    <div className="flex flex-col gap-6 p-8 lg:p-12 bg-black/20 h-full justify-center">
      <div className="relative aspect-square w-full max-w-[400px] mx-auto group">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#f68b1f_1px,transparent_1px)] [background-size:20px_20px]" />
        <Image
          src={activeImage}
          alt={productTitle}
          fill
          priority
          className="object-contain transition-all duration-500 ease-in-out"
        />
      </div>

      <div className="flex justify-center gap-4 mt-4">
        {components.map((comp, idx) => (
          <button
            key={idx}
            onMouseEnter={() => handleInteraction(idx, comp.image)}
            className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
              activeImage === comp.image 
              ? 'border-[#f68b1f] bg-[#f68b1f]/10' 
              : 'border-white/10 bg-white/5'
            }`}
          >
            <Image src={comp.image} alt={comp.title} fill className="object-contain p-2" />
          </button>
        ))}
      </div>
    </div>
  );
}