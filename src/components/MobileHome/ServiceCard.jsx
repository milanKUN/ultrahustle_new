import React from 'react';

export default function ServiceCard({ service }) {
  return (
    <div className="rounded-xl overflow-hidden bg-transparent shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer border-2 border-white">
      <div className="relative h-20 sm:h-24 overflow-hidden">
        {/* Background image */}
        <img 
          src={service.image} 
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-30`}></div>
      </div>
      <div className="p-2.5 bg-transparent -mt-px">
        <h3 className="font-roboto text-[11px] sm:text-xs font-medium text-gray-800 leading-tight line-clamp-2">
          {service.title}
        </h3>
      </div>
    </div>
  );
}
