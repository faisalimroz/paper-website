import { getTranslations } from 'next-intl/server';
import { Target, Zap, ShieldAlert, Cpu } from "lucide-react";
import Image from 'next/image'; 

export default async function OverviewSection({ locale }: { locale: string }) {
    const t = await getTranslations({ locale, namespace: 'Index.overview' });
    const operationsData = [
        {
            icon: <Target />,
            title: t('tech.stage1.title'),
            text: t('tech.stage1.details')
        },
        {
            icon: <Cpu />,
            title: t('tech.stage2.title'),
            text: t('tech.stage2.details')
        },
        {
            icon: <ShieldAlert />,
            title: t('tech.stage3.title'),
            text: t('tech.stage3.details')
        },
        {
            icon: <Zap />,
            title: t('tech.stage4.title'),
            text: t('tech.stage4.details')
        },
    ];
const overviewImageSrc = locale === 'ko' ? '/product/abc.webp' : '/product/abcd.png';

    return (
        <section id='overview' className="w-full bg-[#0a1219] py-12 lg:py-24 border-t border-white/5 overflow-hidden">
            <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-6 lg:mb-12">
                    <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-[#f68b1f] mb-6 opacity-80">
                        {t('badge')}
                    </span>
                    <h2 className="max-w-4xl text-xl md:text-4xl font-bold text-white uppercase tracking-tight leading-[1.1]">
                        {t('title')}
                    </h2>
                    <p className="mt-8 max-w-2xl text-lg text-white/50 font-light leading-relaxed">
                        {t('description')}
                    </p>
                    <div className="mt-12 h-[1px] w-32 bg-gradient-to-r from-transparent via-[#f68b1f] to-transparent shadow-[0_0_20px_rgba(246,139,31,0.5)]" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

           
                    <div className="lg:col-span-6 space-y-12">
                        <div className="relative">
                            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">
                                {t('tech.platform')}
                            </h3>
                        
                            <div className="absolute -left-6 top-0 h-full w-[2px] bg-[#f68b1f]/20 hidden lg:block" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                            {operationsData.map((op, index) => (
                                <div key={index} className="group relative p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/[0.08] transition-all duration-300 cursor-pointer">
                                    <div className="mb-4 h-10 w-10 flex items-center justify-center rounded-lg bg-[#f68b1f]/10 text-[#f68b1f] group-hover:scale-110 transition-transform">
                                        {op.icon}
                                    </div>
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">{op.title}</h4>
                                    <p className="text-[13px] leading-relaxed text-white/50 group-hover:text-white/70">{op.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                   
                    <div className="lg:col-span-6 flex items-center justify-center">
                        <div className="relative w-full max-w-[650px] aspect-square lg:aspect-auto lg:h-[550px] flex items-center justify-center">
                            <Image
                        src={overviewImageSrc}
                                alt="Integrated Anti-Drone Defense System"
                                
                                fill
                                className="object-contain"
                                priority
                            />
                            <div className="absolute -top-4 -right-4 w-12 h-12 border-t border-r border-[#f68b1f] rounded-tr-3xl" />
                            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b border-l border-[#f68b1f] rounded-bl-3xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}