import React from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from './fade-in';
import img1 from '@assets/image_1_1783770274644.jpeg';
import img2 from '@assets/image2_1783770274645.jpeg';
import img3 from '@assets/image3_1783770274646.jpeg';
import img4 from '@assets/image4_1783770274647.jpeg';

export function Gallery() {
  const images = [
    { src: img1, alt: "Team Banner", className: "md:col-span-2 md:row-span-2" },
    { src: img2, alt: "Inauguration Puja", className: "md:col-span-1 md:row-span-1" },
    { src: img3, alt: "Founders", className: "md:col-span-1 md:row-span-1" },
    { src: img4, alt: "Full Team Celebration", className: "md:col-span-2 md:row-span-1" },
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">
              Moments of Impact
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A glimpse into our journey, our people, and the community we serve.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 grid-rows-[auto] gap-4 md:gap-6 auto-rows-[250px]">
          {images.map((img, idx) => (
            <StaggerItem key={idx} className={`${img.className} group relative rounded-2xl overflow-hidden shadow-md`}>
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-serif font-bold text-xl px-6 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.alt}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
