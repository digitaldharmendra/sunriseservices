import React from 'react';
import { FadeIn } from './fade-in';
import { ArrowRight, HeartHandshake } from 'lucide-react';
import teamImg from '@/assets/team1.jpeg';

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-secondary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={teamImg} 
          alt="Sunrise Services Team" 
          className="w-full h-full object-cover object-center opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/70 to-secondary/95"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col items-center text-center">
        <FadeIn direction="up" delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            A Delhi-Based Registered Trust & NGO
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2} className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1] mb-6">
            Empowering Communities. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Transforming Lives.</span> <br className="hidden md:block" />
            Building a Better Tomorrow.
          </h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.3} className="max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-sans">
            Committed to Positive Change, Sustainability and Community Empowerment. 
            We work at the grassroots to ensure education, healthcare, and dignity for all.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.4} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a 
            href="#contact" 
            className="w-full sm:w-auto bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_40px_-10px_rgba(249,115,22,0.6)] hover:shadow-[0_0_60px_-15px_rgba(249,115,22,0.8)] flex items-center justify-center gap-2"
          >
            Become a Volunteer
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
          >
            Partner With Us
            <HeartHandshake className="w-5 h-5" />
          </a>
        </FadeIn>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-secondary/80 backdrop-blur-md z-10 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-6">
            <FadeIn delay={0.5} direction="none" className="flex items-center gap-3">
              <div className="text-3xl font-serif font-bold text-primary">5+</div>
              <div className="text-sm text-gray-400 font-medium uppercase tracking-wider leading-tight">Focus<br/>Areas</div>
            </FadeIn>
            <div className="w-px h-10 bg-white/10"></div>
            <FadeIn delay={0.6} direction="none" className="flex items-center gap-3">
              <div className="text-3xl font-serif font-bold text-primary">100%</div>
              <div className="text-sm text-gray-400 font-medium uppercase tracking-wider leading-tight">Community<br/>Driven</div>
            </FadeIn>
            <div className="w-px h-10 bg-white/10"></div>
            <FadeIn delay={0.7} direction="none" className="flex items-center gap-3">
              <div className="text-xl font-serif font-bold text-white leading-tight">Delhi-Based<br/><span className="text-primary">NGO</span></div>
            </FadeIn>
            <div className="w-px h-10 bg-white/10"></div>
            <FadeIn delay={0.8} direction="none" className="flex items-center gap-3">
              <div className="text-xl font-serif font-bold text-white leading-tight">Registered<br/><span className="text-primary">Trust</span></div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
