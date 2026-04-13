import { Testimonial } from './types';

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Rajesh Kumar',
    rating: 5,
    text: 'Amazing experience with Himachal Cars! The driver was professional and the vehicle was spotless. The Shimla to Manali journey was incredibly smooth and comfortable. Highly recommended for anyone planning a hill station trip.',
    tripRoute: 'Shimla to Manali',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: 'testimonial-2',
    name: 'Priya Sharma',
    rating: 5,
    text: 'Booked the Shimla Manali Honeymoon package and it was absolutely perfect! Every detail was beautifully planned. The candlelit dinner, spa treatment, and adventure activities made our honeymoon unforgettable. Thank you so much!',
    tripRoute: 'Shimla Manali Honeymoon Package',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: 'testimonial-3',
    name: 'Amit Patel',
    rating: 4,
    text: 'Great service for our family trip to Dharamshala. The driver was courteous, routes were well-planned, and vehicles were comfortable. Kids enjoyed the journey. Would definitely book again for our next trip.',
    tripRoute: 'Delhi to Dharamshala',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
  {
    id: 'testimonial-4',
    name: 'Neha Gupta',
    rating: 5,
    text: 'The Spiti Valley Adventure package exceeded all expectations. The guides were knowledgeable, the accommodations were comfortable despite remote locations, and the itinerary was perfectly balanced between adventure and rest.',
    tripRoute: 'Spiti Valley Adventure',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    id: 'testimonial-5',
    name: 'Vikram Singh',
    rating: 5,
    text: 'Booked a cab for my Delhi to Manali trip and everything was fantastic. The vehicle was luxurious, driver was experienced with mountain roads, and customer service was responsive to all my requirements.',
    tripRoute: 'Delhi to Manali',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: 'testimonial-6',
    name: 'Deepa Menon',
    rating: 4,
    text: 'Amazing family experience with the Himachal complete tour package. Every city we visited had something unique to offer. The driver and guide were both helpful and informative. Worth every penny!',
    tripRoute: 'Complete Himachal Tour',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69be79?w=100&h=100&fit=crop',
  },
];

export type TestimonialId = (typeof testimonials)[number]['id'];
