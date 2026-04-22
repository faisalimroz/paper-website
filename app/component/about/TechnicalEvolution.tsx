import React from 'react';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

const TechnicalEvolution = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Evolution' });
  const timeline = t.raw('timeline');

  return (
  <section className="w-full max-w-7xl mx-auto  py-24 bg-white overflow-visible">
  <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-end">
    <div className="z-20 w-full lg:w-[38%] lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2">
      <div className="bg-gray p-8 md:p-12 shadow-[20px_20px_60px_rgba(0,0,0,0.08)] rounded-lg border border-gray-50/50">
        <h2 className="text-[32px] font-bold text-blacky mb-14 leading-[1.2] max-w-[300px]">
          {t('title')}
        </h2>

        <div className="space-y-6">
          {timeline.map((item: any, index: number) => (
            <div key={index} className="flex gap-8 items-start">
              <span className="text-blue font-bold text-xl leading-none">
                {item.year}
              </span>
              <div>
                <h3 className="font-extrabold text-blacky mb-2 tracking-widest text-[11px]">
                  {item.label}
                </h3>
                <p className="text-[#3F484D] text-[13px] leading-relaxed max-w-[280px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="relative w-full lg:w-[55%] z-10 mt-12 lg:mt-0">
      <div className="relative aspect-[16/12] w-full overflow-hidden grayscale">
        <Image
          src="/about/hello.png" 
          alt="Industrial Precision"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Your Green Quote Box would go here */}
      <div className="absolute -bottom-10 -left-5 md:-left-10 z-30 bg-[#2B5800] p-8 md:p-12 w-[60%] shadow-2xl">
         <p className="text-white text-lg font-medium">
           &ldquo;{t('quote')}&rdquo;
         </p>
      </div>
    </div>

  </div>
</section>
  );
};

export default TechnicalEvolution;