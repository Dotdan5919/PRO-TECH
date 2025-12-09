"use client";

import { useState } from 'react';
import Image from 'next/image';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

const categories = ['All', 'Web Development', 'Video Editing', 'Brand Design'];

const projects = [
  {
    title: 'QuantumLeap Branding',
    category: 'Brand Design',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC15ezZjWeNqptLq8_01LE3kimtnkKkfmcwRXBBm5LsqGftDKobt153t5BOMC1e38IGYMf3CGMsKHumNfHaNCu2bNotAx5Qbw6MlMq1L4RXwaewHsU1MsKAZahk1g3nb6q1p5slPU8H-FNA1iriGrPCRB0BXDnWBmk0Zn5RAswN7HTU_iNYSDguaeJQEathaKPU5onLD1V3nt81J_tzQ7NvuKAij5qGEBufGXzKcnfl-TZIZ0ZkGMhdB2gQj9VSl0maqTPTXH9aXb4a',
  },
  {
    title: 'Fintech Dashboard',
    category: 'Web Development',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzJ-iWwMw-lfSO_lainiEReruu2aZ2s6NgobbxZpWrOD4UdbRJ5pzy3kP3Z2JeTL8rgfyRrGMalic4K4f42uWpAj-DP7g7rDb2zTe7nqs4PJiUM0zlY-oBqh5TO8XXDMbdR8fz8EmtUOFQNGe2J2UVceTCQPpy6Lc_8u0vlJ3UBcmgGC-tDw6JSDYpJ8HjCwQKg30RE5m6qDCtJWn8yanlPAJ1x3pRd5au-mPgMeybMKcRMyWTnp22nxytysCZMwsEOv_8ZnvEfVvX',
  },
  {
    title: 'Launch Promo Video',
    category: 'Video Editing',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFPtjbs9OKD1vs69qzhz55fEGw63PuIovv3aitzN6mBjwm2QZvzM4H2pUwJDMxCdf1jg9eRoya3TVOtAKzJpw-WiKu8KBzAV1DehlAgdS7fiNArZ32_lL2Axefxnt5io3Cxgl6mntyzHesu5zCGQVfed6ueluGyndxQ-2CxiuX_jMl2A9IA6wkPrMb3r0uF7A13sP_DolZmSWLJ-6C0HDOpj_PsTFMLu8f0YuSSxtyn3xB0Nd-6DEEaUKoSYFvZJOha_arvCoRbgQY',
  },
  {
    title: 'Urban Threads E-commerce',
    category: 'Web Development',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBDMsBEjKex_XMapUIOXu6XCAJritLSHkZzwWv1_Vi47-MYVZzjYGfyAvFckKTSXWtc2R-PK-R7fgXBF1RjoHCAifNQr4eCht-oF-NlMHGslkbTb43_LBeI1vhievB1PZOCBqZl2NEC-Sf4rGMP8MyP18UxhiQv8MrYjGLoAA5LeThAymoVi6NFk_nkLRecHVyEAySO_pcPR9Xzs6ijFKu9EhWH_l6ekQLdyKUWFH_f-Vj-YTpB-gNnJr_NIl4joIlAuQuq2N39Fb0',
  },
  {
    title: 'Innovate Inc. Rebrand',
    category: 'Brand Design',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrNJAk5M-r3sWnl1hNBB4Wqj7KSIqqcSRDZMtLHOjUq0L05Ul-ir5bHkzpfTQnhuXPSpt-91kbYg4f4D7H7t6a4JbGKSaiUgGNPqOOsKfvpEp8xc-wDFkklErrnIKw_RwSgudY4Ag0O24he_6tx0XTqFdgA2FkyfDDJ8BtY4G9fs5rLitR2VCXznnZQmOG3DAVkjQi41rN-MDq1G3WDrAA0NmmkY62-94OUc6Xfh209vy6rBOqfyPmYV2zoUei_u-I_dEZW7QMbKNy',
  },
  {
    title: 'Wanderlust Chronicles',
    category: 'Video Editing',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAesF8EGkT2lIlXA_C3g7g_w1yzE77YpE_Ekoud3ZFjy-ivTB2vcB0l210ThejWmc7sK1Mg0oX4f8QuXuQGJReFrLRh6boRv1QlWg3fW1T2wyvOI_KvZtfeaQSiGzFqOIjOqLxME1uY164t6PPza5CtXAjJVg_QQE4r8iTw8Vf00LmAy88WeH-TkGOlelLqBjBwm3UdAEW6Ab3EsBE1lWiwl7d5C8XOimFDciFU-5RqYValpMK1NjcdoWFxNx_I6tBBdAr6NG98D4sX',
  },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <main className="flex-1  fade-up stagger">
      <div className="px-4 sm:px-8 md:px-20 lg:px-10 py-5">
        <div className="max-w-[1500px] mx-auto">
          {/* Header */}
          <div className="flex flex-wrap justify-between gap-3 p-4 mb-8">
            <div className="flex min-w-72 flex-col gap-3">
              <h1 className="text-white text-4xl font-black leading-tight">
                Explore Our Creations
              </h1>
              <p className="text-white/60 text-base">
                We combine strategy, design, and technology to build transformative digital experiences.
              </p>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-3 p-3 flex-wrap mb-8 fade-up stagger">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`h-8 rounded-full px-4 text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white/10 text-white hover:bg-primary/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className=" fade-up stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mb-16">
            {filteredProjects.map((project) => (
              <div
                key={project.title}
                className="bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-4 aspect-square group relative overflow-hidden cursor-pointer"
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%), url("${project.image}")`
                }}
              >
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                  <p className="text-white text-lg font-bold leading-tight">{project.title}</p>
                  <p className="text-white/80 text-sm">{project.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <Testimonials />

          {/* CTA */}
          <CTA 
            title="Ready to Elevate Your Brand?"
            description="Have a project in mind or just want to chat? We're here to help you turn your ideas into reality."
            buttonText="Let's Talk"
          />
        </div>
      </div>
    </main>
  );
}
