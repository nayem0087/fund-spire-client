"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiShield, FiZap, FiGlobe, FiHeadphones } from "react-icons/fi";

export default function WhyChooseUs() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const features = [
    {
      id: 1,
      icon: <FiShield className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Secure & Transparent Funds",
      description: "All transactions are protected with enterprise-grade encryption. Funds are released based on verified milestones.",
    },
    {
      id: 2,
      icon: <FiZap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Lightning Fast Setup",
      description: "Launch your campaign in minutes with our intuitive dashboard, pre-built templates, and guided steps.",
    },
    {
      id: 3,
      icon: <FiGlobe className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Global Backer Network",
      description: "Connect instantly with passionate innovators, investors, and supporters from all around the world.",
    },
    {
      id: 4,
      icon: <FiHeadphones className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: "24/7 Dedicated Support",
      description: "Our expert support team is always ready to guide you through campaign marketing, optimization, and technical issues.",
    },
  ];

  return (
    <section ref={containerRef} className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 w-full relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wide uppercase mb-3"
          >
            <span>Why Choose Us</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Built for Creators and Backers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 mt-3 text-sm sm:text-base"
          >
            We provide the most robust, secure, and user-friendly ecosystem to transform visionary concepts into reality.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-8 shadow-sm hover:shadow-2xl hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Subtle Accent Line */}
              <div className="w-10 h-1 bg-slate-200 dark:bg-slate-800 rounded-full mt-8 group-hover:w-full group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}