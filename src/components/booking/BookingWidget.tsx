'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type TabType = 'outstation' | 'airport' | 'hourly';

export default function BookingWidget() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('outstation');

  // Outstation state
  const [outstationFrom, setOutstationFrom] = useState('');
  const [outstationTo, setOutstationTo] = useState('');
  const [outstationDate, setOutstationDate] = useState('');
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [returnDate, setReturnDate] = useState('');

  // Airport state
  const [airport, setAirport] = useState('Chandigarh Airport');
  const [airportMode, setAirportMode] = useState<'pickup' | 'drop'>('pickup');
  const [airportDate, setAirportDate] = useState('');
  const [airportTime, setAirportTime] = useState('');

  // Hourly state
  const [hourlyCity, setHourlyCity] = useState('');
  const [hourlyDuration, setHourlyDuration] = useState('4 Hours');
  const [hourlyDate, setHourlyDate] = useState('');

  const handleOutstationSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!outstationFrom || !outstationTo || !outstationDate) {
      alert('Please fill all fields');
      return;
    }
    const params = new URLSearchParams({
      tripType: isRoundTrip ? 'outstation_roundtrip' : 'outstation_oneway',
      from: outstationFrom,
      to: outstationTo,
      date: outstationDate,
      ...(isRoundTrip && { returnDate }),
    });
    router.push(`/booking?${params.toString()}`);
  };

  const handleAirportSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!airportDate || !airportTime) {
      alert('Please fill all fields');
      return;
    }
    const params = new URLSearchParams({
      tripType: 'airport',
      airport,
      mode: airportMode,
      date: airportDate,
      time: airportTime,
    });
    router.push(`/booking?${params.toString()}`);
  };

  const handleHourlySearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hourlyCity || !hourlyDate) {
      alert('Please fill all fields');
      return;
    }
    const params = new URLSearchParams({
      tripType: 'hourly',
      city: hourlyCity,
      duration: hourlyDuration,
      date: hourlyDate,
    });
    router.push(`/booking?${params.toString()}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-5 md:p-6 w-full max-w-lg mx-auto lg:mx-0">
      {/* Tab Bar */}
      <div className="flex bg-gray-100 rounded-xl p-1 gap-1 mb-5">
        {(['outstation', 'airport', 'hourly'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              'flex-1 py-2.5 text-center text-sm font-medium rounded-lg transition cursor-pointer',
              activeTab === tab
                ? 'bg-white text-[#1B4D3E] shadow-sm font-semibold'
                : 'text-gray-500 hover:text-gray-700'
            )}
          >
            {tab === 'outstation' && 'Outstation'}
            {tab === 'airport' && 'Airport'}
            {tab === 'hourly' && 'Hourly Rental'}
          </button>
        ))}
      </div>

      {/* Outstation Tab */}
      {activeTab === 'outstation' && (
        <form onSubmit={handleOutstationSearch} className="space-y-4">
          {/* Row 1: From & To */}
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5 block">
                From
              </label>
              <input
                type="text"
                placeholder="Shimla"
                value={outstationFrom}
                onChange={(e) => setOutstationFrom(e.target.value)}
                className="bg-gray-50 border-gray-200"
              />
            </div>
            <div className="flex-1">
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5 block">
                To
              </label>
              <input
                type="text"
                placeholder="Manali"
                value={outstationTo}
                onChange={(e) => setOutstationTo(e.target.value)}
                className="bg-gray-50 border-gray-200"
              />
            </div>
          </div>

          {/* Row 2: Travel Date */}
          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5 block">
              Travel Date
            </label>
            <input
              type="date"
              value={outstationDate}
              onChange={(e) => setOutstationDate(e.target.value)}
              className="bg-gray-50 border-gray-200"
            />
          </div>

          {/* Row 3: Round Trip Toggle */}
          <div className="flex items-center">
            <label className="flex items-center gap-2 cursor-pointer px-3 py-2 rounded-full bg-gray-50 border border-gray-200 hover:bg-gray-100 transition">
              <input
                type="checkbox"
                checked={isRoundTrip}
                onChange={(e) => setIsRoundTrip(e.target.checked)}
                className="w-4 h-4 rounded accent-[#F59E0B]"
              />
              <span className="text-sm font-medium text-gray-700">Round Trip</span>
            </label>
          </div>

          {/* Return Date (conditional) */}
          {isRoundTrip && (
            <div>
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5 block">
                Return Date
              </label>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="bg-gray-50 border-gray-200"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold py-3 rounded-xl text-base transition active:scale-[0.98] mt-1 flex items-center justify-center gap-2"
          >
            Search Cars & Prices
            <ArrowRight size={18} />
          </button>
        </form>
      )}

      {/* Airport Tab */}
      {activeTab === 'airport' && (
        <form onSubmit={handleAirportSearch} className="space-y-4">
          {/* Airport Select */}
          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5 block">
              Airport
            </label>
            <select
              value={airport}
              onChange={(e) => setAirport(e.target.value)}
              className="bg-gray-50 border-gray-200"
            >
              <option>Chandigarh Airport</option>
              <option>Kullu-Bhuntar Airport</option>
              <option>Shimla Airport</option>
            </select>
          </div>

          {/* Service Toggle Buttons */}
          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5 block">
              Service
            </label>
            <div className="flex bg-gray-100 rounded-lg p-1 gap-1">
              <button
                type="button"
                onClick={() => setAirportMode('pickup')}
                className={cn(
                  'flex-1 py-2 text-sm font-medium rounded transition',
                  airportMode === 'pickup'
                    ? 'bg-white text-[#1B4D3E] shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                )}
              >
                Pickup
              </button>
              <button
                type="button"
                onClick={() => setAirportMode('drop')}
                className={cn(
                  'flex-1 py-2 text-sm font-medium rounded transition',
                  airportMode === 'drop'
                    ? 'bg-white text-[#1B4D3E] shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                )}
              >
                Drop
              </button>
            </div>
          </div>

          {/* Date & Time */}
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5 block">
                Date
              </label>
              <input
                type="date"
                value={airportDate}
                onChange={(e) => setAirportDate(e.target.value)}
                className="bg-gray-50 border-gray-200"
              />
            </div>
            <div className="flex-1">
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5 block">
                Time
              </label>
              <input
                type="time"
                value={airportTime}
                onChange={(e) => setAirportTime(e.target.value)}
                className="bg-gray-50 border-gray-200"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold py-3 rounded-xl text-base transition active:scale-[0.98] mt-1 flex items-center justify-center gap-2"
          >
            Search Cars & Prices
            <ArrowRight size={18} />
          </button>
        </form>
      )}

      {/* Hourly Tab */}
      {activeTab === 'hourly' && (
        <form onSubmit={handleHourlySearch} className="space-y-4">
          {/* City */}
          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5 block">
              City
            </label>
            <input
              type="text"
              placeholder="Shimla"
              value={hourlyCity}
              onChange={(e) => setHourlyCity(e.target.value)}
              className="bg-gray-50 border-gray-200"
            />
          </div>

          {/* Duration */}
          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5 block">
              Duration
            </label>
            <select
              value={hourlyDuration}
              onChange={(e) => setHourlyDuration(e.target.value)}
              className="bg-gray-50 border-gray-200"
            >
              <option>4 Hours</option>
              <option>8 Hours</option>
              <option>12 Hours</option>
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5 block">
              Date
            </label>
            <input
              type="date"
              value={hourlyDate}
              onChange={(e) => setHourlyDate(e.target.value)}
              className="bg-gray-50 border-gray-200"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold py-3 rounded-xl text-base transition active:scale-[0.98] mt-1 flex items-center justify-center gap-2"
          >
            Search Cars & Prices
            <ArrowRight size={18} />
          </button>
        </form>
      )}
    </div>
  );
}
