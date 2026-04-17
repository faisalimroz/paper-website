import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { ArrowUpRight } from 'lucide-react';
import { Product } from '@/app/types/product';
import { Link } from '@/navigation';



export default function ProductBanner({ product }: { product: Product }) {
  // We use the slug to look up the correct translation keys
  const t = useTranslations(`Products.${product.slug}`);

  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-[#0a1219] border-t border-white/5">
      {/* Background Image */}
      <Image
        src={product.imageBanner}
        alt={t('title')}
        fill
        className="object-cover opacity-50 transition-transform duration-1000 hover:scale-105"
      />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 w-full">
          <div className="max-w-2xl space-y-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#f68b1f]">
              Featured Product
            </span>
            
            <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tighter uppercase">
              {t('title')}
            </h2>
            
            <p className="text-white/60 text-lg font-light leading-relaxed max-w-md">
              {t('description')}
            </p>

            {/* CLICK ACTION: This button goes to /en/products/[slug] */}
            <Link
              href={`/products/${product.slug}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#f68b1f] text-white font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all group"
            >
              {t('explore')}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}