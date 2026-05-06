import { getTranslations, setRequestLocale } from 'next-intl/server';
import HeroVideo from '../component/video';
import Hero from '../component/about/Hero';
import MaintenancePage from '../component/about/MaintainancePage';
const locales = ['en', 'ko'];
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
    { id: "hero", component: <Hero locale={locale} /> }
    // { id: "hero", component: <HeroVideo locale={locale} /> },
  ]
  return (
    <main className="flex flex-col items-center bg-white min-h-[calc(100vh-80px)] w-full">
      <MaintenancePage></MaintenancePage>
      {/* {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="w-full scroll-mt-[76px]"
        >
          {section.component}
        </section>
      ))} */}
    </main>
  );
}