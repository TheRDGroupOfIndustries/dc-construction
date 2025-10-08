import React from 'react';
import Image from 'next/image';

const BniBadge = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-1 py-1 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center space-x-2">
          {/* Pulsing Dot */}
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>

          {/* Text "Proud Member of" */}
          <span className="text-sm font-semibold whitespace-nowrap">
            Proud Member of
          </span>

          {/* BNI Logo */}
          <div className="bg-black px-2 py-1 rounded">
            <Image
              src="/BNI_logo.png" // direct path in public folder
              alt="BNI Logo"
              width={60}
              height={20}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BniBadge;
