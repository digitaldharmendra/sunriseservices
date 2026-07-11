import React from 'react';
import { FadeIn } from './fade-in';
import { ArrowRight } from 'lucide-react';
import photoInauguration from '@/assets/team2.jpeg';
import photoTeamDoor from '@/assets/team4.jpeg';

export function Programs() {
  return (
    <section id="programs" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">
              Active Community Programs
            </h2>
            <p className="text-gray-600 text-lg">
              Our initiatives are designed in consultation with community leaders to ensure they address actual needs and respect local culture.
            </p>
          </FadeIn>
        </div>

        <div className="space-y-24">
          {/* Program 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-lg relative group">
                <img 
                  src={photoTeamDoor} 
                  alt="Team greeting community" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </FadeIn>
            <FadeIn direction="left" className="lg:pl-12">
              <div className="w-12 h-12 bg-orange-100 text-primary rounded-full flex items-center justify-center mb-6 font-bold text-xl font-serif">1</div>
              <h3 className="text-3xl font-bold font-serif text-secondary mb-4">Community Welcome & Outreach</h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                We believe trust is the foundation of change. Our regular outreach programs involve deep engagement with families in Delhi's neighborhoods. We listen to their challenges, conduct surveys, and build the relationships necessary for successful program implementation.
              </p>
              <ul className="space-y-3 mb-8 text-gray-700 font-medium">
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary"></div> Door-to-door awareness campaigns</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary"></div> Community listening sessions</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary"></div> Needs assessment surveys</li>
              </ul>
              <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                Support this program <ArrowRight className="w-5 h-5" />
              </a>
            </FadeIn>
          </div>

          {/* Program 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right" className="order-2 md:order-1 lg:pr-12">
              <div className="w-12 h-12 bg-orange-100 text-primary rounded-full flex items-center justify-center mb-6 font-bold text-xl font-serif">2</div>
              <h3 className="text-3xl font-bold font-serif text-secondary mb-4">Cultural & Social Integration</h3>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Respecting local traditions while introducing modern social concepts is key to our approach. We organize community gatherings, celebrate festivals together, and use these platforms to subtly introduce concepts of hygiene, education importance, and gender equality.
              </p>
              <ul className="space-y-3 mb-8 text-gray-700 font-medium">
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary"></div> Festive gatherings & cultural events</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary"></div> Value-based education integrated with tradition</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary"></div> Inclusive community celebrations</li>
              </ul>
              <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                Support this program <ArrowRight className="w-5 h-5" />
              </a>
            </FadeIn>
            <FadeIn direction="left" className="order-1 md:order-2">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-lg relative group">
                <img 
                  src={photoInauguration} 
                  alt="Cultural puja ceremony" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
