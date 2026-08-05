"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiTrendingUp, FiArrowRight } from "react-icons/fi";

export default function TopCampaigns() {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ⚠️ আপনার ব্যাকএন্ড সার্ভারের সঠিক URL এখানে দিন (যেমন: http://localhost:5000/campaigns)
    const backendUrl = "http://localhost:5000/campaigns"; 

    fetch(backendUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch from backend");
        }
        return res.json();
      })
      .then((data) => {
        // ডেটা সফলভাবে আসলে সাজিয়ে নিন
        const sorted = data
          .sort((a, b) => (b.raised || b.pledged || 0) - (a.raised || a.pledged || 0))
          .slice(0, 6);
        setCampaigns(sorted);
        setLoading(false);
      })
      .catch((err) => {
        console.warn("Backend fetch failed, using fallback mock data:", err.message);
        
        // ব্যাকএন্ড কানেক্ট না হলে প্রজেক্ট যেন আটকে না যায়, তাই ডামি ডেটা দেখানো হচ্ছে
        setCampaigns([
          {
            _id: "1",
            title: "EcoSmart Portable Solar Generator",
            image: "https://images.unsplash.com/photo-1509391365330-2e84cbe25677?q=80&w=800&auto=format&fit=crop",
            raised: 125000,
            goal: 50000,
            category: "Technology",
          },
          {
            _id: "2",
            title: "Clean Water Initiative for Rural Communities",
            image: "https://images.unsplash.com/photo-1541971875076-8f970d573be6?q=80&w=800&auto=format&fit=crop",
            raised: 98400,
            goal: 80000,
            category: "Community",
          },
          {
            _id: "3",
            title: "Next-Gen Indie Open-World RPG Game",
            image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
            raised: 87500,
            goal: 40000,
            category: "Gaming",
          },
          {
            _id: "4",
            title: "AI-Powered Smart Health Watch",
            image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop",
            raised: 76200,
            goal: 60000,
            category: "Innovation",
          },
          {
            _id: "5",
            title: "Organic Urban Farming Ecosystem",
            image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=800&auto=format&fit=crop",
            raised: 54100,
            goal: 30000,
            category: "Environment",
          },
          {
            _id: "6",
            title: "Independent Documentary: Voices of Tomorrow",
            image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop",
            raised: 42900,
            goal: 25000,
            category: "Film & Arts",
          },
        ]);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wide uppercase mb-3">
              <FiTrendingUp className="w-3.5 h-3.5" />
              <span>High-Impact Funding</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Top Funded Campaigns
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-xl text-sm sm:text-base">
              Discover the breakthrough projects and community causes that have raised the maximum amount of support from our global contributors.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <Link
              href="/explore-campaigns"
              className="inline-flex items-center space-x-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors group"
            >
              <span>View All Campaigns</span>
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="bg-white dark:bg-slate-900 rounded-3xl h-96 animate-pulse border border-slate-200 dark:border-slate-800"></div>
            ))}
          </div>
        ) : (
          /* Campaigns Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((campaign, idx) => {
              const raisedAmount = campaign.raised || campaign.pledged || 0;
              const goalAmount = campaign.goal || 1;
              const percentage = Math.min(Math.round((raisedAmount / goalAmount) * 100), 100);

              return (
                <motion.div
                  key={campaign._id || idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl hover:border-indigo-500/50 transition-all duration-300 flex flex-col"
                >
                  {/* Cover Image Wrapper */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <Image
                      src={campaign.image || campaign.thumbnail || "https://images.unsplash.com/photo-1509391365330-2e84cbe25677?q=80&w=800&auto=format&fit=crop"}
                      alt={campaign.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-slate-900/70 backdrop-blur-md text-white text-xs font-medium border border-white/10">
                      {campaign.category || "Crowdfunding"}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                        {campaign.title}
                      </h3>
                      
                      {/* Raised Info Box */}
                      <div className="flex items-center justify-between pt-2">
                        <div>
                          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider block">Total Raised</span>
                          <span className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
                            ${raisedAmount.toLocaleString()}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider block">Funded</span>
                          <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                            {percentage}%
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-indigo-600 to-pink-500 h-full rounded-full transition-all duration-1000"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Link
                      href={`/campaigns/${campaign._id}`}
                      className="w-full inline-flex items-center justify-center space-x-2 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-indigo-600 group-hover:text-white text-slate-700 dark:text-slate-200 font-semibold transition-all text-sm shadow-sm"
                    >
                      <span>Back This Campaign</span>
                      <FiArrowRight className="w-4 h-4" />
                    </Link>

                  </div>

                </motion.div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}