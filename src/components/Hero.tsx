import React from 'react';
import { Rocket, Lightbulb, Users, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Igniting Ideas.
            </span>
            <br />
            <span className="text-white">Inspiring Leaders.</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Empowering Entrepreneurs.
            </span>
          </h1>

          {/* Subline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We are the first spark of startup culture at DDU Gorakhpur.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <span>Join the Movement</span>
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
              Become a Founder
            </button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="p-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full">
                <Lightbulb size={32} className="text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-white">Innovation</h3>
              <p className="text-gray-300 text-center">Transforming ideas into reality through creative thinking</p>
            </div>

            <div className="flex flex-col items-center space-y-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="p-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Leadership</h3>
              <p className="text-gray-300 text-center">Building tomorrow's leaders and change-makers</p>
            </div>

            <div className="flex flex-col items-center space-y-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="p-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full">
                <Rocket size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Growth</h3>
              <p className="text-gray-300 text-center">Accelerating startup dreams into successful ventures</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;