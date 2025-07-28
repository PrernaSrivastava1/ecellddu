import React from 'react';
import { Target, Eye, Heart, Zap } from 'lucide-react';

const About = () => {
  const pillars = [
    {
      icon: <Eye size={32} />,
      title: 'Vision',
      description: 'To create a thriving entrepreneurial ecosystem at DDU Gorakhpur that nurtures innovation and transforms ideas into impactful ventures.'
    },
    {
      icon: <Target size={32} />,
      title: 'Mission',
      description: 'Empowering students with entrepreneurial skills, mentorship, and resources to build sustainable businesses and drive economic growth.'
    },
    {
      icon: <Heart size={32} />,
      title: 'Values',
      description: 'Innovation, integrity, collaboration, and excellence guide everything we do as we build the future of entrepreneurship.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Ethics',
      description: 'We believe in responsible entrepreneurship that creates positive impact for society while maintaining the highest ethical standards.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">E-Cell DDU</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"></div>
        </div>

        {/* Main Description */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            E-Cell DDU is a student-led initiative to foster innovation, problem-solving, and entrepreneurial thinking. 
            We're just starting our journey—but our dreams are bold. Our goal is to build a thriving entrepreneurial 
            ecosystem at DDU Gorakhpur.
          </p>
          <p className="text-lg text-gray-600">
            We believe that every student has the potential to be an entrepreneur. Our mission is to provide the 
            platform, resources, and community needed to turn innovative ideas into successful ventures.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 text-white">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-yellow-400 mb-2">2024</h3>
              <p className="text-gray-300">Founded</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-yellow-400 mb-2">50+</h3>
              <p className="text-gray-300">Students Interested</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-yellow-400 mb-2">∞</h3>
              <p className="text-gray-300">Dreams to Fulfill</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;