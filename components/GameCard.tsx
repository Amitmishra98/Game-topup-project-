import React from 'react';
import { Link } from 'react-router-dom';
import { Game } from '../types';
import { Zap } from 'lucide-react';

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Link to={`/topup/${game.id}`} className="group relative block bg-dark-card rounded-2xl overflow-hidden border border-white/5 hover:border-brand-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent z-10 opacity-80" />
        <img 
          src={game.image} 
          alt={game.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Floating Publisher Tag */}
        <div className="absolute top-3 left-3 z-20 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-xs font-semibold text-white/90 border border-white/10">
          {game.publisher}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 relative z-20">
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-500 transition-colors">
          {game.name}
        </h3>
        <p className="text-sm text-slate-400 mb-4">
          Instant {game.currencyName} Top-up
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center text-xs text-green-400 font-medium">
             <Zap className="h-3 w-3 mr-1 fill-current" />
             Instant Delivery
          </div>
          <span className="text-brand-500 font-semibold text-sm group-hover:underline">
            Top Up &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
};