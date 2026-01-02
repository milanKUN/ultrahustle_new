import React from 'react';
import ServiceCard from './ServiceCard';

// Import images
import logoDesign from '../../assets/logo-design.jpg';
import brandStyle from '../../assets/brand-style.jpg';
import businessCards from '../../assets/bussiness-cards.jpg';
import imageEditing from '../../assets/image-editing.jpg';
import brandGuide from '../../assets/brand-guide.jpg';
import resumeDesign from '../../assets/resume-design.jpg';

const recommendedServices = [
  {
    id: 1,
    title: 'Logo design',
    image: logoDesign,
  },
  {
    id: 2,
    title: 'Brand style guides',
    image: brandStyle,
  },
  {
    id: 3,
    title: 'Business cards & stationery',
    image: businessCards,
  }
];

const popularServices = [
  {
    id: 4,
    title: 'Image editing & retouching',
    image: imageEditing,
  },
  {
    id: 5,
    title: 'Presentation design',
    image: brandGuide,
  },
  {
    id: 6,
    title: 'Resume design',
    image: resumeDesign,
  }
];

export default function RecommendedSection() {
  return (
    <div className="relative">
      {/* Recommended Section */}
      <section className="relative z-10 px-5 py-6">
        <h2 className="font-poppins text-lg font-semibold text-gray-500 mb-4">Recommended for you</h2>
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {recommendedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Popular Section */}
      <section className="relative z-10 px-5 py-6">
        <h2 className="font-poppins text-lg font-semibold text-gray-500 mb-4">Popular in Ultra hustle</h2>
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {popularServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}
