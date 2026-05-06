// app/maintenance/page.tsx  or  as a component
export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-[#0a1219] flex items-center justify-center px-6 w-full">
      <div className="max-w-md text-center">
        

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          We'll Be Back Soon
        </h1>

        <p className="text-xl text-white/70 mb-8 text-yellow-300">
          Our website is currently under scheduled maintenance. 
          We're working hard to bring you an even better experience.
        </p>

        <p className="text-white/50 mb-10">
          Thank you for your patience. <br />
          We expect to be back shortly.
        </p>

      
      </div>
    </div>
  );
}