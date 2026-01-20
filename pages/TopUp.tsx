import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GAMES } from '../components/constants';
import { Button } from '../components/Button';
import { TransactionState, PaymentMethod } from '../types';
import { ChevronLeft, Check, AlertCircle, CreditCard, Wallet, Bitcoin, Smartphone, Zap } from 'lucide-react';

export const TopUp: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const game = GAMES.find((g) => g.id === gameId);

  const [playerId, setPlayerId] = useState('');
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod | null>(null);
  const [transaction, setTransaction] = useState<TransactionState>({ status: 'idle' });

  // Reset state when game changes
  useEffect(() => {
    setPlayerId('');
    setSelectedPackage(null);
    setSelectedPayment(null);
    setTransaction({ status: 'idle' });
  }, [gameId]);

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Game not found</h2>
          <Link to="/" className="text-brand-500 hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  const handleBuy = () => {
    if (!playerId || !selectedPackage || !selectedPayment) return;

    setTransaction({ status: 'processing' });

    // Simulate API call
    setTimeout(() => {
      // 90% success rate mock
      const isSuccess = Math.random() > 0.1;
      if (isSuccess) {
        setTransaction({ status: 'success', message: 'Top-up successful! Credits will appear shortly.' });
      } else {
        setTransaction({ status: 'error', message: 'Payment failed. Please try again or contact support.' });
      }
    }, 2000);
  };

  const currentPackage = game.packages.find(p => p.id === selectedPackage);

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white mb-6 transition-colors">
        <ChevronLeft className="h-4 w-4 mr-1" /> Back to Games
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Game Info */}
        <div className="lg:col-span-4 space-y-6">
           <div className="bg-dark-card border border-white/5 rounded-2xl p-6 sticky top-24">
              <img 
                src={game.coverImage} 
                alt={game.name} 
                className="w-full aspect-video object-cover rounded-xl mb-6 shadow-lg"
              />
              <h1 className="text-3xl font-display font-bold text-white mb-2">{game.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                 <span className="bg-brand-500/20 text-brand-400 text-xs px-2 py-1 rounded font-medium">Official Distributor</span>
                 <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded font-medium">Instant</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {game.description}
              </p>
              
              <div className="border-t border-white/10 pt-4">
                <h3 className="text-white font-semibold mb-2 text-sm">How to Top-up?</h3>
                <ol className="list-decimal list-inside text-xs text-slate-500 space-y-1">
                  <li>Enter your {game.inputLabel}.</li>
                  <li>Select the {game.currencyName} package.</li>
                  <li>Choose your payment method.</li>
                  <li>Click "Buy Now" and receive instantly.</li>
                </ol>
              </div>
           </div>
        </div>

        {/* Right Column: Order Form */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Step 1: User ID */}
          <section className="bg-dark-card border border-white/5 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-brand-500 h-8 w-8 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-brand-500/30">1</div>
              <h2 className="text-xl font-bold text-white">Enter Account Info</h2>
            </div>
            
            <div className="max-w-md">
              <label className="block text-sm font-medium text-slate-400 mb-2">
                {game.inputLabel}
              </label>
              <input 
                type="text" 
                value={playerId}
                onChange={(e) => setPlayerId(e.target.value)}
                placeholder={game.placeholder}
                className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder-slate-600"
              />
              <p className="text-xs text-slate-500 mt-2">
                Make sure the ID is correct to avoid delivery delays.
              </p>
            </div>
          </section>

          {/* Step 2: Select Package */}
          <section className="bg-dark-card border border-white/5 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-brand-500 h-8 w-8 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-brand-500/30">2</div>
              <h2 className="text-xl font-bold text-white">Select Top-up Amount</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {game.packages.map((pkg) => (
                <button
                  key={pkg.id}
                  onClick={() => setSelectedPackage(pkg.id)}
                  className={`relative p-4 rounded-xl border-2 text-left transition-all duration-200 group ${
                    selectedPackage === pkg.id 
                      ? 'bg-brand-500/10 border-brand-500 shadow-[0_0_15px_rgba(14,165,233,0.2)]' 
                      : 'bg-dark-bg border-transparent hover:border-white/20'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                      Best Value
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-display font-bold text-white">{pkg.amount}</span>
                    <img src={game.image} alt="coin" className="w-6 h-6 rounded-full" />
                  </div>
                  <div className="text-sm text-brand-400 font-medium mb-1">
                    {game.currencyName}
                  </div>
                  {pkg.bonus > 0 && (
                    <div className="text-xs text-green-400 mb-3">
                      +{pkg.bonus} Bonus
                    </div>
                  )}
                  <div className={`text-lg font-bold ${selectedPackage === pkg.id ? 'text-white' : 'text-slate-300'}`}>
                    ${pkg.price}
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Step 3: Payment */}
          <section className="bg-dark-card border border-white/5 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-brand-500 h-8 w-8 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-brand-500/30">3</div>
              <h2 className="text-xl font-bold text-white">Select Payment</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { id: PaymentMethod.CREDIT_CARD, icon: CreditCard, label: 'Card' },
                { id: PaymentMethod.PAYPAL, icon: Wallet, label: 'PayPal' },
                { id: PaymentMethod.CRYPTO, icon: Bitcoin, label: 'Crypto' },
                { id: PaymentMethod.GPAY, icon: Smartphone, label: 'GPay' },
              ].map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedPayment(method.id)}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all ${
                    selectedPayment === method.id 
                      ? 'bg-brand-500/10 border-brand-500 text-white' 
                      : 'bg-dark-bg border-white/5 text-slate-400 hover:bg-white/5'
                  }`}
                >
                  <method.icon className="h-6 w-6 mb-2" />
                  <span className="text-sm font-medium">{method.label}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Total & Action */}
          <div className="fixed bottom-0 left-0 w-full bg-dark-card border-t border-white/10 p-4 lg:static lg:bg-transparent lg:border-0 lg:p-0 z-40">
            <div className="max-w-7xl mx-auto flex items-center justify-between lg:justify-end gap-6">
              <div className="lg:hidden">
                <p className="text-slate-400 text-xs">Total Amount</p>
                <p className="text-2xl font-bold text-white">
                  ${currentPackage ? currentPackage.price : '0.00'}
                </p>
              </div>

              <Button 
                size="lg" 
                className="w-full lg:w-auto min-w-[200px]"
                disabled={!playerId || !selectedPackage || !selectedPayment}
                onClick={handleBuy}
              >
                Buy Now
              </Button>
            </div>
          </div>

        </div>
      </div>

      {/* Transaction Modal */}
      {transaction.status !== 'idle' && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-dark-card border border-white/10 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
            
            {transaction.status === 'processing' && (
              <div className="py-8">
                <div className="relative w-20 h-20 mx-auto mb-6">
                   <div className="absolute inset-0 rounded-full border-4 border-white/10"></div>
                   <div className="absolute inset-0 rounded-full border-4 border-brand-500 border-t-transparent animate-spin"></div>
                   <Zap className="absolute inset-0 m-auto h-8 w-8 text-brand-500 animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Processing Payment</h3>
                <p className="text-slate-400">Please wait while we secure your top-up...</p>
              </div>
            )}

            {transaction.status === 'success' && (
              <div className="py-8">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-10 w-10 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Payment Successful!</h3>
                <p className="text-slate-400 mb-6">{transaction.message}</p>
                <div className="bg-dark-bg p-4 rounded-lg text-left mb-6">
                   <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-500">Transaction ID</span>
                      <span className="text-white font-mono">TX-{Math.floor(Math.random() * 1000000)}</span>
                   </div>
                   <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Item</span>
                      <span className="text-white">{currentPackage?.amount} {game.currencyName}</span>
                   </div>
                </div>
                <Button onClick={() => setTransaction({ status: 'idle' })} className="w-full">
                  Close
                </Button>
              </div>
            )}

            {transaction.status === 'error' && (
              <div className="py-8">
                 <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertCircle className="h-10 w-10 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Payment Failed</h3>
                <p className="text-slate-400 mb-6">{transaction.message}</p>
                <Button variant="secondary" onClick={() => setTransaction({ status: 'idle' })} className="w-full">
                  Try Again
                </Button>
              </div>
            )}
            
          </div>
        </div>
      )}
    </div>
  );
};