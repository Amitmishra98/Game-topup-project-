import React from 'react';
import { GAMES } from '../components/constants';
import { GameCard } from '../components/GameCard';
import { ShieldCheck, Zap, Headphones } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="pb-20">
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/gaming-hero/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent" />
          <div className="absolute inset-0 bg-brand-900/20 mix-blend-overlay" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight drop-shadow-xl">
            LEVEL UP YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-500">GAME</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            The fastest and most secure way to top up your favorite games. 
            Instant delivery for Free Fire, PUBG, Genshin Impact, and more.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#games" className="px-8 py-3.5 bg-brand-600 hover:bg-brand-500 text-white rounded-lg font-bold text-lg shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all transform hover:scale-105">
              Start Top Up
            </a>
            <button className="px-8 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/10 rounded-lg font-bold text-lg transition-all">
              View Promotions
            </button>
          </div>
        </div>
      </section>

      {/* Stats/Features Banner */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-dark-card/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl">
          <div className="flex items-center gap-4 p-4">
             <div className="bg-brand-500/10 p-3 rounded-xl text-brand-500">
               <Zap className="h-6 w-6" />
             </div>
             <div>
               <h3 className="text-white font-bold">Instant Delivery</h3>
               <p className="text-slate-400 text-sm">Credits added in seconds</p>
             </div>
          </div>
          <div className="flex items-center gap-4 p-4 md:border-l border-white/5">
             <div className="bg-brand-500/10 p-3 rounded-xl text-brand-500">
               <ShieldCheck className="h-6 w-6" />
             </div>
             <div>
               <h3 className="text-white font-bold">100% Secure</h3>
               <p className="text-slate-400 text-sm">Official distributor</p>
             </div>
          </div>
          <div className="flex items-center gap-4 p-4 md:border-l border-white/5">
             <div className="bg-brand-500/10 p-3 rounded-xl text-brand-500">
               <Headphones className="h-6 w-6" />
             </div>
             <div>
               <h3 className="text-white font-bold">24/7 Support</h3>
               <p className="text-slate-400 text-sm">Always here to help</p>
             </div>
          </div>
        </div>
      </div>

      {/* Games Grid */}
      <section id="games" className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-2">Popular Games</h2>
            <p className="text-slate-400">Select a game to start your top-up</p>
          </div>
          <a href="#" className="hidden sm:block text-brand-500 hover:text-brand-400 font-medium">View All Games &rarr;</a>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {GAMES.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
         <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-purple-900 to-brand-900 p-8 md:p-12 flex items-center justify-between">
            <div className="relative z-10 max-w-xl">
               <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded uppercase tracking-wider mb-4 inline-block">Special Offer</span>
               <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Get 20% Bonus Diamonds on Free Fire!</h2>
               <p className="text-white/80 mb-8">Limited time offer for all reload denominations above $10.</p>
               <button className="bg-white text-brand-900 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors">
                  Claim Now
               </button>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-black/20 to-transparent pointer-events-none"></div>
            {/* Abstract decorative circles */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand-500/30 rounded-full blur-3xl"></div>
            <div className="absolute right-40 -bottom-20 w-60 h-60 bg-purple-500/30 rounded-full blur-3xl"></div>
         </div>
      </section>
    </div>
  );
};