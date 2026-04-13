'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
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
  const [airport, setAirport] = useState('Chandigarh');
  const [airportMode, setAirportMode] = useState<'pickup' | 'drop'>('pickup');
  const [airportDate, setAirportDate] = useState('');
  const [airportTime, setAirportTime] = useState('');

  // Hourly state
  const [hourlyCity, setHourlyCity] = useState('');
  const [hourlyDuration, setHourlyDuration] = useState('4hr');
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
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200">
          {(['outstation', 'airport', 'hourly'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'flex-1 py-4 px-4 text-center font-medium transition-all duration-200 relative',
                activeTab === tab
                  ? 'text-[#1B4D3E]'
                  : 'text-gray-600 hover:text-gray-800'
              )}
            >
              {tab === 'outstation' && 'Outstation'}
              {tab === 'airport' && 'Airport Transfer'}
              {tab === 'hourly' && 'Hourly Rental'}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F59E0B]" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 md:p-8">
          {/* Outstation Tab */}
          {activeTab === 'outstation' && (
            <form onSubmit={handleOutstationSearch} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    From
                  </label>
                  <input
                    type="text"
                    placeholder="Pickup city"
                    value={outstationFrom}
                    onChange={(e) => setOutstationFrom(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    To
                  </label>
                  <input
                    type="text"
                    placeholder="Dropoff city"
                    value={outstationTo}
                    onChange={(e) => setOutstationTo(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    value={outstationDate}
                    onChange={(e) => setOutstationDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  />
                </div>
                <div className="flex items-end">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isRoundTrip}
                      onChange={(e) => setIsRoundTrip(e.target.checked)}
                      className="w-4 h-4 rounded"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Round Trip
                    </span>
                  </label>
                </div>
              </div>

              {isRoundTrip && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Return Date
                  </label>
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  />
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Search Cars
              </Button>
            </form>
          )}

          {/* Airport Tab */}
          {activeTab === 'airport' && (
            <form onSubmit={handleAirportSearch} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Airport
                  </label>
                  <select
                    value={airport}
                    onChange={(e) => setAirport(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  >
                    <option>Chandigarh</option>
                    <option>Kullu-Bhuntar</option>
                    <option>Shimla</option>
                  </select>
                </div>
                <div className="flex items-end gap-4">
                  <label className="flex items-center gap-2 cursor-pointer flex-1">
                    <input
                      type="radio"
                      checked={airportMode === 'pickup'}
                      onChange={() => setAirportMode('pickup')}
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Pickup
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer flex-1">
                    <input
                      type="radio"
                      checked={airportMode === 'drop'}
                      onChange={() => setAirportMode('drop')}
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Drop
                    </span>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    value={airportDate}
                    onChange={(e) => setAirportDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time
                  </label>
                  <input
                    type="time"
                    value={airportTime}
                    onChange={(e) => setAirportTime(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Search Cars
              </Button>
            </form>
          )}

          {/* Hourly Tab */}
          {activeTab === 'hourly' && (
            <form onSubmit={handleHourlySearch} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="Enter city"
                    value={hourlyCity}
                    onChange={(e) => setHourlyCity(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration
                  </label>
                  <select
                    value={hourlyDuration}
                    onChange={(e) => setHourlyDuration(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                  >
                    <option value="4hr">4 Hours</option>
                    <option value="8hr">8 Hours</option>
                    <option value="12hr">12 Hours</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  value={hourlyDate}
                  onChange={(e) => setHourlyDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Search Cars
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
