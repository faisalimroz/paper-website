import Hero from '@/app/component/about/Hero';
import Leadership from '@/app/component/about/Leadership';
import MissionVision from '@/app/component/about/mission';
import TechnicalEvolution from '@/app/component/about/TechnicalEvolution';
import { getTranslations } from 'next-intl/server';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; 
  const t = await getTranslations({ locale, namespace: 'About' });
  return (
    <div className="flex flex-col w-full">
       <Hero params={params} />
       <MissionVision params={params}  />
       <TechnicalEvolution params={params}  />
       <Leadership params={params}  />
    </div>
  );
}