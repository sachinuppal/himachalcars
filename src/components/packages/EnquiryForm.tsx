'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, CheckCircle, MessageCircle, Phone } from 'lucide-react';
import { cars } from '@/data';
import { WHATSAPP_NUMBER, PHONE } from '@/lib/constants';

const enquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z
    .string()
    .regex(/^\d{10}$/, 'Phone number must be 10 digits'),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  travelDate: z.string().min(1, 'Travel date is required'),
  numberOfAdults: z.number().int().min(1, 'At least 1 adult required'),
  numberOfChildren: z.number().int().min(0, 'Cannot be negative'),
  preferredCar: z.string().min(1, 'Please select a car type'),
  specialRequests: z.string().optional(),
  packageId: z.string(),
  packageTitle: z.string(),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

interface EnquiryFormProps {
  packageId: string;
  packageTitle: string;
}

export function EnquiryForm({ packageId, packageTitle }: EnquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    mode: 'onChange',
    defaultValues: {
      numberOfAdults: 2,
      numberOfChildren: 0,
      packageId,
      packageTitle,
    } as EnquiryFormData,
  });

  const adultsCount = watch('numberOfAdults');
  const childrenCount = watch('numberOfChildren');
  const totalTravelers = adultsCount + childrenCount;

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        reset();
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        alert('Failed to submit enquiry. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-lg font-bold text-green-900 mb-2">
          Thank You for Your Enquiry!
        </h3>
        <p className="text-green-800 mb-4">
          Your enquiry has been received. Our team will contact you within 30 minutes.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in the ${packageTitle} package`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            <Phone size={18} />
            Call Us
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-lg p-6 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            {...register('name')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            {...register('phone')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="10-digit number"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            {...register('email')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Travel Date */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Travel Date *
          </label>
          <input
            type="date"
            {...register('travelDate')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          {errors.travelDate && (
            <p className="text-red-500 text-sm mt-1">{errors.travelDate.message}</p>
          )}
        </div>

        {/* Adults */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Number of Adults *
          </label>
          <input
            type="number"
            min="1"
            {...register('numberOfAdults', { valueAsNumber: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          {errors.numberOfAdults && (
            <p className="text-red-500 text-sm mt-1">
              {errors.numberOfAdults.message}
            </p>
          )}
        </div>

        {/* Children */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Number of Children
          </label>
          <input
            type="number"
            min="0"
            {...register('numberOfChildren', { valueAsNumber: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          {errors.numberOfChildren && (
            <p className="text-red-500 text-sm mt-1">
              {errors.numberOfChildren.message}
            </p>
          )}
        </div>

        {/* Preferred Car */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Preferred Car Type *
          </label>
          <select
            {...register('preferredCar')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="">Select a car type</option>
            {cars.map((car) => (
              <option key={car.id} value={car.id}>
                {car.name} ({car.seats} seats)
              </option>
            ))}
          </select>
          {errors.preferredCar && (
            <p className="text-red-500 text-sm mt-1">
              {errors.preferredCar.message}
            </p>
          )}
        </div>

        {/* Total Travelers */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Total Travelers
          </label>
          <div className="px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 font-semibold">
            {totalTravelers}
          </div>
        </div>
      </div>

      {/* Special Requests */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Special Requests
        </label>
        <textarea
          {...register('specialRequests')}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
          placeholder="Any special requirements or requests..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-teal-700 hover:bg-teal-800 disabled:bg-gray-400 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        {isSubmitting && <Loader2 size={20} className="animate-spin" />}
        {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        We respect your privacy. Your information will only be used to process your enquiry.
      </p>
    </form>
  );
}
