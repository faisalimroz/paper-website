import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="en">
      <body className="bg-[#0a1219] text-white">
        <div className="flex flex-col items-center justify-center min-h-screen px-6">
          <div className="relative mb-12">
            <h1 className="text-[120px] md:text-[280px]  font-black text-white/5 leading-none select-none">
              404
            </h1>  b 
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-[#f68b1f]">
                Page Not Found
              </h2>
            </div>
          </div>

          <p className="text-slate-400 text-center max-w-md mb-12 text-lg">
            The Page you are looking for does not exist.
          </p>

          <Link 
            href="/en"
            className="group relative px-10 py-4 bg-white text-black font-black uppercase tracking-[0.15em] 
                       transition-all duration-300 hover:bg-[#f68b1f] hover:text-white rounded-xl overflow-hidden"
          >
            <span className="relative z-10">Return Home</span>
            <div className="absolute inset-0 bg-[#f68b1f] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </Link>
        </div>
      </body>
    </html>
  );
}

 