import { getTranslations } from 'next-intl/server';
import { BackgroundVideo } from './shared/background-video';

export default async function HeroVideo({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'Index.heroVideo' });

  return (
    <section id='hero' className="relative h-screen w-full overflow-hidden">
      <video
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
        className="object-cover"
      >
        <source src="/video/video.mp4" type="video/mp4" />
      </video>


      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-4xl text-4xl font-bold uppercase tracking-[0.15em] text-white sm:text-6xl">
          {t('title')}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/80">
          {t('content')}
        </p>
      </div>
    </section>
  );
}