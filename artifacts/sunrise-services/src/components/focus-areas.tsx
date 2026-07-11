import React from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from './fade-in';
import { BookOpenCheck, Stethoscope, Trees, Lightbulb, Users } from 'lucide-react';

export function FocusAreas() {
  const areas = [
    {
      id: "01",
      icon: <BookOpenCheck className="w-10 h-10 text-primary" />,
      title: "Education",
      desc: "Bridging the educational divide by providing resources, tutoring, and support to underprivileged children.",
      color: "bg-blue-50"
    },
    {
      id: "02",
      icon: <Stethoscope className="w-10 h-10 text-primary" />,
      title: "Healthcare",
      desc: "Organizing health camps, providing medical assistance, and spreading awareness about sanitation and hygiene.",
      color: "bg-green-50"
    },
    {
      id: "03",
      icon: <Trees className="w-10 h-10 text-primary" />,
      title: "Environmental Awareness",
      desc: "Promoting green practices, tree plantation drives, and educating communities on climate responsibility.",
      color: "bg-emerald-50"
    },
    {
      id: "04",
      icon: <Lightbulb className="w-10 h-10 text-primary" />,
      title: "Skill Development",
      desc: "Offering vocational training and workshops to youth and adults to enhance employability and entrepreneurship.",
      color: "bg-amber-50"
    },
    {
      id: "05",
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Women Empowerment",
      desc: "Supporting women through livelihood programs, legal awareness, and creating safe spaces for dialogue.",
      color: "bg-rose-50"
    }
  ];

  return (
    <section id="focus-areas" className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-4">
                <span className="w-8 h-[2px] bg-primary"></span>
                Where We Work
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary">
                5 Pillars of Focus. <br/>One Holistic Vision.
              </h2>
            </FadeIn>
          </div>
          <FadeIn direction="left" delay={0.2}>
            <p className="text-gray-600 max-w-md text-lg">
              We address the root causes of poverty through an integrated approach, ensuring every community member has the chance to thrive.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, idx) => (
            <StaggerItem key={idx} className={idx === 4 ? "md:col-span-2 lg:col-span-1" : ""}>
              <div className={`group bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col hover:-translate-y-1`}>
                <div className="flex justify-between items-start mb-8">
                  <div className={`p-4 rounded-2xl ${area.color} transition-colors group-hover:scale-110 duration-300`}>
                    {area.icon}
                  </div>
                  <span className="text-3xl font-serif font-bold text-gray-200 group-hover:text-primary/20 transition-colors">
                    {area.id}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4 font-serif">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed mt-auto">
                  {area.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
