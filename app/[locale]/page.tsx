import { getTranslations, setRequestLocale } from 'next-intl/server';
import HeroVideo from '../component/video';



// 1. Define the locales you support
const locales = ['en', 'ko'];

// 2. REQUIRED FOR STATIC EXPORT: Tell Next.js to build /en and /ko
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage(props: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: 'Index'
  });

  const sections = [
    { id: "hero", component: <HeroVideo locale={locale} /> },
    
  ]

  return (
    <main className="flex flex-col items-center bg-[#0a1219] min-h-[calc(100vh-80px)] w-full">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="w-full scroll-mt-[76px]"
        >
          {section.component}
        </section>
      ))}
    </main>
  );
}