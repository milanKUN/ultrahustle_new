import React from 'react';
import ServiceCard from './ServiceCard';

// Import images
import webDesign from '../../assets/web-design.jpg';
import appDesign from '../../assets/app-design.jpg';
import uxResearch from '../../assets/ux-research.jpg';
import displayAds from '../../assets/display-ads.jpg';
import emailDesign from '../../assets/email-design.jpg';
import socialMedia from '../../assets/social-media.jpg';
import imageEditing from '../../assets/image-editing.jpg';
import brandGuide from '../../assets/brand-guide.jpg';
import resumeDesign from '../../assets/resume-design.jpg';
import logoDesign from '../../assets/logo-design.jpg';
import businessCards from '../../assets/bussiness-cards.jpg';
import brandStyle from '../../assets/brand-style.jpg';

// Logo & Brand Identity Services
const logoBrandServices = [
  { id: 1, title: 'Logo design', image: logoDesign },
  { id: 2, title: 'Brand style guides', image: brandStyle },
  { id: 3, title: 'Business cards & stationery', image: businessCards }
];

// Inspired by browsing history products
const browsingHistoryProducts = [
  { 
    id: 101, 
    title: 'Figma Component Library - Professional Kit more...', 
    image: logoDesign,
    tag: 'Products',
    price: '$2,500',
    views: '3247 views'
  },
  { 
    id: 102, 
    title: 'Figma Component Library - Professional Kit more...', 
    image: brandStyle,
    tag: 'Products',
    price: '$2,500',
    views: '3247 views'
  }
];

const webAppDesignServices = [
  { id: 7, title: 'Website design', image: webDesign },
  { id: 8, title: 'App UI design', image: appDesign },
  { id: 9, title: 'UX research & wire-framing', image: uxResearch }
];

const marketingDesignServices = [
  { id: 10, title: 'Display Ads', image: displayAds },
  { id: 11, title: 'Email Design', image: emailDesign },
  { id: 12, title: 'Social Media Posts & Ads', image: socialMedia }
];

const visualDesignServices = [
  { id: 13, title: 'Image editing & retouching', image: imageEditing },
  { id: 14, title: 'Presentation design', image: brandGuide },
  { id: 15, title: 'Resume design', image: resumeDesign }
];

const miscDesignServices = [
  { id: 16, title: 'Design Consultation', image: webDesign },
  { id: 17, title: 'Style Adaptation', image: appDesign },
  { id: 18, title: 'Design Audits', image: uxResearch }
];

const printProductDesignServices = [
  { id: 19, title: 'Brochure & Flyer Design', image: logoDesign },
  { id: 20, title: 'Business Cards', image: businessCards },
  { id: 21, title: 'Packaging & Label Design', image: brandStyle }
];

const architectureDesignServices = [
  { id: 22, title: 'Interior Design', image: webDesign },
  { id: 23, title: '3D Architecture', image: appDesign },
  { id: 24, title: 'Landscape Design', image: uxResearch }
];

const artIllustrationServices = [
  { id: 25, title: 'Illustration', image: imageEditing },
  { id: 26, title: 'Character Design', image: displayAds },
  { id: 27, title: 'Concept Art', image: socialMedia }
];

// Product Card Component for Browsing History
function ProductCard({ product }) {
  return (
    <div className="rounded-xl overflow-hidden bg-transparent shadow-md border border-white">
      {/* Image */}
      <div className="relative h-32 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="p-3">
        {/* Title and Tag Row */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-roboto text-[11px] font-medium text-gray-800 leading-tight line-clamp-2 flex-1">
            {product.title}
          </h3>
          <div className="flex flex-col items-end">
            <span className="px-2 py-0.5 bg-[#CEFF1B] text-gray-900 text-[8px] font-semibold rounded">
              {product.tag}
            </span>
            <span className="font-roboto text-[11px] font-bold text-gray-900 mt-1">
              {product.price}
            </span>
          </div>
        </div>
        
        {/* Views */}
        <p className="font-roboto text-[10px] text-gray-500 mb-2">⏱ {product.views}</p>
        
        {/* View Listing Button */}
        <div className="flex items-center justify-between ">
          <button className="flex-1 py-1.5 border border-gray-300 rounded text-[10px] font-medium text-gray-700 hover:bg-gray-50 transition-colors bg-white">
            View Listing
          </button>
          <button className="ml-2 p-1.5 text-gray-400 hover:text-gray-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function WebAppDesignSection() {
  return (
    <div className="relative">
      {/* Web & App Design Section */}
      <section className="px-5 py-6 mt-2">
        <h2 className="font-poppins text-xl font-bold text-gray-500 mb-4">Web & App Design</h2>
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {webAppDesignServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Marketing Design Section */}
      <section className="px-5 py-6 mt-2">
        <h2 className="font-poppins text-xl font-bold text-gray-500 mb-4">Marketing Design</h2>
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {marketingDesignServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Logo & Brand Identity Section */}
      <section className="px-5 py-6 mt-2">
        <h2 className="font-poppins text-xl font-bold text-gray-500 mb-4">Logo & Brand Identity</h2>
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {logoBrandServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Inspired by your browsing history Section */}
      <section className="px-5 py-6 mt-2">
        <h2 className="font-poppins text-xl font-bold text-gray-500 mb-4">Inspired by your browsing history</h2>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {browsingHistoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Visual Design Section */}
      <section className="px-5 py-6 mt-2">
        <h2 className="font-poppins text-xl font-bold text-gray-500 mb-4">Visual Design</h2>
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {visualDesignServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Miscellaneous Design Section */}
      <section className="px-5 py-6 mt-2">
        <h2 className="font-poppins text-xl font-bold text-gray-500 mb-4">Miscellaneous Design</h2>
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {miscDesignServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Print & Product Design Section */}
      <section className="px-5 py-6 mt-2">
        <h2 className="font-poppins text-xl font-bold text-gray-500 mb-4">Print & Product Design</h2>
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {printProductDesignServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* 3D & Architecture Design Section */}
      <section className="px-5 py-6 mt-2">
        <h2 className="font-poppins text-xl font-bold text-gray-500 mb-4">3D & Architecture Design</h2>
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {architectureDesignServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Art & Illustration Section */}
      <section className="px-5 py-6 mt-2">
        <h2 className="font-poppins text-xl font-bold text-gray-500 mb-4">Art & Illustration</h2>
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {artIllustrationServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}
