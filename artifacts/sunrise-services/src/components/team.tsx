import React from 'react';
import { FadeIn } from './fade-in';
import foundersImg from '@/assets/team3.jpeg';
import fullTeamImg from '@/assets/team4.jpeg';

export function Team() {
  return (
    <section id="team" className="py-24 md:py-32 bg-secondary text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-[2px] bg-primary"></span>
              The People Behind The Vision
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Meet Our Dedicated Team
            </h2>
            <p className="text-gray-300 text-lg">
              Sunrise Services is driven by a passionate group of founders, volunteers, and community leaders who believe that service to humanity is the highest calling.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <FadeIn direction="right">
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all z-10 duration-500 mix-blend-overlay"></div>
              <img 
                src={foundersImg} 
                alt="Senior Founders" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-secondary via-secondary/80 to-transparent z-20">
                <h3 className="text-2xl font-serif font-bold text-white mb-1">Founding Leadership</h3>
                <p className="text-primary font-medium">Guiding the vision with experience & wisdom</p>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.2}>
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all z-10 duration-500 mix-blend-overlay"></div>
              <img 
                src={fullTeamImg} 
                alt="Full Team at Inauguration" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-secondary via-secondary/80 to-transparent z-20">
                <h3 className="text-2xl font-serif font-bold text-white mb-1">Our Extended Family</h3>
                <p className="text-primary font-medium">Volunteers and core staff working on the ground</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
