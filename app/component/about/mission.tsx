import React from 'react';
import { Target, Eye } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

const MissionVision = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params; 
  const t = await getTranslations({ locale, namespace: 'Heros' });

  return (
    <section className="w-full max-w-7xl mx-auto  bg-white py-12 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden rounded-lg  min-h-[450px]">
        <div className="md:col-span-2 bg-gray p-10 md:p-16 flex flex-col justify-between ">
          <div>
            <Target className="w-8 h-8 text-[#005B70] mb-8" />
            <h2 className="text-4xl font-bold text-blacky mb-6">
              {t('mission.title')}
            </h2>
            <p className="text-gray leading-relaxed text-lg max-w-2xl">
              {t('mission.description')} 
            </p>
          </div>
          <div className="mt-16 text-[10px] text-gray uppercase tracking-widest font-bold">
            {t('mission.footer')}
          </div>
        </div>


        <div className="md:col-span-1 bg-[#005B70] p-10 md:p-12 flex flex-col text-white justify-center">
          <h2 className="text-4xl font-bold mb-4">
            {t('vision.title')}
          </h2>
          <p className="text-teal-50/90 leading-relaxed text-lg">
            {t('vision.description')}
          </p>
          
        </div>

      </div>
    </section>
  );
};

export default MissionVision;