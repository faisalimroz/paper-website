'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/navigation'; 
import { useTranslations } from 'next-intl';

interface RelatedProductsProps {
  currentSlug?: string;
}

const SLUGS = [
  'detection-identification-equipment',
  'neutralization-equipment',
  'spoofing-equipment',
  'agricultural-drone',
  'interceptor-drone',
];

export default function RelatedProducts({ currentSlug }: RelatedProductsProps) {
  const t = useTranslations('Products');

  return (
    <section className="bg-[#081521] py-24 px-6 lg:px-12 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#f68b1f]" />
            <span className="text-[#f68b1f] font-mono text-[10px] uppercase tracking-[0.4em]">
              Product Lineup
            </span>
          </div>
          <h3 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter">
            Explore More <br /> Solutions
          </h3>
        </div>

        {/* Grid Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SLUGS.map((slug) => {
            const isActive = slug === currentSlug;
            
            return (
              <Link
                key={slug}
                href={`/products/${slug}`}
                className={`group relative overflow-hidden rounded-2xl border p-8 transition-all duration-500
                  ${isActive 
                    ? 'border-[#f68b1f] bg-[#f68b1f]/5 pointer-events-none' 
                    : 'border-white/10 bg-white/5 hover:border-[#f68b1f]/50 hover:bg-white/[0.08]'
                  }`}
              >
                <div className="relative z-10 flex flex-col h-full justify-between min-h-[140px]">
                  <div className="space-y-3">
                    {/* Tactical line that expands on hover */}
                    <div className={`h-[2px] transition-all duration-500 ${isActive ? 'w-16 bg-[#f68b1f]' : 'w-6 bg-white/20 group-hover:w-16 group-hover:bg-[#f68b1f]'}`} />
                    
                    <h4 className={`text-xl lg:text-2xl font-bold uppercase tracking-wider leading-tight ${isActive ? 'text-[#f68b1f]' : 'text-white'}`}>
                      {t(`${slug}.title`)}
                    </h4>
                  </div>

                  {/* Hover Action Label */}
                  <div className={`flex items-center gap-2 text-[#f68b1f] font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-500 
                    ${isActive ? 'opacity-100' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}`}>
                    <span>{isActive ? 'Current Category' : 'View Details'}</span>
                    {!isActive && <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />}
                  </div>
                </div>

                {/* Subtle Geometric Background Accent */}
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                   <div className="w-24 h-24 border border-white rotate-45 translate-x-12 -translate-y-12" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}