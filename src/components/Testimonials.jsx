"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FiStar } from "react-icons/fi";

// Swiper CSS ইম্পোর্ট করা
import "swiper/css";
import "swiper/css/pagination";

// পৃথক কার্ড কম্পোনেন্ট যাতে প্রতিটি কার্ড আলাদাভাবে স্টেট ম্যানেজ করতে পারে
function TestimonialCard({ item }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full h-full rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 shadow-sm hover:shadow-2xl hover:border-indigo-500/50 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between relative group">
      
      {/* Custom Quote SVG Icon */}
      <div className="absolute top-6 right-6 text-indigo-500/20 group-hover:text-indigo-500/40 transition-colors">
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <div>
        {/* Rating Stars */}
        <div className="flex items-center space-x-1 text-amber-400 mb-6">
          {[...Array(5)].map((_, i) => (
            <FiStar key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>

        {/* Quote Text with line-clamp and toggle */}
        <div className="mb-6">
          <p className={`text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed ${!isExpanded ? 'line-clamp-3' : ''}`}>
            &ldquo;{item.quote}&rdquo;
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline focus:outline-none"
          >
            {isExpanded ? "See Less" : "See More..."}
          </button>
        </div>
      </div>

      {/* User Info Profile */}
      <div className="flex items-center space-x-4 pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-500/30">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white text-sm">
            {item.name}
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {item.role}
          </p>
        </div>
      </div>

    </div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Tech Startup Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
      quote: "FundSpire made launching our green tech campaign seamless. The platform’s transparency and incredible community support helped us exceed our funding goal in record time! We couldn't have asked for a better experience working with the backers.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Indie Game Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      quote: "As a first-time creator, I was nervous about crowdfunding. The secure transactions and user-friendly interface gave both me and my backers total peace of mind throughout the entire campaign journey.",
    },
    {
      id: 3,
      name: "Aisha Rahman",
      role: "Community Activist",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
      quote: "We raised funds for our rural clean water initiative effortlessly. The tracking tools and continuous backer engagement features are absolute game-changers for social impact initiatives.",
    },
    {
      id: 4,
      name: "David Miller",
      role: "Hardware Inventor",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
      quote: "The best crowdfunding platform I've used so far. Clean design, zero friction, and an active audience that genuinely cares about innovative product launches and disruptive technologies.",
    },
  ];

  return (
    <section className="py-20 bg-slate-100 dark:bg-slate-900/50 transition-colors duration-300 w-full overflow-hidden">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto md:mb-12 mb-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wide uppercase mb-3">
            <span>User Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Loved by Creators & Backers
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base">
            Hear what satisfied members of our global community have to say about their positive experiences.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          className="pb-16"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="h-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
              <TestimonialCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}