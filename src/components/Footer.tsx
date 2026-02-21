export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-dark">
      <div className="container mx-auto px-6 flex flex-col md:row justify-between items-center gap-8">
        <div className="text-sm font-bold tracking-tighter flex items-center gap-2">
          <div className="w-6 h-6 bg-accent rounded-sm flex items-center justify-center text-dark font-black text-[10px]">E</div>
          <span>ELITE PLUMBING SOLUTIONS</span>
        </div>
        
        <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50">
          © {new Date().getFullYear()} Elite Plumbing Solutions. All Rights Reserved.
        </div>

        <div className="flex gap-6 text-[10px] font-bold tracking-[0.2em] uppercase text-white/70">
          <a href="#" className="hover:text-accent transition-colors focus:outline-none focus-visible:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-sm">Privacy Policy</a>
          <a href="#" className="hover:text-accent transition-colors focus:outline-none focus-visible:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-sm">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
