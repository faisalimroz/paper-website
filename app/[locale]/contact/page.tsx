import Hero from '@/app/component/about/Hero';
import ContactCTA from '@/app/component/contact/ContactBanner';
import InquiryForm from '@/app/component/contact/inquiry';
import { getTranslations } from 'next-intl/server';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; 
  const t = await getTranslations({ locale, namespace: 'Contact' });
  return (
    <div className="flex flex-col w-full">
    
     <ContactCTA params={params}  />
     <InquiryForm params={params}  /> 
    </div>
  );
}