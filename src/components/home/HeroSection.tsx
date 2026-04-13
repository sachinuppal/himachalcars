import BookingWidget from '@/components/booking/BookingWidget';

export default function HeroSection() {
  return (
    <section
      id="booking"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2000&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Book Reliable Cabs in Himachal Pradesh
            </h1>
            <p className="text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto">
              Shimla, Manali, Dharamshala & 50+ destinations
            </p>
          </div>

          {/* Booking Widget */}
          <div className="flex justify-center">
            <BookingWidget />
          </div>
        </div>
      </div>
    </section>
  );
}
