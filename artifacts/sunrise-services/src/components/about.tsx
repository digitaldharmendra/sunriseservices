import React from 'react';
import { FadeIn } from './fade-in';
import teamBannerImg from '@/assets/team1.jpeg';
import inaugurationImg from '@/assets/team2.jpeg';
import { MapPin } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-orange-50 rounded-bl-[100px] -z-0 opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <FadeIn direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img 
                  src={teamBannerImg} 
                  alt="Sunrise Services Office Banner and Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Overlapping smaller image */}
              <div className="absolute -bottom-10 -right-10 w-2/3 rounded-2xl overflow-hidden shadow-xl border-8 border-white hidden md:block">
                <img 
                  src={inaugurationImg} 
                  alt="Inauguration Puja at Sunrise Services" 
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </div>

          <div className="order-1 lg:order-2 lg:pl-10">
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-4">
                <span className="w-8 h-[2px] bg-primary"></span>
                Who We Are
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6 leading-tight">
                Rooted in Community, <br/>Growing with Hope.
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Sunrise Services is a registered trust and non-profit NGO based in Delhi. We believe that true transformation begins at the grassroots level. By focusing on education, healthcare, environmental awareness, and empowerment, we are building a foundation for sustainable positive change.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                From our office in Laxmi Nagar, we orchestrate community development programs designed not just to provide immediate relief, but to equip individuals with the tools they need to lift themselves and their families up. Like a sunrise, we aim to bring light, warmth, and a new beginning to those who need it most.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-start gap-4">
                <div className="p-3 bg-white rounded-full shadow-sm text-primary flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Our Headquarters</h4>
                  <p className="text-gray-600 text-sm">
                    D-35, 1st Floor, Office No-102, <br/>
                    Near Pillar No 33, Laxmi Nagar, Delhi – 110092
                  </p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  );
}
