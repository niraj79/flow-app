'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Clock, Star, User, CreditCard, ChevronRight, Zap } from 'lucide-react';

export default function RideShareApp() {
  const [activeTab, setActiveTab] = useState('ride');
  const [pickup, setPickup] = useState('');
  const [selectedRide, setSelectedRide] = useState<number | null>(null);
  const [selectedRide, setSelectedRide] = useState(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsAnimated(true), 100);
  }, []);

  const rideOptions = [
    { 
      id: 1, 
      name: 'Wave', 
      type: 'Affordable rides', 
      time: '3 min', 
      price: '$12.50',
      capacity: 4,
      icon: '🌊'
    },
    { 
      id: 2, 
      name: 'Tide', 
      type: 'Comfortable & spacious', 
      time: '5 min', 
      price: '$18.00',
      capacity: 6,
      icon: '🚙'
    },
    { 
      id: 3, 
      name: 'Current', 
      type: 'Premium experience', 
      time: '4 min', 
      price: '$28.00',
      capacity: 4,
      icon: '✨'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white font-sans relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Main container */}
      <div className="relative max-w-md mx-auto min-h-screen flex flex-col">
        {/* Header */}
        <header className={`p-6 transition-all duration-700 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent" 
                  style={{fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: '800', letterSpacing: '-0.02em'}}>
                Flow
              </h1>
              <p className="text-cyan-300/70 text-sm mt-1">Move with the current</p>
            </div>
            <button className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300">
              <User size={20} className="text-cyan-300" />
            </button>
          </div>
        </header>

        {/* Tab Navigation */}
        <div className={`px-6 mb-6 transition-all duration-700 delay-100 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="flex bg-white/5 backdrop-blur-md rounded-2xl p-1.5 border border-white/10">
            <button 
              onClick={() => setActiveTab('ride')}
              className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'ride' 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50' 
                  : 'text-cyan-300/50 hover:text-cyan-300'
              }`}
            >
              Ride
            </button>
            <button 
              onClick={() => setActiveTab('delivery')}
              className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'delivery' 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50' 
                  : 'text-cyan-300/50 hover:text-cyan-300'
              }`}
            >
              Delivery
            </button>
          </div>
        </div>

        {/* Location Input */}
        <div className={`px-6 mb-6 space-y-3 transition-all duration-700 delay-200 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"></div>
                <input 
                  type="text"
                  placeholder="Pickup location"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder-cyan-300/40"
                />
                <Navigation size={18} className="text-cyan-400" />
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-blue-400" />
                <input 
                  type="text"
                  placeholder="Where to?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder-cyan-300/40"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Ride Options */}
        <div className={`flex-1 px-6 pb-6 transition-all duration-700 delay-300 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h3 className="text-lg font-semibold mb-4 text-cyan-300/90">Choose your ride</h3>
          <div className="space-y-3">
            {rideOptions.map((ride, index) => (
              <div 
                key={ride.id}
                onClick={() => setSelectedRide(ride.id)}
                className={`relative group cursor-pointer transition-all duration-300 ${
                  selectedRide === ride.id ? 'scale-[1.02]' : 'hover:scale-[1.01]'
                }`}
                style={{animationDelay: `${index * 100}ms`}}
              >
                {selectedRide === ride.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-md opacity-50"></div>
                )}
                <div className={`relative bg-white/10 backdrop-blur-md rounded-2xl p-5 border transition-all duration-300 ${
                  selectedRide === ride.id 
                    ? 'border-cyan-400 bg-white/15' 
                    : 'border-white/20 hover:border-white/30'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-2xl border border-white/10">
                        {ride.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">{ride.name}</h4>
                        <p className="text-sm text-cyan-300/60">{ride.type}</p>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-xs text-cyan-400 flex items-center gap-1">
                            <Clock size={12} /> {ride.time}
                          </span>
                          <span className="text-xs text-cyan-300/50">• {ride.capacity} seats</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-white">{ride.price}</div>
                      {selectedRide === ride.id && (
                        <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action */}
        <div className={`p-6 border-t border-white/10 bg-slate-900/80 backdrop-blur-xl transition-all duration-700 delay-400 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Payment Method */}
          <div className="flex items-center justify-between mb-4 p-3 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3">
              <CreditCard size={18} className="text-cyan-400" />
              <span className="text-sm text-cyan-300/80">Visa •••• 4242</span>
            </div>
            <ChevronRight size={18} className="text-cyan-300/50" />
          </div>

          {/* Request Ride Button */}
          <button 
            disabled={!selectedRide || !pickup || !destination}
            className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
              selectedRide && pickup && destination
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-[1.02] active:scale-[0.98]'
                : 'bg-white/5 text-cyan-300/30 cursor-not-allowed'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              {selectedRide && pickup && destination && <Zap size={20} fill="currentColor" />}
              Request Ride
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}