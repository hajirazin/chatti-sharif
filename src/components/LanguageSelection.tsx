import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';

const LanguageSelection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-500 text-center relative">
      <img
        src="/dargah_gummad.png"
        alt="Ajmer Dargah Gummad"
        className="absolute inset-0 object-cover w-full h-full opacity-50"
      />
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-8">Chhatti Sharif</h1>
        <div className="space-y-4">

          <button
            key='urdu'
            className="bg-black text-white px-24 py-6 rounded-full shadow-lg hover:bg-gray-800 transition duration-300 relative flex items-center justify-center mx-auto"
            style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
          >
            <span className='urdu'>اردو</span>
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center ml-2">
              <ArrowRightIcon className="w-4 h-4 text-black" />
            </div>
          </button>

          <button
            key='Gujarati'
            className="bg-black text-white px-24 py-6 rounded-full shadow-lg hover:bg-gray-800 transition duration-300 relative flex items-center justify-center mx-auto"
            style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
          >
            <span>ગુજરાતી</span>
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center ml-2">
              <ArrowRightIcon className="w-4 h-4 text-black" />
            </div>
          </button>

          <button
            key='hindi'
            className="bg-black text-white px-24 py-6 rounded-full shadow-lg hover:bg-gray-800 transition duration-300 relative flex items-center justify-center mx-auto"
            style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
          >
            <span>हिन्दी</span>
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center ml-2">
              <ArrowRightIcon className="w-4 h-4 text-black" />
            </div>
          </button>

        </div>
      </div>
    </div>
  );
};

export default LanguageSelection;
