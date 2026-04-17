'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronRight, Shield, Search, Zap, Plane, Leaf,Drone } from 'lucide-react';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export default function SoftwareSection() {
  const t = useTranslations('Products');
  
  const dronelist = [
    { id: 'detection-identification-equipment', icon: Drone },
    { id: 'neutralization-equipment', icon: Drone },
    { id: 'spoofing-equipment', icon: Drone },
    { id: 'agricultural-drone', icon: Drone },
    { id: 'drone-docking-station', icon: Drone },
    { id: 'interceptor-drone', icon: Drone },
  ];
  const leftItems = dronelist.slice(0, 3);
  const rightItems = dronelist.slice(3);

  return (
    <section id="products" className="relative w-full min-h-[700px] xl:min-h-[950px] flex items-center py-20 overflow-hidden bg-[#081521]">  
      <div className="absolute inset-0 z-0">
        <Image
          src="/drone.webp" 
          alt="Background"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081521] via-[#081521]/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT SECTION */}
        <div className="max-w-xl">
       
          <h2 className="text-5xl lg:text-6xl font-black text-white  tracking-tighter mb-8">
            {t('header') || 'Anti Drone'}
          </h2>
         

          <nav className="flex flex-col border-t border-white/10">
            {leftItems.map((item) => (
              <Link
                key={item.id}
                href={`/products/${item.id}`}
                className="group flex items-center justify-between py-5 border-b border-white/10 hover:bg-white/5 transition-all px-4"
              >
                <div className="flex items-center gap-5">
                  <item.icon className="w-5 h-5 text-[#f68b1f]" />
                  <span className="text-sm font-bold text-white uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform">
                    {t(`${item.id}.title`)}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#f68b1f] transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </nav>
        </div>

        {/* RIGHT SECTION */}
        <div className="max-w-xl">
        
          <h2 className="text-5xl lg:text-6xl font-black text-white upprcase tracking-tighter mb-8">
             {t('header2') || 'Drones'}
          </h2>

          <div className="absolute -inset-10 bg-[#f68b1f]/5 blur-[100px] rounded-full pointer-events-none" />
          
          <nav className="flex flex-col border-t border-white/10">
            {rightItems.map((item) => (
              <Link
                key={item.id}
                href={`/products/${item.id}`}
                className="group flex items-center justify-between py-5 border-b border-white/10 hover:bg-white/5 transition-all px-4"
              >
                <div className="flex items-center gap-5">
                  <item.icon className="w-5 h-5 text-[#f68b1f]" />
                  <span className="text-sm font-bold text-white uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform">
                    {t(`${item.id}.title`)}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  
                  <ChevronRight className="w-5 h-5 text-[#f68b1f]" />
                </div>
              </Link>
            ))}
          </nav>
        </div>

      </div>
    </section>
  );
}