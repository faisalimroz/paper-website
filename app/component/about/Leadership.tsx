import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { div } from 'framer-motion/client';

const Leadership = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Leadership' });


  const members = t.raw('members');
const TEAM_IMAGES = [
  '/team/sidechicks.png',
  '/team/sidechicks.png',
  '/team/sidechicks.png',
  '/team/sidechicks.png',
];
  return (
  <div className='bg-[#F8F9FF]'>
      <section className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24 ">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-12  pb-4">
        <h2 className="text-4xl md:text-5xl font-bold text-blacky tracking-tight">
          {t('title')}
        </h2>
        <span className="text-xs md:text-sm font-bold text-blacky tracking-[0.1em] mt-4 md:mt-0 uppercase">
          {t('subtitle')}
        </span>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {members.map((member: any, index: number) => (
          <div key={index} className="flex flex-col group">
            {/* Image Container with precise aspect ratio */}
            <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-gray-100">
              <Image
                src={TEAM_IMAGES[index] }
               
                alt={member.name}
                fill
                className="object-cover grayscale transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {member.name}
            </h3>
            <p className="text-[#005B70] font-semibold text-sm mb-2">
              {member.role}
            </p>
            <p className="text-gray text-sm leading-relaxed">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </section>
  </div>
  );
};

export default Leadership;