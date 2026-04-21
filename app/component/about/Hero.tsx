import React from 'react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export default async function Hero({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; 
  const t = await getTranslations({ locale, namespace: 'Heros' });

  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden flex items-center bg-[#FDFDFD]">
      <div 
        className="absolute inset-0 z-0 opacity-60 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/about/about.png')", 
          mixBlendMode: 'multiply'
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headings */}
          <div className="lg:col-span-7 space-y-4">
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-blue opacity-80">
              {t('overline')}
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-blacky leading-[1.1] tracking-tight">
              {t('title')}
            </h1>
          </div>

          {/* Right Column: Description Box */}
          <div className="lg:col-span-5 flex lg:justify-end">
            <div className="relative max-w-sm md:max-w-md bg-blue backdrop-blur-sm p-8 md:p-10 border-l-4 border-[#00556D]">
              <p className="text-sm md:text-base leading-relaxed text-gray font-medium italic">
                {t('description')}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}