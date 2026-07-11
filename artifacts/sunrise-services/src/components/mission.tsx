import React from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from './fade-in';
import { Target, Leaf, HeartHandshake, BookOpen } from 'lucide-react';

export function Mission() {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Positive Change",
      desc: "Creating measurable, lasting impact in the lives of marginalized communities through dedicated outreach."
    },
    {
      icon: <Leaf className="w-8 h-8 text-white" />,
      title: "Sustainability",
      desc: "Implementing solutions that endure, focusing on long-term environmental and social viability."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-white" />,
      title: "Empowerment",
      desc: "Providing the tools, skills, and resources needed for individuals to take control of their own destinies."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-white" />,
      title: "Transparency",
      desc: "Operating as a registered trust with full accountability to our donors, partners, and the communities we serve."
    }
  ];

  return (
    <section id="mission" className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 leading-tight">
              Our Mission is to illuminate paths out of poverty and marginalization.
            </h2>
            <div className="w-24 h-1 bg-white/30 mx-auto rounded-full"></div>
          </FadeIn>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-orange-600/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-orange-600/50 transition-colors h-full">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-serif">{value.title}</h3>
                <p className="text-orange-100/80 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
