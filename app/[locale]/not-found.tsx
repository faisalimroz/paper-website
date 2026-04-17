// app/[locale]/not-found.tsx

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a1219] text-white px-6">
      <div className="relative mb-12">
        <h1 className="text-[120px] md:text-[180px] font-black text-white/5 leading-none select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-[0.1em] text-[#f68b1f]">
            You Can go Back Home
          </h2>
        </div>
      </div>

      <Link 
        href="/en"
        className="group relative px-10 py-4 bg-white text-black font-black uppercase tracking-[0.15em] 
                   transition-all duration-300 hover:bg-[#f68b1f] hover:text-white rounded-xl overflow-hidden"
      >
        <span className="relative z-10">Go Back</span>
        <div className="absolute inset-0 bg-[#f68b1f] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
      </Link>
    </div>
  );
}