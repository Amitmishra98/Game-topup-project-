import React from 'react';
import { Hexagon, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-card border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-3 mb-6">
                <div className="relative flex items-center justify-center">
                  <Hexagon className="h-8 w-8 text-amber-500 fill-amber-500/10 stroke-[2.5]" />
                  <span className="absolute text-[10px] font-black text-amber-500 tracking-tighter -rotate-3">GR</span>
                </div>
                <div className="flex flex-col -space-y-1">
                  <div className="flex items-baseline">
                    <span className="text-xl font-display font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
                      GAMES
                    </span>
                    <span className="text-xl font-display font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 ml-1">
                      RELOAD
                    </span>
                  </div>
                </div>
             </div>
             <p className="text-slate-400 text-sm leading-relaxed mb-6">
               The world's leading destination for game top-ups. trusted by millions of gamers for instant delivery and secure payments.
             </p>
             <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="text-slate-400 hover:text-brand-500 transition-colors">
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
             </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Games</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vouchers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Secure Payment</h3>
            <div className="grid grid-cols-3 gap-2">
               <div className="bg-white/10 h-8 rounded flex items-center justify-center text-[10px] text-white font-bold">VISA</div>
               <div className="bg-white/10 h-8 rounded flex items-center justify-center text-[10px] text-white font-bold">MC</div>
               <div className="bg-white/10 h-8 rounded flex items-center justify-center text-[10px] text-white font-bold">PAYPAL</div>
               <div className="bg-white/10 h-8 rounded flex items-center justify-center text-[10px] text-white font-bold">GPAY</div>
               <div className="bg-white/10 h-8 rounded flex items-center justify-center text-[10px] text-white font-bold">BTC</div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} GameReload.shop. All rights reserved. Not affiliated with game publishers.
          </p>
        </div>
      </div>
    </footer>
  );
};