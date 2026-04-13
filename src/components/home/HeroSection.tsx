import Image from 'next/image';
import BookingWidget from '@/components/booking/BookingWidget';

export default function HeroSection() {
  return (
    <section
      id="booking"
      className="relative w-full min-h-[540px] md:min-h-[600px] overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2000&q=80"
        alt="Himachal Pradesh Mountains"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-6 h-full flex items-center">
        <div className="w-full flex flex-col lg:flex-row lg:gap-8 items-center">
          {/* Text Block */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Book Reliable Cabs in Himachal Pradesh
            </h1>
            <p className="text-base md:text-lg text-white/80 mt-3">
              Shimla, Manali, Dharamshala & 50+ destinations
            </p>
          </div>

          {/* Booking Widget */}
          <div className="w-full lg:w-5/12 mt-6 lg:mt-0">
            <BookingWidget />
          </div>
        </div>
      </div>
    </section>
  );
}
