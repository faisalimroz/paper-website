import React from 'react';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

const ContactCTA = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Contact' });

  return (
    <section className="w-full max-w-7xl mx-auto  py-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 px-6">
        
        {/* Left Side: Text Content */}
        <div className="max-w-xl">
          <h2 className="text-5xl md:text-6xl font-bold text-dark-gray leading-tight mb-8">
            {t('title')} <br />
            <span className="text-[#006688]">{t('highlight')}</span>
          </h2>
          <p className="text-gray text-lg leading-relaxed md:pr-10">
            {t('description')}
          </p>
        </div>

        {/* Right Side: Image with Overlapping Green Box */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative aspect-[16/10] w-full overflow-hidden  shadow-sm">
            <Image
              src="/contact/ab.png" // Ensure this is in your public folder
              alt="Laboratory Facility"
              fill
              className="object-cover"
            />
          </div>

          {/* Overlapping Eco-Initiative Box */}
          <div className="absolute -bottom-6 -left-6 md:-left-10 bg-green p-6 md:p-8 w-[240px] md:w-[280px] rounded-sm shadow-lg z-10">
            <h4 className="text-[10px] font-bold text-[#307024] tracking-widest uppercase mb-3">
              {t('ecoTitle')}
            </h4>
            <p className="text-[#307024] text-sm font-medium leading-relaxed">
              {t('ecoDesc')}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactCTA;