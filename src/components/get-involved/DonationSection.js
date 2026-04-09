"use client";
import React, { useState } from 'react';

const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState(2500);
  const [isCustom, setIsCustom] = useState(false);
  const [customValue, setCustomValue] = useState("");

  const paymentOptions = [
    { amount: 500, label: 'Coffee' },
    { amount: 2500, label: 'Day Camp' },
    { amount: 10000, label: 'Week Camp' },
    { amount: 50000, label: 'Full Camp' },
  ];

  const handleDonate = () => {
    const finalAmount = isCustom ? customValue : selectedAmount;
    if (!finalAmount || finalAmount <= 0) return;
    console.log(`Donating: ₹${finalAmount}`);
  };

  return (
    <section className="py-20 lg:py-32 bg-stone-50 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Main Card Container */}
        <div className="bg-white rounded-[2.5rem] lg:rounded-[4rem] shadow-2xl shadow-stone-200/50 border border-stone-100 overflow-hidden">

          <div className="p-8 md:p-16">
            {/* Header Section */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 text-xs font-bold tracking-widest uppercase rounded-full mb-6">
                Make an Impact
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-stone-900 mb-6 tracking-tight">
                Sponsor a Camp
              </h2>
              <p className="text-lg text-stone-500 leading-relaxed">
                Your contribution directly funds free healing camps. Choose an amount to begin your journey of giving.
              </p>
            </div>

            {/* Donation Grid - Fixed Breaking Layout */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
              {paymentOptions.map((option) => (
                <button
                  key={option.amount}
                  onClick={() => {
                    setSelectedAmount(option.amount);
                    setIsCustom(false);
                  }}
                  className={`relative flex flex-col items-center justify-center p-6 rounded-[2rem] border-2 transition-all duration-300 min-h-[140px]
                    ${selectedAmount === option.amount && !isCustom
                      ? 'border-amber-400 bg-amber-50 shadow-inner'
                      : 'border-stone-100 hover:border-amber-200 hover:bg-stone-50/50'}`}
                >
                  <span className="text-2xl font-black text-stone-900">₹{option.amount}</span>
                  <span className="text-xs font-medium text-stone-400 uppercase tracking-wider mt-1">{option.label}</span>
                  {selectedAmount === option.amount && !isCustom && (
                    <div className="absolute top-3 right-3 w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                  )}
                </button>
              ))}

              {/* Custom Selection Card */}
              <button
                onClick={() => setIsCustom(true)}
                className={`flex flex-col items-center justify-center p-6 rounded-[2rem] border-2 transition-all duration-300 min-h-[140px]
                  ${isCustom
                    ? 'border-amber-400 bg-amber-50 shadow-inner'
                    : 'border-stone-100 hover:border-amber-200 hover:bg-stone-50/50'}`}
              >
                <span className={`text-2xl font-black ${isCustom ? 'text-stone-900' : 'text-stone-300'}`}>
                  {isCustom ? 'Custom' : 'Enter'}
                </span>
                <span className="text-xs font-medium text-stone-400 uppercase tracking-wider mt-1">Own Amount</span>
              </button>
            </div>

            {/* Custom Input Area */}
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isCustom ? 'max-h-40 mb-10 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="relative max-w-md mx-auto">
                <span className="absolute left-8 top-1/2 -translate-y-1/2 text-2xl font-bold text-stone-400">₹</span>
                <input
                  type="number"
                  placeholder="0.00"
                  value={customValue}
                  onChange={(e) => setCustomValue(e.target.value)}
                  className="w-full pl-14 pr-8 py-6 bg-stone-50 border-2 border-stone-100 rounded-3xl text-2xl font-bold focus:outline-none focus:border-amber-400 focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <button
                onClick={handleDonate}
                className="w-full md:w-auto min-w-[280px] bg-stone-900 text-white py-6 px-10 rounded-full font-bold text-xl hover:bg-amber-500 transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-xl shadow-stone-200"
              >
                Donate ₹{isCustom && customValue ? customValue : selectedAmount} Securely
              </button>
              <button className="w-full md:w-auto px-10 py-6 rounded-full font-bold text-stone-500 hover:text-stone-900 transition-colors">
                View Impact Report
              </button>
            </div>
          </div>

          {/* Footer of the Card */}
          <div className="bg-stone-50/50 border-t border-stone-100 p-8 text-center">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-4">
              {['100% Transparent', 'Tax Exempt', 'SSL Secure'].map((feat) => (
                <div key={feat} className="flex items-center gap-2 text-stone-400 text-sm font-semibold">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  {feat}
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center gap-6 grayscale opacity-40">
              <div className="h-8 w-12 bg-stone-300 rounded-md" /> {/* Placeholder for Logos */}
              <div className="h-8 w-12 bg-stone-300 rounded-md" />
              <div className="h-8 w-12 bg-stone-300 rounded-md" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DonationSection;