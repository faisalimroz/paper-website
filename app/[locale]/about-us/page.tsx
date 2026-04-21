import Hero from '@/app/component/about/Hero';
import Leadership from '@/app/component/about/Leadership';
import MissionVision from '@/app/component/about/mission';
import { getTranslations } from 'next-intl/server';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {

  const { locale } = await params; 

  const t = await getTranslations({ locale, namespace: 'About' });

  return (
    <div className="flex flex-col w-full">
       <h1 className='text-4xl text-black'>{t('main_title')}</h1>
       <Hero params={params} />
       <MissionVision params={params}  />
       <Leadership params={params}  />
    </div>
  );
}