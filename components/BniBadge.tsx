import React from 'react';

const BniBadge = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-3 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center space-x-2">
          {/* Pulsing Dot */}
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold whitespace-nowrap">
            Proud Member of BNI
          </span>
        </div>
      </div>
    </div>
  );
};

export default BniBadge;