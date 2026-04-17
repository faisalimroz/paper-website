
import { setRequestLocale } from 'next-intl/server';


export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ko' }
  ];
}

export default async function IndexPage({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  const { locale } = await params;

  // 2. REQUIRED for next-intl static rendering
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-[#0a1219] text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-black italic uppercase tracking-tighter mb-4">
          {locale === 'ko' ? '드론 솔루션' : 'Drone Solutions'}
        </h1>
        <p className="text-white/50 font-mono text-sm uppercase tracking-[0.3em]">
          {locale === 'ko' ? '차세대 공중 방어 체계' : 'Next-Gen Aerial Defense'}
        </p>
      </div>
    </main>
  );
}