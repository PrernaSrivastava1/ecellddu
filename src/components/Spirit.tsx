import React from 'react';
import { Lightbulb, Users, Rocket, Star } from 'lucide-react';

const Spirit = () => {
  const timeline = [
    {
      icon: <Lightbulb size={24} />,
      title: 'The Idea Spark',
      description: 'It all started with a simple question: "Why doesn\'t DDU have a thriving startup culture?" A group of passionate students decided to change that.',
      year: 'Early 2024'
    },
    {
      icon: <Users size={24} />,
      title: 'Gathering the Team',
      description: 'We brought together like-minded individuals who shared our vision of fostering entrepreneurship and innovation at DDU Gorakhpur.',
      year: 'Mid 2024'
    },
    {
      icon: <Rocket size={24} />,
      title: 'First Steps Taken',
      description: 'From ideation to action - we\'re building the foundation, creating our identity, and preparing to launch our first initiatives.',
      year: 'Now'
    },
    {
      icon: <Star size={24} />,
      title: 'Future We Envision',
      description: 'A thriving ecosystem where DDU students become successful entrepreneurs, creating jobs and driving innovation in Eastern UP.',
      year: 'Tomorrow'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Spirit</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every great journey begins with a single step. Here's how our entrepreneurial dream is taking shape.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 to-blue-600 hidden md:block"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:space-x-8`}>
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:text-left mb-8 md:mb-0`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className="text-sm font-semibold text-yellow-600 mb-2">{item.year}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white shadow-lg">
                    {item.icon}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Be Part of Our Story?</h3>
            <p className="text-xl text-gray-300 mb-8">Join us as we build something extraordinary at DDU Gorakhpur</p>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 transform hover:scale-105">
              Get Involved Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spirit;