import React from 'react';
// Import Lucide icons
import { Home, Building2, Hammer, Palette, ClipboardCheck } from 'lucide-react';

// Data for the service cards, now using Lucide icon components
const servicesData = [
  {
    Icon: Home,
    title: "Residential Projects",
    description: "Custom homes designed with modern aesthetics and traditional Varanasi charm",
  },
  {
    Icon: Building2,
    title: "Commercial Projects",
    description: "Professional spaces that enhance business growth and productivity",
  },
  {
    Icon: Hammer,
    title: "Renovations",
    description: "Transform existing spaces with contemporary design and quality craftsmanship",
  },
  {
    Icon: Palette,
    title: "Interior Design",
    description: "Elegant interiors that reflect your personality and lifestyle",
  },
  {
    Icon: ClipboardCheck,
    title: "Project Management",
    description: "End-to-end project coordination ensuring timely and quality delivery",
  },
];

const ServicesSection = () => {
  return (
    <section id="section-services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive construction and design services tailored to your vision
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {/* Render the Lucide icon component */}
                <service.Icon className="text-white" size={ 22} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;