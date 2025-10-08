import React from 'react';
import Image from 'next/image';

const BniBadge = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-2 py-2 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center space-x-2">
          {/* Pulsing Dot */}
         <div className="bg-white px-1 py-1 rounded">
            <Image
              src="/BNI_logo.png" // direct path in public folder
              alt="BNI Logo"
              width={40}
              height={10}
              className="object-contain"
            />
          </div>

          {/* Text "Proud Member of" */}
          <span className="text-sm font-semibold whitespace-nowrap">
            Proud Member of BNI
          </span>

        
         
        </div>
      </div>
    </div>
  );
};

export default BniBadge;
