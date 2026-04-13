'use client';

import { testimonials } from '@/data/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1B4D3E]">
          What Our Customers Say
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Real stories from travelers who enjoyed their journeys with us
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#FAFAF8] rounded-xl p-5 md:p-6 border border-gray-100"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm ${
                      i < testimonial.rating
                        ? 'text-[#F59E0B]'
                        : 'text-gray-200'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-200">
                {testimonial.avatar ? (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#1B4D3E] flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="text-sm font-semibold text-[#111827]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {testimonial.tripRoute}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
