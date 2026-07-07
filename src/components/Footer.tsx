"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[20vh] bg-gradient-to-t from-white/10 to-transparent pointer-events-none blur-3xl" />
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-serif tracking-widest text-[#d9b15c]">The Espresso Media</h2>
            <p className="text-white/60 max-w-sm text-lg font-light">
              Brewing Digital Success
            </p>
            <div className="flex gap-6 mt-4">
               {['Instagram', 'Facebook', 'LinkedIn'].map(social => (
                <a key={social} href="#" className="text-xs tracking-widest uppercase text-white/50 hover:text-white transition-colors hover-target">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <h4 className="text-sm tracking-widest uppercase text-[#d9b15c]">Visit</h4>
            <p className="text-white/80 font-light leading-relaxed">
              The Espresso Media, B906,<br />
              Swati trinity, SP 150ft ring road<br />
              Ahmedabad, 380057
            </p>
          </div>
          
          <div className="flex flex-col gap-6">
            <h4 className="text-sm tracking-widest uppercase text-[#d9b15c]">Connect</h4>
            <div className="flex flex-col gap-4 font-light text-white/80 text-sm md:text-base">
              <p>
                <span className="text-white/40 block text-xs tracking-widest uppercase mb-1">Hire Us</span> 
                <a href="mailto:info@espressomedia.in" className="hover:text-white transition-colors hover-target">info@espressomedia.in</a>
              </p>
              <p>
                <span className="text-white/40 block text-xs tracking-widest uppercase mb-1">Join Us</span> 
                <a href="mailto:career@espressomedia.in" className="hover:text-white transition-colors hover-target">career@espressomedia.in</a>
              </p>
              <p>
                <span className="text-white/40 block text-xs tracking-widest uppercase mb-1">Contact us</span> 
                <a href="tel:+918758117559" className="hover:text-white transition-colors hover-target">+91 87581 17559</a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/10 text-sm text-white/40">
          <p>© {new Date().getFullYear()} The Espresso Media. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
