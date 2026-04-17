import { getMessages, getTranslations } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import Image from 'next/image';
import ProductContent from '@/app/component/products/product-interactive-content';


export const dynamic = 'force-static';

const SLUGS = [
  'detection-identification-equipment',
  'neutralization-equipment',
  'spoofing-equipment',
  'agricultural-drone',
  'interceptor-drone',
  'drone-docking-station'
];
export async function generateStaticParams() {
  const locales = ['en', 'ko'];
  return locales.flatMap((locale) =>
    SLUGS.map((slug) => ({ locale, slug }))
  );
}
export default async function ProductDetailsPage({ 
  params 
}: { 
  params: Promise<{ locale: string, slug: string }> 
}) {
  const { locale, slug } = await params;
  const messages = await getMessages({ locale });
  const t = await getTranslations({ locale, namespace: 'Products' });
  const productTitle = t(`${slug}.title`);
  const listKey = `${slug}.component_list`;
  const rawData = t.has(listKey) ? t.raw(listKey) : [];
  const componentList = Array.isArray(rawData) ? rawData : [];
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <main className="bg-[#0a1219] min-h-screen text-white pb-20">
        <section className="relative h-[35vh] w-full flex items-center justify-center overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 opacity-15 grayscale">
            <Image 
              src="/drone.webp" 
              alt="Banner" 
              fill 
              className="object-cover" 
              priority 
            />
          </div>       
          <div className="relative z-10 text-center px-6">         
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter italic">
              {productTitle}
            </h1>
          </div>
        </section>
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 -mt-12 relative z-20">
          <div className="bg-[#0f1a24] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl mb-20">
            <ProductContent
              componentList={componentList} 
              productTitle={productTitle}
              mainTitle={t(`${slug}.main_title`)}
              currentSlug={slug}
            />
          </div>
        </section>
      </main>
    </NextIntlClientProvider>
  );
}