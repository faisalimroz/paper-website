'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import ProductImageGallery from './product-card'; 

// Added slug to props to handle the category navigation
export default function ProductContent({ componentList, productTitle, mainTitle, currentSlug }: any) {
  const t = useTranslations('Products');
  const [activeIndex, setActiveIndex] = useState(0);
  const activeData = componentList[activeIndex];

  // List of slugs for the bottom navigation
  const SLUGS = [
    'detection-identification-equipment',
    'neutralization-equipment',
    'spoofing-equipment',
    'agricultural-drone',
    'interceptor-drone',
    'drone-docking-station'
  ];

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: Your Existing Layout (Untouched) */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-5 border-r border-white/5 bg-black/20">
          <ProductImageGallery
            components={componentList}
            productTitle={productTitle}
            onHover={(index) => setActiveIndex(index)}
          />
        </div>
        <div className="lg:col-span-7 p-8 lg:p-16 space-y-10">
          <div>
            <h2 className="text-3xl font-black text-white tracking-tight mb-2 uppercase">
              {activeData.title}
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#f68b1f] to-transparent" />
          </div>
          <div className="grid grid-cols-1 min-h-[300px]">
            {activeData && (
              <div key={activeIndex} className="animate-in fade-in slide-in-from-right-4 duration-500">
                {activeData.layout === 'table' ? (
                  <div className="overflow-hidden border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                    <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-[#f68b1f]/10 border-b border-white/10 sticky top-0 z-10 backdrop-blur-md">
                            <th className="p-4 text-[#f68b1f] font-mono text-[10px] uppercase tracking-[0.2em]">Parameter</th>
                            <th className="p-4 text-[#f68b1f] font-mono text-[10px] uppercase tracking-[0.2em]">Specification</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {activeData.tableData?.map((row: any, i: number) => (
                            <tr key={i} className="hover:bg-white/[0.03] transition-colors group">
                              <td className="p-4 text-white/40 text-xs font-medium uppercase tracking-wider group-hover:text-white/60 transition-colors">
                                {row.feature}
                              </td>
                              <td className="p-4 text-white text-sm font-bold tracking-tight">
                                {row.value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  <div className="group p-8 bg-white/5 border border-[#f68b1f]/20 rounded-3xl">
                    <div className="space-y-4">
                      {(activeData.details ?? "")
                        .split(/\.(?!\d)/)
                        .filter((sentence: string) => sentence.trim().length > 0)
                        .map((line: string, i: number) => (
                          <div key={i} className="flex items-start gap-3 group/line">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#f68b1f] shadow-[0_0_8px_#f68b1f]" />
                            <p className="text-sm md:text-base text-white/80 leading-relaxed font-medium break-keep">
                              {line.trim()}.
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* SECTION 2: New Bottom Navigation Cards */}
      <div className="p-8 lg:p-16 bg-[#081521] border-t border-white/10">
        <h3 className="text-[#f68b1f] font-mono text-[10px] uppercase tracking-[0.4em] mb-10"> </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
         {SLUGS.filter((slug) => slug !== currentSlug).map((slug) => {
            const isActive = slug === currentSlug;
            return (
              <Link
                key={slug}
                href={`/products/${slug}`}
                className={`group flex flex-col justify-between p-6 rounded-2xl border transition-all duration-500 min-h-[140px]
                  ${isActive 
                    ? 'bg-[#f68b1f] border-[#f68b1f] pointer-events-none' 
                    : 'bg-white/5 border-white/10 hover:border-[#f68b1f]/50 hover:bg-white/[0.08]'
                  }`}
              >
                <div className="space-y-3">
                  <div className={`w-6 h-[2px] transition-all duration-500 ${isActive ? 'bg-black' : 'bg-[#f68b1f] group-hover:w-12'}`} />
                  <h4 className={`text-md font-black 
                    ${isActive ? 'text-black' : 'text-white'}
                  `}>
                    {t(`${slug}.title`)}
                  </h4>
                </div>
                <div className="flex items-center justify-end">
                  <ChevronRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isActive ? 'text-black' : 'text-[#f68b1f]'}`} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}